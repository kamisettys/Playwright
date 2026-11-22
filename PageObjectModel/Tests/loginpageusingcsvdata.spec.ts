import { test } from '@playwright/test';
import { loginpageLocators } from './loginpageLocators.js';
import fs from "fs";
import {parse} from "csv-parse/sync";


const csvdata:any[] = parse<Record<string,string>>(fs.readFileSync("PageObjectModel/data/testdata.csv"),
{
  columns: true,
  skip_empty_lines: true
})

 for(const data of csvdata)
 {

  test(`verify login successful2 ${data.username}`, async ({ page }) => {
    const login1 = new loginpageLocators(page);
    console.log(data);
    await login1.logintoURL();
    await login1.login(data.username, data.password);
    await login1.verifylogin();
  })
}
