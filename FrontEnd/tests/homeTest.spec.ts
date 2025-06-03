import { test, expect } from '@playwright/test';

test('Home Page title', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    expect(title).toBeTruthy();
});

test('Navegar ate botao login', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.click('text=Log in');
    await expect(page).toHaveURL('http://localhost:5173/login');
});













