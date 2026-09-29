import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
	test('the "Work" nav item scrolls to the projects section', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Work' }).click();
		await expect(page.locator('#project')).toBeInViewport();
	});

	test('the "About" nav item scrolls to the about section', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'About' }).click();
		await expect(page.locator('#about')).toBeInViewport();
	});

	test('opening a project navigates to its detail route', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('link', { name: /Kid Reports/ }).first().click();
		await expect(page).toHaveURL(/\/project\/kid-reports$/);
		await expect(page.getByRole('heading', { level: 1, name: 'Kid Reports' })).toBeVisible();
	});

	test('"Back to projects" returns to the home page', async ({ page }) => {
		await page.goto('/project/she-time-tracker');
		await page.getByRole('button', { name: 'Back to projects' }).click();
		await expect(page).toHaveURL(/\/$/);
		await expect(page.locator('#project')).toBeInViewport();
	});

	test('the header stays visible while scrolling', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'About' }).click();
		await expect(page.getByRole('button', { name: 'Grace Andaya' })).toBeVisible();
	});
});
