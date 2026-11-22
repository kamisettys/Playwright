import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("runinmormalbrowser", async()=>{
    // this function launchPersistentContext help you to open the application in normal browser and not in incognito mode 
   const browser:BrowserContext= await chromium.launchPersistentContext('',{headless:false, channel:'chrome'});
   //const browser_cntxt:BrowserContext = await browser.newContext();
   //const pages:Page[] = browser.pages();
   //const page:Page = pages[0];
   const page:Page = await browser.newPage();
     await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailadd:Locator =  page.locator("#input-email");
    const pwd:Locator=  page.locator("#input-password");
    const login:Locator=  page.locator("input[value='Login']");
    await emailadd.fill("sowmya.reddy@example.com");
    await pwd.fill("PlayWright123$");
    await login.click();

   //await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
   const header1:Locator=page.getByRole('heading',{name:'My Affiliate Account'});
   const text=await header1.isVisible();
   expect(text).toEqual(true);
     
    
await page.waitForTimeout(5000);

});