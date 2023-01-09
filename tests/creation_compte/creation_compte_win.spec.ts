import { test, expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';

test('Creation de compte win @create_compte_win', async ({ page }) => {
  
    //remplissage du formulaire de creation de compte
    await page.goto(data.page_login);
    await page.getByRole('link', { name: 'S\'inscrire' }).click();
    await page.getByPlaceholder('Email').fill(data.email_new);
    await page.locator('#password_register').fill(data.mot_de_passe_new);
    await page.getByPlaceholder('Confirmer votre mot de passe').fill(data.mot_de_passe_new);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_new);
    await expect(page.locator('#password_register')).toHaveValue(data.mot_de_passe_new);
    await expect(page.getByPlaceholder('Confirmer votre mot de passe')).toHaveValue(data.mot_de_passe_new);

    await page.getByRole('button', { name: 'Inscription' }).click();
   
    // verification de reponse
    await expect(page).toHaveURL(data.page_home);
    console.log("le test s'est bien déroulé")
});
  
async function Creation_de_compte_win(page:Page) {
    
    //remplissage du formulaire de creation de compte
    await page.goto(data.page_login);
    await page.getByRole('link', { name: 'S\'inscrire' }).click();
    await page.getByPlaceholder('Email').fill(data.email_new);
    await page.locator('#password_register').fill(data.mot_de_passe_new);
    await page.getByPlaceholder('Confirmer votre mot de passe').fill(data.mot_de_passe_new);

    await page.waitForTimeout(3 * 1000)

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_new);
    await expect(page.locator('#password_register')).toHaveValue(data.mot_de_passe_new);
    await expect(page.getByPlaceholder('Confirmer votre mot de passe')).toHaveValue(data.mot_de_passe_new);

    await page.waitForTimeout(3 * 1000)

    await page.getByRole('button', { name: 'Inscription' }).click();

    await page.waitForTimeout(3 * 1000)
   
    // verification de reponse
    await expect(page).toHaveURL(data.page_home);
    console.log("le test s'est bien déroulé")

    await page.goto(data.page_login);

};

module.exports = Creation_de_compte_win;