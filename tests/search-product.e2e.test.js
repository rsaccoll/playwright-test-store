import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home-page'
import { SearchPage } from '../page-objects/search-page'
const data = require('../data/' + process.env.LOCALE + '.json')

test.describe('The Search for Yoda...Hmm', () => {
    test.beforeEach(async ({ page}) => {
        await page.goto(process.env.LOCALE)
    })

    test('Verify if search returning a list of products', async ({page}) => {
        const home = new HomePage(page);
        const search = new SearchPage(page)
        await home.accceptFirstMessages();
        await home.searchForProduct(data.product_for_search);
        await expect(search.product_listing).toBeVisible();
        await expect(search.result_count).toContainText(data.count_phrase)
        await expect(search.product_leaf).toHaveCount(data.count_product);
        await expect(search.list_item.filter({hasText: data.product}).first()).toBeVisible();
    })

    test('Add a product on the bag', async ({page}) => {
        const home = new HomePage(page);
        const search = new SearchPage(page)
        await home.accceptFirstMessages();
        await home.searchForProduct(data.product_for_search);
        await expect(search.product_listing).toBeVisible();
        await expect(search.list_item.filter({hasText: data.product}).first()).toBeVisible();
        await search.addItemToBag(data.product);
        await expect(page.getByRole('heading', { name: data.add_bag_message })).toBeVisible();
        await search.continueShoppingButton();
        await search.clickCartButton();
        await expect(search.cart_item.getByRole('link', { name: data.product })).toBeVisible();
        await expect(page.getByRole('link', { name: data.checkout_button_phrase })).toBeVisible();
    })

})