import { test, expect } from '@playwright/test';
import * as data from '../data/connection_data.json';


test('Creation de compte limit', async ({ page }) => {
    //remplissage du formulaire de creation de compte
    await page.goto(data.page_login);
    await page.getByRole('link', { name: 'S\'inscrire' }).click();
    await page.getByPlaceholder('Email').fill(data.email_fail);
    await page.locator('#password_register').fill(data.mot_de_passe_win);
    await page.getByPlaceholder('Confirmer votre mot de passe').fill(data.mot_de_passe_win);

    //point de verification
    await expect(page.getByPlaceholder('Email')).toHaveValue(data.email_fail);
    await expect(page.locator('#password_register')).toHaveValue(data.mot_de_passe_win);
    await expect(page.getByPlaceholder('Confirmer votre mot de passe')).toHaveValue(data.mot_de_passe_win);


    await page.getByRole('button', { name: 'Inscription' }).click();
  
    // verification de reponse
    await expect(page.getByText(data.format_invalid)).toHaveText(data.format_invalid);
  
    // point de verification
    await expect(page).toHaveURL(data.page_register)
  });
  