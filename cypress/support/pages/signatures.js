/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import WritingElements from '../elements/writing';
import DashboardElements from '../elements/dashboard';
import HeaderElements from '../elements/header';
import IssueElements from '../elements/issue';
import SignaturesElements from '../elements/signatures';

const common = new CommonElements;
const writing = new WritingElements;
const dash = new DashboardElements;
const header = new HeaderElements;
const issue = new IssueElements;
const signatures = new SignaturesElements;

class SignaturesPage {

    //Acessar pagina com os processo Judiciais no Gabinete - PENDENTES DE ASSINATURA
    accessPage(){
        cy.xpath(dash.signaturePending()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/assinaturas');
    };

    //Validar funcionalidade "Assinar selecionadas"
    viewButtonSignSignature(){
        cy.get(signatures.optionSignSelected()).should('be.visible');
    };

    //Validar funcionalidade "Conferir selecionadas"
    viewButtonCheckSelected(){
        cy.get(signatures.optionCheckSelected()).should('be.visible');
    };

    //Validar funcionalidade "Devolver selecionadas"
    viewButtonReturnSelected(){
        cy.get(signatures.optionReturnSelected()).should('be.visible');
    };

    //Validar funcionalidade "Mover selecionadas para uma pasta"
    viewButtonMoveSelectedToAFolder(){
        cy.get(signatures.optionMoveSelectedToAFolder()).should('be.visible');
    };

    //Validar os botoes "Assinar, Conferir e devolver minuta"
    viewButtons(){
        cy.get(signatures.buttonToSign()).should('be.visible');
        cy.get(signatures.buttonCheck()).should('be.visible');
        cy.get(signatures.buttonGiveBack()).should('be.visible');
    };
};

export default new SignaturesPage();