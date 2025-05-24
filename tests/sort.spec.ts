import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SortPage } from '../pages/SortPage';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Sort Feature', () => {
  let loginPage: LoginPage;
  let sortPage: SortPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    sortPage = new SortPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
  });

  test.afterEach(async () => {
    console.log('✅ Sort test completed.');
  });

  test('Sort products A-Z', async ({ page }) => {
    await page.waitForSelector('.product_sort_container');
    await sortPage.sortByNameAZ();
    const productTitles = await page.$$eval('.inventory_item_name', titles =>
      titles.map(title => title.textContent?.trim() || '')
    );
    const sortedTitles = [...productTitles].sort((a, b) => a.localeCompare(b));
    expect(productTitles).toEqual(sortedTitles);
  });

  test('Sort products by Price: High to Low', async ({ page }) => {
    await page.waitForSelector('.product_sort_container');
    await sortPage.sortByPriceHighToLow();
    const prices = await page.$$eval('.inventory_item_price', els =>
      els.map(el => parseFloat(el.textContent?.replace('$', '') || '0'))
    );
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
  });
});
