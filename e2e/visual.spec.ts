import { test, expect } from '@playwright/test';

const topics = ['layout', 'selectors', 'typography-color', 'animations'];

test.describe('Visual regression', () => {
  test('homepage matches screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  for (const topic of topics) {
    test(`${topic} topic page matches screenshot`, async ({ page }) => {
      await page.goto(`/${topic}`);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`${topic}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test(`${topic} tutorials page matches screenshot`, async ({ page }) => {
      await page.goto(`/${topic}/tutorials`);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`${topic}-tutorials.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test(`${topic} reference page matches screenshot`, async ({ page }) => {
      await page.goto(`/${topic}/reference`);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`${topic}-reference.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test(`${topic} challenges page matches screenshot`, async ({ page }) => {
      await page.goto(`/${topic}/challenges`);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`${topic}-challenges.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });
  }
});
