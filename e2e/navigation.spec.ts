import { test, expect, type Page } from '@playwright/test';

// Playwright scrolls an element into view before clicking it, and for the sticky header that
// means jumping to the top of the page first. Dispatching the click mirrors a real user's click.
const clickNav = (page: Page, name: string) =>
	page.getByRole('navigation').getByRole('link', { name }).dispatchEvent('click');

test.describe('Navigation', () => {
	test('the "Work" nav item scrolls to the projects section and updates the URL', async ({ page }) => {
		await page.goto('/');
		await clickNav(page, 'Work');
		await expect(page).toHaveURL(/\/projects$/);
		await expect(page.locator('#project')).toBeInViewport();
	});

	test('the "About" nav item scrolls to the about section and updates the URL', async ({ page }) => {
		await page.goto('/');
		await clickNav(page, 'About');
		await expect(page).toHaveURL(/\/about$/);
		await expect(page.locator('#about')).toBeInViewport();
	});

	for (const [path, id] of [
		['/projects', 'project'],
		['/about', 'about'],
		['/contact', 'contact'],
	]) {
		test(`opening ${path} directly lands on the ${id} section`, async ({ page }) => {
			await page.goto(path);
			await expect(page.locator(`#${id}`)).toBeInViewport();
		});
	}

	test('opening / directly stays at the top of the page', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('heading', { level: 1, name: 'Grace Andaya' })).toBeInViewport();
	});

	test('the browser back button returns to the previous section', async ({ page }) => {
		await page.goto('/about');
		await clickNav(page, 'Contact');
		await expect(page).toHaveURL(/\/contact$/);
		await page.goBack();
		await expect(page).toHaveURL(/\/about$/);
		await expect(page.locator('#about')).toBeInViewport();
	});

	test('scrolling by hand updates the URL to the section in view', async ({ page }) => {
		await page.goto('/');
		await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
		await expect(page).toHaveURL(/\/about$/);
		await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
		await expect(page).toHaveURL(/\/contact$/);
		await page.evaluate(() => window.scrollTo(0, 0));
		await expect(page).toHaveURL(/\/$/);
		await expect(page.getByRole('heading', { level: 1, name: 'Grace Andaya' })).toBeInViewport();
	});

	test('scrolling does not add entries to the browser history', async ({ page }) => {
		await page.goto('/project/kid-reports');
		await page.getByRole('link', { name: 'Back to projects' }).click();
		await expect(page.locator('#project')).toBeInViewport();
		await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
		await expect(page).toHaveURL(/\/about$/);
		await page.goBack();
		await expect(page).toHaveURL(/\/project\/kid-reports$/);
	});

	test('moving between sections keeps the page state', async ({ page }) => {
		await page.goto('/contact');
		await page.getByPlaceholder('Your name').fill('Jordan Rivera');
		await clickNav(page, 'About');
		await expect(page).toHaveURL(/\/about$/);
		await expect(page.getByPlaceholder('Your name')).toHaveValue('Jordan Rivera');
	});

	test('opening a project navigates to its detail route', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('link', { name: /Kid Reports/ }).first().click();
		await expect(page).toHaveURL(/\/project\/kid-reports$/);
		await expect(page.getByRole('heading', { level: 1, name: 'Kid Reports' })).toBeVisible();
	});

	test('"Back to projects" returns to the projects section', async ({ page }) => {
		await page.goto('/project/she-time-tracker');
		await page.getByRole('link', { name: 'Back to projects' }).click();
		await expect(page).toHaveURL(/\/projects$/);
		await expect(page.locator('#project')).toBeInViewport();
	});

	test('the header stays visible while scrolling', async ({ page }) => {
		await page.goto('/');
		await clickNav(page, 'About');
		await expect(page.getByRole('link', { name: 'Grace Andaya' })).toBeVisible();
	});
});
