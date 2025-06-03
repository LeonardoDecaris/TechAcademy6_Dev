import { test, expect } from '@playwright/test';

test.describe('Testes de Autor', () => {
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
        await page.goto('http://localhost:5173/admin');
        await page.waitForTimeout(500);
        expect(page.url()).toBe('http://localhost:5173/admin');

    });

    test('Abrir aba Author', async ({ page }) => {
        await page.click('a:has(span:has-text("Adm Author"))');
        await expect(page).toHaveURL('http://localhost:5173/adminAuthor');
    });

    test('Criar author nulo', async ({ page }) => {
        await page.click('a:has(span:has-text("Adm Author"))');
        await expect(page).toHaveURL('http://localhost:5173/adminAuthor');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Erro ao realizar o registro.');
            await dialog.accept();
        });
        const createButton = page.locator('button:has-text("Create")');
        await createButton.scrollIntoViewIfNeeded();
        await createButton.click();

    });
    


    test('Criar author', async ({ page }) => {
        await page.click('a:has(span:has-text("Adm Author"))');
        await expect(page).toHaveURL('http://localhost:5173/adminAuthor');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Registro realizado com sucesso!');
            await dialog.accept();
        });

        await page.locator('input[placeholder="Name authors"]').fill('TESTE');
        const createButton = page.locator('button:has-text("Create")');
        await createButton.scrollIntoViewIfNeeded();
        await createButton.click();
    });


    test('Deletar author', async ({ page }) => {
        await page.click('a:has(span:has-text("Adm Author"))');
        await expect(page).toHaveURL('http://localhost:5173/adminAuthor');
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

    test('Atualizar author', async ({ page }) => {
        await page.click('a:has(span:has-text("Adm Author"))');
        await expect(page).toHaveURL('http://localhost:5173/adminAuthor');
        await page.waitForTimeout(500);

        await page.click('button#TESTE:has-text("Update")');
        const title = await page.getByText("Update Author Name");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.locator('input[placeholder="Author Name"]').fill('TESTE');
        const deleteButton = page.locator('button:has-text("Update")');
        await expect(deleteButton).toBeTruthy();
    });
});

test.describe('Testes de Categoria', () => {
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
        await page.goto('http://localhost:5173/admin');
        await page.waitForTimeout(500);
        expect(page.url()).toBe('http://localhost:5173/admin');

    });

    test('Abrir aba category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('http://localhost:5173/adminCategory');
    });

    test('Criar category nulo', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('http://localhost:5173/adminCategory');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Erro ao realizar o registro.');
            await dialog.accept();
        });
        const createButton = page.locator('button:has-text("Create")');
        await createButton.scrollIntoViewIfNeeded();
        await createButton.click();

    });
    


    test('Criar category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('http://localhost:5173/adminCategory');
        await page.waitForTimeout(500);
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Registro realizado com sucesso!');
            await dialog.accept();
        });

        await page.locator('input[placeholder="Name Category"]').fill('TESTE');
        const createButton = page.locator('button:has-text("Create")');
        await createButton.scrollIntoViewIfNeeded();
        await createButton.click();
    });


    test('Deletar category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('http://localhost:5173/adminCategory');
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

    test('Atualizar category', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd category"))');
        await expect(page).toHaveURL('http://localhost:5173/adminCategory');
        await page.waitForTimeout(500);

        await page.click('button#TESTE:has-text("Update")');
        const title = await page.getByText("Update Category Name");
        await page.waitForTimeout(200);
        expect(title).toBeTruthy();

        await page.locator('input[placeholder="Author Name"]').fill('TESTE');
        const deleteButton = page.locator('button:has-text("Update")');
        await expect(deleteButton).toBeTruthy();
    });
});

test.describe('Testes de ItemSound', () => {
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
        await page.goto('http://localhost:5173/admin');
        await page.waitForTimeout(500);
        expect(page.url()).toBe('http://localhost:5173/admin');

    });

    test('Abrir aba ItemSound', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('http://localhost:5173/buscarSound');
    });

    test('Tocar um som', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('http://localhost:5173/buscarSound');

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
        await expect(page).toHaveURL('http://localhost:5173/buscarSound');

        await page.click('a:has(span:has-text("Next"))');
        const page2 = page.locator('a[aria-current="page"]:has-text("2")');
        await expect(page2).toBeVisible();
    });

    test('Retroceder pagina', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('http://localhost:5173/buscarSound');

        await page.click('a:has(span:has-text("Next"))');
        const page2 = page.locator('a[aria-current="page"]:has-text("2")');
        await expect(page2).toBeVisible();
        await page.click('a:has(span:has-text("Previous"))');
        const page1 = page.locator('a[aria-current="page"]:has-text("1")');
        await expect(page1).toBeVisible();
    });

    test('Editar um som', async ({ page }) => {
        await page.click('a:has(span:has-text("Amd Sound"))');
        await expect(page).toHaveURL('http://localhost:5173/buscarSound');

        await page.locator('#search').fill('PLAYWRITE');
        await page.click('button:has(img[alt="Buscar"])');
        await page.waitForTimeout(2000);
        const title = await page.getByText("PLAYWRITE");
        await page.click('button:has(img[alt="Edit"])');
        expect(title).toBeTruthy();
        await page.waitForTimeout(2000);


    });





});
