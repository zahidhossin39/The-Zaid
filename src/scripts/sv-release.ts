// Silent Voice download links. Reads the latest GitHub release (public API,
// no token), picks the installer for the visitor's OS and fills every
// [data-sv-*] slot on the page. The markup ships pointing at the releases
// page, so with no JS, a failed request or a missing file, every button
// still leads somewhere that works.

export const REPO = "zahidhossin39/Silent-Voice";
export const RELEASES_URL = `https://github.com/${REPO}/releases/latest`;
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
const CACHE_KEY = "sv-release-v1";
const CACHE_MS = 10 * 60 * 1000; // unauthenticated API: 60 requests/hour per IP

type OS = "windows" | "mac" | "linux";
type Asset = { name: string; size: number; browser_download_url: string };
type Release = { tag_name: string; published_at: string; html_url: string; assets: Asset[] };

const OS_LABEL: Record<OS, string> = { windows: "Windows", mac: "macOS", linux: "Linux" };

// Windows: the NSIS installer, never its updater signature (.exe.sig ends
// differently, so endsWith already excludes it).
const pick: Record<OS, (a: Asset[]) => Asset | undefined> = {
  windows: (a) => a.find((x) => x.name.endsWith("-setup.exe")),
  // Apple Silicon first when both builds exist: the browser can't tell them apart reliably.
  mac: (a) => {
    const dmgs = a.filter((x) => x.name.endsWith(".dmg"));
    return dmgs.find((x) => /aarch64|arm64/i.test(x.name)) ?? dmgs[0];
  },
  linux: (a) => a.find((x) => x.name.endsWith(".AppImage")),
};

export function detectOS(): OS | "mobile" | null {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string; mobile?: boolean } };
  const ua = navigator.userAgent;
  if (nav.userAgentData?.mobile || /Android|iPhone|iPad|iPod/i.test(ua)) return "mobile";
  // iPadOS reports itself as a Mac; touch gives it away
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "mobile";
  const p = (nav.userAgentData?.platform || navigator.platform || ua).toLowerCase();
  if (p.includes("win")) return "windows";
  if (p.includes("mac")) return "mac";
  if (p.includes("linux") || p.includes("x11") || p.includes("cros")) return "linux";
  return null;
}

async function getRelease(): Promise<Release> {
  try {
    const hit = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
    if (hit && Date.now() - hit.t < CACHE_MS) return hit.r;
  } catch { /* storage blocked: just fetch */ }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(API_URL, { headers: { Accept: "application/vnd.github+json" }, signal: ctrl.signal });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const r: Release = await res.json();
    if (!r?.tag_name || !Array.isArray(r.assets)) throw new Error("Unexpected release shape");
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), r })); } catch { /* ignore */ }
    return r;
  } finally {
    clearTimeout(timer);
  }
}

const mb = (bytes: number) => `${Math.max(1, Math.round(bytes / 1048576))} MB`;
const date = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const archOf = (name: string) =>
  /aarch64|arm64/i.test(name) ? "Apple Silicon" : /x64|x86_64|amd64/i.test(name) ? "Intel" : "";

// "What's new" comes from the repo's CHANGELOG.md (the release body is install
// instructions). raw.githubusercontent.com allows cross-origin reads. The text is
// escaped first and only bold and inline code are let back in, so nothing in
// the file can inject markup into this page.
const CHANGELOG_URL = `https://raw.githubusercontent.com/${REPO}/main/CHANGELOG.md`;

function inline(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function parseChangelog(md: string, version: string, max = 5): string[] {
  const lines = md.split(/\r?\n/);
  const start = lines.findIndex((l) => new RegExp(`^##\\s*\\[?v?${version.replace(/\./g, "\\.")}(?![\\d.])\\]?`).test(l));
  if (start < 0) return [];
  const items: string[] = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^##\s/.test(l)) break;
    if (/^[-*]\s+/.test(l)) items.push(l.replace(/^[-*]\s+/, ""));
    else if (/^\s{2,}\S/.test(l) && items.length) items[items.length - 1] += " " + l.trim(); // wrapped line
  }
  return items.slice(0, max);
}

