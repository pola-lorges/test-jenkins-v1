import { test, expect, Page } from '@playwright/test';
import * as logindata from '../data/connection_data.json';
import * as data from '../data/produit.json';
import {allure} from "allure-playwright"

test.describe("regroupement pour suppression", async()=>{
  let page : Page
test.beforeAll( async ({browser}) => {
  page = await browser.newPage()
    await page.goto('https://ztrain-web.vercel.app/auth/login');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(logindata.email_win);
    await page.getByPlaceholder('Mot de passe').click();
    await page.getByPlaceholder('Mot de passe').fill(logindata.mot_de_passe_win);
    await page.locator('#btn_login').click();
    await expect(page).toHaveURL('https://ztrain-web.vercel.app/home')  
    await page.locator('#style_content_cart_wrapper__mqNbf').click();
    
  })

 let clickList:any[]=[];
 var conteur=0

  for(let i=0; i<data.nombresupp; i++  ){
    clickList.push(conteur+i)
  }

 
 clickList.forEach(element => {
  console.log(clickList)

  test(`supprimer  produit au panier ${element}`, async () => {
    
    
      await page.locator('#style_card_wrapper__hrc1I div').filter({ hasText: data.produitsupp}).locator('span').nth(2).click();
      await page.waitForTimeout(2000);
    
    

  });

  
 });


  test.afterAll(async()=>{
    allure.addParameter("article",data.produitsupp)
    allure.addParameter("quantité",data.quantité)
    page.close()

  })
})