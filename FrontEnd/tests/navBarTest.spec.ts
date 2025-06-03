import { test, expect } from '@playwright/test';

test.describe('Testes NavBar Autenticados', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/home');
        await page.click('text=Log in');
        await expect(page).toHaveURL('http://localhost:5173/login');
        await page.locator('#email').fill('playwriteteste1@gmail.com');
        await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');
        const loginButton = page.getByRole('button', { name: 'Login' });
        await loginButton.scrollIntoViewIfNeeded();
        await loginButton.click();
        await expect(page).toHaveURL("http://localhost:5173/home");
    });

    test('Fazer logout', async ({ page }) => {
        const title = await page.getByText("The Power of audioVisual Harmonic Sound");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.locator('#dropDownButton').click();
        await page.click('text=Log out');
        const confirmLogout = page.getByRole('button', { name: 'Confirm' });
        await confirmLogout.scrollIntoViewIfNeeded();
        await confirmLogout.click();
        await expect(page).toHaveURL("http://localhost:5173/home");
        await page.waitForTimeout(200);
    });

    test('Abrir configuracoes', async ({ page }) => {
        const title = await page.getByText("The Power of audioVisual Harmonic Sound");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.locator('#dropDownButton').click();
        await page.click('a:has-text("User Settings")');
        await expect(page).toHaveURL("http://localhost:5173/userSettings");
    });

    test('Abrir Admin', async ({ page }) => {
        const title = await page.getByText("The Power of audioVisual Harmonic Sound");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.locator('#dropDownButton').click();
        await page.click('a:has-text("Admin")');
        await expect(page).toHaveURL("http://localhost:5173/admin");
    });
});

test('Navegar ate botao login', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.click('text=Log in');
    await expect(page).toHaveURL('http://localhost:5173/login');

    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    await expect(page).toHaveURL("http://localhost:5173/home");
    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    await page.waitForTimeout(500);
    expect(title).toBeTruthy();
});

test('Botao Home', async ({ page }) => {
    await page.goto('http://localhost:5173/contact');
    await page.locator('#home').click();
    await expect(page).toHaveURL('http://localhost:5173/home');
});

test('Logo para Home', async ({ page }) => {
    await page.goto('http://localhost:5173/contact');
    await page.click('a:has(img[alt="Harmonic Sound"])');
    await expect(page).toHaveURL('http://localhost:5173/home');
});

test('Botao GitHub', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.locator('#github').click();
    await expect(page).toHaveURL('https://github.com/lucas-pedrozo/TechAcademy5');
});

test('Botao Sounds', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.locator('#sound').click();
    await expect(page).toHaveURL('http://localhost:5173/sound');
});

test('Botao Contact', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.locator('#contact').click();
    await expect(page).toHaveURL('http://localhost:5173/contact');
});

test('Botao Developers', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.locator('#about').click();
    await expect(page).toHaveURL('http://localhost:5173/about');
});
