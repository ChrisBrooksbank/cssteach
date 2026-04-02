import Link from 'next/link';

const topics = [
  {
    slug: 'layout',
    title: 'Layout',
    icon: '⬜',
    description: 'Flexbox and Grid. Arrange anything on the page.',
    cta: 'Learn Layout',
    accent: 'border-t-indigo-500',
  },
  {
    slug: 'selectors',
    title: 'Selectors',
    icon: '🎯',
    description: 'Target elements precisely. Classes, IDs, combinators.',
    cta: 'Learn Selectors',
    accent: 'border-t-amber-500',
  },
  {
    slug: 'typography-color',
    title: 'Typography & Color',
    icon: '🎨',
    description: 'Style text and pick colors. Fonts, sizes, and palettes.',
    cta: 'Learn Typography & Color',
    accent: 'border-t-rose-500',
  },
  {
    slug: 'animations',
    title: 'Animations',
    icon: '✨',
    description: 'Transitions and keyframes. Bring your CSS to life.',
    cta: 'Learn Animations',
    accent: 'border-t-violet-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-4 py-16 dark:bg-zinc-950">
      <main className="mx-auto max-w-2xl">
        <header className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            CSS Teach
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            Master CSS through interactive challenges.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2" role="list">
          {topics.map((topic, i) => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              role="listitem"
              className={`animate-fade-in-up group flex flex-col gap-3 rounded-2xl border border-t-4 border-zinc-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 ${topic.accent}`}
              style={{ animationDelay: `${i * 75}ms` }}
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
              <span className="mt-auto text-sm font-medium text-indigo-600 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">
                {topic.cta} →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
