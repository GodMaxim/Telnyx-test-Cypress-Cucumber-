class IntegrationsPage {
    get searchInput() { return cy.get('input[type="search"]')}
    get gitHubLink() { return cy.get('a[href="/integrations/github"]', { timeout: 30000 }) }
    get gitHubTitle() { return cy.contains('h1', 'Github', { timeout: 30000 })}
    get cards() { return cy.get('ul.grid-cols-subgrid > li', { timeout: 30000 }) }

    clickOnInputField(placeholder) { return cy.get(`input[placeholder="${placeholder}"]`, { timeout: 25000 }).click()}

    setSearchInput(text) {
        this.searchInput.clear().type(text)
    }

    clickSetUp() {
        this.cards.should('have.length', 1);
        this.cards.contains('h3', 'GitHub').should('be.visible')
        this.gitHubLink.should('be.visible')
        this.gitHubLink.click()
    }

}
export default new IntegrationsPage()