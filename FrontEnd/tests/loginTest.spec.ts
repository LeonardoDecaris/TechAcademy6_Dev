import { test, expect } from '@playwright/test';

test('Login com usuario correto e senha incorreta', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/login');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('123456');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const error = await page.getByText("Error: Invalid email or password.");
    expect(error).toBeTruthy();
});

test('Login com usuario incorreto e senha correta', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/login');
    await page.locator('#email').fill('testeError@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const error = await page.getByText("Error: Invalid email or password.");
    expect(error).toBeTruthy();
});

test('Login com usuario e senha incorreta', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/login');
    await page.locator('#email').fill('testeError@gmail.com');
    await page.locator('#password').fill('falsePassword');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const error = await page.getByText("Error: Invalid email or password.");
    expect(error).toBeTruthy();
});

test('Login com usuario e senha correta', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/login');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');
    await page.waitForTimeout(1000);
    
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    await page.waitForURL('https://harmonicsound.com.br/home', { timeout: 2000 });

    expect(page.url()).toBe('https://harmonicsound.com.br/home');
});

test('Login com sucesso redireciona para home', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/login');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    await expect(page).toHaveURL("https://harmonicsound.com.br/home");
    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    await page.waitForTimeout(1500);
    expect(title).toBeTruthy();
});

test('Abrir pagina de cadastro', async ({ page }) => {
    await page.goto('https://harmonicsound.com.br/login');
    await page.locator("#register").click();
    const title = await page.getByText("REGISTER");
    expect(title).toBeTruthy();
});