import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';


test('Connexion_win @Connexion_win', async ({ page }) => {
    //remplissage du formulaire de connexion
    await page.goto(data.page_login);
    await page.getByPlaceholder('Email').fill(data.email_win);
    await page.getByPlaceholder('Mot de passe').fill(data.mot_de_passe_win);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_win);
    await expect(page.getByPlaceholder('Mot de passe')).toHaveValue(data.mot_de_passe_win);
    
    
    await page.locator('#btn_login').click();

    //verification de la response
    await expect(page).toHaveURL(data.page_home)
  });
  async function Connexion_win(page:Page) {
    //remplissage du formulaire de connexion
    await page.goto(data.page_login);
    await page.getByPlaceholder('Email').fill(data.email_new);
    await page.getByPlaceholder('Mot de passe').fill(data.mot_de_passe_new);

    await page.waitForTimeout(3 * 1000)

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_new);
    await expect(page.getByPlaceholder('Mot de passe')).toHaveValue(data.mot_de_passe_new);
    
    await page.waitForTimeout(3 * 1000)
    
    await page.locator('#btn_login').click();

    await page.waitForTimeout(3 * 1000)
    //verification de la response
    await expect(page).toHaveURL(data.page_home)
  };

  module.exports = Connexion_win;
  ;