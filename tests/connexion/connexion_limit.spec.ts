import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';

test('Connexion_limit @Connexion_limit', async ({ page }) => {
    //remplissage du formulaire de connexion
    await page.goto(data.page_login);
    await page.getByPlaceholder('Email').fill(data.email_fail);
    await page.getByPlaceholder('Mot de passe').fill(data.mot_de_passe_fail);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_fail);
    await expect(page.getByPlaceholder('Mot de passe')).toHaveValue(data.mot_de_passe_fail);
    
    await page.locator('#btn_login').click();
    
    //verification de la response
    await expect(page.getByText(data.format_invalid)).toHaveText(data.format_invalid);

    //point de verification
    await expect(page).toHaveURL(data.page_login)
  })

async function Connexion_limit(page:Page) {
    //remplissage du formulaire de connexion
    await page.goto(data.page_login);
    await page.getByPlaceholder('Email').fill(data.email_fail);
    await page.getByPlaceholder('Mot de passe').fill(data.mot_de_passe_fail);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_fail);
    await expect(page.getByPlaceholder('Mot de passe')).toHaveValue(data.mot_de_passe_fail);
    
    await page.locator('#btn_login').click();
    
    //verification de la response
    await expect(page.getByText(data.format_invalid)).toHaveText(data.format_invalid);

    //point de verification
    await expect(page).toHaveURL(data.page_login)
  }
  
  module.exports = Connexion_limit
  ;
