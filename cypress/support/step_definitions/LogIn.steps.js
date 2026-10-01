import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';
import LogInPage from '../../pages/LogInPage';

When('I open the login page', () => {
    MainPage.clickLogInBtn();
    cy.url({ timeout: 25000 }).should('include', 'portal.telnyx.com');
});

Then('the {string} text should be displayed', (text) => {
    cy.contains(text, { timeout: 25000 }).should('be.visible');
});

When('I enter email {string} into the login email field', (email) => {
    LogInPage.fillEmailInput(email)
})

When('I confirm resend verification email by entering email {string} again', (email) => {
    LogInPage.resendEmail(email)
})

Then('I should see the success message', () => {
    LogInPage.successMessage.should('be.visible')
});

Then('the error message {string} should be displayed', () => {
    LogInPage.errorMessage.should('be.visible');
})