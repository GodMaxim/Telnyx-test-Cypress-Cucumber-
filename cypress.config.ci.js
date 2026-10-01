const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config.js');

module.exports = defineConfig({
  ...baseConfig,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
});