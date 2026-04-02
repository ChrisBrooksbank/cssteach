import ReferenceView from '@/components/ReferenceView';
import { layoutReference } from '@/data/layout';
import type { ReferenceSection } from '@/data/layout';
import { selectorsReference } from '@/data/selectors';
import { typographyReference } from '@/data/typography';

const referenceByTopic: Record<string, ReferenceSection[]> = {
  layout: layoutReference,
  selectors: selectorsReference,
  typography: typographyReference,
};

export default async function ReferencePage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const sections = referenceByTopic[topic] ?? [];
  return <ReferenceView sections={sections} />;
}
