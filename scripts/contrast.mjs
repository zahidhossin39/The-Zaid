// Dev-only: WCAG contrast ratios for candidate accents.
const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const L = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((h) => parseInt(h, 16));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
export const ratio = (a, b) => {
  const [x, y] = [L(a), L(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const BG = "#0A0A0B";
const cands = process.argv.slice(2);
for (const c of cands) {
  const onBg = ratio(c, BG), darkOn = ratio("#0A0A0B", c);
  console.log(`${c}  on-bg ${onBg.toFixed(2)}:1 ${onBg >= 4.5 ? "AA" : "FAIL"}   dark-text-on-it ${darkOn.toFixed(2)}:1 ${darkOn >= 4.5 ? "AA" : "FAIL"}`);
}
