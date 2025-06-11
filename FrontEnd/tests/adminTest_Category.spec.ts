import { test, expect } from '@playwright/test';


test.describe.serial('Testes de Categoria', () => {
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


        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/adminCategory');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Registro realizado com sucesso!');
            await dialog.accept();
        });

        await page.locator('input[placeholder="Name Category"]').fill('TESTE');
        const createButton = page.locator('button:has-text("Create")');
        await createButton.scrollIntoViewIfNeeded();
        await createButton.click();

        await page.goto('https://harmonicsound.com.br/admin');
        await page.waitForTimeout(500);
        await page.waitForLoadState('load');
        expect(page.url()).toBe('https://harmonicsound.com.br/admin');
        await page.waitForLoadState('load');
    });

    test.afterEach(async ({ page }) => {
        await page.goto('https://harmonicsound.com.br/adminCategory');
        const authorExists = await page.locator('button#TESTE:has-text("Delete")').count();
        if (authorExists > 0) {
            await page.click('button#TESTE:has-text("Delete")');
            await page.click('button:has-text("Confirm")');
        }
    });

    test('Abrir aba category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/adminCategory');
    });

    test('Criar category nulo', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/adminCategory');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Erro ao realizar o registro.');
            await dialog.accept();
        });
        const createButton = page.locator('button:has-text("Create")');
        await createButton.scrollIntoViewIfNeeded();
        await createButton.click();

    });

    test('Atualizar category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/adminCategory');
        await page.waitForTimeout(500);

        await page.click('button#TESTE:has-text("Update")');
        const title = await page.getByText("Update Category Name");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.locator('input[placeholder="Name Category"]').fill('TESTE');
        const deleteButton = page.locator('button:has-text("Update")');
        await expect(deleteButton).toBeTruthy();
    });

    test('Deletar category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('https://harmonicsound.com.br/adminCategory');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Registro realizado com sucesso!');
            await dialog.accept();
        });

        await page.click('button#TESTE:has-text("Delete")'); 
        const title = await page.getByText("Confirm to delete author");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.click('button:has-text("Confirm")');
        const deleteButton = page.locator('button#TESTE:has-text("Delete")');
        await expect(deleteButton).toHaveCount(0);
    }); 


});




