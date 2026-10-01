class ShopPage {
    get shopTitle() { return cy.contains('h2', 'Subscribe to our emails') }
    get searchBtn () { return cy.get('summary[aria-label="Search"]', { timeout: 30000 }) }
    get searchInput () { return cy.get('#Search-In-Modal') }
    get card () { return cy.get('#ProductGridContainer .card__content', { timeout: 30000 }) }
    get countryRegionBtn () { return cy.get('button[aria-describedby="FooterCountryLabel"]') }
    get countryList () { return cy.get('#FooterCountryList')}
    get priceElements() { return cy.get('.price', { timeout: 15000 }).filter(':visible')}

    searchSomeItem(searchItem) {
        this.searchBtn.should('be.visible')
        this.searchBtn.click()
        this.searchInput.clear().type(`${searchItem}{enter}`)
    }

     cardIsVisible() {
          this.card.eq(0).scrollIntoView().should('be.visible')
    }

     selectCountry(countryName) {
        this.countryRegionBtn.click()
        this.countryList.contains(countryName).click()
    }
    
}
export default new ShopPage()