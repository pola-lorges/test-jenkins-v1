import { test , expect, Page } from '@playwright/test';
import * as data from '../data/connection_data.json';


async function vider_panier_win(page:Page) {
    //vider le panier
    await expect(page).toHaveURL(data.page_home)
    await page.goto('https://ztrain-web.vercel.app/home');
    await page.locator('#style_content_cart_wrapper__mqNbf').click();
    await page.waitForTimeout(3 * 1000)
    await page.getByRole('button', { name: 'Vider le panier' }).click();
    await page.waitForTimeout(3 * 1000)
    const nbrProductinit = Number(await page.locator('#style_content_cart_wrapper__mqNbf').textContent());
    //point de verification
    await expect(nbrProductinit).toBeGreaterThanOrEqual(0); 

  }
  module.exports = vider_panier_win
;