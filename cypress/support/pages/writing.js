/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import WritingElements from '../elements/writing';
import DashboardElements from '../elements/dashboard';
import HeaderElements from '../elements/header';
import IssueElements from '../elements/issue';

const common = new CommonElements;
const writing = new WritingElements;
const dash = new DashboardElements;
const header = new HeaderElements;
const issue = new IssueElements;

class WritingPage {

    //Realizando consulta de um processo com sucesso pelo header
    processesSuccessfully(){
        cy.get(writing.fieldConsultProcessHeader()).should('be.visible').type('0800363-78.2020.8.20.5123{enter}');
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta?numero=08003637820208205123');
        cy.get(writing.copyToClipboard()).should('be.visible');
        cy.get(writing.openDigitalRecords()).should('be.visible');
    };

    //Realizando consulta de um processo com sucesso pelo menu
    processesSuccessfullyMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.consultProcessesOption()).should('be.visible').click();
        cy.get(writing.fieldConsultProcessMenu()).should('be.visible').type('0800363');
        cy.xpath(writing.fieldConsultProcessDigitMenu()).should('be.visible').type('78');
        cy.get(writing.fieldConsultProcessYearMenu()).should('be.visible').type('2020');
        cy.get(writing.fieldConsultProcessJtrMenu()).should('be.visible').type('8.20');
        cy.get(writing.fieldConsultProcessForumMenu()).should('be.visible').type('5123');
        cy.get(common.button()).contains('Pesquisar').should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta');
        cy.get(writing.copyToClipboard()).should('be.visible');
        cy.get(writing.openDigitalRecords()).should('be.visible');
    };

    //Realizando consulta de varios processo com sucesso pelo menu
    processesSuccessfullyMenuAll(){
        cy.get(common.button()).contains('Limpar').should('be.visible').click();
        cy.get(writing.fieldConsultProcessMenu()).should('be.visible').type('0800363');
        cy.get(common.button()).contains('Pesquisar').should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta');
        cy.get(writing.copyToClipboard()).should('be.visible');
        cy.get(writing.openDigitalRecords()).should('be.visible');
    };

    //Realizando consulta de um processo invalido
    processesInvalid(){
        cy.get(common.logo()).should('be.visible').click();
        cy.get(writing.fieldConsultProcessHeader()).should('be.visible').type('1111111-11.1111.1.11.1111{enter}');
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta?numero=11111111111111111111');
        cy.get(writing.messageNoProcessFound()).should('have.text', 'Nenhum processo encontrado');
    };

    //Acessar pagina com os processo Judiciais no Gabinete - PENDENTES DE ASSINATURA
    accessPendingSubscriptionsPage(){
        cy.xpath(dash.signaturePending()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/assinaturas');
    };

    //Acessar pagina com os processo Judiciais no Gabinete - EM REDACAO
    accessPage(){
        cy.xpath(dash.inWriting()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/redacao');
    };

    //Abas (Assinatura, Redação e Histórico)
    validatingTabsOnTheSubscriptionTasksPage(){
        cy.get(issue.subscriptionText()).should('have.text', 'Assinatura');
        cy.get(issue.inWritingText()).should('have.text', 'Redação');
        cy.get(issue.historicText()).should('have.text', 'Histórico');
    };

    //Validar “Botão "Nova tarefa" na aba Assinatura
    buttonNewIssueTabSubscription(){
        cy.get(issue.logo()).should('be.visible').click();
        cy.xpath(writing.urgentSubscription()).should('be.visible').click();
        cy.get(issue.buttonSubscription()).should('have.text', 'Nova tarefa');
    };

    //Validar “formas de visualização das tarefas" na aba Assinatura
    viewFormIssueSubscription(){
        cy.get(issue.logo()).should('be.visible').click();
        cy.xpath(issue.pendingSubscription()).should('be.visible').click();
        cy.get(issue.viewFormIssue()).should('be.visible').click();
    };

    //Validar funcionalidade "Minutar em lote"
    viewButtonBatchMinute(){
        cy.get(writing.optionBatchMinute()).should('be.visible');
    };

    //Validar funcionalidade "Encaminhar selecionadas para assinatura"
    viewButtonForwardSelectedForSignature(){
        cy.get(writing.optionForwardSelectedForSignature()).should('be.visible');
    };

    //Validar funcionalidade "Mover selecionadas para uma pasta"
    viewMoveSelectedToAFolder(){
        cy.get(writing.optionMoveSelectedToAFolder()).should('be.visible');
    };

    //Validar os botoes "Encaminhar para assinatura"
    viewButtons(){
        cy.xpath(writing.buttonToSign()).should('be.visible');
    };
};

export default new WritingPage();