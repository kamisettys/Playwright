import XLSX from 'xlsx';
import path from 'node:path';
import { test } from '@playwright/test';
import { loginpageLocators } from './loginpageLocators.js';

type LoginRow = {
  username: string;
  password: string;
};

export function readExcel(filepath: string, sheetname: string): LoginRow[] {
  const fullpath = path.resolve(process.cwd(), filepath);
  const workbook = XLSX.readFile(fullpath);
  const sheet = workbook.Sheets[sheetname];

  if (!sheet) {
    throw new Error(`Worksheet "${sheetname}" was not found in ${fullpath}`);
  }

  return XLSX.utils.sheet_to_json<LoginRow>(sheet);
}

const loginData = readExcel(
  'PageObjectModel/data/logindata.xlsx',
  'Sheet1',
);

for (const data of loginData) {
  test(`verify login successful for ${data.username}`, async ({ page }) => {
    const login = new loginpageLocators(page);
    await login.logintoURL();
    await login.login(data.username, data.password);
    await login.verifylogin();
  });
}

