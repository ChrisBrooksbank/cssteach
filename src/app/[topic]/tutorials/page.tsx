import TutorialsView from '@/components/TutorialsView';
import { layoutTutorials } from '@/data/layout';
import type { TutorialGroup } from '@/data/layout';
import { selectorsTutorials } from '@/data/selectors';
import { typographyTutorials } from '@/data/typography';
import { animationsTutorials } from '@/data/animations';

const tutorialsByTopic: Record<string, TutorialGroup[]> = {
  layout: layoutTutorials,
  selectors: selectorsTutorials,
  'typography-color': typographyTutorials,
  animations: animationsTutorials,
};

export default async function TutorialsPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const groups = tutorialsByTopic[topic] ?? [];
  return <TutorialsView groups={groups} />;
}
