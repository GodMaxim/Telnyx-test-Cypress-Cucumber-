class VoiceAIPage {
    get agentRuntimeTitle() { return cy.contains('h2', 'Configure the environment your agents run in')}
    get VoiceApiTitle() { return cy.contains('h1', 'Voice AI Agents', { timeout: 25000 })}
    get languageSwitcher() {  return cy.get('div.language-switcher-overlay button[aria-label="Select language"]')}
    get frenchOption() {  return cy.contains('span', 'French')}
    get pricingTitle() {  return cy.contains('[role="option"]', 'French').parent()  }
    get seePricingBtn() { return cy.get('a:has(span[data-content="SEE PRICING"])')}
    get estimateYourCostTitle() { return cy.contains('h2', 'Your numbers, itemized')}
    get premiumThirdPartyLabel() { return cy.get('label[for="voice-ai-add-on-premium-third-party"]')}
    get premiumThirdPartyBtn() { return cy.get('#voice-ai-add-on-premium-third-party')}
    get callRecordingBtn() { return cy.get('#voice-ai-add-on-call-recording')}
    get smsFollowUpBtn() { return cy.get('#voice-ai-add-on-sms-follow-up')}
    get costTable() { return cy.get('dl.flex.flex-col.gap-new-sm', { timeout: 35000 }).filter(':visible').first()}
    get cost() { return cy.get('span.typography-h2-mobile.md\\:typography-h2.text-black', { timeout: 35000 }) }

    switchToFrench() {
        this.languageSwitcher.should('be.visible', { timeout: 30000 })
        this.languageSwitcher.find('svg', { timeout: 40000 }).should('exist')
        this.languageSwitcher.click()
        this.frenchOption.click()
    }

    clickPricingBtn() {
        this.seePricingBtn.first().click()
    }

    scrollToEstimateCost() {
        this.estimateYourCostTitle.scrollIntoView()
    }

    clickPremiumThirdParty() {
        this.premiumThirdPartyBtn.click()
        this.premiumThirdPartyLabel.click()
    }

    clickCallRecording() {
        this.callRecordingBtn.click()
    }

    clickSMSFollow() {
        this.smsFollowUpBtn.click()
    }

}
export default new VoiceAIPage()