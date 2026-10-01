import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';

When('I scroll to {string} section', () => {
  MainPage.worloadSection.scrollIntoView();
})

Then('the monthly price should be {string}', (expectedPrice) => {
  MainPage.price.should('contain.text', expectedPrice);
});

When('I set {string} to {string}', (fieldName, value) => {
  MainPage.price.invoke('text').then((text) => {
        previousPrice = text;
    });

  switch (fieldName) {
    case 'Conversations per month':
      MainPage.setConvesationsPerMinute(value);
      break;
    case 'Average mins per conversation':
      MainPage.setAverageMins(value);
      break;
    case 'SMS follow-ups per conversation':
      MainPage.setSMSNumber(value);
      break;
    default:
      throw new Error(`Unknown field: ${fieldName}`);
  }
  
  Then('the monthly price should change', () => {
    MainPage.verifyPriceChanged(previousPrice);
  })

});