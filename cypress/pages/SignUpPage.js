class SignUpPage {
    get createAccountTitle() { return cy.get('h1', { timeout: 30000 })}
}
export default new SignUpPage()