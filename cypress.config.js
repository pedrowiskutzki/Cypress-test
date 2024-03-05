const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  // viewportWidth: 1366,
  // viewportHeight: 768,
  // chromeWebSecurity: false,
  // screenshotsFolder: './cypress/reports/mochawesome-report/assets',
  // videosFolder: './cypress/reports/mocha/assets',
  // reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/mocha',
    overwrite: false,
    html: false,
    json: true,
  },
  // defaultCommandTimeout: 30000,
  // failOnStatusCode: false,
  // pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    experimentalRunAllSpecs: true,
    video: true,
    // baseUrl: 'http://10.11.187.35:8080',
    excludeSpecPattern: [
      'performance*',
      'gobackoldmenu*',
      'header-securityupdate*',
      'tour*',
    ],
  },
})

