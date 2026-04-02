'use client';

import { useState } from 'react';
import type { Challenge } from '@/data/layout';

function buildSrcDoc(html: string, css: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 12px; font-family: sans-serif; }
</style>
<style>${css}</style>
</head>
<body>${html}</body>
</html>`;
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const [css, setCss] = useState(challenge.startingCss);

  const allPassed = challenge.checks.every(c => c.test(css));

  return (
    <article className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <header>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{challenge.title}</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{challenge.description}</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Target
          </span>
          <div className="h-48 overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800">
            <iframe
              title={`Target for ${challenge.title}`}
              srcDoc={buildSrcDoc(challenge.targetHtml, challenge.targetCss)}
              sandbox="allow-same-origin"
              className="h-full w-full bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Your Preview
          </span>
          <div className="h-48 overflow-hidden rounded-lg border border-zinc-100 dark:border-zinc-800">
            <iframe
              title={`Preview for ${challenge.title}`}
              srcDoc={buildSrcDoc(challenge.startingHtml, css)}
              sandbox="allow-same-origin"
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor={`css-${challenge.id}`}
          className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400"
        >
          CSS
        </label>
        <textarea
          id={`css-${challenge.id}`}
          aria-label={`CSS editor for ${challenge.title}`}
          value={css}
          onChange={e => setCss(e.target.value)}
          spellCheck={false}
          rows={10}
          className="resize-none rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-sm text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-500"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          Checks
        </p>
        <ul className="space-y-1">
          {challenge.checks.map(check => {
            const passed = check.test(css);
            return (
              <li
                key={check.label}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                  passed
                    ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-zinc-50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                }`}
              >
                <span aria-hidden="true">{passed ? '✓' : '○'}</span>
                {check.label}
              </li>
            );
          })}
        </ul>
        {allPassed && (
          <p
            role="status"
            className="rounded-md bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
          >
            All checks passed!
          </p>
        )}
      </div>
    </article>
  );
}

interface ChallengesViewProps {
  challenges: Challenge[];
}

export default function ChallengesView({ challenges }: ChallengesViewProps) {
  if (challenges.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400">No challenges available yet.</p>;
  }

  return (
    <div className="space-y-8">
      {challenges.map(challenge => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
}
