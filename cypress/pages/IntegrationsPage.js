class IntegrationsPage {
    get searchInput() { return cy.get('input[type="search"]')}
    get gitHubLink() { return cy.get('a[href="/integrations/github"]') }
    get gitHubTitle() { return cy.contains('h1', 'Github', { timeout: 30000 })}
    get cards() { return cy.get('ul.grid-cols-subgrid > li', { timeout: 30000 }) }

    setSearchInput(text) {
        this.searchInput.clear().type(text)
    }

    clickSetUp() {
        this.cards.should('have.length', 1);
        this.cards.contains('h3', 'GitHub').should('be.visible')
        this.gitHubLink.should('be.visible', { timeout: 30000 })
        this.gitHubLink.click()
    }

}
export default new IntegrationsPage()