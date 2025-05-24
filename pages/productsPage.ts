import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
  async addToCart(productId: string) {
  await this.page.click(`#add-to-cart-${productId}`);
}
 async removeFromCart(productId: string) {
    await this.page.click(`#remove-${productId}`);
  }
  async sortByAZ() {
  await this.page.selectOption('[data-test="product_sort_container"]', 'az');
}

async sortByHighToLow() {
  await this.page.selectOption('[data-test="product_sort_container"]', 'hilo');
}

}
