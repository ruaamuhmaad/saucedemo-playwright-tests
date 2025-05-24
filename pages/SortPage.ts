import { Page } from '@playwright/test';

export class SortPage {
  constructor(private page: Page) {}

 async sortByNameAZ() {
  await this.page.selectOption('.product_sort_container', 'az');
}

async sortByPriceHighToLow() {
  await this.page.selectOption('.product_sort_container', 'hilo');
}


 
  async getFirstItemName(): Promise<string> {
    return this.page.locator('.inventory_item_name').first().innerText();
  }


  async getFirstItemPrice(): Promise<string> {
    return this.page.locator('.inventory_item_price').first().innerText();
  }
}

