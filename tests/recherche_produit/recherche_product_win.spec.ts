import { test , expect , Page} from '@playwright/test';
import * as data from '../data/connection_data.json';
import * as product_data from '../data/product_data.json';

async function recherche_product_win(page:Page) { 
    
    //point de verification
    await expect(page).toHaveURL(data.page_home);

    await page.getByPlaceholder('Rechecher un produit').fill(product_data.valid_product);

    //point de verification
    await expect(page.getByPlaceholder('Rechecher un produit')).toHaveValue(product_data.valid_product);
    await page.locator('#style_content_input_wrapper__eNPFq svg').click();
    
    //verification de la reponse
    await expect(page.getByRole('heading', { name: product_data.valid_product })).toContainText(product_data.valid_product);

    await page.waitForTimeout(3 * 1000);
    
    await page.goto(data.page_home);
};

module.exports = recherche_product_win;