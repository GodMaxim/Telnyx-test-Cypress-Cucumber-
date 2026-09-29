class LogInPage {
    get title() { return cy.get('[data-testid="login.signin.title"]')}
    get resendBtn() { return cy.get('a[href="https://portal.telnyx.com/#/login/resend-email"]')}
    get emailInput () { return cy.get('input[name="email"]') }
    get submitBtn () { return cy.get('button[type="submit"]') }
    get successMessage () { return cy.get('div.MuiAlert-root[role="alert"]') }
    get errorMessage() { return cy.get('[data-testid="ErrorOutlineIcon"]')}
    get sendLink() { return cy.contains('button', 'Send me sign-in link') }
 
    clickResend() {
        this.resendBtn.click()
    }

    fillEmailInput(email) {
        this.emailInput.clear().type(email)
    }

    resendEmail(email) {
        this.emailInput.clear().type(email)
        this.submitBtn.click()
    }
}
export default new LogInPage()