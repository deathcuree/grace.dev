import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('renders the hero with name and role', async ({ page }) => {
		await expect(page).toHaveTitle(/Grace Andaya/);
		await expect(page.getByRole('heading', { level: 1, name: 'Grace Andaya' })).toBeVisible();
		await expect(page.getByText('Full Stack Engineer', { exact: true })).toBeVisible();
	});

	test('shows the hero stats', async ({ page }) => {
		const home = page.locator('#home');
		await expect(home.getByText('Products shipped')).toBeVisible();
		await expect(home.getByText('Years experience')).toBeVisible();
		await expect(home.getByText('Information Technology')).toBeVisible();
	});

	test('renders every main section', async ({ page }) => {
		for (const id of ['home', 'project', 'about', 'contact']) {
			await expect(page.locator(`#${id}`)).toBeAttached();
		}
	});

	test('résumé link points to the PDF and is a download', async ({ page }) => {
		const link = page.getByRole('link', { name: 'Download résumé' });
		await expect(link).toHaveAttribute('download', 'Andaya_SoftwareEngineer.pdf');
		await expect(link).toHaveAttribute('href', /\.pdf$/);
	});
});
