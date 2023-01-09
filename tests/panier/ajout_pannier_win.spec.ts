import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';
import * as product_data from '../data/product_data.json';


async function ajout_panier_win(page:Page)  { 
    
    await expect(page).toHaveURL(data.page_home);

    await page.waitForTimeout(3 * 1000)

    //rechreche du produit
   await page.getByRole('heading', { name: product_data.search_product }).click();
   await page.getByPlaceholder('Rechecher un produit').click();
   await page.getByPlaceholder('Rechecher un produit').fill(product_data.search_product);

   await page.waitForTimeout(3 * 1000)

   //ajout au panier
   await page.locator('#style_popular_product_wrapper__z6J0h div').nth(1).click();
   await page.locator('#style_quantity_wrapper__2QMug').getByRole('textbox').fill(product_data.quantite);
   await page.getByRole('button', { name: 'Ajouter au panier' }).click();
   
   await page.waitForTimeout(3 * 1000)

   // verifcation de la reponse
   await expect(page.getByText('Votre panier à été mis à jour')).toHaveText('Votre panier à été mis à jour');
   
   await page.waitForTimeout(3 * 1000);
    
   await page.goto(data.page_home);
}
module.exports = ajout_panier_win
;