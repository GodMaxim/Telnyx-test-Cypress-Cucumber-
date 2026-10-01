const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config.js');

module.exports = defineConfig({
  ...baseConfig,
  e2e: {
    ...(baseConfig.e2e || {}),
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});