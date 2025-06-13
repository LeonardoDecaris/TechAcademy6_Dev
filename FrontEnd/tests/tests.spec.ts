import { test, expect } from '@playwright/test';

test.describe('Testes', () => {
    test.describe('DevelopersPage', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/home');
            await page.locator('#about').click();
            await expect(page).toHaveURL('https://harmonicsound.com.br/about');
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

    test.describe('Home', () => {
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
    });

    test.describe('Login', () => {
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
    });

    test.describe('NavBar', () => {
        test.describe('Testes NavBar Autenticados', () => {
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
                await expect(page).toHaveURL("https://harmonicsound.com.br/home");
                await page.waitForTimeout(200);
            });

            test('Abrir configuracoes', async ({ page }) => {
                const title = await page.getByText("The Power of audioVisual Harmonic Sound");
                await page.waitForTimeout(200);
                expect(title).toBeTruthy();

                await page.locator('#dropDownButton').click();
                await page.click('a:has-text("User Settings")');
                await expect(page).toHaveURL("https://harmonicsound.com.br/userSettings");
            });
        });

        test('Navegar ate botao login', async ({ page }) => {
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
            await page.waitForTimeout(500);
            expect(title).toBeTruthy();
        });

        test('Botao Home', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/contact');
            await page.locator('#home').click();
            await expect(page).toHaveURL('https://harmonicsound.com.br/home');
        });

        test('Logo para Home', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/contact');
            await page.click('a:has(img[alt="Harmonic Sound"])');
            await expect(page).toHaveURL('https://harmonicsound.com.br/home');
        });

        test('Botao GitHub', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/home');
            await page.locator('#github').click();
            await expect(page).toHaveURL('https://github.com/lucas-pedrozo/TechAcademy5');
        });

        test('Botao Sounds', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/home');
            await page.locator('#sound').click();
            await expect(page).toHaveURL('https://harmonicsound.com.br/sound');
        });

        test('Botao Contact', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/home');
            await page.locator('#contact').click();
            await expect(page).toHaveURL('https://harmonicsound.com.br/contact');
        });

        test('Botao Developers', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/home');
            await page.locator('#about').click();
            await expect(page).toHaveURL('https://harmonicsound.com.br/about');
        });
    });

    test.describe('Register', () => {
        test('Cadastro com confirmacao de senha diferente', async ({ page }) => {
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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
            await page.goto('https://harmonicsound.com.br/login');
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

        test.describe.serial('Cadastro com sucesso', () => {
            test('Cadastro com sucesso', async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/login');
                const signUp = page.getByRole('button', { name: 'Sign up' });
                await signUp.scrollIntoViewIfNeeded();
                await signUp.click();

                await page.locator('#name').fill('TESTE');
                await page.locator('#cpf').fill('71581497067');
                await page.locator('#email').fill('TESTE@gmail.com');
                await page.locator('#password').fill('#$%&*123456aaA');
                await page.locator('#confirmPassword').fill('#$%&*123456aaA');

                const loginButton = page.getByRole('button', { name: 'Register' });
                await loginButton.scrollIntoViewIfNeeded();
                await loginButton.click();
                await expect(page).toHaveURL("https://harmonicsound.com.br/login");
                await page.waitForTimeout(500);
                const title = await page.getByText("Log in");
                expect(title).toBeTruthy();
            });

            test.afterEach(async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/home');
                await page.click('text=Log in');
                await expect(page).toHaveURL('https://harmonicsound.com.br/login');
                await page.locator('#email').fill('TESTE@gmail.com');
                await page.locator('#password').fill('#$%&*123456aaA');
                const loginButton = page.getByRole('button', { name: 'Login' });
                await loginButton.scrollIntoViewIfNeeded();
                await loginButton.click();
                await expect(page).toHaveURL("https://harmonicsound.com.br/home");
                const title = await page.getByText("The Power of audioVisual Harmonic Sound");
                await page.waitForTimeout(200);
                expect(title).toBeTruthy();

                await page.goto('https://harmonicsound.com.br/userSettings');
                const deleteButton = page.getByRole('button', { name: 'Delete account' });
                await deleteButton.scrollIntoViewIfNeeded();
                await deleteButton.click();
                await page.waitForTimeout(200);
                const confirmButton = page.getByRole('button', { name: 'Confirm' });
                await confirmButton.scrollIntoViewIfNeeded();
                await confirmButton.click();
            });
        });
    });

    test.describe('UserSettings Page', () => {
        test.describe('Abrir UserSettings Autenticado', () => {
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
            });

            test('Fazer logout', async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/userSettings');
                const logoutButton = page.locator('button:has-text("LogOut")');
                await logoutButton.scrollIntoViewIfNeeded();
                await logoutButton.click();

                const confirmLogout = page.getByRole('button', { name: 'Confirm' });
                await page.waitForTimeout(200);
                await confirmLogout.scrollIntoViewIfNeeded();
                await confirmLogout.click();
                await expect(page).toHaveURL("https://harmonicsound.com.br/home");
            });

            test('Trocar nome de usuario', async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/userSettings');
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
                await page.goto('https://harmonicsound.com.br/userSettings');
                await page.locator('#name').fill('');
                const updateButton = page.locator('button:has-text("Update")');
                await updateButton.scrollIntoViewIfNeeded();
                await updateButton.click();
                const error = await page.getByText("Name is mandatory");
                await page.waitForTimeout(200);
                expect(error).toBeTruthy();
            });

            test('Trocar senha', async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/userSettings');
                const logoutButton = page.locator('button:has-text("New password")');
                await logoutButton.scrollIntoViewIfNeeded();
                await logoutButton.click();
                await expect(page).toHaveURL("https://harmonicsound.com.br/newPassword");

                await page.locator('input[placeholder="Password"]').fill('MH4q8Da3JXp2Hye#$');
                await page.locator('input[placeholder="Confirm Password"]').fill('MH4q8Da3JXp2Hye#$');
                const confirmLogout = page.getByRole('button', { name: 'New Pass' });
                await confirmLogout.scrollIntoViewIfNeeded();
                await confirmLogout.click();
                await expect(page).toHaveURL("https://harmonicsound.com.br/login");
            });

            test('Trocar senha passando nula', async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/userSettings');
                const logoutButton = page.locator('button:has-text("New password")');
                await logoutButton.scrollIntoViewIfNeeded();
                await logoutButton.click();
                await expect(page).toHaveURL("https://harmonicsound.com.br/newPassword");

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
    });

    test.describe.serial('SoundPage', () => {
        test.describe('Testes SoundPage Autenticados', () => {
            test.beforeEach(async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/home');
                await page.click('text=Log in');
                await expect(page).toHaveURL('https://harmonicsound.com.br/login');
                await page.locator('#email').fill('playwriteteste1@gmail.com');
                await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');
                const loginButton = page.getByRole('button', { name: 'Login' });
                await loginButton.scrollIntoViewIfNeeded();
                await loginButton.click();
                await page.waitForTimeout(200);
                await page.goto('https://harmonicsound.com.br/sound');
                await expect(page).toHaveURL('https://harmonicsound.com.br/sound');
                await page.waitForTimeout(200);
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
    });

    test.describe.serial('Admin', () => {
        test.describe.serial('Testes de Autor', () => {
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

                await page.click('a:has(span:has-text("Adm Author"))');
                await expect(page).toHaveURL('https://harmonicsound.com.br/adminAuthor');
                await page.waitForLoadState('load'); 
                await page.waitForTimeout(500);
                page.once('dialog', async (dialog) => {
                    expect(dialog.message()).toBe('Registro realizado com sucesso!');
                    await dialog.accept();
                });
                await page.locator('input[placeholder="Name authors"]').fill('TESTE');
                const createButton = page.locator('button:has-text("Create")');
                await createButton.scrollIntoViewIfNeeded();
                await createButton.click();
                await page.waitForTimeout(200);
                await page.goto('https://harmonicsound.com.br/admin');
                expect(page.url()).toBe('https://harmonicsound.com.br/admin');
            });

            test.afterEach(async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/adminAuthor');
                const title = await page.getByText("Name:");
                await page.waitForTimeout(200);
                expect(title).toBeTruthy();

                const categoryExists = await page.locator('button#TESTE:has-text("Delete")').count();
                if (categoryExists > 0) {
                    await page.click('button#TESTE:has-text("Delete")');
                    await page.click('button:has-text("Confirm")');
                }
            });

            test('Abrir aba Author', async ({ page }) => {
                await page.click('a:has(span:has-text("Adm Author"))');            
                await expect(page).toHaveURL('https://harmonicsound.com.br/adminAuthor');
            });

            test('Criar author nulo', async ({ page }) => {
                await page.click('a:has(span:has-text("Adm Author"))');
                await expect(page).toHaveURL('https://harmonicsound.com.br/adminAuthor');
                await page.waitForTimeout(500);
                page.once('dialog', async (dialog) => {
                    expect(dialog.message()).toBe('Erro ao realizar o registro.');
                    await dialog.accept();
                });

                const createButton = page.locator('button:has-text("Create")');
                await createButton.scrollIntoViewIfNeeded();
                await createButton.click();
                await page.waitForTimeout(200);
            });

            test('Atualizar author', async ({ page }) => {
                await page.waitForTimeout(500);
                await page.click('a:has(span:has-text("Adm Author"))');
                await expect(page).toHaveURL('https://harmonicsound.com.br/adminAuthor');
                await page.waitForTimeout(500);

                await page.click('button#TESTE:has-text("Update")');
                const title = await page.getByText("Update Author Name");
                await page.waitForTimeout(200);
                expect(title).toBeTruthy();
                await page.locator('input[placeholder="Author Name"]').fill('TESTE');
                const deleteButton = page.locator('button:has-text("Update")');
                await expect(deleteButton).toBeTruthy();
                await page.waitForTimeout(200);
            });

            test('Deletar author', async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/adminAuthor');
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
                await page.waitForTimeout(200);
            }); 
        });

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
                await page.waitForLoadState('load'); // Aguarda o carregamento completo
                expect(page.url()).toBe('https://harmonicsound.com.br/admin');
                await page.waitForLoadState('load');
            });

            test.afterEach(async ({ page }) => {
                await page.goto('https://harmonicsound.com.br/adminCategory');
                const categoryExists = await page.locator('button#TESTE:has-text("Delete")').count();
                if (categoryExists > 0) {
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
                await page.waitForTimeout(200);
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
                await page.waitForTimeout(200);
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
                await page.waitForTimeout(200);
            }); 
        });

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
                await page.waitForLoadState('load'); // Aguarda o carregamento completo
                expect(page.url()).toBe('https://harmonicsound.com.br/admin');
            });

            test('Abrir aba ItemSound', async ({ page }) => {
                await page.click('a:has(span:has-text("Amd Sound"))');
                await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');
            });

            test('Tocar um som', async ({ page }) => {
                await page.click('a:has(span:has-text("Amd Sound"))');
                await expect(page).toHaveURL('https://harmonicsound.com.br/buscarSound');

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

                await page.waitForTimeout(500);
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
                
                await page.waitForTimeout(500);
                await page.locator('#search').fill('APLAYWRITE');
                await page.click('button:has(img[alt="Buscar"])');
                await page.waitForTimeout(2000);
                const title = await page.getByText("APLAYWRITE");
                await page.click('button:has(img[alt="Edit"])');
                expect(title).toBeTruthy();
                await page.waitForTimeout(2000);
            });
        });
    });
});