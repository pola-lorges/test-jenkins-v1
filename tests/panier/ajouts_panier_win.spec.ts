import { test, expect, Page } from '@playwright/test';
import * as logindata from '../data/connection_data.json';
import * as data from '../data/produit.json';
import datas from '../data/flopProduits.json'
import {allure} from "allure-playwright"


test.describe("regroupement", async()=>{
  let page : Page
test.beforeAll( async({browser})=>  {
  page = await browser.newPage()
  await page.goto('https://ztrain-web.vercel.app/auth/login');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(logindata.email_win);
    await page.getByPlaceholder('Mot de passe').click();
    await page.getByPlaceholder('Mot de passe').fill(logindata.mot_de_passe_win);
    await page.locator('#btn_login').click();
    await expect(page).toHaveURL('https://ztrain-web.vercel.app/home')
    await page.pause
})


datas.forEach( (element) => {
   test(`ajouter u produit au panier ${element.article}`, async () => {
    await expect(page).toHaveURL('https://ztrain-web.vercel.app/home')
    let product_name=element.article
    await page.locator(".style_card__gNEqX", { has: page.locator(`text=${product_name}`) }).click();
    await page.locator('#style_quantity_wrapper__2QMug').getByRole('textbox').click();
    await page.locator('#style_quantity_wrapper__2QMug').getByRole('textbox').fill(element.quantité);
    await page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await page.locator('#style_content_cart_wrapper__mqNbf').click();
    await expect (page.getByText('Votre panier à été mis à jour')).toHaveText('Votre panier à été mis à jour');  
    await page.locator('#style_header_home__8t_ie').click();

  })
});
  

  test.afterAll(async({})=>{
    allure.addParameter("article",data.article)
    allure.addParameter("quantité",data.quantité)
  })

  test.afterEach( async ({ page }) => {
    //vider le panier
    await expect(page).toHaveURL(logindata.page_home)
    await page.goto('https://ztrain-web.vercel.app/home');
    await page.locator('#style_content_cart_wrapper__mqNbf').click();
    await page.getByRole('button', { name: 'Vider le panier' }).click();
    const nbrProductinit = Number(await page.locator('#style_content_cart_wrapper__mqNbf').textContent());
    //point de verification
    await expect(nbrProductinit).toBeGreaterThanOrEqual(0); 

  })
})