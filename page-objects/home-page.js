exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page
        this.age_gate = page.getByTestId('age-gate-grown-up-cta')
        this.cookie_accept_all = page.getByTestId('cookie-accept-all')
        this.search_input_button = page.getByTestId('search-input-button')
        this.search_input_field = page.getByTestId('search-input')
    }

    async accceptFirstMessages() {
        await this.age_gate.click();
        await this.cookie_accept_all.click();
    }

    async searchForProduct(searchItem) {
        await this.search_input_button.click();
        await this.search_input_field.fill(searchItem);
        await this.search_input_field.press('Enter');
    }
}