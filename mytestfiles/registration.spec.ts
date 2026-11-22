import {test, expect,Browser, Page, Locator} from '@playwright/test';
import {chromium, firefox, webkit} from 'playwright';

test('Registration',async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:"chrome"});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    const FName:Locator = await page.locator("#input-firstname");
    const LName:Locator = await page.locator("#input-lastname");
    const Email:Locator =await page.locator("#input-email");
    const Telephone:Locator =await page.locator("#input-telephone");
    const password:Locator =await page.locator("#input-password");
    const confirmpwd:Locator = await page.locator("#input-confirm");
    const checkbox:Locator = await page.locator("input[name='agree']");
    const continuebtn:Locator = await page.locator("input[value='Continue']");
    const txt:Locator=await page.locator("#content > p:nth-child(2)");

    await FName.fill("Sowmya");
    await LName.fill("Reddy");
    await Email.fill('sowmya.reddy@example.com');
    await Telephone.fill("123-456-2654");
    await password.fill("PlayWright123$");
    await confirmpwd.fill("PlayWright123$");
    await checkbox.check();
    await continuebtn.click();
    const text=await txt.isVisible();
    expect(text).toEqual(true);
    
   
 await browser.close();

})