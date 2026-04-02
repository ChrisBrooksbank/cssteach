import type { TutorialGroup, ReferenceSection, Challenge } from './layout';

export const typographyTutorials: TutorialGroup[] = [
  {
    id: 'font-properties',
    title: 'Font Properties',
    lessons: [
      {
        id: 'family-size-weight',
        title: 'Family, Size & Weight',
        description:
          'Pick a font, set a size, and control thickness. These three properties handle 80% of font styling.',
        concepts: ['font-family', 'font-size', 'font-weight', 'font-style'],
        initialHtml: `<h2 class="heading">CSS Typography</h2>
<p class="body">Body text uses a readable font at a comfortable size.</p>
<p class="italic">This text is styled differently.</p>`,
        initialCss: `/* font-family: the typeface */
.heading {
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px;
}

/* font-size: how big; font-weight: thickness */
.body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #374151;
  margin: 0 0 8px;
}

/* font-style: normal | italic | oblique */
.italic {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  font-style: italic;
  color: #6b7280;
  margin: 0;
}

/* Try:
   font-weight: 100 through 900
   font-size: 12px, 20px, 2rem
   font-family: monospace
   font-style: normal */`,
      },
    ],
  },
  {
    id: 'text-layout',
    title: 'Text Layout',
    lessons: [
      {
        id: 'spacing-alignment',
        title: 'Spacing & Alignment',
        description:
          'Control vertical rhythm with line-height, tracking with letter-spacing, and alignment with text-align.',
        concepts: ['line-height', 'letter-spacing', 'text-align', 'text-transform'],
        initialHtml: `<h2 class="title">HELLO WORLD</h2>
<p class="loose">
  This paragraph has generous line spacing,
  making it easy to read line by line.
</p>
<p class="tight center">
  Centered text with tighter tracking.
</p>`,
        initialCss: `/* text-transform: uppercase | lowercase | capitalize */
.title {
  font-family: system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #4f46e5;
  margin: 0 0 12px;
}

/* line-height: vertical space between lines (unitless is best) */
.loose {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #374151;
  margin: 0 0 12px;
}

/* text-align: left | center | right | justify */
.center {
  text-align: center;
}

.tight {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #6b7280;
  margin: 0;
}

/* Try:
   text-align: right
   letter-spacing: 0.3em
   line-height: 1.2 (tight) or 2 (airy)
   text-transform: capitalize */`,
      },
    ],
  },
  {
    id: 'web-fonts',
    title: 'Web Fonts',
    lessons: [
      {
        id: 'loading-web-fonts',
        title: 'Loading & Using Web Fonts',
        description:
          'Load custom fonts with @font-face or Google Fonts, then apply them with font-family. Always list a fallback.',
        concepts: ['@font-face', '@import', 'font-display', 'font-family fallbacks'],
        initialHtml: `<h2 class="heading">Custom Web Font</h2>
<p class="body">
  This text uses a Google Font loaded via CSS @import.
</p>
<p class="mono">
  Monospace is great for code snippets.
</p>`,
        initialCss: `/* Load from Google Fonts — no JS needed */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Fira+Code&display=swap');

/* font-display: swap — show fallback while loading */
.heading {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 10px;
}

.body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #374151;
  margin: 0 0 10px;
}

/* Always have a fallback after the custom font */
.mono {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Try:
   Change 'Inter' to 'Georgia' to see the fallback
   Add font-weight: 100 through 900
   Try family=Roboto or family=Playfair+Display */`,
      },
    ],
  },
  {
    id: 'color-formats',
    title: 'Color Formats',
    lessons: [
      {
        id: 'hex-rgb-hsl',
        title: 'hex, rgb & hsl',
        description:
          'CSS has four main color formats. hsl is the easiest to reason about — hue (0-360°), saturation, lightness.',
        concepts: ['hex', 'rgb()', 'hsl()', 'named colors'],
        initialHtml: `<div class="swatch hex">hex: #3b82f6</div>
<div class="swatch rgb">rgb(59, 130, 246)</div>
<div class="swatch hsl">hsl(217, 91%, 60%)</div>
<div class="swatch named">dodgerblue (named)</div>`,
        initialCss: `body { font-family: system-ui, sans-serif; }

.swatch {
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: white;
}

/* hex: 6-digit RGB in base 16 */
.hex    { background: #3b82f6; }

/* rgb(): red green blue, each 0-255 */
.rgb    { background: rgb(59, 130, 246); }

/* hsl(): hue (0-360°), saturation%, lightness% */
.hsl    { background: hsl(217, 91%, 60%); }

/* 140+ named colors built into CSS */
.named  { background: dodgerblue; }

/* Try:
   hsl(0, 91%, 60%)   → red
   hsl(120, 60%, 40%) → green
   hsl(217, 0%, 60%)  → grey (0% saturation)
   rgb(255, 0, 128)   → hot pink */`,
      },
      {
        id: 'oklch',
        title: 'oklch — Perceptually Uniform Color',
        description:
          'oklch() is a modern format where equal lightness steps look equal to your eye. Great for design systems.',
        concepts: ['oklch()', 'lightness', 'chroma', 'hue'],
        initialHtml: `<p class="label">oklch(L C H) — Lightness · Chroma · Hue</p>
<div class="row">
  <div class="box a">L 0.3</div>
  <div class="box b">L 0.5</div>
  <div class="box c">L 0.7</div>
  <div class="box d">L 0.9</div>
</div>
<div class="row">
  <div class="box e">blue</div>
  <div class="box f">teal</div>
  <div class="box g">green</div>
  <div class="box h">yellow</div>
</div>`,
        initialCss: `body { font-family: system-ui, sans-serif; }

.label {
  font-size: 13px;
  color: #6b7280;
  margin: 0 0 8px;
}

.row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.box {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-align: center;
}

/* Same hue (250°), different lightness */
.a { background: oklch(0.3 0.18 250); }
.b { background: oklch(0.5 0.18 250); }
.c { background: oklch(0.7 0.18 250); }
.d { background: oklch(0.9 0.18 250); color: #333; }

/* Same lightness (0.6), different hue */
.e { background: oklch(0.6 0.18 250); }
.f { background: oklch(0.6 0.18 190); }
.g { background: oklch(0.6 0.18 140); }
.h { background: oklch(0.6 0.18 90);  color: #333; }

/* Try:
   Change chroma (0.18) to 0.05 (muted) or 0.3 (vivid)
   Change lightness to 0.4 (darker) or 0.8 (lighter)
   Hue 0=red 60=yellow 120=green 240=blue 300=purple */`,
      },
    ],
  },
  {
    id: 'custom-properties',
    title: 'CSS Custom Properties',
    lessons: [
      {
        id: 'theming-with-variables',
        title: 'Theming with Variables',
        description:
          'CSS custom properties (variables) let you define values once and reuse them. Perfect for building consistent themes.',
        concepts: ['--variable', 'var()', ':root', 'cascade'],
        initialHtml: `<div class="card">
  <h2 class="card-title">Design Token</h2>
  <p class="card-body">
    Change the <code>--brand</code> color in <code>:root</code>
    and watch every element update at once.
  </p>
  <button class="btn">Primary Action</button>
</div>`,
        initialCss: `/* Define variables on :root — available everywhere */
:root {
  --brand:      hsl(217, 91%, 55%);
  --brand-dark: hsl(217, 91%, 40%);
  --text:       #1f2937;
  --text-muted: #6b7280;
  --surface:    #f9fafb;
  --radius:     8px;
}

body { font-family: system-ui, sans-serif; }

/* Use variables with var() */
.card {
  background: var(--surface);
  border: 2px solid var(--brand);
  border-radius: var(--radius);
  padding: 20px;
  max-width: 320px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--brand);
  margin: 0 0 8px;
}

.card-body {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 16px;
}

.btn {
  background: var(--brand);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn:hover {
  background: var(--brand-dark);
}

/* Try:
   Change --brand to hsl(340, 80%, 55%) → pink theme
   Change --radius to 0px → sharp corners
   Add --brand-light and use it on .card background */`,
      },
    ],
  },
];

