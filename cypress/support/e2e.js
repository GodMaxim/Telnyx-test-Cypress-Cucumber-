Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Cloudflare Turnstile') || err.message.includes('600010')) {
        return false;
    }

  if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return false;
  }
  
  if (
    err.message.includes('Minified React error #418') ||
    err.message.includes('Minified React error #412') ||
    err.message.includes("Cannot read properties of undefined (reading 'TenantFeatures')")
  ) {
    return false;
  }

  if (err.message.includes("Cannot read properties of null (reading 'postMessage')")) {
    return false;
  }

  if (err.message.includes("Cannot read properties of null (reading 'document')")) {
        return false;
    }

  if (err.message.includes("reading 'sequence'") || err.message.includes("clarity.js")) {
    return false;
  }

  return true;
})

export const hydrated = ($el) => {
    const key = Object.keys($el[0]).find((k) => k.startsWith('__reactProps$'))
    expect(key, 'element is hydrated').to.exist
}

beforeEach(() => {
  cy.setCookie('OptanonAlertBoxClosed', '2026-01-01T00:00:00.000Z');
  cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=Thu+Jan+01+2026+00%3A00%3A00+GMT%2C+version=6.3.0&consentId=11111111-2222-3333-4444-555555555555&interactionCount=1');
  cy.visit('/')

})