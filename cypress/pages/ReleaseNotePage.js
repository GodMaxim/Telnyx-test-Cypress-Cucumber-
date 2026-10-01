class ReleaseNotePage {
    get emailInput() { return cy.get('#release-notes-email', { timeout: 30000 })}
    get subscribeBtn() { return cy.get('button[type="submit"]', { timeout: 30000 })}
    get successIcon () { return cy.get('.text-green svg', { timeout: 30000 })}
    get filterList() { return cy.get('#product-filter', { timeout: 30000 })}
    get resultsContainer() { return cy.get('ul.flex.flex-col.list-none.p-0.m-0', { timeout: 20000 })}
    get dropdownOption() { return cy.get('[data-radix-popper-content-wrapper]', { timeout: 20000 })}
    get subLink() { return cy.get('a[href="/rss.xml"]', { timeout: 20000 })}
    get footer() { return cy.get('#site-footer', { timeout: 20000 })}

    setEmailInput(email) {
        cy.wait(1000)
        this.emailInput.should('be.visible').and('not.be.disabled');
        this.emailInput.click()
        this.emailInput.type(email)
        this.emailInput.should('have.value', email)
    }

    clickSubscribe() {
        this.subscribeBtn.should('not.be.disabled').click();
    }

    chooseOptionFromFilter(optionName) {
        this.filterList.should('be.visible').click();
        this.filterList.should('have.attr', 'data-state', 'open');
        this.dropdownOption
        .should('be.visible')
        .contains(optionName)
        .click()
}

}
export default new ReleaseNotePage()