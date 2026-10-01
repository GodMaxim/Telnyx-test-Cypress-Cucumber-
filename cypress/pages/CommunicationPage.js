class CommunicationPage {
    get searchInput() { return cy.get('input[type="search"]')}
    get shopBtn () { return cy.get('#site-footer a[href="https://shop.telnyx.com/"]') }
    get releaseNotesLink() {  return cy.get('#site-footer a[href="/release-notes"]:visible', { timeout: 20000 })}

    getCountryElement(countryName) { 
        return cy.contains('span', countryName, { timeout: 20000 }).filter(':visible')}

     setSearchNumber(country) {
        this.searchInput.clear().type(country)
    }

    clickShopBtn() {
        this.shopBtn.scrollIntoView();
        this.shopBtn.invoke('removeAttr', 'target').click()
    }

  clickReleaseNote() {
    this.releaseNotesLink.click()
    }

}
export default new CommunicationPage()