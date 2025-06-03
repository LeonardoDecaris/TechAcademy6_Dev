import { test, expect } from '@playwright/test';

test('Cadastro com confirmacao de senha diferente', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('SENHA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Passwords do not match")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com senha sem caractere especial', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('123456aaA');
    await page.locator('#confirmPassword').fill('123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Password must contain at least one special character")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com senha sem numeros', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*aaA');
    await page.locator('#confirmPassword').fill('#$%&*aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Password must contain at least one number")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com senha sem letra maiuscula', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*1212a');
    await page.locator('#confirmPassword').fill('#$%&*1212a');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Password must contain at least one uppercase letter")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com senha sem 8 caracteres', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%1aA');
    await page.locator('#confirmPassword').fill('#$%1aA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Password must be at least 8 characters long")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com senha fraca', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('12345678');
    await page.locator('#confirmPassword').fill('12345678');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Password must contain at least one uppercase letter")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com senha nula', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Password is mandatory")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com confirmacao de senha nula', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste1');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Confirm password is mandatory")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com email sem .com', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Email is Invalid")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com email faltando @', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const emailInput = page.locator('#email');
    const validationMessage = await emailInput.evaluate((input: HTMLInputElement) => input.validationMessage);
    expect(validationMessage).toContain('@');
});

test('Cadastro com email sem @ e sem .com', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const emailInput = page.locator('#email');
    const validationMessage = await emailInput.evaluate((input: HTMLInputElement) => input.validationMessage);
    expect(validationMessage).toContain('@');
});

test('Cadastro com email nulo', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Email is mandatory")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com usuario nulo', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Name is mandatory")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com cpf nulo', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("CPF is mandatory")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com cpf invalido', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('00000000000');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("Invalid CPF")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com cpf curto', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('000000');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const errorSpan = page.locator('span:has-text("CPF must have 11 digits")');
    expect(await errorSpan.isVisible()).toBeTruthy(); 
});

test('Cadastro com sucesso', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const signUp = page.getByRole('button', { name: 'Sign up' });
    await signUp.scrollIntoViewIfNeeded();
    await signUp.click();

    await page.locator('#name').fill('Playwright Teste');
    await page.locator('#cpf').fill('57962204036');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('#$%&*123456aaA');
    await page.locator('#confirmPassword').fill('#$%&*123456aaA');

    const loginButton = page.getByRole('button', { name: 'Register' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    await page.goto('http://localhost:5173/login');

    await page.waitForTimeout(500);
    const title = await page.getByText("LOGIN");
    expect(title).toBeTruthy();
});

