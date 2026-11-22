import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("getByrole", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();

   await page.goto("https://orangehrm.com/30-day-free-trial");
   //here locator is used using >>(double angular symbols)
   //await page.locator("div#Form_getForm_subdomain_Holder.field.text>>div.middleColumn>>input#Form_getForm_subdomain.text").fill("sowmya");
                                     //OR
                                     
   //const form=await page.locator("#get-pricing-btn > div");
    //const getfreetrailbtn=await page.getByRole('button',{name:'Start My Free Trial'});
    //await getfreetrailbtn.click();

                                //OR

    await page.locator("div#Form_getForm_subdomain_Holder.field.text").locator("div.middleColumn>>input#Form_getForm_subdomain.text").fill("sowmya");
    await page.locator("#get-pricing-btn > div").getByRole('button',{name:'Start My Free Trial'}).click();

   await page.waitForTimeout(5000);

});