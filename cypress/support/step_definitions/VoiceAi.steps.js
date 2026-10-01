import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/MainPage';
import VoiceAIPage from '../../pages/VoiceAiPage'

let initialPriceValue

When('I open the Voice AI page', () => {
  MainPage.clickProducts()
  MainPage.clickVoiceAILink()
  cy.url({ timeout: 30000 }).should('include', 'voice-ai-agents');
  VoiceAIPage.VoiceApiTitle.should('be.visible')
})

When('I switch the page language to French', () => {
  VoiceAIPage.switchToFrench();
  cy.url({ timeout: 25000 }).should('include', '/fr');
});

Then('the initial cost should be {string}', (expectedPrice) => {
  VoiceAIPage.cost.invoke('text').then((text) => {
        initialPriceValue = text.trim().replace('*', '')
        expect(initialPriceValue).to.eq(expectedPrice)
    });
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
   VoiceAIPage.costTable.should('contain.text', text);
});

Then('the final cost should be {string}', (expectedFinalPrice) => {
    VoiceAIPage.cost.invoke('text').should((finalPrice) => {
        const trimmedFinal = finalPrice.trim().replace('*', '');
        expect(trimmedFinal).to.not.equal(initialPriceValue);
        expect(trimmedFinal).to.eq(expectedFinalPrice);
    });
});