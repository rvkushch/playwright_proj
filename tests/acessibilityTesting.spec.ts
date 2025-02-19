import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// there are a lot of issues on google homepage so this test is marked with 'fail' annotation
test.fail('should not have any automatically detectable accessibility issues', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
