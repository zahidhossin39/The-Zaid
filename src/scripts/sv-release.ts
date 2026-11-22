// Silent Voice download links. One unauthenticated call to the GitHub
// releases list picks the newest desktop release (tag v*) and the newest
// Android beta (tag android-v*, published as a pre-release), then fills every
// [data-sv-*] slot on the page. The markup ships pointing at the releases
// pages, so with no JS, a failed request or a missing file, every button
// still leads somewhere that works.

export const REPO = "zahidhossin39/Silent-Voice";
export const RELEASES_URL = `https://github.com/${REPO}/releases/latest`;
export const ANDROID_RELEASES_URL = `https://github.com/${REPO}/releases`;
export const ISSUES_URL = `https://github.com/${REPO}/issues`;
export const PRIVACY_URL = `https://github.com/${REPO}/blob/main/PRIVACY.md`;
export const LICENSE_URL = `https://github.com/${REPO}/blob/main/LICENSE`;
export const SOURCE_URL = `https://github.com/${REPO}`;
/** The stable address phones are sent to (QR code, "Send me the link"). */
export const PAGE_URL = "https://zaidhossain.com/silent-voice";
const API_URL = `https://api.github.com/repos/${REPO}/releases?per_page=40`;
const CHANGELOG_URL = `https://raw.githubusercontent.com/${REPO}/main/CHANGELOG.md`;
const CACHE_KEY = "sv-release-v2";
const CACHE_MS = 10 * 60 * 1000; // unauthenticated API: 60 requests/hour per IP
const TIMEOUT_MS = 8000;

type Desktop = "windows" | "mac" | "linux";
export type OS = Desktop | "android" | "ios";
type Asset = { name: string; url: string; size: number };
type Pick = { tag: string; published_at: string; html_url: string; assets: Asset[] };
type Picks = { desktop: Pick | null; android: Pick | null };
type GhAsset = { name: string; size: number; browser_download_url: string };
type GhRelease = {
  tag_name: string; published_at: string | null; html_url: string;
  draft?: boolean; prerelease?: boolean; assets?: GhAsset[];
};

const OS_LABEL: Record<Desktop, string> = { windows: "Windows", mac: "Mac", linux: "Linux" };
// what the main button says before the API answers, and the file type after
const INTERIM: Record<Desktop, string> = {
  windows: "Installer · Windows 10 and 11",
  mac: "Apple Silicon (M1 or newer)",
  linux: "AppImage · x86_64",
};
const TYPE: Record<Desktop, string> = { windows: "Installer", mac: "Apple Silicon", linux: "AppImage" };

// ---- small helpers (declared first: everything below uses them) ----
const $$ = <T extends Element = HTMLElement>(sel: string) => [...document.querySelectorAll<T>(sel)];
const setText = (sel: string, v: string) => $$(sel).forEach((el) => (el.textContent = v));
const mb = (bytes: number) => `${Math.max(1, Math.round(bytes / 1048576))} MB`;
const date = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// ---- asset matching ----
// Updater signatures (.sig), update bundles (.tar.gz) and latest.json never
// match: every test below anchors on the real installer extension.
const isExe = (n: string) => /-setup\.exe$/i.test(n);
const isDmg = (n: string) => /\.dmg$/i.test(n);
const isAppImage = (n: string) => /\.AppImage$/i.test(n);
const isDeb = (n: string) => /\.deb$/i.test(n);
const isApk = (n: string) => /\.apk$/i.test(n);
const isDesktopAsset = (n: string) => isExe(n) || isDmg(n) || isAppImage(n) || isDeb(n);

// v0.2.0 names the Mac build "_macOS_Apple-Silicon.dmg"; older Tauri builds
// used "_aarch64.dmg" / "_x64.dmg".
const macArch = (name: string) =>
  /universal/i.test(name) ? "Universal"
  : /apple-silicon|aarch64|arm64/i.test(name) ? "Apple Silicon"
  : /intel|x86_64|x64/i.test(name) ? "Intel"
  : "";

const pick = {
  windows: (a: Asset[]) => a.find((x) => /_x64-setup\.exe$/i.test(x.name)) ?? a.find((x) => isExe(x.name)),
  mac: (a: Asset[]) => {
    const dmgs = a.filter((x) => isDmg(x.name));
    return dmgs.find((x) => macArch(x.name) === "Universal")
      ?? dmgs.find((x) => macArch(x.name) === "Apple Silicon")
      ?? dmgs[0];
  },
  linux: (a: Asset[]) => {
    const imgs = a.filter((x) => isAppImage(x.name));
    return imgs.find((x) => /x86_64|amd64/i.test(x.name)) ?? imgs[0];
  },
  deb: (a: Asset[]) => a.find((x) => isDeb(x.name)),
  apk: (a: Asset[]) => a.find((x) => isApk(x.name)),
};

