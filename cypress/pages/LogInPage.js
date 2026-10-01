class LogInPage {
    get emailInput () { return cy.get('input[name="email"]') }
    get submitBtn () { return cy.get('button[type="submit"]') }
    get successMessage () { return cy.get('div.MuiAlert-root[role="alert"]', { timeout: 30000 }) }
    get errorMessage() { return cy.get('[data-testid="ErrorOutlineIcon"]', { timeout: 30000 })}

    fillEmailInput(email) {
        this.emailInput.clear().type(email)
    }

    resendEmail(email) {
        this.emailInput.clear().type(email)
        this.submitBtn.click()
    }
}
export default new LogInPage()