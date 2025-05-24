import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'https://www.saucedemo.com',
  },
  reporter: [['html']],
  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome', 
      },
    },
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge', 
      },
    },
   {
      name: 'WebKit',
      use: {
        browserName: 'webkit', 
      },
    },
  ],
});
