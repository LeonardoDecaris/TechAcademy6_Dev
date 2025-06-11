import { test, expect } from '@playwright/test';

test('Home Page title', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/home');
    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    expect(title).toBeTruthy();
});

test('Navegar ate botao login', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/home');
    await page.click('text=Log in');
    await expect(page).toHaveURL('https://harmonicsound.com.br/login');
});













