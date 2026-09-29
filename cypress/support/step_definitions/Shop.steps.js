import { When, Then, After } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage'
import ShopPage from '../../pages/ShopPage'
import CommunicationPage from '../../pages/CommunicationPage';

When('I open the shop page via Global Communication', () => {
    MainPage.clickGlobalCommunications()
    CommunicationPage.clickShopBtn();
    cy.url({ timeout: 30000 }).should('include', 'shop.telnyx.com');
});

When('I search for someitem {string}', (item) => {
    ShopPage.searchSomeItem(item);
});

Then('the product card should be visible', () => {
    ShopPage.cardIsVisible();
});

When('I select country {string}', (country) => {
    ShopPage.selectCountry(country);
});

Then('the prices should be displayed in Ukrainian Hryvnia', () => {
    cy.get('.price', { timeout: 15000 })
    .should('be.visible')
    .and('contain', '₴')
});

After(() => {
    cy.visit('/')
});