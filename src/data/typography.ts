import type { TutorialGroup } from './layout';

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
