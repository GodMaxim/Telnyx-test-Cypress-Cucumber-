import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CommunicationPage from '../../pages/CommunicationPage';

When('I search for number {string}', (country) => {
    CommunicationPage.setSearchNumber(country);
});

Then('{string} should be displayed in the results', (countryName) => {
    CommunicationPage.getCountryElement(countryName).should('be.visible')
});
