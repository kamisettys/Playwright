import {test, expect} from '@playwright/test';
test ("visually compare", async({ page })=>
{
    await page.goto("https://www.saucedemo.com/"); 
    await expect(page).toHaveScreenshot("LoginPage.png");

});