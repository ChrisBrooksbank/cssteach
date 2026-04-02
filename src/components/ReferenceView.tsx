'use client';

import type { ReferenceSection } from '@/data/layout';

function buildSrcDoc(html: string, css: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 8px; font-family: sans-serif; }
</style>
<style>${css}</style>
</head>
<body>${html}</body>
</html>`;
}

interface ReferenceViewProps {
  sections: ReferenceSection[];
}

export default function ReferenceView({ sections }: ReferenceViewProps) {
  if (sections.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400">No reference available yet.</p>;
  }

  return (
    <div className="space-y-12">
      {sections.map(section => (
        <section key={section.id}>
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {section.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {section.cards.map(card => (
              <article
                key={card.id}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <header className="mb-3">
                  <code className="rounded-md bg-zinc-100 px-2 py-1 text-sm font-mono font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    {card.property}
                  </code>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {card.description}
                  </p>
                </header>

                {card.values && card.values.length > 0 && (
                  <ul className="mb-3 space-y-1">
                    {card.values.map(v => (
                      <li key={v.value} className="flex items-baseline gap-2 text-xs">
                        <code className="shrink-0 rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {v.value}
                        </code>
                        {v.note && (
                          <span className="text-zinc-500 dark:text-zinc-500">{v.note}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="h-32 overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800">
                  <iframe
                    title={`Demo for ${card.property}`}
                    srcDoc={buildSrcDoc(card.demoHtml, card.demoCss)}
                    sandbox="allow-same-origin"
                    className="h-full w-full bg-white"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