export const typographyReference: ReferenceSection[] = [
  {
    id: 'font-properties',
    title: 'Font Properties',
    cards: [
      {
        id: 'font-family',
        property: 'font-family',
        description: 'Sets the typeface. Always list a fallback family at the end.',
        values: [
          { value: 'Georgia, serif', note: 'system serif with fallback' },
          { value: 'system-ui, sans-serif', note: 'OS default UI font' },
          { value: 'monospace', note: 'fixed-width (code)' },
        ],
        demoHtml: `<p class="a">Georgia (serif)</p>
<p class="b">system-ui (sans)</p>
<p class="c">monospace</p>`,
        demoCss: `p{margin:0 0 4px;font-size:14px;color:#1f2937}
.a{font-family:Georgia,serif}
.b{font-family:system-ui,sans-serif}
.c{font-family:monospace}`,
      },
      {
        id: 'font-size',
        property: 'font-size',
        description: 'Controls text size. rem is relative to the root; px is absolute.',
        values: [
          { value: '16px', note: 'browser default body size' },
          { value: '1rem', note: 'relative to root (usually 16px)' },
          { value: '1.25em', note: 'relative to parent element' },
        ],
        demoHtml: `<p class="sm">12px — small</p>
<p class="md">16px — base</p>
<p class="lg">24px — large</p>
<p class="xl">32px — heading</p>`,
        demoCss: `p{margin:0 0 2px;font-family:system-ui,sans-serif;color:#1f2937}
.sm{font-size:12px}.md{font-size:16px}.lg{font-size:24px}.xl{font-size:32px}`,
      },
      {
        id: 'font-weight',
        property: 'font-weight',
        description: 'Controls thickness. Numeric values give finer control than keywords.',
        values: [
          { value: '400', note: 'normal / regular' },
          { value: '700', note: 'bold' },
          { value: '100–900', note: 'full range (if font supports it)' },
        ],
        demoHtml: `<p class="w100">weight 100</p>
<p class="w400">weight 400</p>
<p class="w700">weight 700</p>
<p class="w900">weight 900</p>`,
        demoCss: `p{margin:0 0 2px;font-family:system-ui,sans-serif;font-size:15px;color:#1f2937}
.w100{font-weight:100}.w400{font-weight:400}.w700{font-weight:700}.w900{font-weight:900}`,
      },
    ],
  },
  {
    id: 'text-layout',
    title: 'Text Layout Properties',
    cards: [
      {
        id: 'line-height',
        property: 'line-height',
        description:
          'Vertical space between lines. Unitless values (e.g. 1.5) scale with font-size — prefer them.',
        values: [
          { value: '1', note: 'tight — lines touch' },
          { value: '1.5', note: 'comfortable reading' },
          { value: '2', note: 'airy / double-spaced' },
        ],
        demoHtml: `<p class="tight">Tight 1.1 — This paragraph is dense. Lines are close together.</p>
<p class="loose">Loose 1.8 — This paragraph breathes. Lines are spaced apart.</p>`,
        demoCss: `p{font-family:system-ui,sans-serif;font-size:13px;color:#374151;margin:0 0 6px;max-width:220px}
.tight{line-height:1.1}.loose{line-height:1.8}`,
      },
      {
        id: 'text-align',
        property: 'text-align',
        description: 'Horizontal alignment of text within its container.',
        values: [
          { value: 'left', note: 'default for LTR text' },
          { value: 'center', note: 'centered' },
          { value: 'right', note: 'right-aligned' },
        ],
        demoHtml: `<p class="l">Left aligned text</p>
<p class="c">Center aligned text</p>
<p class="r">Right aligned text</p>`,
        demoCss: `p{font-family:system-ui,sans-serif;font-size:13px;color:#374151;margin:0 0 4px;border:1px dashed #e5e7eb;padding:2px 6px;border-radius:4px}
.l{text-align:left}.c{text-align:center}.r{text-align:right}`,
      },
      {
        id: 'text-transform',
        property: 'text-transform',
        description: 'Changes letter casing without editing the HTML.',
        values: [
          { value: 'uppercase', note: 'ALL CAPS' },
          { value: 'lowercase', note: 'all lowercase' },
          { value: 'capitalize', note: 'First Letter Each Word' },
        ],
        demoHtml: `<p class="u">hello world</p>
<p class="l">HELLO WORLD</p>
<p class="c">hello world</p>`,
        demoCss: `p{font-family:system-ui,sans-serif;font-size:14px;font-weight:600;color:#4f46e5;margin:0 0 4px;letter-spacing:0.05em}
.u{text-transform:uppercase}.l{text-transform:lowercase}.c{text-transform:capitalize}`,
      },
    ],
  },
  {
    id: 'color-formats',
    title: 'Color Formats',
    cards: [
      {
        id: 'hex',
        property: 'hex (#rrggbb)',
        description:
          'Six hex digits encode red, green, blue (00–ff each). Short form: #rgb. Add two more digits for alpha: #rrggbbaa.',
        values: [
          { value: '#000000', note: 'black' },
          { value: '#ffffff', note: 'white' },
          { value: '#3b82f6', note: 'a shade of blue' },
          { value: '#3b82f680', note: '~50% transparent blue' },
        ],
        demoHtml: `<div class="a">#3b82f6</div>
<div class="b">#f97316</div>
<div class="c">#10b981</div>
<div class="d">#3b82f680</div>`,
        demoCss: `div{padding:8px 12px;border-radius:6px;margin-bottom:6px;font-family:monospace;font-size:12px;font-weight:600;color:#fff}
.a{background:#3b82f6}.b{background:#f97316}.c{background:#10b981}.d{background:#3b82f680;color:#1f2937;border:1px solid #cbd5e1}`,
      },
      {
        id: 'rgb',
        property: 'rgb() / rgba()',
        description:
          'Red, green, blue as numbers 0–255. rgb() also accepts an alpha channel as a fourth value (0–1).',
        values: [
          { value: 'rgb(59, 130, 246)', note: 'blue' },
          { value: 'rgb(249, 115, 22)', note: 'orange' },
          { value: 'rgb(59 130 246 / 0.5)', note: 'modern syntax with alpha' },
        ],
        demoHtml: `<div class="a">rgb(59, 130, 246)</div>
<div class="b">rgb(249, 115, 22)</div>
<div class="c">rgb(59 130 246 / 0.5)</div>`,
        demoCss: `div{padding:8px 12px;border-radius:6px;margin-bottom:6px;font-family:monospace;font-size:12px;font-weight:600;color:#fff}
.a{background:rgb(59,130,246)}.b{background:rgb(249,115,22)}.c{background:rgb(59 130 246/0.5);color:#1f2937;border:1px solid #cbd5e1}`,
      },
      {
        id: 'hsl',
        property: 'hsl()',
        description:
          'Hue (0–360°), Saturation (%), Lightness (%). Easier to reason about than rgb — spin the hue to change color.',
        values: [
          { value: 'hsl(217, 91%, 60%)', note: 'blue at 60% lightness' },
          { value: 'hsl(0, 91%, 60%)', note: 'same saturation, red hue' },
          { value: 'hsl(217, 0%, 60%)', note: 'same hue, 0% sat = grey' },
        ],
        demoHtml: `<div class="a">hsl(217, 91%, 60%) blue</div>
<div class="b">hsl(0, 91%, 60%) red</div>
<div class="c">hsl(120, 60%, 40%) green</div>
<div class="d">hsl(217, 0%, 60%) grey</div>`,
        demoCss: `div{padding:8px 12px;border-radius:6px;margin-bottom:6px;font-family:monospace;font-size:11px;font-weight:600;color:#fff}
.a{background:hsl(217,91%,60%)}.b{background:hsl(0,91%,60%)}.c{background:hsl(120,60%,40%)}.d{background:hsl(217,0%,60%);color:#1f2937}`,
      },
      {
        id: 'oklch',
        property: 'oklch()',
        description:
          'Lightness (0–1), Chroma (0–0.4), Hue (0–360°). Perceptually uniform — equal lightness steps look equal.',
        values: [
          { value: 'oklch(0.6 0.18 250)', note: 'blue at L=0.6' },
          { value: 'oklch(0.6 0.18 140)', note: 'same L, green hue' },
          { value: 'oklch(0.6 0.05 250)', note: 'same L, muted chroma' },
        ],
        demoHtml: `<div class="a">oklch(0.6 0.18 250)</div>
<div class="b">oklch(0.6 0.18 140)</div>
<div class="c">oklch(0.6 0.05 250)</div>
<div class="d">oklch(0.85 0.18 90)</div>`,
        demoCss: `div{padding:8px 12px;border-radius:6px;margin-bottom:6px;font-family:monospace;font-size:11px;font-weight:600;color:#fff}
.a{background:oklch(0.6 0.18 250)}.b{background:oklch(0.6 0.18 140)}.c{background:oklch(0.6 0.05 250)}.d{background:oklch(0.85 0.18 90);color:#333}`,
      },
    ],
  },
  {
    id: 'font-stacks',
    title: 'Font Stack Recommendations',
    cards: [
      {
        id: 'system-ui',
        property: 'System UI',
        description: "Uses the OS's own interface font. Fast, no network request, feels native.",
        values: [
          { value: 'system-ui, sans-serif', note: 'shortest form' },
          {
            value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            note: 'cross-platform explicit list',
          },
        ],
        demoHtml: `<p class="a">System UI — the quick brown fox</p>
<p class="b">0123456789 !@#$%</p>`,
        demoCss: `p{font-family:system-ui,sans-serif;font-size:15px;color:#1f2937;margin:0 0 4px}
.b{font-size:13px;color:#6b7280}`,
      },
      {
        id: 'serif',
        property: 'Serif stacks',
        description: 'Good for long-form reading. Georgia is the safest web-safe serif.',
        values: [
          { value: 'Georgia, "Times New Roman", serif', note: 'classic editorial' },
          { value: '"Palatino Linotype", Palatino, serif', note: 'elegant alternative' },
        ],
        demoHtml: `<p class="a">Georgia serif — the quick brown fox</p>
<p class="b">Reading text benefits from serifs at body sizes.</p>`,
        demoCss: `p{font-family:Georgia,"Times New Roman",serif;font-size:15px;color:#1f2937;margin:0 0 4px;line-height:1.6}
.b{font-size:13px;color:#6b7280}`,
      },
      {
        id: 'monospace',
        property: 'Monospace stacks',
        description: 'Fixed-width fonts for code snippets and tabular data.',
        values: [
          { value: '"Courier New", Courier, monospace', note: 'universal fallback' },
          { value: 'ui-monospace, "Cascadia Code", monospace', note: 'modern with ligatures' },
        ],
        demoHtml: `<code class="a">const color = "oklch(0.6 0.18 250)";</code>`,
        demoCss: `code{display:block;font-family:ui-monospace,"Cascadia Code","Courier New",monospace;font-size:13px;color:#4f46e5;background:#f5f3ff;padding:10px 12px;border-radius:6px;white-space:pre}`,
      },
    ],
  },
];

