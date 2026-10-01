import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import IntegrationsPage from '../../pages/IntegrationsPage'
import MainPage from '../../pages/MainPage'

When('I click on {string} menu item', () => {
   MainPage.clickDevelopersBtn()
});

When('I click on {string} option', () => {
    MainPage.clickIntegration()
 })

When('I click on {string} input field', (placeholder) => {
    IntegrationsPage.clickOnInputField(placeholder)
});

When('I search integration for {string}', (text) => {
    IntegrationsPage.setSearchInput(text);
});

When('I click on {string} link', () => {
     IntegrationsPage.clickSetUp()
})

Then('the page should contain {string} heading', () => {
    IntegrationsPage.gitHubTitle.should('be.visible');
});