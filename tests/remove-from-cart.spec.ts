
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';

test('Remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.waitForSelector('#add-to-cart-sauce-labs-backpack');
  await productsPage.addToCart('sauce-labs-backpack');
  await productsPage.goToCart();

  await page.waitForSelector('#remove-sauce-labs-backpack');
  await productsPage.removeFromCart('sauce-labs-backpack');

  await expect(page.locator('.cart_item')).toHaveCount(0);
});

