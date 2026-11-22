import {test} from '@playwright/test'
import { loginpageLocators } from './loginpageLocators.js'

const loginusers=[
    {username:'standard_user', password:'secret_sauce'},
    {username:'problem_user', password:'secret_sauce'},
    {username:'visual_user', password:'secret_sauce'},
    {username:'error_user', password:'secret_sauce'}];


    loginusers.forEach(data =>{
        test(`verify login successful ${data.username}`, async({page})=>
        {
        const login1 = new loginpageLocators(page);
        await login1.logintoURL();   
        await login1.login(data.username, data.password);
        await login1.verifylogin();
        })

});