import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {firefox, chromium, webkit} from 'playwright'

test ("browsercontextex", async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    //await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33");


    //make sure you add belwo 2 lines in use section in playwright.config.ts file:
    // navigationTimeout:10000,
    // actionTimeout:15000

    //make sure you add below steps in defineconfig method
    //timeout:60000,
  //expect:{
    //timeout:5000


    //handling explicit waits in playwright

    //this is not a recommended wait but if u want you can put for selector, it failed in 6000 millisec/ 6 sec
    //await page.waitForSelector("#input-sort1",{state:'visible', timeout:6000});

    // as there is no timeout time mentioned here then actionTimeout time in playwright.config.ts file has 15000 millisec and 
    //it failed in 15000 milli secs, this wait is also not recommended
    //await page.waitForSelector("#input-sort1",{state:'visible'});

    //wait for network to be idle-- this is also not recommended wait
    //await page.waitForLoadState("load", {timeout:7000});

// time outs in 8000 milli secs
    //await page.locator("#input-firstname1").waitFor({state:'visible', timeout:8000});
    //time outs in 15000 milli secs
     //await page.locator("#input-firstname1").waitFor({state:'visible'});

    // await page.waitForURL("**/register", {timeout:7000});

    // this also not a recommended wait, failed in 4000 ms
    //await page.click('[name="agree1"]');
    
    // better way of wait is below, here it waits for 7000 milli secs and fails

    // await page.locator('[name="agree1"]').check({timeout:7000});

    //assertion timme outs
    await expect(page.locator("#input-Firstname")).toBeVisible({timeout:7000});

// this is similar to thread. sleep in selenium, this just perform browser to wait
//await page.waitForTimeout(7000);


});