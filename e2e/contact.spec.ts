import { test, expect } from '@playwright/test';

test.describe('Contact form', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await page.locator('#contact').scrollIntoViewIfNeeded();
	});

	test('shows validation errors when submitted empty', async ({ page }) => {
		await page.getByRole('button', { name: 'Send message' }).click();

		await expect(page.getByText('Name is required')).toBeVisible();
		await expect(page.getByText('Email is required')).toBeVisible();
		await expect(page.getByText('Message is required')).toBeVisible();
	});

	test('validates email format and minimum message length', async ({ page }) => {
		await page.getByPlaceholder('Your name').fill('Jo');
		await page.getByPlaceholder('Your email').fill('not-an-email');
		await page.getByPlaceholder('Your message').fill('short');
		await page.getByRole('button', { name: 'Send message' }).click();

		await expect(page.getByText('Invalid email address')).toBeVisible();
		await expect(
			page.getByText('Your message must be at least 10 characters long.'),
		).toBeVisible();
	});

	test('submits a valid message and shows confirmation', async ({ page }) => {
		// Stub the EmailJS API so the test never sends a real email.
		await page.route('https://api.emailjs.com/**', (route) =>
			route.fulfill({ status: 200, contentType: 'text/plain', body: 'OK' }),
		);

		await page.getByPlaceholder('Your name').fill('Jordan Rivera');
		await page.getByPlaceholder('Your email').fill('jordan@example.com');
		await page
			.getByPlaceholder('Your message')
			.fill('I would like to talk about a full-stack project.');
		await page.getByRole('button', { name: 'Send message' }).click();

		await expect(page.getByText('Your message has been sent!')).toBeVisible();
		await expect(page.getByText('Looking forward to talking with you!')).toBeVisible();
	});

	test('surfaces an error toast when the API call fails', async ({ page }) => {
		await page.route('https://api.emailjs.com/**', (route) =>
			route.fulfill({ status: 500, contentType: 'text/plain', body: 'Internal Server Error' }),
		);

		await page.getByPlaceholder('Your name').fill('Jordan Rivera');
		await page.getByPlaceholder('Your email').fill('jordan@example.com');
		await page
			.getByPlaceholder('Your message')
			.fill('I would like to talk about a full-stack project.');
		await page.getByRole('button', { name: 'Send message' }).click();

		await expect(page.getByText('Failed to send message. Please try again.')).toBeVisible();
	});
});
