import TutorialsView from '@/components/TutorialsView';
import { layoutTutorials } from '@/data/layout';
import type { TutorialGroup } from '@/data/layout';
import { selectorsTutorials } from '@/data/selectors';

const tutorialsByTopic: Record<string, TutorialGroup[]> = {
  layout: layoutTutorials,
  selectors: selectorsTutorials,
};

export default async function TutorialsPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const groups = tutorialsByTopic[topic] ?? [];
  return <TutorialsView groups={groups} />;
}
