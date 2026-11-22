import{test, expect} from '@playwright/test'

test.describe("google.com tests",()=>{

    test('title page test @smoke',async({page})=>{
        await page.goto("https://www.google.com");
        await expect (page).toHaveTitle(/Google/);
        });
    
    test('searchbox should be visible @regression', async({page})=>{
        await page.goto("https://www.google.com");
        const searchbox= await page.locator('textarea[name="q"]');
        await expect(searchbox).toBeVisible();
         });
    test('should show results after search @smoke', async({page})=>{
        await page.goto("https://www.google.com");
        const searchbox= await page.locator('textarea[name="q"]');
        await searchbox.fill('palywright');
        await searchbox.press('Enter');
   
        });

});