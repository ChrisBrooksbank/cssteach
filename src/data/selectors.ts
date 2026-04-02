import type { TutorialGroup, ReferenceSection, Challenge } from './layout';

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

export const selectorsReference: ReferenceSection[] = [
  {
    id: 'selector-syntax',
    title: 'Selector Syntax Quick Reference',
    cards: [
      {
        id: 'element-selectors',
        property: 'Element selectors',
        description: 'Target HTML tags by name. Applies to every matching element on the page.',
        values: [
          { value: 'p', note: 'all <p> elements' },
          { value: 'h1, h2', note: 'any h1 or h2' },
          { value: '*', note: 'every element (universal)' },
        ],
        demoHtml: `<p>Paragraph one</p><p>Paragraph two</p><span>A span</span>`,
        demoCss: `p { color: #6366f1; font-weight: bold; margin: 4px 0; }
span { color: #6b7280; }
* { box-sizing: border-box; }`,
      },
      {
        id: 'class-id-selectors',
        property: '.class / #id selectors',
        description: 'Classes are reusable (.name). IDs are unique per page (#name).',
        values: [
          { value: '.card', note: 'elements with class="card"' },
          { value: '#hero', note: 'element with id="hero"' },
          { value: 'p.intro', note: '<p> with class="intro"' },
        ],
        demoHtml: `<p class="intro">Intro paragraph</p>
<p>Regular paragraph</p>
<p id="hero">Hero paragraph</p>`,
        demoCss: `.intro { color: #16a34a; font-weight: bold; }
#hero { background: #fef3c7; padding: 4px 8px; border-radius: 4px; }
p { margin: 4px 0; }`,
      },
      {
        id: 'combinator-selectors',
        property: 'Combinators',
        description: 'Combine selectors to describe element relationships.',
        values: [
          { value: 'A B', note: 'B anywhere inside A (descendant)' },
          { value: 'A > B', note: 'B as direct child of A' },
          { value: 'A + B', note: 'B immediately after A (adjacent)' },
          { value: 'A ~ B', note: 'all B siblings after A' },
        ],
        demoHtml: `<div class="box">
  <p>Direct child</p>
  <div><p>Nested</p></div>
</div>`,
        demoCss: `.box > p { color: #6366f1; font-weight: bold; }
.box p { border-left: 3px solid #e5e7eb; padding-left: 6px; }
.box { border: 1px solid #e5e7eb; padding: 8px; border-radius: 6px; }
p { margin: 4px 0; }`,
      },
      {
        id: 'attribute-selectors',
        property: 'Attribute selectors',
        description: 'Target elements by their HTML attributes or attribute values.',
        values: [
          { value: '[href]', note: 'has an href attribute' },
          { value: '[type="text"]', note: 'exact attribute value' },
          { value: '[class^="btn"]', note: 'value starts with "btn"' },
          { value: '[src$=".png"]', note: 'value ends with ".png"' },
        ],
        demoHtml: `<input type="text" placeholder="text input">
<input type="checkbox">
<a href="#">A link</a>`,
        demoCss: `[type="text"] { border: 2px solid #6366f1; border-radius: 4px; padding: 4px 8px; }
[type="checkbox"] { width: 18px; height: 18px; accent-color: #6366f1; }
[href] { color: #6366f1; font-weight: bold; }`,
      },
      {
        id: 'pseudo-class-selectors',
        property: 'Pseudo-classes',
        description: 'Target elements in a specific state or structural position.',
        values: [
          { value: ':hover', note: 'mouse over the element' },
          { value: ':focus', note: 'element has focus' },
          { value: ':nth-child(n)', note: 'by position in parent' },
          { value: ':not(selector)', note: 'everything except…' },
        ],
        demoHtml: `<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>`,
        demoCss: `li:first-child { color: #6366f1; font-weight: bold; }
li:last-child { color: #dc2626; }
li:nth-child(2) { background: #f4f4f5; }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 4px 8px; }`,
      },
      {
        id: 'pseudo-element-selectors',
        property: 'Pseudo-elements',
        description: 'Style a sub-part of an element. Always use double colons (::).',
        values: [
          { value: '::before', note: 'insert before element content' },
          { value: '::after', note: 'insert after element content' },
          { value: '::first-line', note: 'first rendered line' },
          { value: '::first-letter', note: 'first character' },
        ],
        demoHtml: `<p class="tip">Always double-check your selectors.</p>`,
        demoCss: `.tip::before { content: "💡 "; }
.tip::first-letter { font-size: 1.4em; font-weight: bold; color: #6366f1; }
.tip { margin: 0; line-height: 1.6; }`,
      },
    ],
  },
  {
    id: 'specificity-scoring',
    title: 'Specificity Scoring Guide',
    cards: [
      {
        id: 'specificity-columns',
        property: 'Specificity (a, b, c)',
        description:
          'Three columns, read left to right: IDs (a) beat classes (b) beat elements (c). Higher number wins.',
        values: [
          { value: 'ID (#id)', note: '→ adds 1 to column a' },
          { value: 'Class (.cls) / Attribute / Pseudo-class', note: '→ adds 1 to column b' },
          { value: 'Element (p) / Pseudo-element (::)', note: '→ adds 1 to column c' },
        ],
        demoHtml: `<div class="scores">
  <div class="row"><span class="label">p</span><span class="a">0</span><span class="b">0</span><span class="c">1</span></div>
  <div class="row"><span class="label">.cls</span><span class="a">0</span><span class="b">1</span><span class="c">0</span></div>
  <div class="row"><span class="label">#id</span><span class="a">1</span><span class="b">0</span><span class="c">0</span></div>
</div>`,
        demoCss: `.scores{font-family:monospace;font-size:13px}
.row{display:flex;align-items:center;gap:6px;padding:3px 0;border-bottom:1px solid #f4f4f5}
.label{width:56px;color:#374151;font-weight:bold}
.a{width:28px;height:22px;background:#dc2626;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold}
.b{width:28px;height:22px;background:#6366f1;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold}
.c{width:28px;height:22px;background:#16a34a;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold}`,
      },
      {
        id: 'specificity-examples',
        property: 'Selector score examples',
        description:
          'Add up each component to find the total score. The highest score wins the conflict.',
        values: [
          { value: 'h1', note: '(0,0,1)' },
          { value: '.nav a', note: '(0,1,1)' },
          { value: '#main .item', note: '(1,1,0)' },
          { value: '#main .item:hover', note: '(1,2,0)' },
        ],
        demoHtml: `<div class="scores">
  <div class="row"><span class="label">h1</span><span class="a">0</span><span class="b">0</span><span class="c">1</span><span class="wins">←lowest</span></div>
  <div class="row"><span class="label">.nav a</span><span class="a">0</span><span class="b">1</span><span class="c">1</span><span></span></div>
  <div class="row"><span class="label">#main .x</span><span class="a">1</span><span class="b">1</span><span class="c">0</span><span></span></div>
  <div class="row"><span class="label">#id.x:hov</span><span class="a">1</span><span class="b">2</span><span class="c">0</span><span class="wins">highest</span></div>
</div>`,
        demoCss: `.scores{font-family:monospace;font-size:12px}
.row{display:flex;align-items:center;gap:5px;padding:3px 0;border-bottom:1px solid #f4f4f5}
.label{width:68px;color:#374151;font-weight:bold;font-size:11px}
.a{width:22px;height:20px;background:#dc2626;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:11px}
.b{width:22px;height:20px;background:#6366f1;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:11px}
.c{width:22px;height:20px;background:#16a34a;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:11px}
.wins{color:#6b7280;font-size:10px;margin-left:4px}`,
      },
      {
        id: 'important-override',
        property: '!important',
        description:
          '!important overrides all specificity. Use only as a last resort — it makes debugging hard.',
        values: [{ value: 'p { color: red !important; }', note: 'wins over any other color rule' }],
        demoHtml: `<p id="para" class="text">What color am I?</p>`,
        demoCss: `/* ID wins normally */
#para { color: #6366f1; }
.text { color: #16a34a; }

/* But !important beats the ID */
p { color: #dc2626 !important; }

p { margin: 0; font-weight: bold; font-size: 15px; }`,
      },
      {
        id: 'inline-styles',
        property: 'Inline styles',
        description:
          'Inline styles (style="…") have even higher specificity than IDs. Only !important overrides them.',
        values: [
          { value: 'style="color:red"', note: 'beats any selector' },
          { value: '!important in stylesheet', note: 'beats inline style' },
        ],
        demoHtml: `<p id="p1" class="blue" style="color: #dc2626">Inline red wins</p>
<p id="p2" class="blue">Class blue wins here</p>`,
        demoCss: `#p1, #p2 { color: #6366f1; }
.blue { color: #3b82f6; }
p { margin: 4px 0; font-weight: bold; }`,
      },
    ],
  },
];

