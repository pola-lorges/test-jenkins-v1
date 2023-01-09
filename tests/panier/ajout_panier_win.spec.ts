import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';
import * as product_data from '../data/product_data.json';

// test.beforeEach( async ({ page }) => {
//     //connexion
//     await page.goto(data.page_login);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(data.email_win);
//     await page.getByPlaceholder('Mot de passe').click();
//     await page.getByPlaceholder('Mot de passe').fill(data.mot_de_passe_win);
//     await page.locator('#btn_login').click();
//     await expect(page).toHaveURL(data.page_home)
//   })

test('Ajouter un produit au panier @ajout_panier_win', async ({ page }) => { 
    //point de verification
    await expect(page).toHaveURL(data.page_home);

    //rechreche du produit
   await page.getByRole('heading', { name: product_data.search_product }).click();
   await page.getByPlaceholder('Rechecher un produit').click();
   await page.getByPlaceholder('Rechecher un produit').fill(product_data.search_product);

   //ajout au panier
   await page.locator('#style_popular_product_wrapper__z6J0h div').nth(1).click();
   await page.locator('#style_quantity_wrapper__2QMug').getByRole('textbox').fill(product_data.quantite);
   await page.getByRole('button', { name: 'Ajouter au panier' }).click();
   
   // verifcation de la reponse
   await expect(page.getByText('Votre panier à été mis à jour')).toHaveText('Votre panier à été mis à jour');
})

test.afterEach( async ({ page }) => {
    //vider le panier
    await expect(page).toHaveURL(data.page_home)
    await page.goto('https://ztrain-web.vercel.app/home');
    await page.locator('#style_content_cart_wrapper__mqNbf').click();
    await page.getByRole('button', { name: 'Vider le panier' }).click();
    const nbrProductinit = Number(await page.locator('#style_content_cart_wrapper__mqNbf').textContent());
    //point de verification
    await expect(nbrProductinit).toBeGreaterThanOrEqual(0); 

  })

