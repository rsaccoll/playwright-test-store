exports.SearchPage = class SearchePage {

    constructor(page) {
        this.page = page
        this.item_to_bag = page.getByTestId('add-to-bag')
        this.product_listing = page.getByTestId('product-listing')
        this.result_count = page.getByTestId('result-count')
        this.product_leaf = page.getByTestId('product-leaf')
        this.list_item = page.getByRole('listitem')
        this.add_to_cart = page.getByTestId('add-to-cart-skroll-cta')
        this.view_my_bag = page.getByTestId('view-my-bag')
        this.continue_shopping = page.getByTestId('continue-shopping-button')
        this.cart_bar = page.getByTestId('util-bar-cart')
        this.cart_item = page.getByTestId('cart-item')
    }

    async selectProduct(productName) {
        await this.page
        .getByTestId('listitem')
        .filter({ hasText: productName })
        .first()
        .click();
    }

    async selectProductOtherWay(productName) {
        const rows  = this.list_item;
        const count = await rows.count();
        for (let i = 0; i < count; i++) {
            let element = await rows.nth(i).textContent()
            if(element.includes(productName)) {
                rows.nth(i).click();
                break;
            }
        }
    }

    async addItemToBag(productName) {
        await this.page
        .getByTestId('product-leaf')
        .filter({ hasText: productName })
        .first()
        .getByTestId('add-to-cart-skroll-cta')
        .click();
    }

    async continueShoppingButton() {
        await this.continue_shopping.click();
    }

    async clickCartButton() {
        await this.cart_bar.click()
    }
}