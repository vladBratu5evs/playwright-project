import {test, expect} from '@playwright/test'

test('Open Google page', async ({ page }) => {
    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);

    await expect(page.getByRole('combobox', {name: 'Google Search'})).toBeVisible();

    console.log('Test was passed!');
})