import ReferenceView from '@/components/ReferenceView';
import { layoutReference } from '@/data/layout';
import type { ReferenceSection } from '@/data/layout';
import { selectorsReference } from '@/data/selectors';
import { typographyReference } from '@/data/typography';
import { animationsReference } from '@/data/animations';

const referenceByTopic: Record<string, ReferenceSection[]> = {
  layout: layoutReference,
  selectors: selectorsReference,
  typography: typographyReference,
  animations: animationsReference,
};

export default async function ReferencePage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const sections = referenceByTopic[topic] ?? [];
  return <ReferenceView sections={sections} />;
}
