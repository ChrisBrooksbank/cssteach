export interface ReferenceValue {
  value: string;
  note?: string;
}

export interface ReferenceCard {
  id: string;
  property: string;
  description: string;
  values?: ReferenceValue[];
  demoHtml: string;
  demoCss: string;
}

export interface ReferenceSection {
  id: string;
  title: string;
  cards: ReferenceCard[];
}

export const layoutReference: ReferenceSection[] = [
  {
    id: 'flexbox',
    title: 'Flexbox Properties',
    cards: [
      {
        id: 'flex-direction',
        property: 'flex-direction',
        description: 'Sets which way items flow — in a row or a column.',
        values: [
          { value: 'row', note: 'default — left to right' },
          { value: 'column', note: 'top to bottom' },
          { value: 'row-reverse', note: 'right to left' },
          { value: 'column-reverse', note: 'bottom to top' },
        ],
        demoHtml: `<div class="row"><div class="a">1</div><div class="a">2</div><div class="a">3</div></div>
<div class="col"><div class="b">1</div><div class="b">2</div><div class="b">3</div></div>`,
        demoCss: `.row{display:flex;flex-direction:row;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px;margin-bottom:6px}
.col{display:flex;flex-direction:column;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px}
.a,.b{width:30px;height:30px;background:#6366f1;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:12px;font-weight:bold}`,
      },
      {
        id: 'justify-content',
        property: 'justify-content',
        description: 'Aligns items along the main axis (horizontal by default).',
        values: [
          { value: 'flex-start', note: 'pack to start' },
          { value: 'center', note: 'center' },
          { value: 'flex-end', note: 'pack to end' },
          { value: 'space-between', note: 'first/last at edges' },
          { value: 'space-around', note: 'equal space around each' },
          { value: 'space-evenly', note: 'equal gaps everywhere' },
        ],
        demoHtml: `<div class="between"><div class="box"></div><div class="box"></div><div class="box"></div></div>
<div class="center"><div class="box"></div><div class="box"></div><div class="box"></div></div>`,
        demoCss: `.between,.center{display:flex;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px;margin-bottom:6px}
.between{justify-content:space-between}
.center{justify-content:center}
.box{width:28px;height:28px;background:#6366f1;border-radius:4px}`,
      },
      {
        id: 'align-items',
        property: 'align-items',
        description: 'Aligns items along the cross axis (vertical by default).',
        values: [
          { value: 'stretch', note: 'fill the container (default)' },
          { value: 'flex-start', note: 'top' },
          { value: 'center', note: 'middle' },
          { value: 'flex-end', note: 'bottom' },
          { value: 'baseline', note: 'align text baselines' },
        ],
        demoHtml: `<div class="start"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>
<div class="mid"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`,
        demoCss: `.start,.mid{display:flex;gap:4px;height:60px;background:#f4f4f5;padding:6px;border-radius:6px;margin-bottom:6px}
.start{align-items:flex-start}
.mid{align-items:center}
.a{width:28px;height:20px;background:#6366f1;border-radius:4px}
.b{width:28px;height:35px;background:#4f46e5;border-radius:4px}
.c{width:28px;height:28px;background:#4338ca;border-radius:4px}`,
      },
      {
        id: 'flex-wrap',
        property: 'flex-wrap',
        description: 'Controls whether items wrap onto multiple lines.',
        values: [
          { value: 'nowrap', note: 'default — items shrink to fit' },
          { value: 'wrap', note: 'overflow items move to next line' },
          { value: 'wrap-reverse', note: 'wrap upwards' },
        ],
        demoHtml: `<div class="wrap"><div class="b"></div><div class="b"></div><div class="b"></div><div class="b"></div><div class="b"></div><div class="b"></div></div>`,
        demoCss: `.wrap{display:flex;flex-wrap:wrap;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px}
.b{width:50px;height:30px;background:#6366f1;border-radius:4px}`,
      },
      {
        id: 'flex-grow',
        property: 'flex-grow / flex-shrink',
        description:
          'flex-grow expands items to fill space. flex-shrink lets items compress when space is tight.',
        values: [
          { value: 'flex-grow: 0', note: 'default — does not grow' },
          { value: 'flex-grow: 1', note: 'takes equal share of free space' },
          { value: 'flex-shrink: 0', note: 'never shrinks below its size' },
        ],
        demoHtml: `<div class="row">
  <div class="fixed">fixed</div>
  <div class="grows">grows</div>
  <div class="fixed">fixed</div>
</div>`,
        demoCss: `.row{display:flex;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px}
.fixed{width:60px;height:30px;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
.grows{flex-grow:1;height:30px;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}`,
      },
    ],
  },
  {
    id: 'grid',
    title: 'Grid Properties',
    cards: [
      {
        id: 'grid-template-columns',
        property: 'grid-template-columns',
        description: 'Defines the number and size of columns.',
        values: [
          { value: 'repeat(3, 1fr)', note: '3 equal columns' },
          { value: '200px 1fr', note: 'fixed + flexible' },
          { value: 'repeat(auto-fill, minmax(100px, 1fr))', note: 'responsive' },
        ],
        demoHtml: `<div class="g"><div class="c">1</div><div class="c">2</div><div class="c">3</div><div class="c">4</div><div class="c">5</div><div class="c">6</div></div>`,
        demoCss: `.g{display:grid;grid-template-columns:1fr 2fr 1fr;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px}
.c{height:30px;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:bold}`,
      },
      {
        id: 'gap',
        property: 'gap',
        description:
          'Sets space between rows and columns. Use two values for row-gap and column-gap separately.',
        values: [
          { value: 'gap: 16px', note: 'same for rows and columns' },
          { value: 'gap: 8px 24px', note: 'row-gap then column-gap' },
          { value: 'row-gap / column-gap', note: 'set each independently' },
        ],
        demoHtml: `<div class="g"><div class="c"></div><div class="c"></div><div class="c"></div><div class="c"></div></div>`,
        demoCss: `.g{display:grid;grid-template-columns:1fr 1fr;gap:12px;background:#f4f4f5;padding:6px;border-radius:6px}
.c{height:30px;background:#6366f1;border-radius:4px}`,
      },
      {
        id: 'grid-column-row',
        property: 'grid-column / grid-row',
        description:
          'Places an item across specific column or row lines. Use span to stretch across multiple tracks.',
        values: [
          { value: 'grid-column: 1 / 3', note: 'from line 1 to line 3' },
          { value: 'grid-column: span 2', note: 'span 2 columns' },
          { value: 'grid-row: 1 / 3', note: 'span 2 rows' },
        ],
        demoHtml: `<div class="g"><div class="wide">span 2</div><div class="c">2</div><div class="c">3</div><div class="c">4</div></div>`,
        demoCss: `.g{display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px}
.c{height:30px;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:bold}
.wide{grid-column:span 2;height:30px;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:bold}`,
      },
      {
        id: 'grid-template-areas',
        property: 'grid-template-areas',
        description: 'Name your grid regions. Use grid-area on children to place them by name.',
        values: [
          { value: '"header header"', note: 'header spans both columns' },
          { value: '"sidebar main"', note: 'two-column middle row' },
          { value: 'grid-area: header', note: 'place item in named region' },
        ],
        demoHtml: `<div class="g">
  <div class="header">header</div>
  <div class="sidebar">sidebar</div>
  <div class="main">main</div>
  <div class="footer">footer</div>
</div>`,
        demoCss: `.g{display:grid;grid-template-columns:80px 1fr;grid-template-rows:auto 1fr auto;grid-template-areas:"header header" "sidebar main" "footer footer";gap:4px;background:#f4f4f5;padding:6px;border-radius:6px;height:120px}
.header{grid-area:header;background:#4338ca;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
.sidebar{grid-area:sidebar;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
.main{grid-area:main;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
.footer{grid-area:footer;background:#818cf8;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}`,
      },
    ],
  },
  {
    id: 'patterns',
    title: 'Common Layout Patterns',
    cards: [
      {
        id: 'holy-grail',
        property: 'Holy Grail',
        description: 'Header + 3 columns (nav, content, aside) + footer. Classic page layout.',
        demoHtml: `<div class="page">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main Content</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>`,
        demoCss: `.page{display:grid;grid-template-columns:80px 1fr 80px;grid-template-rows:auto 1fr auto;grid-template-areas:"header header header" "nav main aside" "footer footer footer";gap:4px;background:#f4f4f5;padding:6px;border-radius:6px;height:130px}
header{grid-area:header;background:#4338ca;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
nav{grid-area:nav;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
main{grid-area:main;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
aside{grid-area:aside;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}
footer{grid-area:footer;background:#818cf8;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}`,
      },
      {
        id: 'sidebar-layout',
        property: 'Sidebar Layout',
        description:
          'Fixed-width sidebar beside a flexible content area. The content fills remaining space.',
        demoHtml: `<div class="layout">
  <aside>Sidebar</aside>
  <main>Content area</main>
</div>`,
        demoCss: `.layout{display:flex;gap:4px;background:#f4f4f5;padding:6px;border-radius:6px;height:80px}
aside{width:80px;background:#4f46e5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold;flex-shrink:0}
main{flex:1;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}`,
      },
      {
        id: 'card-grid',
        property: 'Card Grid',
        description: 'Responsive card grid — columns automatically fill the available width.',
        demoHtml: `<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
</div>`,
        demoCss: `.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:4px;background:#f4f4f5;padding:6px;border-radius:6px}
.card{height:40px;background:#6366f1;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold}`,
      },
    ],
  },
];