// ---- OS detection ----
export function detectOS(): OS | null {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string; mobile?: boolean } };
  const ua = navigator.userAgent;
  const hint = (nav.userAgentData?.platform || "").toLowerCase();
  if (hint === "android" || /Android/i.test(ua)) return "android";
  if (hint === "ios" || /iPhone|iPad|iPod/i.test(ua)) return "ios";
  // iPadOS reports itself as a Mac; touch gives it away
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";
  if (nav.userAgentData?.mobile) return null; // some other phone: show everything
  const p = (hint || navigator.platform || ua).toLowerCase();
  if (p.includes("win")) return "windows";
  if (p.includes("mac")) return "mac";
  if (p.includes("linux") || p.includes("x11") || p.includes("cros")) return "linux";
  return null;
}

// ---- fetching ----
async function fetchWithTimeout(url: string, init: RequestInit = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

const newestFirst = (a: GhRelease, b: GhRelease) =>
  Date.parse(b.published_at || "") - Date.parse(a.published_at || "");

function trim(r: GhRelease, keep: (name: string) => boolean): Pick {
  return {
    tag: r.tag_name,
    published_at: r.published_at || "",
    html_url: r.html_url,
    assets: (r.assets || [])
      .filter((x) => keep(x.name))
      .map((x) => ({ name: x.name, url: x.browser_download_url, size: x.size })),
  };
}

export function choose(list: GhRelease[]): Picks {
  const live = list.filter((r) => r && !r.draft && r.published_at && typeof r.tag_name === "string");
  const desktop = live
    .filter((r) => !r.prerelease && /^v\d/i.test(r.tag_name) && (r.assets || []).some((x) => isDesktopAsset(x.name)))
    .sort(newestFirst)[0];
  const android = live
    .filter((r) => /^android-v/i.test(r.tag_name) && (r.assets || []).some((x) => isApk(x.name)))
    .sort(newestFirst)[0];
  return {
    desktop: desktop ? trim(desktop, isDesktopAsset) : null,
    android: android ? trim(android, isApk) : null,
  };
}

async function getPicks(): Promise<Picks> {
  try {
    const hit = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
    if (hit && Date.now() - hit.t < CACHE_MS && hit.p) return hit.p;
  } catch { /* storage blocked: just fetch */ }

  const res = await fetchWithTimeout(API_URL, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(`GitHub ${res.status}`);
  const list = await res.json();
  if (!Array.isArray(list)) throw new Error("Unexpected releases shape");
  const p = choose(list);
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), p })); } catch { /* ignore */ }
  return p;
}

// ---- "What's new" from CHANGELOG.md ----
// The release body is install instructions, so the notes come from the
// repo's CHANGELOG.md. raw.githubusercontent.com allows cross-origin reads.
// The text is escaped first and only bold, inline code and link text are let
// back in, so nothing in the file can inject markup into this page.
function inline(s: string): string {
  return esc(s)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // [text](url) -> text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function parseChangelog(md: string, version: string, max = 5): string[] {
  const lines = md.split(/\r?\n/);
  const head = new RegExp(`^##\\s*\\[?v?${version.replace(/\./g, "\\.")}(?![\\d.])\\]?`);
  const start = lines.findIndex((l) => head.test(l));
  if (start < 0) return [];
  const items: string[] = [];
  const prose: string[] = [];
  let inSub = false; // inside a nested "  - sub item": its wrapped lines are dropped too
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^##\s/.test(l)) break;
    if (/^[-*]\s+/.test(l)) { items.push(l.replace(/^[-*]\s+/, "").trim()); inSub = false; }
    else if (/^\s+[-*+]\s+/.test(l) || /^\s+\d+[.)]\s+/.test(l)) inSub = true; // nested list: the parent says enough
    else if (/^\s{2,}\S/.test(l) && items.length && !inSub) items[items.length - 1] += " " + l.trim(); // wrapped line
    else if (!items.length && /^[^\s#>|]/.test(l)) prose.push(l.trim()); // prose-only entry
    else if (!l.trim()) inSub = false;
  }
  if (!items.length && prose.length) items.push(prose.join(" "));
  return items.slice(0, max);
}

