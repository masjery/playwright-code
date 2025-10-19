const { test, expect } = require('@playwright/test');

test('select March 23, 2027 from calendar', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

  await page.locator('.react-date-picker__inputGroup').click();
  await page.locator('.react-calendar__navigation__label').click();
  await page.locator('.react-calendar__navigation__label').click();

  await page.getByRole('button', { name: '2027' }).click();
  await page.getByRole('button', { name: 'Mar' }).click();
  await page.getByRole('button', { name: '23' }).click();

  await expect(page.locator('.react-date-picker__inputGroup')).toBeVisible();
});
