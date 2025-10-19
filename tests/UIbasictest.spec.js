 const { test } = require ('@playwright/test');
 // const { expect } = require ('../playwright.config');
 import {expect} from '@playwright/test';

 

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
     await page.locator('#user-name').fill("standard_user");
     await page.locator('#password').fill("secret_sauce");
     await page.locator('#login-button').click();
    // console.log(await page.locator('[data-test="error"]').textContent());
    // await expect(page.locator('[data-test="error"]')).toContainText('Epic');
    page.locator(".inventory_item_name");
    //console.log(await page.locator(".inventory_item_name").textContent());
    const items = await page.locator('.inventory_item_name').allTextContents();
    console.log(items);
    await expect(items.first()).toHaveText('Sauce Labs Backpack');






 });