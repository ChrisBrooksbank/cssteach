import ReferenceView from '@/components/ReferenceView';
import { layoutReference } from '@/data/layout';
import type { ReferenceSection } from '@/data/layout';

const referenceByTopic: Record<string, ReferenceSection[]> = {
  layout: layoutReference,
};

export default async function ReferencePage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const sections = referenceByTopic[topic] ?? [];
  return <ReferenceView sections={sections} />;
}
