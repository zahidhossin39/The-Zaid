// Dev-only: screenshot the running dev server with the system Chrome.
// Not part of the site build.
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const route = process.argv[4] ?? "";
const URL = "http://localhost:4321/" + route.replace(/^\//, "");
const width = Number(process.argv[2] ?? 1440);
const tag = process.argv[3] ?? `w${width}`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: "networkidle2" });

// drive the whole page so every IntersectionObserver reveal fires
await page.evaluate(async () => {
  const step = Math.round(innerHeight * 0.6);
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 200));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 1500));
});

const missed = await page.evaluate(() =>
  [...document.querySelectorAll(".reveal")]
    .filter((e) => !e.classList.contains("in-view"))
    .map((e) => (e.textContent || "").trim().slice(0, 40) || e.className.slice(0, 40))
);
console.log(missed.length ? "NOT REVEALED: " + missed.join(" | ") : "all reveals fired");

const sections = await page.evaluate(() =>
  [...document.querySelectorAll("main > section")].map((s, i) => {
    const label = (s.querySelector(".eyebrow, .h2, h1")?.textContent || `section-${i}`)
      .trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 24).replace(/^-|-$/g, "");
    return { i, label, top: Math.round(s.getBoundingClientRect().top + scrollY), h: Math.round(s.offsetHeight) };
  })
);

for (const s of sections) {
  await page.screenshot({
    path: `review/${tag}-${String(s.i).padStart(2, "0")}-${s.label}.png`,
    clip: { x: 0, y: s.top, width, height: Math.min(s.h, 2400) },
  });
}
await page.screenshot({ path: `review/${tag}-full.png`, fullPage: true });

console.log(sections.map((s) => `${s.i} ${s.label} h=${s.h}`).join("\n"));
await browser.close();
