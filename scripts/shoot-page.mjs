// Dev-only: one full-page screenshot of a route.
import puppeteer from "puppeteer-core";
const route = (process.argv[2] ?? "").replace(/^\//, "");
const out = process.argv[3] ?? "page";
const w = Number(process.argv[4] ?? 1500);
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const p = await b.newPage();
await p.setViewport({ width: w, height: 1000, deviceScaleFactor: 1 });
await p.goto("http://localhost:4321/" + route, { waitUntil: "networkidle2" });
await p.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 300)); }
  scrollTo(0, 0); await new Promise(r => setTimeout(r, 1500));
});
await p.screenshot({ path: `review/${out}.png`, fullPage: true });
console.log("saved review/" + out + ".png");
await b.close();
