import { test } from '@playwright/test';
import logindata from '../data/logindata.json' with { type: 'json' };
import { loginpageLocators } from './loginpageLocators.js';

for (const data of logindata) {
  test(`verify login successful for ${data.username}`, async ({ page }) => {
    const login1 = new loginpageLocators(page);
    await login1.logintoURL();
    await login1.login(data.username, data.password);
    await login1.verifylogin();
  });
}

