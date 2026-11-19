// Silent Voice download links. One unauthenticated call to the GitHub
// releases list picks the newest desktop release (tag v*) and the newest
// Android beta (tag android-v*, published as a pre-release), then fills every
// [data-sv-*] slot on the page. The markup ships pointing at the releases
// pages, so with no JS, a failed request or a missing file, every button
// still leads somewhere that works.

export const REPO = "zahidhossin39/Silent-Voice";
export const RELEASES_URL = `https://github.com/${REPO}/releases/latest`;
export const ANDROID_RELEASES_URL = `https://github.com/${REPO}/releases`;
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

async function loadNotes(version: string) {
  const slots = $$("[data-sv-notes]");
  if (!slots.length) return;
  try {
    const res = await fetchWithTimeout(CHANGELOG_URL);
    if (!res.ok) return;
    const items = parseChangelog(await res.text(), version);
    // No entry for this version: the card keeps its static notes.
    if (!items.length) return;
    const html = `<ul>${items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
    slots.forEach((el) => {
      el.innerHTML = html;
      const card = el.closest<HTMLElement>("[data-sv-notes-card]");
      card?.removeAttribute("hidden");
      card?.querySelectorAll("[data-sv-notes-title]").forEach((t) => (t.textContent = `What's new in v${version}`));
      card?.setAttribute("data-sv-notes-source", "changelog");
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

function fillOthers(os: OS | null, d: Pick | null, apk: Asset | undefined, apkPage: string) {
  const a = d?.assets ?? [];
  const page = d?.html_url ?? RELEASES_URL;
  const win = pick.windows(a), mac = pick.mac(a), img = pick.linux(a), deb = pick.deb(a);
  const macOthers = a.filter((x) => isDmg(x.name) && x !== mac);

  const desk: Record<Desktop, Link[]> = {
    windows: [{ label: "Windows", href: win?.url ?? page }],
    mac: [
      { label: macArch(mac?.name ?? "") ? `Mac (${macArch(mac!.name)})` : "Mac", href: mac?.url ?? page },
      ...macOthers.map((x) => ({ label: `Mac (${macArch(x.name) || x.name})`, href: x.url })),
    ],
    linux: [
      { label: "Linux (.AppImage)", href: img?.url ?? page },
      ...(deb ? [{ label: "Ubuntu / Debian (.deb)", href: deb.url }] : []),
    ],
  };
  const android: Link = { label: "Android (beta)", href: apk?.url ?? apkPage };

  let list: Link[];
  if (os === "windows") list = [...desk.mac, ...desk.linux];
  else if (os === "mac") list = [...macOthers.map((x) => ({ label: `Mac (${macArch(x.name) || x.name})`, href: x.url })), ...desk.windows, ...desk.linux];
  else if (os === "linux") list = [...desk.linux.slice(1), ...desk.windows, ...desk.mac];
  else list = [...desk.windows, ...desk.mac, ...desk.linux];

  const all = `<li><a href="${esc(page)}" target="_blank" rel="noopener noreferrer">All files</a></li>`;
  const li = (o: Link) => `<li><a href="${esc(o.href)}">${esc(o.label)}</a></li>`;
  $$("[data-sv-others]").forEach((ul) => {
    // data-sv-others="desktop": the section offers the APK elsewhere
    const withApk = os !== "android" && ul.dataset.svOthers !== "desktop";
    ul.innerHTML = [...list, ...(withApk ? [android] : [])].map(li).join("") + all;
  });
}

export async function initRelease(): Promise<ReleaseState> {
  const os = detectOS();
  const root = document.documentElement;
  root.dataset.svOs = os ?? "unknown";

  // Label the buttons for the visitor's OS straight away; the link itself
  // stays on a releases page until the API answers.
  if (os === "android") {
    setText("[data-sv-os-label]", "Download for Android");
    setText("[data-sv-meta]", "Beta · Android 10 and newer");
    setMain(ANDROID_RELEASES_URL, false);
  } else if (os === "ios") {
    setText("[data-sv-os-label]", "See all downloads");
    setText("[data-sv-meta]", "For computers and Android");
    setMain(ANDROID_RELEASES_URL, false);
  } else if (os) {
    setText("[data-sv-os-label]", `Download for ${OS_LABEL[os]}`);
  }

  let picks: Picks;
  try {
    picks = await getPicks();
  } catch {
    root.dataset.svRelease = "failed";
    if (os !== "android" && os !== "ios") setText("[data-sv-meta]", "Latest release on GitHub");
    if (os === "android") setText("[data-sv-meta]", "Beta · on GitHub");
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
  if (apkVersion) setText("[data-sv-apk-meta]", apk ? `${apkVersion} · ${mb(apk.size)} · beta` : `${apkVersion} · beta`);

  // ---- desktop ----
  // Only a v1.2.3-style tag is a desktop version, so the page can never read "vandroid-...".
  const version = d && /^v\d+(\.\d+)*/i.test(d.tag) ? d.tag.replace(/^v/i, "") : undefined;
  if (d && version) {
    const published = date(d.published_at);
    setText("[data-sv-version]", `v${version}`);
    setText("[data-sv-date]", published);
    $$<HTMLTimeElement>("time[data-sv-date]").forEach((t) => (t.dateTime = d.published_at));
    $$<HTMLAnchorElement>("[data-sv-release-link]").forEach((a) => (a.href = d.html_url));
  }

  // ---- the main button ----
  if (os === "android") {
    setMain(apk?.url ?? apkPage, !!apk);
    setText("[data-sv-meta]", apk ? `Beta · ${apkVersion} · ${mb(apk.size)}` : "Beta · on GitHub");
  } else if (os === "ios") {
    setMain(ANDROID_RELEASES_URL, false);
  } else {
    const main = os && d ? pick[os](d.assets) : undefined;
    // no matching file in this release: keep the releases-page fallback
    setMain(main?.url ?? d?.html_url ?? RELEASES_URL, !!main);
    if (!version) setText("[data-sv-meta]", "Latest release on GitHub");
    else if (os === "mac" && main) setText("[data-sv-meta]", `v${version} · ${macArch(main.name) || "Mac"} · ${mb(main.size)}`);
    else if (os === "linux" && main) setText("[data-sv-meta]", `v${version} · AppImage · ${mb(main.size)}`);
    else if (main) setText("[data-sv-meta]", `v${version} · ${date(d!.published_at)} · ${mb(main.size)}`);
    else setText("[data-sv-meta]", `v${version} · ${date(d!.published_at)}`);
  }

  if (d) fillOthers(os, d, apk, apkPage);
  if (version) loadNotes(version);

  root.dataset.svRelease = d && version ? "ok" : "failed";
  return { version, apkVersion, os };
}
