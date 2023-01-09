import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';


test.beforeEach( async ({ page }) => {
    //connexion
    await page.goto(data.page_login);
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(data.email_win);
    await page.getByPlaceholder('Mot de passe').click();
    await page.getByPlaceholder('Mot de passe').fill(data.mot_de_passe_win);
    await page.locator('#btn_login').click();
    await expect(page).toHaveURL(data.page_home)
  })

  test('deconnexion_win @deconnexion_win', async ({ page }) => { 
    
    //point de verification
    await expect(page).toHaveURL(data.page_home);

    //deconnexion
    await page.locator('#style_select_cat__vyiIE').selectOption(data.deconnect);
    await page.locator('#style_avatar_wrapper__pEGIQ svg').nth(1).click();
    await page.getByRole('link', { name: 'Se déconnecter' }).click();

    //point de verification
    await page.goto(data.page_login);
});
