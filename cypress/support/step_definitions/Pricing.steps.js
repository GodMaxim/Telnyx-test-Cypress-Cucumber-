import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';
import PricingPage from '../../pages/PricingPage';

When('I click on {string} button in navigation menu', () => {
    MainPage.clickPricingBtn()
});

When('I click on {string} in Pricing menu', () => {
    MainPage.clickPricingLik()
})

When('I select {string}', () => {
    PricingPage.clickPricingNumbers()
});

When('I scroll to rates {string} section', () => {
    PricingPage.ratesTitle.scrollIntoView();
});

When('I verify the {string} switcher is clickable', () => {
    PricingPage.currencyFilter.should('be.visible').and('not.be.disabled');
});

When('I change the currency to {string}', () => {
    PricingPage.changeCurrency();
});

Then('the prices should be displayed in EUR', () => {
    PricingPage.priceColumnCells.should('contain.text', '€', { timeout: 30000 })
});