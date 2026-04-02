import TutorialsView from '@/components/TutorialsView';
import { layoutTutorials } from '@/data/layout';
import type { TutorialGroup } from '@/data/layout';

const tutorialsByTopic: Record<string, TutorialGroup[]> = {
  layout: layoutTutorials,
};

export default async function TutorialsPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const groups = tutorialsByTopic[topic] ?? [];
  return <TutorialsView groups={groups} />;
}
