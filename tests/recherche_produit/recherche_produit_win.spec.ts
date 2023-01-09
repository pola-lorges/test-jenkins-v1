import { test , expect } from '@playwright/test';
import * as data from '../data/connection_data.json';
import * as product_data from '../data/product_data.json';


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

  test('Recherche produit win @recherche_win', async ({ page }) => { 
    
    //point de verification
    await expect(page).toHaveURL(data.page_home);

    await page.getByPlaceholder('Rechecher un produit').fill(product_data.valid_product);

    //point de verification
    await expect(page.getByPlaceholder('Rechecher un produit')).toHaveValue(product_data.valid_product);
    await page.locator('#style_content_input_wrapper__eNPFq svg').click();
    
    //verification de la reponse
    await expect(page.getByRole('heading', { name: 'T-shirt en coton biologique' })).toHaveText(product_data.valid_expect);
});