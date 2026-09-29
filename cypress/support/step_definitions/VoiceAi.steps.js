import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';
import VoiceAIPage from '../../pages/VoiceAiPage'

When('I open the Voice AI page', () => {
  MainPage.clickProducts()
  MainPage.clickVoiceAILink()
  cy.url({ timeout: 30000 }).should('include', 'voice-ai-agents');
  VoiceAIPage.VoiceApiTitle.should('be.visible', { timeout: 30000 })
})

When('I switch the page language to French', () => {
  VoiceAIPage.switchToFrench();
  cy.url({ timeout: 25000 }).should('include', '/fr');
});


Then('the initial cost should be {string}', (price) => {
  VoiceAIPage.cost.should('contain.text', price, { timeout: 35000 })
});

When('I select {string} add-on', (addonName) => {
  switch (addonName) {
    case 'Premium third-party':
      VoiceAIPage.clickPremiumThirdParty();
      break;
    case 'Call recording':
      VoiceAIPage.clickCallRecording();
      break;
    case 'SMS follow-up':
      VoiceAIPage.clickSMSFollow();
      break;
    default:
      throw new Error(`Unknown add-on: ${addonName}`);
  }
});

Then('the estimated cost should contain {string}', (text) => {
   VoiceAIPage.costTable.should('contain.text', text, { timeout: 35000 });
});

Then('the final cost should be {string}', (expectedPrice) => {
  VoiceAIPage.cost.should('contain.text', expectedPrice, { timeout: 35000 })
});