// "Recent updates" is a short list, one line per version. When CHANGELOG.md
// has an entry for the current release, its items replace that version's
// line (or become a new line on top, for a release newer than the page).
async function loadNotes(version: string, published?: string) {
  const lists = $$("[data-sv-notes]");
  if (!lists.length) return;
  try {
    const res = await fetchWithTimeout(CHANGELOG_URL);
    if (!res.ok) return;
    const items = parseChangelog(await res.text(), version, 4);
    // No entry for this version: the list keeps its static lines.
    if (!items.length) return;
    const html = `<ul>${items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
    lists.forEach((list) => {
      let line = list.querySelector<HTMLElement>(`[data-sv-notes-v="${version}"]`);
      if (!line) {
        line = document.createElement("li");
        line.dataset.svNotesV = version;
        const when = published ? ` <time datetime="${esc(published.slice(0, 10))}">${esc(date(published))}</time>` : "";
        line.innerHTML = `<span class="svx-up-v">v${esc(version)}${when}</span><div class="svx-up-text"></div>`;
        list.insertBefore(line, list.firstChild);
      }
      const text = line.querySelector<HTMLElement>(".svx-up-text");
      if (text) text.innerHTML = html;
      list.closest<HTMLElement>("[data-sv-notes-card]")?.setAttribute("data-sv-notes-source", "changelog");
    });
  } catch { /* the static notes stay */ }
}

// ---- filling the page ----
export type ReleaseState = { version?: string; apkVersion?: string; os: OS | null };

type Link = { label: string; href: string };

function setMain(href: string, file: boolean) {
  $$<HTMLAnchorElement>("[data-sv-main]").forEach((a) => {
    a.href = href;
    a.toggleAttribute("download", file);
  });
}

function fillOthers(os: OS | null, d: Pick | null) {
  const a = d?.assets ?? [];
  const page = d?.html_url ?? RELEASES_URL;
  const win = pick.windows(a), mac = pick.mac(a), img = pick.linux(a), deb = pick.deb(a);
  const macOthers = a.filter((x) => isDmg(x.name) && x !== mac);
  // Mac and Linux builds have shipped since v0.1.11 and are still early: the labels say so
  const macLink = (x: Asset): Link => ({ label: macArch(x.name) ? `Mac (${macArch(x.name)}, early)` : "Mac (early)", href: x.url });

  const desk: Record<Desktop, Link[]> = {
    windows: [{ label: "Windows", href: win?.url ?? page }],
    mac: [mac ? macLink(mac) : { label: "Mac (early)", href: page }, ...macOthers.map(macLink)],
    linux: [
      { label: "Linux (.AppImage, early)", href: img?.url ?? page },
      ...(deb ? [{ label: "Ubuntu / Debian (.deb, early)", href: deb.url }] : []),
    ],
  };
  // On a computer the APK is no use as a file: this goes to the Android
  // section, where the QR code puts it on the phone.
  const android: Link = { label: "Android (beta)", href: "#android" };

  let list: Link[];
  if (os === "windows") list = [...desk.mac, ...desk.linux];
  else if (os === "mac") list = [...macOthers.map(macLink), ...desk.windows, ...desk.linux];
  else if (os === "linux") list = [...desk.linux.slice(1), ...desk.windows, ...desk.mac];
  else list = [...desk.windows, ...desk.mac, ...desk.linux];

  const all = `<li><a href="${esc(page)}" target="_blank" rel="noopener noreferrer">All files</a></li>`;
  const li = (o: Link) => `<li><a href="${esc(o.href)}">${esc(o.label)}</a></li>`;
  $$("[data-sv-others]").forEach((ul) => {
    // data-sv-others="desktop": the section offers the APK elsewhere.
    // Android comes first: for someone on a computer it is the newer news.
    const withApk = ul.dataset.svOthers !== "desktop";
    ul.innerHTML = [...(withApk ? [android] : []), ...list].map(li).join("") + all;
  });
}

// ---- phones that can't run the app: "Send me the link" ----
// On an iPhone (or another phone that isn't Android) the useful thing is to
// get the page onto a computer, so the main button opens the share sheet, or
// copies the link where there is none. Its href stays on the releases page
// for the rare browser that can do neither.
function isOtherPhone(os: OS | null) {
  const nav = navigator as Navigator & { userAgentData?: { mobile?: boolean } };
  return os === null && (!!nav.userAgentData?.mobile || /Mobi|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function tell(a: HTMLElement, msg: string) {
  const status = a.closest(".svdl")?.querySelector<HTMLElement>("[data-sv-status]");
  if (!status) return;
  status.textContent = msg;
  window.clearTimeout(Number(status.dataset.t || 0));
  status.dataset.t = String(window.setTimeout(() => (status.textContent = ""), 6000));
}

async function shareLink(e: MouseEvent) {
  const a = e.currentTarget as HTMLElement;
  const data = { title: "Silent Voice", url: PAGE_URL };
  const canShare = typeof navigator.share === "function" && (!navigator.canShare || navigator.canShare(data));
  const canCopy = !!navigator.clipboard?.writeText;
  if (!canShare && !canCopy) {
    // the main button's link goes to the releases page instead; a plain button says where to go
    if (a.tagName === "BUTTON") tell(a, `Open ${PAGE_URL.replace(/^https:\/\//, "")} on your computer.`);
    return;
  }
  e.preventDefault();
  if (canShare) {
    try {
      await navigator.share(data);
      return;
    } catch (err) {
      if ((err as DOMException)?.name === "AbortError") return; // the visitor closed the sheet
    }
  }
  try {
    await navigator.clipboard.writeText(PAGE_URL);
    tell(a, "Link copied. Send it to yourself.");
  } catch {
    tell(a, `Open ${PAGE_URL.replace(/^https:\/\//, "")} on your computer.`);
  }
}

function shareMode() {
  document.documentElement.dataset.svShare = "";
  setText("[data-sv-os-label]", "Send me the link");
  setText("[data-sv-meta]", "Open it later on your computer");
  setMain(ANDROID_RELEASES_URL, false);
  $$<HTMLAnchorElement>("[data-sv-main]").forEach((a) => a.addEventListener("click", shareLink));
}

export async function initRelease(): Promise<ReleaseState> {
  const os = detectOS();
  const root = document.documentElement;
  root.dataset.svOs = os ?? "unknown";
  const share = os === "ios" || isOtherPhone(os);
  // On any phone the links under the button are "send it to my computer" and
  // "all downloads", never installer files a phone can't run.
  if (share || os === "android") {
    root.dataset.svPhone = "";
    $$("[data-sv-status]").forEach((el) => el.removeAttribute("hidden"));
    $$<HTMLElement>("[data-sv-send]").forEach((b) => b.addEventListener("click", shareLink));
  }

  // Label the buttons for the visitor's OS straight away; the link itself
  // stays on a releases page until the API answers.
  if (os === "android") {
    setText("[data-sv-os-label]", "Download for Android");
    setText("[data-sv-meta]", "APK beta · Android 10 and newer");
    setMain(ANDROID_RELEASES_URL, false);
  } else if (share) {
    shareMode();
  } else if (os) {
    setText("[data-sv-os-label]", `Download for ${OS_LABEL[os]}`);
    setText("[data-sv-meta]", INTERIM[os]);
  }

  let picks: Picks;
  try {
    picks = await getPicks();
  } catch {
    root.dataset.svRelease = "failed";
    if (os === "android") setText("[data-sv-meta]", "APK beta · on GitHub");
    else if (!share) setText("[data-sv-meta]", "Latest release on GitHub");
    return { os };
  }

  const { desktop: d, android: an } = picks;

  // ---- Android beta ----
  const apk = an ? pick.apk(an.assets) : undefined;
  const apkPage = an?.html_url ?? ANDROID_RELEASES_URL;
  const apkVersion = an ? an.tag.replace(/^android-v?/i, "v") : undefined;
  $$<HTMLAnchorElement>("[data-sv-apk]").forEach((a) => {
    a.href = apk?.url ?? apkPage;
    a.toggleAttribute("download", !!apk);
  });
  if (apkVersion) setText("[data-sv-apk-version]", apkVersion);
  // one APK line wherever it is offered (the Android card and the final pill)
  if (apkVersion) setText("[data-sv-apk-meta]", apk ? `${apkVersion} · ${mb(apk.size)} · beta` : `${apkVersion} · beta`);

  // ---- desktop ----
  // Only a v1.2.3-style tag is a desktop version, so the page can never read "vandroid-...".
  const version = d && /^v\d+(\.\d+)*/i.test(d.tag) ? d.tag.replace(/^v/i, "") : undefined;
  if (d && version) {
    setText("[data-sv-version]", `v${version}`);
    setText("[data-sv-date]", date(d.published_at));
    $$<HTMLTimeElement>("time[data-sv-date]").forEach((t) => (t.dateTime = d.published_at.slice(0, 10)));
    $$<HTMLAnchorElement>("[data-sv-release-link]").forEach((a) => (a.href = d.html_url));
  }

  // ---- the main button: "v0.2.0 · <type> · <size>" on every OS ----
  if (os === "android") {
    setMain(apk?.url ?? apkPage, !!apk);
    setText("[data-sv-meta]", apk ? `${apkVersion} · APK beta · ${mb(apk.size)}` : "APK beta · on GitHub");
  } else if (share) {
    setMain(ANDROID_RELEASES_URL, false);
  } else {
    const main = os && d ? pick[os](d.assets) : undefined;
    // no matching file in this release: keep the releases-page fallback
    setMain(main?.url ?? d?.html_url ?? RELEASES_URL, !!main);
    if (!version) setText("[data-sv-meta]", "Latest release on GitHub");
    else if (os && main) setText("[data-sv-meta]", `v${version} · ${os === "mac" ? macArch(main.name) || "Mac" : TYPE[os]} · ${mb(main.size)}`);
    else setText("[data-sv-meta]", `v${version} · all files on GitHub`);
  }

  if (d) fillOthers(os, d);
  if (version) loadNotes(version, d?.published_at);

  root.dataset.svRelease = d && version ? "ok" : "failed";
  return { version, apkVersion, os };
}
