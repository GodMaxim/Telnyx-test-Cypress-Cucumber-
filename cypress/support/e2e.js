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

beforeEach(() => {
  cy.visit('/')

  cy.get('body').then(($body) => {
       cy.get('body').find('#onetrust-accept-btn-handler', { timeout: 20000 }).then(($btn) => {
            if ($btn.length > 0) {
                cy.wrap($btn).click({ force: true });
            }
       })
  })
})