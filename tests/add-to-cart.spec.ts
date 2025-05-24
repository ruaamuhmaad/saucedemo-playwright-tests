
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';

test.describe('Add to Cart Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test.afterEach(async () => {
    console.log('✅ Add to cart test completed.');
  });

  test('Add a product to cart', async ({ page }) => {
    await page.waitForSelector('#add-to-cart-sauce-labs-backpack');
    await productsPage.addToCart('sauce-labs-backpack');
    await productsPage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });
});
