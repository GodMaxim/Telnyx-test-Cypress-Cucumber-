import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';

When('I scroll to the footer', () => {
  MainPage.footer.scrollIntoView();
})

Then('the {string} link should point to {string}', (social, url) => {
  let socialLinkElement;
  
  switch (social.toLowerCase()) {
    case 'linkedin':
      socialLinkElement = MainPage.linkedInLink;
      break;
    case 'x':
      socialLinkElement = MainPage.xLink;
      break;
    case 'facebook':
      socialLinkElement = MainPage.facebookLink;
      break;
    default:
      throw new Error(`Unknown social network: ${social}`);
  }

  socialLinkElement
    .should('be.visible', { timeout: 20000 })
    .and('have.attr', 'href', url);
});