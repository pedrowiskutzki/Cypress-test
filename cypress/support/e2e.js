import './api_commands';
import './gui_commands';
import 'cypress-xpath';
import '@bahmutov/cy-api/support';
import 'cypress-plugin-api';
import 'cypress-mochawesome-reporter/register';
import 'cypress-iframe';
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
return false
})