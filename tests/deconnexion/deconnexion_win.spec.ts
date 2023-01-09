import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';

async function deconnexion_win(page:Page) {
    //point de verification
    await expect(page).toHaveURL(data.page_home);
  
    //deconnexion
    await page.locator('#style_select_cat__vyiIE').selectOption(data.deconnect);
    await page.locator('#style_avatar_wrapper__pEGIQ svg').nth(1).click();

    await page.waitForTimeout(3 * 1000)

    await page.getByRole('link', { name: 'Se déconnecter' }).click();

    await page.waitForTimeout(3 * 1000)
  
    //point de verification
    await expect(page).toHaveURL(data.page_login)
  };
  
  module.exports = deconnexion_win;
  ;