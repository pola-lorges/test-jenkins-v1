import { test, expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';

test('Creation de compte failed', async ({ page }) => {
    //remplissage du formulaire de creation de compte
    await page.goto(data.page_login);
    await page.getByRole('link', { name: 'S\'inscrire' }).click();

    await page.getByPlaceholder('Email').fill(data.email_fail);
    await page.locator('#password_register').fill(data.mot_de_passe_fail);
    await page.getByPlaceholder('Confirmer votre mot de passe').fill(data.mot_de_passe_fail);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_fail);
    await expect(page.locator('#password_register')).toHaveValue(data.mot_de_passe_fail);
    await expect(page.getByPlaceholder('Confirmer votre mot de passe')).toHaveValue(data.mot_de_passe_fail);


    await page.getByRole('button', { name: 'Inscription' }).click();
  
    // verification de reponse
    await expect(page.getByText(data.user_exist)).toHaveText(data.user_exist);
  
    // point de verification
    await expect(page).toHaveURL(data.page_register)
  })
  
  async function Creation_de_compte_failed(page:Page) {
    
    //remplissage du formulaire de creation de compte
    await page.goto(data.page_login);
    await page.getByRole('link', { name: 'S\'inscrire' }).click();

    await page.getByPlaceholder('Email').fill(data.email_fail);
    await page.locator('#password_register').fill(data.mot_de_passe_fail);
    await page.getByPlaceholder('Confirmer votre mot de passe').fill(data.mot_de_passe_fail);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_fail);
    await expect(page.locator('#password_register')).toHaveValue(data.mot_de_passe_fail);
    await expect(page.getByPlaceholder('Confirmer votre mot de passe')).toHaveValue(data.mot_de_passe_fail);


    await page.getByRole('button', { name: 'Inscription' }).click();
  
    // verification de reponse
    await expect(page.getByText(data.user_exist)).toHaveText(data.user_exist);
  
    // point de verification
    await expect(page).toHaveURL(data.page_register)
}

module.exports = Creation_de_compte_failed;
  