// Section-heading line reveal. Each line slides up out of its own clip mask
// once, when the heading's top crosses 85% of the viewport.
// The hero H1 is left alone on purpose: it's the LCP element.
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Keep in sync with the matching rule in global.css.
export const HEADINGS = "main .h2, .band h2, .proc-head h2";

// Split only after webfonts land, so line breaks are measured once, correctly.
document.fonts.ready.then(() => {
  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    const play = new Map<Element, () => void>();
    const done = new Map<Element, () => void>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // skipped past it (fast fling, anchor jump): show it finished, never leave it hidden
          const passed = !e.isIntersecting && e.boundingClientRect.bottom < 0;
          if (!e.isIntersecting && !passed) continue;
          if (passed) done.get(e.target)?.(); else play.get(e.target)?.();
          done.delete(e.target); play.delete(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );

    const splits = [...document.querySelectorAll<HTMLElement>(HEADINGS)].map((el) => {
      let shown = false;
      let tween: gsap.core.Tween;
      const split = SplitText.create(el, {
        type: "lines",
        linesClass: "tr-line", // masks get "tr-line-mask"
        mask: "lines",
        autoSplit: true, // re-split on resize / font swap
        aria: "auto",
        // Returning the tween lets SplitText time-sync it across re-splits,
        // so a finished reveal stays finished after a resize.
        onSplit: (self) =>
          (tween = gsap.from(self.lines, {
            yPercent: 100,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.08,
            paused: !shown,
          })),
      });
      play.set(el, () => { shown = true; tween.play(); });
      done.set(el, () => { shown = true; tween.progress(1); });

      // Already on screen at load: reveal now (the -15% dead zone must not hold it back).
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) { play.get(el)!(); play.delete(el); done.delete(el); }
      else io.observe(el);
      return split;
    });

    // A jump from below the viewport to above it in one scroll step never fires
    // the observer (not intersecting both times), so sweep skipped headings here.
    let ticking = false;
    const sweep = () => {
      ticking = false;
      for (const el of done.keys()) {
        if (el.getBoundingClientRect().bottom < 0) { done.get(el)!(); io.unobserve(el); done.delete(el); play.delete(el); }
      }
      if (!done.size) removeEventListener("scroll", onScroll);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(sweep); } };
    addEventListener("scroll", onScroll, { passive: true });

    return () => { io.disconnect(); removeEventListener("scroll", onScroll); splits.forEach((s) => s.revert()); };
  });
});
