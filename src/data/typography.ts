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
];
