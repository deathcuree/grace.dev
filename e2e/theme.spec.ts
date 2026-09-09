import { test, expect } from '@playwright/test';

test.describe('Theme toggle', () => {
	test('switches between light and dark and persists the choice', async ({ page }) => {
		await page.goto('/');
		const html = page.locator('html');
		await expect(html).toHaveAttribute('data-theme', 'light');

		await page.getByRole('button', { name: 'Toggle dark mode' }).click();
		await expect(html).toHaveAttribute('data-theme', 'dark');

		await page.reload();
		await expect(html).toHaveAttribute('data-theme', 'dark');
	});
});
