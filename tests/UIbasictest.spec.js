 const { test } = require ('@playwright/test');
 const { expect } = require ('../playwright.config');

 test ('First Playwright test', async ({browser})=>
 {
    // new context browser
   //chrome - plugins/ cookies 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto ("https://jerotix.com/");
    console.log(await page.title());

 });

 test ('Shortcut Playwright test', async ({page})=>
 {
    // new context browser
    // const context = await browser.newContext();
    // const page = await context.newPage
     await page.goto ("https://www.saucedemo.com/");
    console.log(await page.title());
     //await expect(page).toHaveTitle("Google");
     page.locator

 });