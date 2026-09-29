import {  Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../pages/SignUpPage';

Then('I should be redirected to {string}', (url) => {
  cy.url({ timeout: 15000 }).should('include', url);
});

Then('I should see {string} title', (titleText) => {
  SignUpPage.createAccountTitle.should('be.visible', { timeout: 15000 });
  SignUpPage.createAccountTitle.should('contain.text', titleText);
});