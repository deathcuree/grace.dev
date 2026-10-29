import { test, expect } from '@playwright/test';

test.describe('Projects', () => {
	test('lists multiple projects on the home page', async ({ page }) => {
		await page.goto('/');
		const projectLinks = page.locator('#project a[href^="/project/"]');
		expect(await projectLinks.count()).toBeGreaterThan(3);
	});

	test('project detail shows overview, technologies and features', async ({ page }) => {
		await page.goto('/project/she-time-tracker');

		await expect(page.getByRole('heading', { level: 1, name: 'SHE Time Tracker' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Overview' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Technologies' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Key features' })).toBeVisible();
		await expect(page.getByText('Break-aware hours, with breaks and next-day shifts editable on each entry')).toBeVisible();
	});

	test('a live project links out to its site in a new tab', async ({ page }) => {
		await page.goto('/project/she-time-tracker');
		const live = page.getByRole('link', { name: 'View live site' });
		await expect(live).toHaveAttribute('href', 'https://time-tracker-delta-ashen.vercel.app/');
		await expect(live).toHaveAttribute('target', '_blank');
		await expect(live).toHaveAttribute('rel', /noopener/);
	});

	test('the compliance billing portal links out to its live site in a new tab', async ({ page }) => {
		await page.goto('/project/compliance-billing-portal');
		const live = page.getByRole('link', { name: 'View live site' });
		await expect(live).toHaveAttribute('href', 'https://portal.enviromerica.com/Login.aspx?ReturnUrl=%2f');
		await expect(live).toHaveAttribute('target', '_blank');
		await expect(live).toHaveAttribute('rel', /noopener/);
	});

	test('the compliance training funnel detail page shows its features', async ({ page }) => {
		await page.goto('/project/compliance-training-funnel');
		await expect(page.getByRole('heading', { level: 1, name: 'Compliance Training Funnel' })).toBeVisible();
		await expect(page.getByText('Lessons, quizzes, and certification flow')).toBeVisible();
	});

	test('the home page lists both compliance projects', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('#project');
		await expect(section.locator('a[href="/project/compliance-training-funnel"]')).toBeVisible();
		await expect(section.locator('a[href="/project/compliance-billing-portal"]')).toBeVisible();
		await expect(section.getByText(/Fourteen projects/)).toBeVisible();
	});

	test('clicking a project screenshot opens a gallery that steps through its screenshots', async ({ page }) => {
		await page.goto('/project/lead-finder');
		await page.getByRole('button', { name: 'View Lead Finder screenshots' }).click();

		const dialog = page.getByRole('dialog', { name: 'Screenshots' });
		await expect(dialog).toBeVisible();
		await expect(dialog.getByText('1 / 2')).toBeVisible();
		await expect(dialog.getByText(/drafted pitch ready to copy/)).toBeVisible();

		await dialog.getByRole('button', { name: 'Next screenshot' }).click();
		await expect(dialog.getByText('2 / 2')).toBeVisible();
		await expect(dialog.getByText(/same-company check/)).toBeVisible();

		await page.keyboard.press('ArrowRight');
		await expect(dialog.getByText('1 / 2')).toBeVisible();

		await page.keyboard.press('Escape');
		await expect(dialog).toHaveCount(0);
	});

	test('a gallery thumbnail opens the modal at that screenshot', async ({ page }) => {
		await page.goto('/project/lead-finder');
		await page.getByRole('button', { name: 'Open screenshot 2' }).click();
		const dialog = page.getByRole('dialog', { name: 'Screenshots' });
		await expect(dialog.getByText('2 / 2')).toBeVisible();
		await dialog.getByRole('button', { name: 'Close' }).click();
		await expect(dialog).toHaveCount(0);
	});

	test('a project with one screenshot opens it in the modal without arrows', async ({ page }) => {
		await page.goto('/project/hunt-myself');
		await page.getByRole('button', { name: 'View Hunt Myself screenshots' }).click();
		const dialog = page.getByRole('dialog', { name: 'Screenshots' });
		await expect(dialog.getByText('1 / 1')).toBeVisible();
		await expect(dialog.getByRole('button', { name: 'Next screenshot' })).toHaveCount(0);
	});

	test('an unknown project id shows a not-found message', async ({ page }) => {
		await page.goto('/project/this-project-does-not-exist');
		await expect(page.getByText('Project not found.')).toBeVisible();
	});

	test('every project card on the home page opens a valid detail page', async ({ page }) => {
		await page.goto('/');
		const hrefs = await page.locator('#project a[href^="/project/"]').evaluateAll((els) =>
			els.map((el) => (el as HTMLAnchorElement).getAttribute('href') ?? ''),
		);
		const unique = [...new Set(hrefs)];
		expect(unique.length).toBeGreaterThan(0);

		for (const href of unique) {
			await page.goto(href);
			await expect(page.getByText('Project not found.')).toHaveCount(0);
			await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
		}
	});
});
