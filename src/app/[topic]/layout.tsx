import Link from 'next/link';
import TopicNav from '@/components/TopicNav';

const topicLabels: Record<string, string> = {
  layout: 'Layout',
  selectors: 'Selectors',
  'typography-color': 'Typography & Color',
  animations: 'Animations',
};

export function generateStaticParams() {
  return Object.keys(topicLabels).map(topic => ({ topic }));
}

export default async function TopicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const label = topicLabels[topic] ?? topic;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <header className="border-b border-zinc-200 px-4 py-4 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            ← All topics
          </Link>
          <h1 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">{label}</h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4">
        <TopicNav topic={topic} />
        <main className="py-8">{children}</main>
      </div>
    </div>
  );
}
