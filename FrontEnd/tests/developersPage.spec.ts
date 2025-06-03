import { test, expect } from '@playwright/test';

test.describe('Testes DevelopersPage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/home');
        await page.locator('#about').click();
        await expect(page).toHaveURL('http://localhost:5173/about');
    });

    test('Developer 1', async ({ page }) => {
        const title = await page.getByText("Lucas Pedrozo");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();
    });

    test('Developer 2', async ({ page }) => {
        const title = await page.getByText("Leonardo Nunes");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();
    });

    test('Developer 1 Github', async ({ page }) => {
        const title = await page.getByText("Lucas Pedrozo");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();
        await page.click('a:has(img[alt="GitHub_Lucas"])');
        await expect(page).toHaveURL('https://github.com/lucas-pedrozo');
    });
    
    test('Developer 2 Github', async ({ page }) => {
        const title = await page.getByText("Leonardo Nunes");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();
        await page.click('a:has(img[alt="GitHub_Leonardo"])');
        await expect(page).toHaveURL('https://github.com/LeonardoDecaris');
    });
});