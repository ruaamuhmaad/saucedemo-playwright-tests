import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CheckoutPage } from '../pages/checkoutPage';

test.describe('Checkout Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addToCart('sauce-labs-backpack');
    await productsPage.goToCart();
  });

  test.afterEach(async () => {
    console.log('✅ Checkout test completed.');
  });

  test('Complete checkout process', async ({ page }) => {
    await checkoutPage.clickCheckout();
    await checkoutPage.fillInformation('Hebah', 'Ahmad', '00970');
    await checkoutPage.finishCheckout();
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});

