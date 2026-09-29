class MainPage {
    get signUpBtn() {  return cy.get('a[href="/sign-up"] span[data-content="Start building"]') }
    get price () { return cy.contains('dt', 'Telnyx per month').next('dd')}
    get worloadSection() { return cy.contains('h2', 'Price your Voice AI workload') }
    get conversationsPerMinutes() { return cy.get('#workload-conversations')}
    get averageMinsPerConversation() { return cy.get('#workload-minutes')}
    get smsPerConversation() { return cy.get('#workload-smsFollowUps')}
    get footer() { return cy.get('#site-footer')}
    get voiceAiLink() { return cy.get('a[href="/products/voice-ai-agents"]').filter(':visible') }
    get productsBtn () { return cy.contains('button', 'Products')}
    getNavElement(itemName) { return cy.get('#site-header').contains('a[href="/products"]', itemName)}
    get globalCommunicationLink() { return cy.get('#site-footer nav[aria-label="Company footer"] a[href="/global-coverage"]')}
    get logInLink() { return cy.get('#site-header a[href="https://portal.telnyx.com"]:visible')}
    get developersBtn() { return cy.contains('span', 'Developers')}
    get integrationsBtn () { return cy.get('#site-header a[href="/integrations"]:visible')}
    get pricingBtn () { return cy.contains('button', 'Pricing')}
    get pricingLink() { return cy.get('#site-header a[href="/pricing"]:visible')}
    get linkedInLink() { return cy.get('a[href="https://www.linkedin.com/company/telnyx"]')}
    get xLink() { return cy.get('a[href="https://x.com/telnyx"]')}
    get facebookLink() { return cy.get('a[href="https://www.facebook.com/Telnyx/"]')}

    clickSignUp() {
        this.signUpBtn.click()
    }

    setConvesationsPerMinute(value) {
        this.conversationsPerMinutes.clear().type(value)
    }

    setAverageMins(value) {
        this.averageMinsPerConversation.clear().type(value)
    }

    setSMSNumber(value) {
        this.smsPerConversation.clear().type(value)
    }

    clickVoiceAILink() {
        this.voiceAiLink.click();
    }

    clickProducts() {
        this.productsBtn.click();
    }

    clickProductsPage(itemName) {
        this.getNavElement(itemName).click({ force: true })
    }

    clickGlobalCommunications() {
        this.globalCommunicationLink.click()
    }
    
    clickLogInBtn() {
        this.logInLink.invoke('removeAttr', 'target').click()
    }

    clickDevelopersBtn() {
        this.developersBtn.should('be.visible', { timeout: 25000 })
        this.developersBtn.click()
    }

    clickIntegration() {
        this.integrationsBtn.click()
    }

    clickPricingBtn() {
        this.pricingBtn.click()
    }

    clickPricingLik() {
        this.pricingLink.should('be.visible', { timeout: 25000 })
        this.pricingLink.click()
    }

}
export default new MainPage()