import {Page, Locator} from '@playwright/test'

export class loginpageLocators{

    readonly page:Page;
    readonly emailadd:Locator;
    readonly pwd: Locator;
    readonly loginbtn:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.emailadd=page.locator("#user-name");
        this.pwd=page.locator("#password");
        this.loginbtn=page.locator("#login-button");
        
    }
    async logintoURL(){

        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username:string, password:string){
        await this.emailadd.fill(username);
        await this.pwd.fill(password);
        await this.loginbtn.click();
    }
    async verifylogin()
    {
        await this.page.waitForURL("https://www.saucedemo.com/inventory.html");

    }

 

}