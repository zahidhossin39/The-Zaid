// Dev-only: screenshot each [data-shot] block on a page.
import puppeteer from "puppeteer-core";
const route = (process.argv[2] ?? "").replace(/^\//, "");
const tag = process.argv[3] ?? "el";
const width = Number(process.argv[4] ?? 1440);
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const p = await b.newPage();
await p.setViewport({ width, height: 820, deviceScaleFactor: 2 });
await p.goto("http://localhost:4321/" + route, { waitUntil: "networkidle2" });
await p.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
  scrollTo(0, 0); await new Promise(r => setTimeout(r, 900));
});
const els = await p.evaluate(() => [...document.querySelectorAll("[data-shot]")].map(e => {
  const r = e.getBoundingClientRect();
  return { n: e.dataset.shot, top: Math.round(r.top + scrollY), h: Math.round(e.offsetHeight) };
}));
for (const e of els) {
  await p.screenshot({ path: `review/${tag}-${e.n}.png`, clip: { x: 0, y: e.top, width, height: Math.min(e.h, 2000) } });
  console.log(`${tag}-${e.n} h=${e.h}`);
}
await b.close();
