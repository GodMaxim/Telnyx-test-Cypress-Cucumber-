import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage'

Then('the URL should contain {string}', (urlPart) => {
  cy.url({ timeout: 25000 }).should('include', urlPart);
})

When('I scroll to {string} title', (titleText) => {
  cy.contains(titleText, { timeout: 30000 }).scrollIntoView().should('be.visible');
});

When('I click on {string} button', (buttonText) => {
  cy.contains('a, button', buttonText, { timeout: 30000 }).click();
});

When('I open the Global Communication page', () => {
    MainPage.clickGlobalCommunications()
    cy.url({ timeout: 30000 }).should('include', 'global-communications');
});