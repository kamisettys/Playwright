import path from 'node:path';
import { test } from '@playwright/test';

import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(process.cwd(), 'PageObjectModel/Tests/.env'),
});

test('reading from .env file', async ({ page }) => {
  
  const applicationUrl = process.env.URL as string;
  const usernme=process.env.USERNAME1 as string;
  const passwd=process.env.PASSWORD1 as string;
 
  const titleverifyurl=process.env.TITLEURL as string;

  await page.goto(applicationUrl);
  await page.fill('#user-name',usernme);
  await page.fill('#password',passwd);
  await page.click("#login-button");
  await page.waitForURL(titleverifyurl);
 
});
