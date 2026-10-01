class PricingPage {
    get ratesTitle() { return cy.contains('h2', 'What\'s on the card.', { timeout: 15000 })}
    get currencyFilter() { return cy.get('#currency-filter', { timeout: 30000 })}
    get euroOption() { return cy.contains('span', 'EUR', { timeout: 30000 }).filter(':visible') }
    get priceColumnCells() { return cy.get('section#pay-as-you-go table td:nth-child(2)')}
    get pricingNumbers () { return cy.get('#communications a[href="/pricing/numbers"]', { timeout: 30000 })}

    changeCurrency() {
        this.currencyFilter.should('be.visible')
        this.currencyFilter.click()
        this.euroOption.should('be.visible')
        this.euroOption.click()
    }

     clickPricingNumbers() {
        this.pricingNumbers.scrollIntoView()
        this.pricingNumbers.should('be.visible')
        this.pricingNumbers.click()
    }

}
export default new PricingPage()