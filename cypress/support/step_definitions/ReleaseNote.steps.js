import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ReleaseNotePage from '../../pages/ReleaseNotePage';
import CommunicationPage from '../../pages/CommunicationPage';

When('I open the {string} page', () => {
  CommunicationPage.releaseNotesLink.click();
  cy.url({timeout: 20000}).should('include', 'release-notes');
});

When('I enter a unique email into the email field', () => {
  const uniqueEmail = `telnyx_test_${Date.now()}@gmail.com`;
    ReleaseNotePage.setEmailInput(uniqueEmail);
});

When('I click on the Subscribe button', () => {
  ReleaseNotePage.clickSubscribe();
});

Then('I should see the success icon', () => {
  ReleaseNotePage.successIcon.should('be.visible')
});

When('I choose {string} from the product filter', (optionName) => {
  ReleaseNotePage.chooseOptionFromFilter(optionName);
});

Then('the results should contain {string}', (text) => {
    ReleaseNotePage.resultsContainer.contains(text).should('be.visible')
});