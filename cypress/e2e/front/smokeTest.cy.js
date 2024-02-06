/// <reference types="Cypress-xpath" />
/// <reference types="cypress" />

import common from '../../support/pages/common';

describe('Smoke Test', () => {

    beforeEach(() => {
        cy.access('stg');
    });

    it('Validating homePage', () => {
        cy.visit('/activator/jsp/inventory-gui/inventory/inventory.jsp', {failOnStatusCode:false});
        cy.wait(5000)
        cy.get('#lbl1').should('be.visible').click();
        cy.frameLoaded('#ifr3_1');
        cy.iframe('#ifr3_1').find('img [src*="/activator/images/inventory-gui/tree/collapsed.gif"]').should('be.visible').click({ force: true })

        // cy.get('#ifr3_1').then(function($iframe){
        //     let iframebody = $iframe.contents().find('div [src*="/activator/images/inventory-gui/tree/collapsed.gif"]');
        //     cy.wrap(iframebody)
        //     .click({ force: true })
        // })


        // cy.frameLoaded('#ifr3_1');



        // const iframe = cy.get('#ifr3_1')
        //     .its('0')
        //     .should('be.visible')
        //     .then(cy.wrap)

        // iframe.click()


        // cy.iframe('[id="treebody"]')
        //     .find('img')
        // .should('be.visible')
        // .click({force: true})

    });
});