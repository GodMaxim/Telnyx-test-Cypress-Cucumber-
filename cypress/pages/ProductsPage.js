class ProductsPage{
    get browseAllBtn() { return cy.get('a[href="/products/builds"]')}
    get languageSelect () { return cy.get('select[aria-label="Filter builds by language"]', { timeout: 25000 })}
    get searchInput () { return cy.get('input[type="search"]')}
    get searchResult () { return cy.get('ul.list-none li')}

    clickBrowseAll() {
        this.browseAllBtn.click()
    }

    setSearchInput(text) {
        this.searchInput.type(text, { delay: 1000 })
        this.searchInput.type('{enter}');
}

}
export default new ProductsPage()