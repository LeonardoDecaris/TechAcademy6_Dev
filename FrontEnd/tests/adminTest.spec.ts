import { test, expect } from '@playwright/test';

test.describe.serial('Testes de ItemSound', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://harmonicsound.com.br/home');
        await page.click('text=Log in');
        await expect(page).toHaveURL('https://harmonicsound.com.br/login');
        await page.locator('#email').fill('playwriteteste1@gmail.com');
        await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');
        const loginButton = page.getByRole('button', { name: 'Login' });
        await loginButton.scrollIntoViewIfNeeded();
        await loginButton.click();
        await expect(page).toHaveURL("https://harmonicsound.com.br/home");
        const title = await page.getByText("The Power of audioVisual Harmonic Sound");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();
        await page.goto('https://harmonicsound.com.br/admin');
        await page.waitForTimeout(500);
        expect(page.url()).toBe('https://harmonicsound.com.br/admin');

        await page.goto('https://harmonicsound.com.br/admin');
        await page.waitForTimeout(500);
        expect(page.url()).toBe('https://harmonicsound.com.br/admin');
    });

    test('Abrir aba ItemSound', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');
    });

    test('Tocar um som', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');

        await page.locator('#search').fill('PLAYWRITE');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title = await page.getByText("PLAYWRITE");
        await page.click('button:has(img[alt="PLAYWRITE"])');
        expect(title).toBeTruthy();
        await page.waitForTimeout(2000);

        const spanText = (await page.locator('#currentTime').textContent())?.trim();
        if (spanText !== "00:00") {
            expect(spanText).not.toBe("00:00");
            await page.locator('#currentTime').click();
        }
    });

    test('Avancar pagina', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');

        await page.click('a:has(span:has-text("Next"))');
        const page2 = page.locator('a[aria-current="page"]:has-text("2")');
        await expect(page2).toBeVisible();
    });

    test('Retroceder pagina', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');

        await page.click('a:has(span:has-text("Next"))');
        const page2 = page.locator('a[aria-current="page"]:has-text("2")');
        await expect(page2).toBeVisible();
        await page.click('a:has(span:has-text("Previous"))');
        const page1 = page.locator('a[aria-current="page"]:has-text("1")');
        await expect(page1).toBeVisible();
    });

    test('Editar um som', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');

        await page.locator('#search').fill('PLAYWRITE');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title = await page.getByText("PLAYWRITE");
        await page.click('button:has(img[alt="Edit"])');
        expect(title).toBeTruthy();
        await page.waitForTimeout(2000);


    });





});




