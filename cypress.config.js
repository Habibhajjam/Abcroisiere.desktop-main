const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportHeight: 790,
  chromeWebSecurity: false,
  responseTimeout: 120000,
  pageLoadTimeout: 120000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: ['*.js', '*.ts'],
  },
})
