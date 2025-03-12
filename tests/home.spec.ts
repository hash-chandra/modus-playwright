import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.moduscreate.com');
});

test.describe('Home page', () => {
  test('should have the correct title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Modus Create | Digital Product Engineering Partner');
  });

  test('should have the correct header', async ({ page }) => {
    const header = await page.textContent('h1');
    expect(header?.trim()).toBe('World-Class Product Engineering Partner');
  });
});