export const selectorsChallenges: Challenge[] = [
  {
    id: 'direct-children',
    title: 'Style Direct Children Only',
    difficulty: 'beginner',
    description:
      'Use the child combinator (>) to style only the top-level list items — not the nested ones.',
    targetHtml: `<ul class="menu">
  <li>Home</li>
  <li>Products
    <ul>
      <li>Widgets</li>
      <li>Gadgets</li>
    </ul>
  </li>
  <li>About</li>
</ul>`,
    targetCss: `.menu > li {
  color: #6366f1;
  font-weight: bold;
  padding: 4px 0;
}

.menu ul li {
  color: #6b7280;
  font-weight: normal;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul {
  list-style: none;
  padding-left: 16px;
  margin: 4px 0;
}`,
    startingHtml: `<ul class="menu">
  <li>Home</li>
  <li>Products
    <ul>
      <li>Widgets</li>
      <li>Gadgets</li>
    </ul>
  </li>
  <li>About</li>
</ul>`,
    startingCss: `/* This styles ALL li — nested ones too. Fix it! */
.menu li {
  color: #6366f1;
  font-weight: bold;
  padding: 4px 0;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul {
  list-style: none;
  padding-left: 16px;
  margin: 4px 0;
}`,
    checks: [
      {
        label: 'Uses the child combinator (>)',
        test: css => />/.test(css),
        hint: 'Replace the space in ".menu li" with the > combinator',
      },
      {
        label: 'Targets .menu > li (direct children only)',
        test: css => /\.menu\s*>\s*li/.test(css),
        hint: 'Write .menu > li to select only direct child list items',
      },
      {
        label: 'Nested items are styled differently',
        test: css => /\.menu\s*>\s*li/.test(css) && /\.menu\s+(ul\s+li|li\s+li)/.test(css),
        hint: 'Add a separate rule like .menu ul li to style the nested items differently',
      },
    ],
  },
  {
    id: 'specificity-battle',
    title: 'Win the Specificity Battle',
    difficulty: 'intermediate',
    description:
      'The ID rule colors the text red. Add a rule to make it green — use !important to override the ID.',
    targetHtml: `<p id="alert" class="success">Payment confirmed!</p>`,
    targetCss: `#alert {
  color: #dc2626;
}

.success {
  color: #16a34a !important;
  font-weight: bold;
}

p { margin: 0; font-size: 15px; }`,
    startingHtml: `<p id="alert" class="success">Payment confirmed!</p>`,
    startingCss: `/* The ID rule wins — text is red */
#alert {
  color: #dc2626;
}

/* Add a .success rule that overrides the ID */

p { margin: 0; font-size: 15px; }`,
    checks: [
      {
        label: 'Has a .success rule',
        test: css => /\.success\s*\{/.test(css),
        hint: 'Create a new rule block using .success { ... }',
      },
      {
        label: 'Uses !important to override the ID',
        test: css => /!important/.test(css),
        hint: 'Add !important after your color value to beat the ID specificity',
      },
      {
        label: 'Sets text color to green (#16a34a)',
        test: css => /color\s*:\s*#16a34a/.test(css),
        hint: 'Use color: #16a34a to set a green color',
      },
    ],
  },
  {
    id: 'fix-broken-selector',
    title: 'Fix the Broken Selector',
    difficulty: 'advanced',
    description:
      'The CSS uses .card.title (targets elements with both classes) instead of .card .title (descendant). Fix both broken selectors.',
    targetHtml: `<div class="card">
  <h3 class="title">Card Title</h3>
  <p class="body-text">Some body text here.</p>
</div>`,
    targetCss: `.card .title {
  color: #6366f1;
  font-weight: bold;
  margin: 0 0 6px;
}

.card .body-text {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.card {
  border: 2px solid #e5e7eb;
  padding: 12px;
  border-radius: 8px;
  max-width: 240px;
}`,
    startingHtml: `<div class="card">
  <h3 class="title">Card Title</h3>
  <p class="body-text">Some body text here.</p>
</div>`,
    startingCss: `/* BUG: .card.title targets an element with BOTH classes
   Fix: add a space to make it a descendant selector */
.card.title {
  color: #6366f1;
  font-weight: bold;
  margin: 0 0 6px;
}

/* BUG: same issue here */
.card.body-text {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.card {
  border: 2px solid #e5e7eb;
  padding: 12px;
  border-radius: 8px;
  max-width: 240px;
}`,
    checks: [
      {
        label: 'Fixed .card .title (descendant selector)',
        test: css => /\.card\s+\.title/.test(css),
        hint: 'Add a space between .card and .title to make it a descendant selector',
      },
      {
        label: 'Fixed .card .body-text (descendant selector)',
        test: css => /\.card\s+\.body-text/.test(css),
        hint: 'Add a space between .card and .body-text too',
      },
      {
        label: 'No more broken combined selectors (.card.title or .card.body-text)',
        test: css => !/\.card\.title/.test(css) && !/\.card\.body-text/.test(css),
        hint: 'Make sure there are no selectors left without a space between the two class names',
      },
    ],
  },
];
