class IntegrationsPage {
    get searchInput() { return cy.get('input[type="search"]')}
    get gitHubLink() { return cy.get('a[href="/integrations/github"]') }
    get gitHubTitle() { return cy.contains('h1', 'Github')}

    setSearchInput(text) {
        this.searchInput.clear().type(text, { delay: 50 })
    }

    clickSetUp() {
        this.gitHubLink.should('be.visible', { timeout: 30000 })
        this.gitHubLink.click()
    }

}
export default new IntegrationsPage()