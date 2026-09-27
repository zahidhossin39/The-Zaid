# Gemini Round 3 Scores

## D1 "Registered Split"
**Score: 9.5/10**
- **Visuals & UX:** Extremely clean and classic. Aligning the card top with the headline top establishes a strong horizontal anchor.
- **Brand Fit:** Perfect. It embodies "calm, honest" and uses the grid as a structural truth rather than just decoration.
- **Build Risk:** Low. A standard 20-column grid setup is highly predictable and reliable to build.
*(No changes needed).*

## D2 "Proof Stage"
**Score: 8.5/10**
- **Visuals & UX:** The full-width headline is a great hook. But placing "See examples" inline with the CTA in a narrowed 448px left column creates clutter and fights the primary action.
- **Brand Fit:** Good. Prioritizes the proof (video) over the copy.
- **Build Risk:** Low to medium. The 900px fallback requires some container query logic, but it's standard.
- **Smallest change to reach 9.0+:** Move "See examples" back to the caption row alongside the pause control. This gives the CTA room to breathe in the narrowed 448px column and appropriately anchors the massive 768px video block.
**Score after change: 9.5/10**

## D3 "Split Stage, bled"
**Score: 7.5/10**
- **Visuals & UX:** Dramatic and stark contrast. Excellent visual separation.
- **Brand Fit:** Matches "black-and-white", but the hard 50vw split feels a bit harsh for "calm".
- **Build Risk:** High. Perfectly aligning a 50vw panel to grid line 10 (which is fixed to a 1280px container) is notoriously brittle. The dual-color grid and `mix-blend-mode: difference` on the navbar add significant rendering and stacking context risks.
- **Smallest change to reach 9.0+:** Drop the 50vw viewport bleed. Instead, make the dark panel a grid-aligned element spanning columns 11-20 inside the standard container, with normal `.04` dark grid lines covering the whole section. This kills the math/alignment brittleness and the tricky dual-color grid while preserving the stark contrast.
**Score after change: 9.0/10**
