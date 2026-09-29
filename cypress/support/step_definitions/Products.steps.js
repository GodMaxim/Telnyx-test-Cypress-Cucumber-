import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';

When('I open the Products menu', () => {
    MainPage.clickProducts();
})

When('I select {string} from the menu', (item) => {
    MainPage.clickProductsPage(item)
})

When('I select {string} language filter', (lang) => {
    ProductsPage.languageSelect.select(lang.toLowerCase());
})

When('I search for build {string}', (text) => {
    ProductsPage.setSearchInput(text)
})

Then('the search results should contain {string}', (text) => {
    cy.contains(text, { timeout: 20000 }).should('be.visible');
});