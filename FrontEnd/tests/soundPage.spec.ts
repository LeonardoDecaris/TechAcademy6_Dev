import { test, expect } from '@playwright/test';

test.describe('Testes SoundPage Autenticados', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://harmonicsound.com.br/home');
        await page.click('text=Log in');
        await expect(page).toHaveURL('https://harmonicsound.com.br/login');
        await page.locator('#email').fill('Aplaywriteteste1@gmail.com');
        await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');
        const loginButton = page.getByRole('button', { name: 'Login' });
        await loginButton.scrollIntoViewIfNeeded();
        await loginButton.click();
        await page.waitForTimeout(200);
        await page.goto('https://harmonicsound.com.br/sound');
    });

    test('Busca por um som', async ({ page }) => {
        await page.locator('#search').fill('APLAYWRITE');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title = await page.getByText("APLAYWRITE");
        expect(title).toBeTruthy();
    });

    test('Busca por um som inexistente', async ({ page }) => {
        await page.locator('#search').fill('000000000000');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title2 = await page.getByText("Nenhum resultado encontrado");
        expect(title2).toBeTruthy();
    });

    test('Tocar um som', async ({ page }) => {
        await page.locator('#search').fill('APLAYWRITE');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title = await page.getByText("APLAYWRITE");
        await page.click('button:has(img[alt="APLAYWRITE"])');
        expect(title).toBeTruthy();
        await page.waitForTimeout(2000);

        const spanText = (await page.locator('#currentTime').textContent())?.trim();
        if (spanText !== "00:00") {
            expect(spanText).not.toBe("00:00");
            await page.locator('#currentTime').click();
        }
    });

    test('Baixar um som', async ({ page }) => {
        await page.locator('#search').fill('APLAYWRITE');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title = await page.getByText("APLAYWRITE");
        expect(title).toBeTruthy();

        const [ download ] = await Promise.all([
            page.waitForEvent('download'),
            page.click('button:has(img[alt="Download"])')
        ]);
        const path = await download.path();
        expect(path).toBeTruthy();
    });

    test('Avancar pagina', async ({ page }) => {
        await page.click('a:has(span:has-text("Next"))');
        const page2 = page.locator('a[aria-current="page"]:has-text("2")');
        await expect(page2).toBeVisible();
    });

    test('Retroceder pagina', async ({ page }) => {
        await page.click('a:has(span:has-text("Next"))');
        const page2 = page.locator('a[aria-current="page"]:has-text("2")');
        await expect(page2).toBeVisible();
        await page.click('a:has(span:has-text("Previous"))');
        const page1 = page.locator('a[aria-current="page"]:has-text("1")');
        await expect(page1).toBeVisible();
    });
});

