import {test, expect, Browser, Page, BrowserContext,Locator}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("getByrole", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();
   await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

   //to move focus to accept cookies
   await page.locator("#cookiescript_header").focus();
   await page.locator("#cookiescript_accept").click();

   const countrydropdown="select#Contact_CountryCode";
  // await page.selectOption(countrydropdown, {value:'BE'});
                        //or
   // await page.selectOption(countrydropdown, {label:'Bangladesh'});
                       //or  
    await page.selectOption(countrydropdown, {index:10});
                    //or
    // to display all options from dropdown
    const alloptions=await page.$$(countrydropdown + '>option');
    console.log(alloptions.length);
    
    for(const e of alloptions)
    {
        const text=await e.textContent();
        console.log(text);
        if(text=='India')
        {
            await page.selectOption(countrydropdown, {label:'India'});
            break;
        }
    }


    await page.waitForTimeout(5000);
});