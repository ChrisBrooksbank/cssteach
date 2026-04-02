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
];