async function loadNotes(version: string) {
  const slots = $$("[data-sv-notes]");
  if (!slots.length) return;
  try {
    const res = await fetch(CHANGELOG_URL);
    if (!res.ok) return;
    const items = parseChangelog(await res.text(), version);
    if (!items.length) return;
    const html = `<ul>${items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
    slots.forEach((el) => { el.innerHTML = html; el.closest<HTMLElement>("[data-sv-notes-card]")?.removeAttribute("hidden"); });
  } catch { /* the card stays hidden */ }
}

const $$ = <T extends Element = HTMLElement>(sel: string) => [...document.querySelectorAll<T>(sel)];
const setText = (sel: string, v: string) => $$(sel).forEach((el) => (el.textContent = v));

export type ReleaseState = { version?: string; os: OS | "mobile" | null };

export async function initRelease(): Promise<ReleaseState> {
  const os = detectOS();
  const root = document.documentElement;
  root.dataset.svOs = os ?? "unknown";

  // Label the buttons for the visitor's OS straight away; the link itself
  // stays on the releases page until the API answers.
  if (os && os !== "mobile") setText("[data-sv-os-label]", `Download for ${OS_LABEL[os]}`);
  if (os === "mobile") setText("[data-sv-os-label]", "See all downloads");

  let release: Release;
  try {
    release = await getRelease();
  } catch {
    root.dataset.svRelease = "failed";
    setText("[data-sv-meta]", "Latest release on GitHub");
    return { os };
  }

  const version = release.tag_name.replace(/^v/i, "");
  const published = date(release.published_at);
  setText("[data-sv-version]", `v${version}`);
  setText("[data-sv-date]", published);
  $$<HTMLTimeElement>("time[data-sv-date]").forEach((t) => (t.dateTime = release.published_at));

  const main = os && os !== "mobile" ? pick[os](release.assets) : undefined;
  $$<HTMLAnchorElement>("[data-sv-main]").forEach((a) => {
    // no matching file in this release: keep the releases-page fallback
    a.href = main ? main.browser_download_url : RELEASES_URL;
    if (main) a.setAttribute("download", "");
  });
  setText("[data-sv-meta]", main ? `v${version} · ${published} · ${mb(main.size)}` : `v${version} · ${published}`);

  // Every other installer as a small link, the visitor's own OS left out.
  const others: { label: string; href: string }[] = [];
  (["windows", "mac", "linux"] as OS[]).forEach((o) => {
    if (o === os) return;
    if (o === "mac") {
      const dmgs = release.assets.filter((x) => x.name.endsWith(".dmg"));
      if (!dmgs.length) others.push({ label: "macOS", href: release.html_url });
      dmgs.forEach((d) => others.push({
        label: dmgs.length > 1 && archOf(d.name) ? `macOS (${archOf(d.name)})` : "macOS",
        href: d.browser_download_url,
      }));
      return;
    }
    const a = pick[o](release.assets);
    others.push({ label: OS_LABEL[o], href: a?.browser_download_url ?? release.html_url });
  });
  if (os === "linux" || os === null) {
    const deb = release.assets.find((x) => x.name.endsWith(".deb"));
    if (deb) others.push({ label: "Linux (.deb)", href: deb.browser_download_url });
  }
  if (os === "mac") {
    // the main button took one .dmg; offer the other architecture by name
    release.assets
      .filter((x) => x.name.endsWith(".dmg") && x !== main)
      .forEach((d) => others.push({ label: `macOS (${archOf(d.name) || d.name})`, href: d.browser_download_url }));
  }
  $$("[data-sv-others]").forEach((ul) => {
    ul.innerHTML =
      others.map((o) => `<li><a href="${esc(o.href)}">${esc(o.label)}</a></li>`).join("") +
      `<li><a href="${esc(release.html_url)}" target="_blank" rel="noopener noreferrer">All files</a></li>`;
  });

  loadNotes(version);
  $$<HTMLAnchorElement>("[data-sv-release-link]").forEach((a) => (a.href = release.html_url));

  root.dataset.svRelease = "ok";
  return { version, os };
}
