import {test, expect, Browser, Page, BrowserContext}from '@playwright/test'
import {firefox, chromium, webkit}from 'playwright'

test("authpopup", async()=>{
   const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
   const browser_cntxt:BrowserContext = await browser.newContext();
   const page:Page = await browser_cntxt.newPage();

   const username='admin';
   const password='admin';
   //const authheader='Basic '+ btoa(username +':'+password);
   page.setExtraHTTPHeaders({Authorization : createAuthHeader(username, password)});

   await page.goto("https://the-internet.herokuapp.com/basic_auth");

   
});

function createAuthHeader(username:any, password:any)
{
    return 'Basic '+ btoa(username+ ':'+password);
}