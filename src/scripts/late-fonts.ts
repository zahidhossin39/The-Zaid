// Fonts used only below the hero load just after the first paint. Declaring them
// in CSS made the browser fetch all of them (~170 KB) on its first layout and,
// on PageSpeed's slow-phone run, hold the first paint for 1-2 s.
// Text that uses them shows in a fallback font until they arrive (they're
// below the fold, so nobody sees the swap).
import { afterFirstScreen, idle } from "./near";
import inter400 from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
import inter500 from "@fontsource/inter/files/inter-latin-500-normal.woff2?url";
import inter600 from "@fontsource/inter/files/inter-latin-600-normal.woff2?url";
import serif400 from "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url";
import narrow400 from "@fontsource/pt-sans-narrow/files/pt-sans-narrow-latin-400-normal.woff2?url";
import narrow700 from "@fontsource/pt-sans-narrow/files/pt-sans-narrow-latin-700-normal.woff2?url";

const FACES: [family: string, url: string, weight: string][] = [
  ["Inter", inter400, "400"],
  ["Inter", inter500, "500"],
  ["Inter", inter600, "600"],
  ["Instrument Serif", serif400, "400"],
  ["PT Sans Narrow", narrow400, "400"],
  ["PT Sans Narrow", narrow700, "700"],
];

const load = () =>
  FACES.forEach(([family, url, weight]) => {
    const face = new FontFace(family, `url(${url}) format("woff2")`, { weight, display: "swap" });
    document.fonts.add(face);
    face.load().catch(() => {}); // a failed font just keeps the fallback
  });

// once the first screen is done, when the main thread is free
afterFirstScreen.then(() => idle(load));
