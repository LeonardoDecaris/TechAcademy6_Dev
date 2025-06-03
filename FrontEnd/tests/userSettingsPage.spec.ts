import { test, expect } from '@playwright/test';

test.describe('Abrir UserSettings Autenticado', () => {
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
        const title = await page.getByText("The Power of audioVisual Harmonic Sound");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();
    });

    test('Fazer logout', async ({ page }) => {
        await page.goto('http://localhost:5173/userSettings');
        const logoutButton = page.locator('button:has-text("LogOut")');
        await logoutButton.scrollIntoViewIfNeeded();
        await logoutButton.click();

        const confirmLogout = page.getByRole('button', { name: 'Confirm' });
        await page.waitForTimeout(200);
        await confirmLogout.scrollIntoViewIfNeeded();
        await confirmLogout.click();
        await expect(page).toHaveURL("http://localhost:5173/home");
    });

    test('Trocar nome de usuario', async ({ page }) => {
        await page.goto('http://localhost:5173/userSettings');
        await page.locator('#name').fill('Playwrite Testes');
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Update completed successfully!');
            await dialog.accept();
        });
        const updateButton = page.locator('button:has-text("Update")');
        await updateButton.scrollIntoViewIfNeeded();
        await updateButton.click();
        await page.waitForTimeout(500);
    });

    test('Trocar nome de usuario passando nulo', async ({ page }) => {
        await page.goto('http://localhost:5173/userSettings');
        await page.locator('#name').fill('');
        const updateButton = page.locator('button:has-text("Update")');
        await updateButton.scrollIntoViewIfNeeded();
        await updateButton.click();
        const error = await page.getByText("Name is mandatory");
        await page.waitForTimeout(200);
        expect(error).toBeTruthy();
    });


    test('Trocar senha', async ({ page }) => {
        await page.goto('http://localhost:5173/userSettings');
        const logoutButton = page.locator('button:has-text("New password")');
        await logoutButton.scrollIntoViewIfNeeded();
        await logoutButton.click();
        await expect(page).toHaveURL("http://localhost:5173/newPassword");

        await page.locator('input[placeholder="Password"]').fill('MH4q8Da3JXp2Hye#$');
        await page.locator('input[placeholder="Confirm Password"]').fill('MH4q8Da3JXp2Hye#$');
        const confirmLogout = page.getByRole('button', { name: 'New Pass' });
        await confirmLogout.scrollIntoViewIfNeeded();
        await confirmLogout.click();
        await expect(page).toHaveURL("http://localhost:5173/login");
    });

    test('Trocar senha passando nula', async ({ page }) => {
        await page.goto('http://localhost:5173/userSettings');
        const logoutButton = page.locator('button:has-text("New password")');
        await logoutButton.scrollIntoViewIfNeeded();
        await logoutButton.click();
        await expect(page).toHaveURL("http://localhost:5173/newPassword");

        await page.locator('input[placeholder="Password"]').fill('MH4q8Da3JXp2Hye#$');
        await page.locator('input[placeholder="Confirm Password"]').fill('MH4q8Da3JXp2Hye#$');
        const confirmLogout = page.getByRole('button', { name: 'New Pass' });
        await confirmLogout.scrollIntoViewIfNeeded();
        await confirmLogout.click();

        const error = await page.getByText("Confirm password is mandatory");
        await page.waitForTimeout(200);
        expect(error).toBeTruthy();

    });
});
