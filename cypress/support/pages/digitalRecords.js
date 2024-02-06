/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import DigitalRecordsElements from '../elements/digitalRecords';
import WritingElements from '../elements/writing';

const digitalRecords = new DigitalRecordsElements;
const writing = new WritingElements;

class DigitalRecordsPage {

    //Validando autos digitais
    view(){
        cy.xpath(writing.buttonDigitalRecords()).invoke('removeAttr','target').click();
        // cy.get(digitalRecords.fieldMainSubject()).invoke('removeAttr','target').should('be.visible');
        // cy.xpath("//a[@href='http://www.selenium.dev']").invoke('removeAttr','target').click();
        // cy.window().then(win => {
        //     cy.stub(win, 'open').as('windowOpen');
        // });
        // cy.get('@windowOpen').should('be.visible');
    };
};

export default new DigitalRecordsPage();