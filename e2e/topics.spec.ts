import { test, expect } from '@playwright/test';

const topics = [
  {
    slug: 'layout',
    label: 'Layout',
    firstTutorialGroup: 'Flexbox',
    firstChallengeTitle: 'Center an Element',
    firstChallengeAriaLabel: 'CSS editor for Center an Element',
    passingCss: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  background: #f4f4f5;
  border-radius: 8px;
}
.box {
  width: 80px;
  height: 80px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`,
  },
  {
    slug: 'selectors',
    label: 'Selectors',
    firstTutorialGroup: 'Basic Selectors',
    firstChallengeTitle: 'Style Direct Children Only',
  },
  {
    slug: 'typography-color',
    label: 'Typography & Color',
    firstTutorialGroup: 'Font Properties',
    firstChallengeTitle: 'Match the Typography',
  },
  {
    slug: 'animations',
    label: 'Animations',
    firstTutorialGroup: 'Transitions',
    firstChallengeTitle: 'Build a Hover Effect',
  },
];

for (const topic of topics) {
  test.describe(`${topic.label} module`, () => {
    test('topic page loads with correct header', async ({ page }) => {
      await page.goto(`/${topic.slug}`);
      await page.waitForLoadState('networkidle');

      await expect(page.getByRole('heading', { name: topic.label, level: 1 })).toBeVisible();
      await expect(page.getByRole('navigation', { name: 'Topic modes' })).toBeVisible();
    });

    test('tutorials tab loads content', async ({ page }) => {
      await page.goto(`/${topic.slug}/tutorials`);
      await page.waitForLoadState('networkidle');

      const tutorialsLink = page.getByRole('link', { name: 'Tutorials' });
      await expect(tutorialsLink).toHaveAttribute('aria-current', 'page');

      await expect(page.getByRole('heading', { name: topic.firstTutorialGroup })).toBeVisible();

      const cssEditor = page.getByLabel('CSS editor').first();
      await expect(cssEditor).toBeVisible();
    });

    test('reference tab loads content', async ({ page }) => {
      await page.goto(`/${topic.slug}/reference`);
      await page.waitForLoadState('networkidle');

      const referenceLink = page.getByRole('link', { name: 'Reference' });
      await expect(referenceLink).toHaveAttribute('aria-current', 'page');

      const main = page.getByRole('main');
      await expect(main).not.toBeEmpty();

      const headings = main.getByRole('heading');
      await expect(headings.first()).toBeVisible();
    });

    test('challenges tab loads content', async ({ page }) => {
      await page.goto(`/${topic.slug}/challenges`);
      await page.waitForLoadState('networkidle');

      const challengesLink = page.getByRole('link', { name: 'Challenges' });
      await expect(challengesLink).toHaveAttribute('aria-current', 'page');

      await expect(page.getByRole('heading', { name: topic.firstChallengeTitle })).toBeVisible();

      const checksHeading = page.getByText('Checks').first();
      await expect(checksHeading).toBeVisible();
    });

    test('tab navigation works from topic root', async ({ page }) => {
      await page.goto(`/${topic.slug}`);
      await page.waitForLoadState('networkidle');

      await page.getByRole('link', { name: 'Tutorials' }).click();
      await expect(page).toHaveURL(`/${topic.slug}/tutorials`);

      await page.getByRole('link', { name: 'Reference' }).click();
      await expect(page).toHaveURL(`/${topic.slug}/reference`);

      await page.getByRole('link', { name: 'Challenges' }).click();
      await expect(page).toHaveURL(`/${topic.slug}/challenges`);
    });

    test('back link returns to homepage', async ({ page }) => {
      await page.goto(`/${topic.slug}`);
      await page.waitForLoadState('networkidle');

      await page.getByRole('link', { name: '← All topics' }).click();
      await expect(page).toHaveURL('/');
    });
  });
}

test.describe('Layout challenge interaction', () => {
  test('typing valid CSS passes all checks', async ({ page }) => {
    await page.goto('/layout/challenges');
    await page.waitForLoadState('networkidle');

    const layoutTopic = topics.find(t => t.slug === 'layout')!;
    const textarea = page.getByLabel(layoutTopic.firstChallengeAriaLabel!);
    await expect(textarea).toBeVisible();

    await textarea.fill(layoutTopic.passingCss!);

    await expect(page.getByRole('status', { name: /All checks passed/i })).toBeVisible();
  });

  test('checks update as CSS is edited', async ({ page }) => {
    await page.goto('/layout/challenges');
    await page.waitForLoadState('networkidle');

    const layoutTopic = topics.find(t => t.slug === 'layout')!;
    const textarea = page.getByLabel(layoutTopic.firstChallengeAriaLabel!);

    const displayFlexCheck = page.getByText('Container uses display: flex').first();
    await expect(displayFlexCheck).toBeVisible();

    const initialCss = await textarea.inputValue();
    expect(initialCss).not.toContain('display: flex');

    await textarea.fill('.container { display: flex; height: 160px; }');

    const passedItem = page
      .locator('li')
      .filter({ hasText: 'Container uses display: flex' })
      .first();
    await expect(passedItem).toContainText('✓');
  });
});
