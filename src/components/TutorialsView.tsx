import LiveEditor from '@/components/LiveEditor';
import type { TutorialGroup } from '@/data/layout';

interface TutorialsViewProps {
  groups: TutorialGroup[];
}

export default function TutorialsView({ groups }: TutorialsViewProps) {
  if (groups.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400">No tutorials available yet.</p>;
  }

  return (
    <div className="space-y-12">
      {groups.map(group => (
        <section key={group.id}>
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-50">{group.title}</h2>
          <div className="space-y-10">
            {group.lessons.map(lesson => (
              <article key={lesson.id} className="space-y-4">
                <header>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {lesson.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {lesson.description}
                  </p>
                </header>

                <ul className="flex flex-wrap gap-2">
                  {lesson.concepts.map(concept => (
                    <li key={concept}>
                      <code className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {concept}
                      </code>
                    </li>
                  ))}
                </ul>

                <div className="h-64">
                  <LiveEditor initialHtml={lesson.initialHtml} initialCss={lesson.initialCss} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
