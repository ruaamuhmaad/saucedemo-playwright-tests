import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async fillInformation(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }

  async verifySuccessMessage() {
    await this.page.waitForSelector('.complete-header');
  }
}
