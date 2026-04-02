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
];
