'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Tutorials', mode: 'tutorials' },
  { label: 'Reference', mode: 'reference' },
  { label: 'Challenges', mode: 'challenges' },
];

export default function TopicNav({ topic }: { topic: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Topic modes"
      className="flex gap-1 border-b border-zinc-200 py-2 dark:border-zinc-800"
    >
      {tabs.map(tab => {
        const href = `/${topic}/${tab.mode}`;
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={tab.mode}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
