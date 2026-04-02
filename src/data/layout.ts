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
