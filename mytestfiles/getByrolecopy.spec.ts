import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("getByrole", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();

   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailadd:Locator =  page.locator("#input-email");
    const pwd:Locator=  page.locator("#input-password");
    const login:Locator=  page.locator("input[value='Login']");
    await emailadd.fill("sowmya.reddy@example.com");
    await pwd.fill("PlayWright123$");
    await login.click();

   //await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
   const link1:Locator=page.getByRole('link',{name:'Edit your account information'});
   const text=await link1.isVisible();
   expect(text).toEqual(true);
     

await page.waitForTimeout(5000);
});