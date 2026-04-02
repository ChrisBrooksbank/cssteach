import Link from 'next/link';

const topics = [
  {
    slug: 'layout',
    title: 'Layout',
    icon: '⬜',
    description: 'Flexbox and Grid. Arrange anything on the page.',
    cta: 'Learn Layout',
  },
  {
    slug: 'selectors',
    title: 'Selectors',
    icon: '🎯',
    description: 'Target elements precisely. Classes, IDs, combinators.',
    cta: 'Learn Selectors',
  },
  {
    slug: 'typography-color',
    title: 'Typography & Color',
    icon: '🎨',
    description: 'Style text and pick colors. Fonts, sizes, and palettes.',
    cta: 'Learn Typography & Color',
  },
  {
    slug: 'animations',
    title: 'Animations',
    icon: '✨',
    description: 'Transitions and keyframes. Bring your CSS to life.',
    cta: 'Learn Animations',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 px-4 py-16">
      <main className="mx-auto max-w-2xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            CSS Teach
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            Pick a topic. Learn by doing.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2" role="list">
          {topics.map(topic => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              role="listitem"
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-zinc-400 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <span className="text-3xl" aria-hidden="true">
                {topic.icon}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {topic.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{topic.description}</p>
              </div>
              <span className="mt-auto text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-50">
                {topic.cta} →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
