import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("getByrole", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();
   //mouse hover
   await page.goto("https://www.spicejet.com/");
   await page.getByText("SpiceClub").first().hover();
   await page.getByText("Credit Cards").first().click();

  
   //await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
   //double click
   //await page.getByText("Double-Click Me To See Alert").dblclick();
   //mouse right click
   //await page.getByText("right click me").click({button:'right'});
  

   //await page.goto("https://the-internet.herokuapp.com/shifting_content");
   //shift+click
   //await page.getByText("Example 1: Menu Element").click({modifiers:["Shift"]});
   //control+click
    //await page.getByText("Example 1: Menu Element").click({modifiers:["Control"]});



   

     await page.waitForTimeout(5000);

});