export const typographyChallenges: Challenge[] = [
  {
    id: 'match-typography',
    title: 'Match the Typography',
    description:
      'Recreate the target text style. Apply font-size, font-weight, letter-spacing, text-transform, and color to match.',
    targetHtml: `<h1 class="headline">HEADLINES MATTER</h1>
<p class="byline">By a CSS learner</p>
<p class="body">Good typography guides the reader's eye and sets the tone of the page.</p>`,
    targetCss: `body { font-family: system-ui, sans-serif; padding: 16px; }

.headline {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1f2937;
  margin: 0 0 4px;
}

.byline {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 12px;
}

.body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: #374151;
  margin: 0;
}`,
    startingHtml: `<h1 class="headline">HEADLINES MATTER</h1>
<p class="byline">By a CSS learner</p>
<p class="body">Good typography guides the reader's eye and sets the tone of the page.</p>`,
    startingCss: `body { font-family: system-ui, sans-serif; padding: 16px; }

/* Match the target — style these three elements */
.headline {
  font-size: 20px;
  color: black;
  margin: 0 0 4px;
}

.byline {
  color: black;
  margin: 0 0 12px;
}

.body {
  margin: 0;
}`,
    checks: [
      {
        label: '.headline has font-size: 28px',
        test: css => /\.headline[^}]*font-size\s*:\s*28px/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: '.headline has font-weight: 900',
        test: css => /\.headline[^}]*font-weight\s*:\s*900/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: '.headline uses text-transform: uppercase',
        test: css => /\.headline[^}]*text-transform\s*:\s*uppercase/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: '.byline uses letter-spacing',
        test: css => /\.byline[^}]*letter-spacing/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: '.body has line-height ≥ 1.5',
        test: css => {
          const m = css.replace(/\n/g, ' ').match(/\.body[^}]*line-height\s*:\s*([\d.]+)/);
          return m ? parseFloat(m[1]) >= 1.5 : false;
        },
      },
    ],
  },
  {
    id: 'hsl-palette',
    title: 'Build an HSL Color Palette',
    description:
      'Create five harmonious swatches using hsl(). Keep the same hue (220) but vary the lightness from dark to light.',
    targetHtml: `<div class="swatch s1">Darkest — L 20%</div>
<div class="swatch s2">Dark — L 35%</div>
<div class="swatch s3">Mid — L 50%</div>
<div class="swatch s4">Light — L 70%</div>
<div class="swatch s5">Lightest — L 90%</div>`,
    targetCss: `body { font-family: system-ui, sans-serif; padding: 16px; }

.swatch {
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
}

.s1 { background: hsl(220, 70%, 20%); color: white; }
.s2 { background: hsl(220, 70%, 35%); color: white; }
.s3 { background: hsl(220, 70%, 50%); color: white; }
.s4 { background: hsl(220, 70%, 70%); color: #1f2937; }
.s5 { background: hsl(220, 70%, 90%); color: #1f2937; }`,
    startingHtml: `<div class="swatch s1">Darkest — L 20%</div>
<div class="swatch s2">Dark — L 35%</div>
<div class="swatch s3">Mid — L 50%</div>
<div class="swatch s4">Light — L 70%</div>
<div class="swatch s5">Lightest — L 90%</div>`,
    startingCss: `body { font-family: system-ui, sans-serif; padding: 16px; }

.swatch {
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
}

/* Set each swatch background using hsl(220, 70%, <lightness>) */
/* Use color: white for dark swatches, color: #1f2937 for light ones */
.s1 { background: grey; color: white; }
.s2 { background: grey; color: white; }
.s3 { background: grey; color: white; }
.s4 { background: grey; color: #1f2937; }
.s5 { background: grey; color: #1f2937; }`,
    checks: [
      {
        label: 'Uses hsl() for backgrounds',
        test: css => /background\s*:\s*hsl\(/.test(css),
      },
      {
        label: '.s1 uses hsl with hue 220',
        test: css => /\.s1[^}]*background\s*:\s*hsl\(\s*220/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: 'All five swatches use hsl()',
        test: css => (css.match(/background\s*:\s*hsl\(/g) ?? []).length >= 5,
      },
      {
        label: 'Lightness values are all different',
        test: css => {
          const matches = [...css.matchAll(/hsl\(\s*220\s*,\s*70%\s*,\s*(\d+)%\s*\)/g)];
          const values = matches.map(m => m[1]);
          return new Set(values).size >= 3;
        },
      },
    ],
  },
  {
    id: 'theme-switcher',
    title: 'Theme Switcher with Custom Properties',
    description:
      'Define CSS custom properties on :root for a light theme, then override them inside a .dark class to create a dark theme.',
    targetHtml: `<div class="card">
  <h2 class="card-title">Light Theme</h2>
  <p class="card-body">Custom properties make theming easy — change once, update everywhere.</p>
  <button class="btn">Got it</button>
</div>
<div class="card dark">
  <h2 class="card-title">Dark Theme</h2>
  <p class="card-body">The same HTML — different variables applied via the .dark class.</p>
  <button class="btn">Nice</button>
</div>`,
    targetCss: `body { font-family: system-ui, sans-serif; padding: 16px; display: flex; flex-direction: column; gap: 16px; }

:root {
  --bg: #ffffff;
  --surface: #f3f4f6;
  --text: #1f2937;
  --text-muted: #6b7280;
  --accent: hsl(217, 91%, 55%);
  --radius: 8px;
}

.dark {
  --bg: #111827;
  --surface: #1f2937;
  --text: #f9fafb;
  --text-muted: #9ca3af;
  --accent: hsl(217, 91%, 65%);
}

.card {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 20px;
  border: 1px solid var(--accent);
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 8px;
}

.card-body {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 16px;
}

.btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}`,
    startingHtml: `<div class="card">
  <h2 class="card-title">Light Theme</h2>
  <p class="card-body">Custom properties make theming easy — change once, update everywhere.</p>
  <button class="btn">Got it</button>
</div>
<div class="card dark">
  <h2 class="card-title">Dark Theme</h2>
  <p class="card-body">The same HTML — different variables applied via the .dark class.</p>
  <button class="btn">Nice</button>
</div>`,
    startingCss: `body { font-family: system-ui, sans-serif; padding: 16px; display: flex; flex-direction: column; gap: 16px; }

/* 1. Define light-theme variables on :root */
:root {
  /* --bg, --surface, --text, --text-muted, --accent, --radius */
}

/* 2. Override variables for the dark theme */
.dark {
  /* same variable names, dark values */
}

/* 3. Use var() in the components below */
.card {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #6366f1;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #4f46e5;
  margin: 0 0 8px;
}

.card-body {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 16px;
}

.btn {
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}`,
    checks: [
      {
        label: 'Defines custom properties on :root',
        test: css => /:root\s*\{[^}]*--/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: 'Overrides variables in .dark',
        test: css => /\.dark\s*\{[^}]*--/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: '.card uses var() for background',
        test: css => /\.card\s*\{[^}]*background\s*:\s*var\(/.test(css.replace(/\n/g, ' ')),
      },
      {
        label: 'Uses var() for at least 4 different properties',
        test: css => (css.match(/var\(--/g) ?? []).length >= 4,
      },
    ],
  },
];
