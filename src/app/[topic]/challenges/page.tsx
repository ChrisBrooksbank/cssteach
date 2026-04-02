import ChallengesView from '@/components/ChallengesView';
import { layoutChallenges } from '@/data/layout';
import type { Challenge } from '@/data/layout';

const challengesByTopic: Record<string, Challenge[]> = {
  layout: layoutChallenges,
};

export default async function ChallengesPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const challenges = challengesByTopic[topic] ?? [];
  return <ChallengesView challenges={challenges} />;
}
