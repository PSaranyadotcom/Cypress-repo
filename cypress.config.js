const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    video: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    setupNodeEvents(on, config) {
      // plugin support (optional)
    },
  },
});
