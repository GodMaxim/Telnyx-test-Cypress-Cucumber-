class PricingPage {
    get ratesTitle() { return cy.contains('h2', 'What\'s on the card.', { timeout: 15000 })}
    get currencyFilter() { return cy.get('#currency-filter')}
    get euroOption() { return cy.contains('span', 'EUR') }
    get priceColumnCells() { return cy.get('section#pay-as-you-go table td:nth-child(2)')}
    get pricingNumbers () { return cy.get('#communications a[href="/pricing/numbers"]', { timeout: 15000 })}

    scrollDownToTitle() {
        this.ratesTitle.scrollIntoView().should('be.visible');
    }

    changeCurrency() {
        this.currencyFilter.click()
        this.euroOption.click()
    }

     clickPricingNumbers() {
        this.pricingNumbers.scrollIntoView()
        this.pricingNumbers.should('be.visible', { timeout: 30000 })
        this.pricingNumbers.click()
    }

}
export default new PricingPage()