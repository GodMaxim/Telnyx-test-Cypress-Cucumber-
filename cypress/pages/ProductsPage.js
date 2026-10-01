class ProductsPage{
    get browseAllBtn() { return cy.get('a[href="/products/builds"]')}
    get languageSelect () { return cy.get('select[aria-label="Filter builds by language"]', { timeout: 25000 })}
    get searchInput () { return cy.get('input[type="search"]', { timeout: 30000 })}
    get searchResult () { return cy.get('ul.list-none li')}

    clickBrowseAll() {
        this.browseAllBtn.click()
    }

    setSearchInput(text) {
        this.searchInput.should('be.visible')
        this.searchInput.type(text)
}

}
export default new ProductsPage()