export interface TutorialLesson {
  id: string;
  title: string;
  description: string;
  concepts: string[];
  initialHtml: string;
  initialCss: string;
}

export interface TutorialGroup {
  id: string;
  title: string;
  lessons: TutorialLesson[];
}

export const layoutTutorials: TutorialGroup[] = [
  {
    id: 'flexbox',
    title: 'Flexbox',
    lessons: [
      {
        id: 'flexbox-basics',
        title: 'Flexbox Basics',
        description: 'Make a container flexible. Items line up in a row by default.',
        concepts: ['display: flex', 'flex-direction', 'justify-content', 'align-items'],
        initialHtml: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`,
        initialCss: `.container {
  display: flex;
  height: 200px;
  background: #f4f4f5;
  padding: 8px;
  gap: 8px;
}

.box {
  width: 64px;
  height: 64px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

/* Try these on .container:
   flex-direction: column
   justify-content: center
   justify-content: space-between
   align-items: center
   align-items: flex-end */`,
      },
      {
        id: 'flexbox-wrap-grow-shrink',
        title: 'Wrapping & Sizing',
        description: 'Control how items wrap and how much space they take.',
        concepts: ['flex-wrap', 'flex-grow', 'flex-shrink', 'flex-basis'],
        initialHtml: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box grow">3 (grows)</div>
  <div class="box">4</div>
  <div class="box">5</div>
</div>`,
        initialCss: `.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background: #f4f4f5;
  padding: 8px;
}

.box {
  width: 80px;
  height: 60px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
  font-size: 13px;
}

.grow {
  flex-grow: 1;
  background: #4f46e5;
}

/* Try on .box:
   flex-shrink: 0
   flex-basis: 120px

   Try on .grow:
   flex-grow: 2 */`,
      },
    ],
  },
  {
    id: 'css-grid',
    title: 'CSS Grid',
    lessons: [
      {
        id: 'grid-basics',
        title: 'Grid Basics',
        description: 'Define rows and columns. Items snap into cells automatically.',
        concepts: ['display: grid', 'grid-template-columns', 'grid-template-rows', 'gap'],
        initialHtml: `<div class="grid">
  <div class="cell">1</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
  <div class="cell">5</div>
  <div class="cell">6</div>
</div>`,
        initialCss: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  background: #f4f4f5;
  padding: 8px;
}

.cell {
  height: 64px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

/* Try on .grid:
   grid-template-columns: 1fr 2fr 1fr
   grid-template-columns: 100px auto 100px
   grid-template-rows: 80px 80px
   gap: 16px */`,
      },
      {
        id: 'grid-placement',
        title: 'Placement & Spanning',
        description: 'Place items in specific cells. Span them across multiple columns or rows.',
        concepts: ['grid-column', 'grid-row', 'grid-template-areas', 'span'],
        initialHtml: `<div class="grid">
  <div class="cell header">Header</div>
  <div class="cell sidebar">Sidebar</div>
  <div class="cell main">Main</div>
  <div class="cell footer">Footer</div>
</div>`,
        initialCss: `.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 8px;
  background: #f4f4f5;
  padding: 8px;
  height: 260px;
}

.cell {
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
  font-size: 13px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; background: #4f46e5; }
.main    { grid-area: main; }
.footer  { grid-area: footer; background: #4338ca; }

/* Try changing grid-template-areas to:
   "header  header"
   "main    main"
   "sidebar footer" */`,
      },
      {
        id: 'responsive-grid',
        title: 'Responsive Layouts',
        description: 'Columns that adapt to the available space — no media queries needed.',
        concepts: ['auto-fill', 'auto-fit', 'minmax()', 'repeat()'],
        initialHtml: `<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
</div>`,
        initialCss: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  background: #f4f4f5;
  padding: 12px;
}

.card {
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  font-size: 13px;
}

/* Try on .grid:
   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))

   auto-fill keeps empty tracks; auto-fit collapses them */`,
      },
    ],
  },
];

export interface ChallengeCheck {
  label: string;
  test: (css: string) => boolean;
  hint?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  targetHtml: string;
  targetCss: string;
  startingHtml: string;
  startingCss: string;
  checks: ChallengeCheck[];
}

export const layoutChallenges: Challenge[] = [
  {
    id: 'centering',
    title: 'Center an Element',
    difficulty: 'beginner',
    description:
      'Use flexbox to center the box both horizontally and vertically inside its container.',
    targetHtml: `<div class="container">
  <div class="box">Centered</div>
</div>`,
    targetCss: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  background: #f4f4f5;
  border-radius: 8px;
}
.box {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    startingHtml: `<div class="container">
  <div class="box">Centered</div>
</div>`,
    startingCss: `.container {
  /* Make this a flex container */
  height: 160px;
  background: #f4f4f5;
  border-radius: 8px;
}

.box {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`,
    checks: [
      {
        label: 'Container uses display: flex',
        test: css => /\.container\s*\{[^}]*display\s*:\s*flex/.test(css),
        hint: 'Add display: flex; inside the .container block.',
      },
      {
        label: 'Horizontal centering: justify-content: center',
        test: css => /justify-content\s*:\s*center/.test(css),
        hint: 'Add justify-content: center; to center items along the main axis.',
      },
      {
        label: 'Vertical centering: align-items: center',
        test: css => /align-items\s*:\s*center/.test(css),
        hint: 'Add align-items: center; to center items along the cross axis.',
      },
    ],
  },
  {
    id: 'navbar',
    title: 'Build a Navigation Bar',
    difficulty: 'beginner',
    description:
      'Use flexbox so the brand name sits on the left and the nav links are pushed to the right.',
    targetHtml: `<nav class="navbar">
  <span class="brand">MyApp</span>
  <ul class="links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>`,
    targetCss: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e1b4b;
  padding: 12px 20px;
  border-radius: 8px;
}
.brand {
  color: white;
  font-weight: bold;
  font-size: 16px;
}
.links {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.links li {
  color: #c7d2fe;
  font-size: 14px;
  cursor: pointer;
}`,
    startingHtml: `<nav class="navbar">
  <span class="brand">MyApp</span>
  <ul class="links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>`,
    startingCss: `.navbar {
  /* Push brand left, links right */
  background: #1e1b4b;
  padding: 12px 20px;
  border-radius: 8px;
}
.brand {
  color: white;
  font-weight: bold;
  font-size: 16px;
}
.links {
  /* Make links horizontal with gaps */
  list-style: none;
  margin: 0;
  padding: 0;
}
.links li {
  color: #c7d2fe;
  font-size: 14px;
}`,
    checks: [
      {
        label: 'Navbar uses display: flex',
        test: css => /\.navbar\s*\{[^}]*display\s*:\s*flex/.test(css),
        hint: 'Add display: flex; inside the .navbar block.',
      },
      {
        label: 'Brand and links separated: justify-content: space-between',
        test: css => /justify-content\s*:\s*space-between/.test(css),
        hint: 'Use justify-content: space-between; to push items to opposite edges.',
      },
      {
        label: 'Links are horizontal: .links uses display: flex',
        test: css => /\.links\s*\{[^}]*display\s*:\s*flex/.test(css),
        hint: 'Add display: flex; to .links so list items line up horizontally.',
      },
    ],
  },
  {
    id: 'card-grid',
    title: 'Build a Card Grid',
    difficulty: 'intermediate',
    description: 'Use CSS Grid to create a responsive card layout that fills the available width.',
    targetHtml: `<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>`,
    targetCss: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  background: #f4f4f5;
  padding: 12px;
  border-radius: 8px;
}
.card {
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  font-size: 13px;
}`,
    startingHtml: `<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>`,
    startingCss: `.grid {
  /* Set up a responsive grid */
  background: #f4f4f5;
  padding: 12px;
  border-radius: 8px;
}
.card {
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  font-size: 13px;
}`,
    checks: [
      {
        label: 'Grid uses display: grid',
        test: css => /\.grid\s*\{[^}]*display\s*:\s*grid/.test(css),
        hint: 'Add display: grid; inside the .grid block.',
      },
      {
        label: 'Columns defined with grid-template-columns',
        test: css => /grid-template-columns\s*:/.test(css),
        hint: 'Use grid-template-columns to define how many columns and their sizes.',
      },
      {
        label: 'Responsive columns using repeat() and minmax()',
        test: css => /repeat\s*\(/.test(css) && /minmax\s*\(/.test(css),
        hint: 'Try: grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));',
      },
    ],
  },
  {
    id: 'holy-grail',
    title: 'Holy Grail Layout',
    difficulty: 'advanced',
    description:
      'Use CSS Grid areas to build a classic layout: header, nav, main content, aside, and footer.',
    targetHtml: `<div class="page">
  <header class="header">Header</header>
  <nav class="nav">Nav</nav>
  <main class="main">Main Content</main>
  <aside class="aside">Aside</aside>
  <footer class="footer">Footer</footer>
</div>`,
    targetCss: `.page {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  gap: 8px;
  height: 220px;
  background: #f4f4f5;
  padding: 8px;
  border-radius: 8px;
}
.header { grid-area: header; background: #4338ca; }
.nav    { grid-area: nav;    background: #4f46e5; }
.main   { grid-area: main;   background: #6366f1; }
.aside  { grid-area: aside;  background: #4f46e5; }
.footer { grid-area: footer; background: #818cf8; }
.header,.nav,.main,.aside,.footer {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  border-radius: 6px;
}`,
    startingHtml: `<div class="page">
  <header class="header">Header</header>
  <nav class="nav">Nav</nav>
  <main class="main">Main Content</main>
  <aside class="aside">Aside</aside>
  <footer class="footer">Footer</footer>
</div>`,
    startingCss: `.page {
  /* Set up a grid with 3 named areas */
  height: 220px;
  background: #f4f4f5;
  padding: 8px;
  border-radius: 8px;
  gap: 8px;
}
/* Assign grid-area to each child */
.header { background: #4338ca; }
.nav    { background: #4f46e5; }
.main   { background: #6366f1; }
.aside  { background: #4f46e5; }
.footer { background: #818cf8; }
.header,.nav,.main,.aside,.footer {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  border-radius: 6px;
}`,
    checks: [
      {
        label: 'Page uses display: grid',
        test: css => /\.page\s*\{[^}]*display\s*:\s*grid/.test(css),
        hint: 'Add display: grid; inside the .page block.',
      },
      {
        label: 'Grid areas defined with grid-template-areas',
        test: css => /grid-template-areas\s*:/.test(css),
        hint: 'Use grid-template-areas with quoted strings like "header header header".',
      },
      {
        label: 'Children placed with grid-area',
        test: css => /grid-area\s*:/.test(css),
        hint: 'Add grid-area: header; to .header, grid-area: nav; to .nav, etc.',
      },
    ],
  },
];
