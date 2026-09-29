class CommunicationPage {
    get globalCoverageTitle() { return cy.contains('h2', 'A global carrier that gets better as you grow.')}
    get globalTitle() { return cy.contains('h1', 'Global communications')}
    get searchInput() { return cy.get('input[type="search"]')}
    get shopBtn () { return cy.get('#site-footer a[href="https://shop.telnyx.com/"]') }
    get releaseNotesLink() {  return cy.get('#site-footer a[href="/release-notes"]:visible')}

     setSearchNumber(country) {
        this.searchInput.clear().type(country)
    }

    clickShopBtn() {
        this.shopBtn.scrollIntoView();
        this.shopBtn.then(($el) => {
            $el.removeAttr('target')
            $el[0].click();
            })
    }
    
    verifyCountryIsDisplayed(countryName) {
       cy.contains('span', countryName, { timeout: 20000 }).should('be.visible');
  }

  clickReleaseNote() {
    this.releaseNotesLink.click()
    }

}
export default new CommunicationPage()