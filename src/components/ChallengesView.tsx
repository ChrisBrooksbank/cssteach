'use client';

import { useState, useCallback } from 'react';
import type { Challenge } from '@/data/layout';
import { layoutChallenges } from '@/data/layout';
import { selectorsChallenges } from '@/data/selectors';
import { typographyChallenges } from '@/data/typography';
import { animationsChallenges } from '@/data/animations';
import { buildSrcDoc } from '@/lib/buildSrcDoc';
import { markCompleted, getCompletedIds } from '@/lib/progress';
import CodeEditor from '@/components/CodeEditor';

const difficultyConfig = {
  beginner: {
    label: 'Beginner',
    className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  },
  advanced: {
    label: 'Advanced',
    className: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300',
  },
} as const;

const challengesByTopic: Record<string, Challenge[]> = {
  layout: layoutChallenges,
  selectors: selectorsChallenges,
  'typography-color': typographyChallenges,
  animations: animationsChallenges,
};

function ChallengeCard({
  challenge,
  completed: initialCompleted,
  onComplete,
}: {
  challenge: Challenge;
  completed: boolean;
  onComplete: (id: string) => void;
}) {
  const [css, setCss] = useState(challenge.startingCss);
  const [shownHints, setShownHints] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(initialCompleted);

  const allPassed = challenge.checks.every(c => c.test(css));

  const handleCssChange = useCallback(
    (newCss: string) => {
      setCss(newCss);
      if (!done && challenge.checks.every(c => c.test(newCss))) {
        markCompleted(challenge.id);
        setDone(true);
        onComplete(challenge.id);
      }
    },
    [done, challenge.checks, challenge.id, onComplete]
  );

  const handleReset = useCallback(() => {
    setCss(challenge.startingCss);
  }, [challenge.startingCss]);

  return (
    <article className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-card dark:border-zinc-800 dark:bg-zinc-900 dark:ring-1 dark:ring-white/5">
      <header className="flex items-start justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {challenge.title}
            </h3>
            {challenge.difficulty && (
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${difficultyConfig[challenge.difficulty].className}`}
              >
                {difficultyConfig[challenge.difficulty].label}
              </span>
            )}
            {(initialCompleted || allPassed) && (
              <span
                className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                title="Completed"
              >
                ✓ Done
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{challenge.description}</p>
        </div>
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
        <div className="flex items-center justify-between">
          <label
            htmlFor={`css-${challenge.id}`}
            className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400"
          >
            CSS
          </label>
          <button
            type="button"
            onClick={handleReset}
            className="rounded px-2 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          >
            Reset
          </button>
        </div>
        <CodeEditor
          id={`css-${challenge.id}`}
          ariaLabel={`CSS editor for ${challenge.title}`}
          value={css}
          onChange={handleCssChange}
          rows={10}
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
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                  passed
                    ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-zinc-50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                }`}
              >
                <span aria-hidden="true" className={passed ? 'animate-check-mark' : ''}>
                  {passed ? '✓' : '○'}
                </span>
                <span className="flex-1">{check.label}</span>
                {!passed && check.hint && !shownHints.has(check.label) && (
                  <button
                    type="button"
                    onClick={() => setShownHints(prev => new Set([...prev, check.label]))}
                    className="shrink-0 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    Hint
                  </button>
                )}
                {!passed && check.hint && shownHints.has(check.label) && (
                  <span className="shrink-0 text-xs italic text-zinc-500 dark:text-zinc-400">
                    {check.hint}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        {allPassed && (
          <p
            role="status"
            className="animate-success-pop rounded-md bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
          >
            🎉 All checks passed!
          </p>
        )}
      </div>
    </article>
  );
}

interface ChallengesViewProps {
  topic: string;
}

export default function ChallengesView({ topic }: ChallengesViewProps) {
  const challenges = challengesByTopic[topic] ?? [];
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => getCompletedIds());

  const handleComplete = useCallback((id: string) => {
    setCompletedIds(prev => new Set([...prev, id]));
  }, []);

  if (challenges.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400">No challenges available yet.</p>;
  }

  const completedCount = challenges.filter(c => completedIds.has(c.id)).length;

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {completedCount} of {challenges.length} completed
          </span>
          {completedCount === challenges.length && (
            <span className="text-emerald-600 dark:text-emerald-400">All done!</span>
          )}
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${(completedCount / challenges.length) * 100}%` }}
          />
        </div>
      </div>

      {challenges.map((challenge, i) => (
        <div
          key={challenge.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <ChallengeCard
            challenge={challenge}
            completed={completedIds.has(challenge.id)}
            onComplete={handleComplete}
          />
        </div>
      ))}
    </div>
  );
}
