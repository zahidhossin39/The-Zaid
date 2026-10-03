Inter Tight (OFL), subset from @fontsource/inter-tight latin files:

    pyftsubset node_modules/@fontsource/inter-tight/files/inter-tight-latin-<W>-normal.woff2 --unicodes="U+0020-007E,U+00A0,U+00A9,U+00B7,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2022,U+2026,U+2190-2193,U+2197,U+2713" --flavor=woff2 --layout-features='kern,liga,calt' --output-file=public/fonts/inter-tight-<W>.woff2

for W in 400, 500, 700. Add code points there if the site starts using other symbols.
