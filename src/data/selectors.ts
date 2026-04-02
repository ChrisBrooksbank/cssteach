import type { TutorialGroup } from './layout';

export const selectorsTutorials: TutorialGroup[] = [
  {
    id: 'basic-selectors',
    title: 'Basic Selectors',
    lessons: [
      {
        id: 'element-class-id',
        title: 'Element, Class & ID',
        description:
          'Target elements by tag name, class, or ID. Classes are reusable; IDs are unique.',
        concepts: ['element selector', '.class selector', '#id selector', '* universal selector'],
        initialHtml: `<h2>Heading</h2>
<p class="intro">First paragraph.</p>
<p>Second paragraph.</p>
<p id="special">Special paragraph.</p>`,
        initialCss: `/* Element selector — targets all <p> tags */
p {
  color: #374151;
  margin: 4px 0;
}

/* Class selector — targets elements with class="intro" */
.intro {
  font-weight: bold;
  color: #6366f1;
}

/* ID selector — targets the element with id="special" */
#special {
  background: #fef3c7;
  padding: 4px 8px;
  border-radius: 4px;
}

/* Universal selector — targets everything */
* {
  box-sizing: border-box;
}

/* Try:
   h2 { color: #4f46e5; }
   .intro { font-size: 18px; }
   #special { border-left: 3px solid #f59e0b; } */`,
      },
    ],
  },
  {
    id: 'combinators',
    title: 'Combinators',
    lessons: [
      {
        id: 'descendant-child',
        title: 'Descendant & Child',
        description:
          'Descendant (space) matches any nested element. Child (>) matches direct children only.',
        concepts: ['descendant selector (space)', 'child selector (>)'],
        initialHtml: `<div class="card">
  <p>Direct child paragraph</p>
  <div class="inner">
    <p>Nested paragraph</p>
  </div>
</div>`,
        initialCss: `/* Descendant — targets ALL <p> inside .card */
.card p {
  color: #6366f1;
}

/* Child — targets only DIRECT <p> children of .card */
.card > p {
  font-weight: bold;
  text-decoration: underline;
}

.card {
  border: 2px solid #e5e7eb;
  padding: 12px;
  border-radius: 6px;
}

.inner {
  margin-top: 8px;
  padding: 8px;
  background: #f4f4f5;
  border-radius: 4px;
}

/* Try:
   .card > p { color: #dc2626; }
   .inner > p { font-style: italic; } */`,
      },
      {
        id: 'adjacent-sibling',
        title: 'Adjacent & General Sibling',
        description:
          'Adjacent sibling (+) targets the next element. General sibling (~) targets all following siblings.',
        concepts: ['adjacent sibling (+)', 'general sibling (~)'],
        initialHtml: `<h3>Title</h3>
<p>First paragraph — right after h3</p>
<p>Second paragraph</p>
<p>Third paragraph</p>`,
        initialCss: `/* Adjacent sibling — only the <p> immediately after <h3> */
h3 + p {
  color: #6366f1;
  font-weight: bold;
}

/* General sibling — all <p> elements after <h3> */
h3 ~ p {
  border-left: 3px solid #e5e7eb;
  padding-left: 8px;
  margin: 6px 0;
}

h3 {
  margin: 0 0 8px;
  color: #111827;
}

/* Try:
   h3 + p { font-size: 18px; }
   h3 ~ p { background: #f4f4f5; padding: 4px 8px; } */`,
      },
    ],
  },
  {
    id: 'pseudo-classes',
    title: 'Pseudo-Classes',
    lessons: [
      {
        id: 'state-pseudo-classes',
        title: 'State Pseudo-Classes',
        description:
          'Pseudo-classes target elements in a specific state. :hover, :focus, and :active respond to user interaction.',
        concepts: [':hover', ':focus', ':active', ':visited'],
        initialHtml: `<a href="#">A link</a>
<br><br>
<input type="text" placeholder="Click me">
<br><br>
<button>Press me</button>`,
        initialCss: `/* :hover — mouse is over the element */
a:hover {
  color: #6366f1;
  text-decoration: none;
}

/* :focus — element has keyboard/click focus */
input:focus {
  outline: 2px solid #6366f1;
  border-radius: 4px;
}

/* :active — element is being clicked */
button:active {
  background: #4f46e5;
  color: #fff;
}

a { color: #374151; }
input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; }
button { padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer; }

/* Try:
   button:hover { background: #f3f4f6; }
   input:focus { border-color: #6366f1; } */`,
      },
      {
        id: 'structural-pseudo-classes',
        title: 'Structural Pseudo-Classes',
        description:
          ':nth-child selects elements by position. :first-child and :last-child target the first and last siblings.',
        concepts: [':first-child', ':last-child', ':nth-child(n)', ':not()'],
        initialHtml: `<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
</ul>`,
        initialCss: `/* :first-child — first sibling */
li:first-child {
  color: #6366f1;
  font-weight: bold;
}

/* :last-child — last sibling */
li:last-child {
  color: #dc2626;
}

/* :nth-child(even) — every even item */
li:nth-child(even) {
  background: #f4f4f5;
}

/* :not() — everything except... */
li:not(:first-child) {
  border-top: 1px solid #e5e7eb;
}

ul { list-style: none; padding: 0; margin: 0; }
li { padding: 6px 10px; }

/* Try:
   li:nth-child(3) { font-style: italic; }
   li:nth-child(odd) { background: #ede9fe; } */`,
      },
    ],
  },
  {
    id: 'pseudo-elements',
    title: 'Pseudo-Elements',
    lessons: [
      {
        id: 'before-after',
        title: '::before and ::after',
        description:
          '::before and ::after insert generated content just inside an element, before or after its children.',
        concepts: ['::before', '::after', 'content property'],
        initialHtml: `<p class="quote">Great things take time.</p>
<p class="badge">New</p>`,
        initialCss: `/* ::before — inserts content before the element's children */
.quote::before {
  content: '"';
  font-size: 2em;
  color: #6366f1;
  line-height: 0;
  vertical-align: -0.3em;
  margin-right: 2px;
}

/* ::after — inserts content after the element's children */
.quote::after {
  content: '"';
  font-size: 2em;
  color: #6366f1;
  line-height: 0;
  vertical-align: -0.3em;
  margin-left: 2px;
}

/* Decorative badge using ::after */
.badge {
  display: inline-block;
  position: relative;
  background: #6366f1;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
}

p { margin: 8px 0; font-size: 15px; }

/* Try:
   .badge::after { content: " ✓"; }
   .quote::before { content: "→ "; font-size: 1em; } */`,
      },
      {
        id: 'first-line-letter',
        title: '::first-line and ::first-letter',
        description:
          '::first-line styles the first line of a block. ::first-letter styles just the opening character — great for drop caps.',
        concepts: ['::first-line', '::first-letter'],
        initialHtml: `<p class="article">
  CSS is a stylesheet language used to describe how HTML elements are displayed on screen. It controls layout, color, and typography across entire websites.
</p>`,
        initialCss: `/* ::first-letter — drop cap effect */
.article::first-letter {
  font-size: 2.5em;
  font-weight: bold;
  color: #6366f1;
  float: left;
  line-height: 0.8;
  margin-right: 4px;
}

/* ::first-line — style the opening line */
.article::first-line {
  font-weight: bold;
  color: #374151;
}

.article {
  max-width: 340px;
  line-height: 1.6;
  color: #6b7280;
}

/* Try:
   .article::first-letter { color: #dc2626; }
   .article::first-line { text-transform: uppercase; } */`,
      },
    ],
  },
  {
    id: 'specificity',
    title: 'Specificity & Cascade',
    lessons: [
      {
        id: 'specificity-scoring',
        title: 'Specificity Scoring',
        description:
          'Every selector has a score: IDs score highest (0,1,0), classes/pseudo-classes next (0,0,1), elements last (0,0,1 in the third column). Higher score wins.',
        concepts: ['specificity (a,b,c)', 'ID > class > element', '!important'],
        initialHtml: `<p id="intro" class="highlight">Which color wins?</p>`,
        initialCss: `/* Element selector — lowest specificity (0,0,1) */
p {
  color: #6b7280;
}

/* Class selector — medium specificity (0,1,0) */
.highlight {
  color: #16a34a;
}

/* ID selector — highest specificity (1,0,0) */
#intro {
  color: #6366f1;
}

/* The paragraph is PURPLE — ID wins */

/* Try removing #intro rule — class wins (green).
   Then remove .highlight — element wins (gray).
   Add: p { color: red !important; } — !important overrides all. */`,
      },
      {
        id: 'cascade-order',
        title: 'The Cascade',
        description:
          'When specificity ties, the rule that appears LAST in the stylesheet wins. This is the cascade.',
        concepts: ['cascade order', 'source order', 'inheritance'],
        initialHtml: `<p class="text">Last rule wins when scores tie.</p>
<div class="parent">
  <p class="child-text">I inherit color from my parent.</p>
</div>`,
        initialCss: `/* Same specificity (0,1,0) — last one wins */
.text {
  color: #dc2626; /* red — written first */
}

.text {
  color: #6366f1; /* purple — written last, wins! */
}

/* Inheritance — children get parent's color */
.parent {
  color: #16a34a;
}

/* .child-text inherits green from .parent */

p { margin: 6px 0; }
.parent { padding: 8px; border: 1px solid #e5e7eb; border-radius: 4px; margin-top: 8px; }

/* Try:
   Add a third .text rule with color: #f59e0b — amber wins.
   .child-text { color: #374151; } — explicit rule overrides inherited. */`,
      },
    ],
  },
];
