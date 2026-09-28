# Process transition — critique + proposal (Kimi)

## Weaknesses in the current plan
1. **Blank gap.** Opacity 1 for |t|<0.3, gone by 0.5, "never shared" — between t=0.3 (outgoing fading) and t=0.5 (incoming still 0) nothing is fully visible. Slow scrollers sit in a half-empty stage; that's the same complaint as the crossfade, just inverted.
2. **Linear translateY (-t·60px)** = constant velocity pass-through. Smoothness is perceived at the *ends* (arrival deceleration), not mid-flight; linear motion reads as conveyor belt, not calm.
3. **180ms idle snap fights Lenis.** Wheel momentum and Lenis easing still emit scroll events; 180ms will trigger mid-gesture, and `scrollTo` yanks the whole page when the user may intend to scroll *past* the section. Also no velocity check.
4. **Dots still flip via `Math.round(sp)`** mid-transition — ping fires while text is half-gone, two truths at once.
5. Identical opacity for all elements makes the block move as one slab; depth needs differentiated *distance*, not just the icon.

## Proposal: masked handoff (overlap without mess)
Overlap is fine if the two phases never share pixels. Outgoing copy exits upward through a clip mask; incoming wipes in from below — like real content continuing, not a fade.

- `t = sp - i`. Full opacity for |t| ≤ 0.4, ramp over 0.4 → 0.75 (asymmetric, wider than planned).
- Outgoing: `clip-path: inset(0 0 ${e·100}% 0)`, e = easeInCubic((t-0.4)/0.35); `translateY = -34px·easeOutQuad(min(t,1))`; scale 1→0.985.
- Incoming (t in [-0.75,-0.4]): `clip-path: inset(${(1-e)·100}% 0 0 0)`; `translateY = +26px·(1-e)`; scale 0.985→1. Because masks are complementary, both can render simultaneously — no bleed-through, no blank.
- Distance multipliers (no per-element opacity): kick 0.7×, h3 1.0×, body 1.15×, tags 1.3×, icon 0.5× — the stack stretches slightly, then settles.
- **No blur, no timed transitions** — everything a pure function of lerped `sp` (keep lerp 0.18; it already supplies the ease-out at rest).
- **Snap:** engage only when scroll velocity < 0.2px/ms for 350ms AND |t| ∈ [0.08, 0.5] AND no wheel/touch event in the last 300ms. `lenis.scrollTo` target = section top + (nearest/(N-1))·(340vh - 100svh), duration 0.7s, `easing: t=>1-Math.pow(1-t,3)`. Never snap during active input; skip entirely if user is scrolling fast through.
- Dots: switch `.on` at |t| crossing 0.5 with 0.06 hysteresis; fire `ping` only when sp settles within ±0.1 of the integer.
- reduced-motion: opacity only, no transform/clip.

## Judging "smoothest" objectively
Automated 60fps capture of a scripted scroll (puppeteer, constant velocity + flicks). Pass criteria: (a) every frame has max opacity_i = 1 (never blank); (b) zero frames where two phases' unmasked pixels overlap; (c) d(translateY)/dt continuous across handoffs; (d) settle time after scroll-stop ≤ 500ms; (e) ≥55fps with only transform/opacity/clip-path writes. Then a human blind A/B against the rejected crossfade.
