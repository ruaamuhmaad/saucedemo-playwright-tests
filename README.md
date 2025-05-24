# SauceDemo Automated Testing with Playwright

This project contains end-to-end UI tests for [SauceDemo](https://www.saucedemo.com/) using [Playwright](https://playwright.dev/) and the Page Object Model (POM) design pattern.

## 📝 Project Description

This project is an automated UI testing suite for SauceDemo, a demo e-commerce website used for testing login, shopping cart, and checkout functionalities. The goal of this project is to validate the core user flows using the Playwright testing framework.

The tests are written using the Page Object Model (POM) design pattern for better reusability and maintainability. Each feature (such as login, sorting, and checkout) is encapsulated in its own test file and page class.

The suite supports cross-browser testing, environment configuration via `.env`, HTML reporting, and uses Playwright’s hooks (`beforeEach`, `afterEach`) to ensure clean test setup and teardown.

## 📦 Technologies Used

- TypeScript
- Playwright Test Runner
- Page Object Model (POM)
- .env for parameterized credentials
- HTML Reporter
- Cross-browser testing (Chrome, Edge, Firefox*)

## ✅ Features Tested

- User Login
- Product Sorting (A-Z, Price High → Low)
- Add to Cart
- Remove from Cart
- Complete Checkout

## 🔁 Test Structure

- `pages/`: Contains all POM files (login, products, sort, checkout)
- `tests/`: Contains all spec files
- `playwright.config.ts`: Multi-browser configuration
- Hooks (`beforeEach`, `afterEach`) used in all test suites

## 🧪 Run Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Show HTML report:

```bash
npx playwright show-report
```

## 🌍 Cross-Browser Support

Project is configured to run tests on:
- Google Chrome (`channel: 'chrome'`)
- Microsoft Edge (`channel: 'msedge'`)
- Firefox (optional if installed properly)

## 💻 Author

Hebah Ahmad


