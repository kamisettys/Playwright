import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("getByrole", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();

   await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
   //using dragTo method

   //await page.locator("#draggable").dragTo(page.locator("#droppable"));
                    //or
    //using mouse up and down methods
   await page.locator("#draggable").hover();
   await page.mouse.down();
   await page.locator("#droppable").hover();
   await page.mouse.up();


     await page.waitForTimeout(5000);
   });