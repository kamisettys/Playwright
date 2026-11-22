import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {firefox, chromium, webkit} from 'playwright'

test ("browsercontextex", async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    //borwser_context1
    const browser_ctxt1:BrowserContext = await browser.newContext();
    const page1:Page = await browser_ctxt1.newPage();
    //browser_context2
    const browser_ctxt2:BrowserContext = await browser.newContext();
    const page2:Page = await browser_ctxt2.newPage();

    //browser1
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailadd:Locator =  page1.locator("#input-email");
    const pwd:Locator=  page1.locator("#input-password");
    const login:Locator=  page1.locator("input[value='Login']");

    await emailadd.fill("sowmya.reddy@example.com");
    await pwd.fill("PlayWright123$");
    await login.click();

    //browser2:

    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailadd1:Locator =  page2.locator("#input-email");
    const pwd1:Locator= page2.locator("#input-password");
    const login1:Locator=  page2.locator("input[value='Login']");

    await emailadd1.fill("pavan.reddy@example.com");
    await pwd1.fill("PlayWright2026$");
    await login1.click();

    //await browser_ctxt1.close();
    //await browser_ctxt2.close(); 
    //await browser.close();


});