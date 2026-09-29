import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';

When('I scroll to the footer', () => {
  MainPage.footer.scrollIntoView();
})

Then('the {string} link should point to {string}', (url) => {
  cy.get(`a[href="${url}"]`).should('be.visible').and('have.attr', 'href', url);
});