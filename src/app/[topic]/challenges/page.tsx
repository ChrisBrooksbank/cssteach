import ChallengesView from '@/components/ChallengesView';

export default async function ChallengesPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  return <ChallengesView topic={topic} />;
}
