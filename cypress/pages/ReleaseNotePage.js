class ReleaseNotePage {
    get emailInput() { return cy.get('#release-notes-email')}
    get subscribeBtn() { return cy.get('[data-content="Subscribe"]')}
    get successIcon () { return cy.get('.text-green svg')}
    get filterList() { return cy.get('#product-filter')}
    get resultsContainer() { return cy.get('ul.flex.flex-col.list-none.p-0.m-0', { timeout: 20000 })}

    setEmailInput(email) {
          cy.intercept('POST', '**/ingest').as('analyticsIngest');
          cy.wait('@analyticsIngest', { timeout: 20000 }).then(() => {
            this.emailInput.clear().type(email, { delay: 50 });
    })
  
  this.emailInput.should('have.value', email);
}

    clickSubscribe() {
        this.subscribeBtn.click()
    }

    chooseOptionFromFilter(optionName) {
        cy.wait(2000);
        this.filterList.should('be.visible', { timeout: 30000 }).click();
        this.filterList.should('have.attr', 'data-state', 'open');
        cy.get('[data-radix-popper-content-wrapper]', { timeout: 20000 })
        .should('be.visible')
        .contains(optionName)
        .click();
    }
}

export default new ReleaseNotePage()