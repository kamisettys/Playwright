import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("getByrole", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();
   await page.goto("https://flipkart.com/");
   /*await page.waitForTimeout(5000);
   await page.getByRole('button',{name:'button'}).focus();
   await page.getByRole('button',{name:'button'}).click();*/

   const search=await page.locator("(//input[contains(@title,'Search for Products, Brands and More')])[1]");
   //*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[1]/form/div/div/input
   //*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[1]/form/ul
   await search.pressSequentially("Macbook",{delay:500});
   
   const list=await page.locator('//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[1]/form/ul/li');
   await list.nth(3).click();




   await page.waitForTimeout(5000);

});