import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.afterEach(async () => {
    console.log('✅ Login test completed.');
  });

  test('Login with valid credentials', async ({ page }) => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/.*inventory.html/);
  });
});
