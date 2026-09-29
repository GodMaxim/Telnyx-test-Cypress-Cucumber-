class ShopPage {
    get shopTitle() { return cy.contains('h2', 'Subscribe to our emails') }
    get searchBtn () { return cy.get('summary[aria-label="Search"]') }
    get searchInput () { return cy.get('#Search-In-Modal') }
    get card () { return cy.get('#ProductGridContainer .card__content') }
    get countryRegionBtn () { return cy.get('button[aria-describedby="FooterCountryLabel"]') }
    get countryList () { return cy.get('#FooterCountryList')}

    searchSomeItem(searchItem) {
        this.searchBtn.should('be.visible', { timeout: 30000 })
        this.searchBtn.click()
        this.searchInput.clear().type(`${searchItem}{enter}`)
    }

     cardIsVisible() {
          this.card.eq(0).scrollIntoView().should('be.visible', { timeout: 20000 })
    }

     selectCountry(countryName) {
        this.countryRegionBtn.click()
        this.countryList.contains(countryName).click()
    }
    
}
export default new ShopPage()