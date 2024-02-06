/// <reference types="Cypress" />

Cypress.Commands.add('access', () => {
    cy.visit('/activator/jsf/login/login.jsf?id=om')

    cy.get('input[type=text]').should('be.visible').type(Cypress.env('stgUser').logon, { log: false });
    cy.get('#form\\:password').should('be.visible').type(Cypress.env('stgUser').password, { log: false }).trigger('keydown', {key: 'Enter',});
    cy.get('#form\\:j_idt17 > span').should('be.visible').click();
})