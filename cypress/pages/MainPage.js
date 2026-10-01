class MainPage {
    get price () { return cy.contains('dt', 'Telnyx per month').next('dd')}
    get workloadSection() { return cy.contains('h2', 'Price your Voice AI workload',  { timeout: 30000 }) }
    get conversationsPerMinutes() { return cy.get('#workload-conversations', { timeout: 30000 })}
    get averageMinsPerConversation() { return cy.get('#workload-minutes')}
    get smsPerConversation() { return cy.get('#workload-smsFollowUps')}
    get footer() { return cy.get('#site-footer')}
    get voiceAiLink() { return cy.get('a[href="/products/voice-ai-agents"]', ).filter(':visible') }
    get productsBtn () { return cy.contains('button', 'Products', { timeout: 30000 })}
    getNavElement(itemName) { return cy.get('#site-header').contains('a[href="/products"]', itemName)}
    get globalCommunicationLink() { return cy.get('#site-footer nav[aria-label="Company footer"] a[href="/global-coverage"]')}
    get logInLink() { return cy.get('#site-header a[href="https://portal.telnyx.com"]:visible', { timeout: 30000 })}
    get developersBtn() { return cy.contains('span', 'Developers', { timeout: 30000 })}
    get integrationsBtn () { return cy.get('#site-header a[href="/integrations"]:visible', { timeout: 30000 })}
    get pricingBtn () { return cy.contains('button', 'Pricing')}
    get pricingLink() { return cy.get('#site-header a[href="/pricing"]:visible', { timeout: 30000 })}
    get linkedInLink() { return cy.get('a[href="https://www.linkedin.com/company/telnyx"]')}
    get xLink() { return cy.get('a[href="https://x.com/telnyx"]')}
    get facebookLink() { return cy.get('a[href="https://www.facebook.com/Telnyx/"]')}

    scrollToTitle() { 
        this.workloadSection.scrollIntoView()
        this.workloadSection.should('be.visible')
    }

    setConvesationsPerMinute(value) {
        this.conversationsPerMinutes.should('be.visible')
        this.conversationsPerMinutes.should('not.be.disabled')
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
        this.developersBtn.should('be.visible')
        this.developersBtn.click()
    }

    clickIntegration() {
        this.integrationsBtn.should('be.visible')
        this.integrationsBtn.click()
    }

    clickPricingBtn() {
        this.pricingBtn.click()
    }

    clickPricingLik() {
        this.pricingLink.should('be.visible')
        this.pricingLink.click()
    }

    goToMainPage() {
        cy.visit('/')
    }

    verifyPriceChanged(oldPrice) {
        this.price.invoke('text').should((newPrice) => {
        expect(newPrice).to.not.equal(oldPrice);
        expect(newPrice).to.include('$');
    })
}
}
export default new MainPage()