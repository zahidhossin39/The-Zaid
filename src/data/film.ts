// Bump when public/hero.mp4 or hero-poster.webp change, so browsers fetch the new files instead of a cached copy.
export const FILM_V = "9";
export const POSTER = `/hero-poster.webp?v=${FILM_V}`;
export const POSTER_SM = `/hero-poster-720.webp?v=${FILM_V}`;
// shown as an <img> over the video (responsive, so phones get the 720px file)
export const POSTER_SRCSET = `${POSTER_SM} 720w, ${POSTER} 960w`;
export const POSTER_SIZES = "(max-width: 767px) calc(100vw - 3rem), 460px";
