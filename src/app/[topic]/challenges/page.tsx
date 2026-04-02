import ChallengesView from '@/components/ChallengesView';
import { layoutChallenges } from '@/data/layout';
import type { Challenge } from '@/data/layout';
import { selectorsChallenges } from '@/data/selectors';
import { typographyChallenges } from '@/data/typography';

const challengesByTopic: Record<string, Challenge[]> = {
  layout: layoutChallenges,
  selectors: selectorsChallenges,
  typography: typographyChallenges,
};

export default async function ChallengesPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const challenges = challengesByTopic[topic] ?? [];
  return <ChallengesView challenges={challenges} />;
}
