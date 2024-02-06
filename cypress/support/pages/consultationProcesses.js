/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import ConsultationProcessesElements from '../elements/consultationProcesses';
import DashboardElements from '../elements/dashboard';
import HeaderElements from '../elements/header';
import IssueElements from '../elements/issue';

const common = new CommonElements;
const consultProcesses = new ConsultationProcessesElements;
const dash = new DashboardElements;
const header = new HeaderElements;
const issue = new IssueElements;

class ConsultationProcesses {
    //Realizando consulta de um processo com sucesso pelo header
    processesSuccessfully(){
        cy.get(consultProcesses.fieldConsultProcessHeader()).should('be.visible').type('0800363-78.2020.8.20.5123{enter}');
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta?numero=08003637820208205123');
        cy.get(consultProcesses.copyToClipboard()).should('be.visible');
        cy.get(consultProcesses.openDigitalRecords()).should('be.visible');
    };

    //Realizando consulta de um processo com sucesso pelo menu
    processesSuccessfullyMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.consultProcessesOption()).should('be.visible').click();
        cy.get(consultProcesses.fieldConsultProcessMenu()).should('be.visible').type('0800363');
        cy.xpath(consultProcesses.fieldConsultProcessDigitMenu()).should('be.visible').type('78');
        cy.get(consultProcesses.fieldConsultProcessYearMenu()).should('be.visible').type('2020');
        cy.get(consultProcesses.fieldConsultProcessJtrMenu()).should('be.visible').type('8.20');
        cy.get(consultProcesses.fieldConsultProcessForumMenu()).should('be.visible').type('5123');
        cy.get(common.button()).contains('Pesquisar').should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta');
        cy.get(consultProcesses.copyToClipboard()).should('be.visible');
        cy.get(consultProcesses.openDigitalRecords()).should('be.visible');
    };

    //Realizando consulta de varios processo com sucesso pelo menu
    processesSuccessfullyMenuAll(){
        cy.get(common.button()).contains('Limpar').should('be.visible').click();
        cy.get(consultProcesses.fieldConsultProcessMenu()).should('be.visible').type('0800363');
        cy.get(common.button()).contains('Pesquisar').should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta');
        cy.get(consultProcesses.copyToClipboard()).should('be.visible');
        cy.get(consultProcesses.openDigitalRecords()).should('be.visible');
    };

    //Realizando consulta de um processo invalido
    processesInvalid(){
        cy.get(common.logo()).should('be.visible').click();
        cy.get(consultProcesses.fieldConsultProcessHeader()).should('be.visible').type('1111111-11.1111.1.11.1111{enter}');
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta?numero=11111111111111111111');
        cy.get(consultProcesses.messageNoProcessFound()).should('have.text', 'Nenhum processo encontrado');
    };

    //Acessar pagina com os processo Judiciais no Gabinete - PENDENTES DE ASSINATURA
    accessPendingSubscriptionsPage(){
        cy.xpath(dash.signaturePending()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/assinaturas');
    };

    //Acessar pagina com os processo Judiciais no Gabinete - EM REDACAO
    accessPageInWriting(){
        cy.xpath(dash.inWriting()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/redacao');
    };

    //Abas (Assinatura, Redação e Histórico)
    validatingTabsOnTheSubscriptionTasksPage(){
        cy.get(issue.subscriptionText()).should('have.text', 'Assinatura');
        cy.get(issue.inWritingText()).should('have.text', 'Redação');
        cy.get(issue.historicText()).should('have.text', 'Histórico');
    };

    //Validar “Botão "Nova tarefa" na aba Redação
    buttonNewIssueTabWriting(){
        cy.get(issue.buttonWriting()).should('have.text', 'Nova tarefa');  
    };

    //Validar “Botão "Nova tarefa" na aba Assinatura
    buttonNewIssueTabSubscription(){
        cy.get(issue.logo()).should('be.visible').click();
        cy.xpath(consultProcesses.urgentSubscription()).should('be.visible').click();
        cy.get(issue.buttonSubscription()).should('have.text', 'Nova tarefa');
    };

    //Validar “formas de visualização das tarefas" na aba Redação
    viewOptions(){
        cy.xpath(issue.viewFormIssue()).should('be.visible').click();
        cy.xpath(issue.optionViewByTypeOfConclusion()).should('be.visible').click();
        cy.xpath(issue.viewFormIssue()).should('be.visible').click();
        cy.xpath(issue.optionViewByTypeFolder()).should('be.visible').click();
        cy.xpath(issue.viewFormIssue()).should('be.visible').click();
        cy.xpath(issue.optionViewByTypeHangTags()).should('be.visible').click();
        cy.xpath(issue.viewFormIssue()).should('be.visible').click();
        cy.xpath(issue.optionViewByTypeProceduralClass()).should('be.visible').click();
        cy.xpath(issue.viewFormIssue()).should('be.visible').click();
        cy.xpath(issue.optionViewByTypeGeneral()).should('be.visible').click();
    };

    //Validar tipos de busca na aba Redação
    viewSearchOptions(){
        cy.get('select').select('Processo').should('have.value', 'PROCESSO');
        cy.get('select').select('Parte').should('have.value', 'NOME_PARTE');
        cy.get('select').select('Assunto').should('have.value', 'ASSUNTO_PRINCIPAL');
        cy.get(issue.buttonSearch()).should('be.visible');
    };

    //Validar “formas de visualização das tarefas" na aba Assinatura
    viewFormIssueSubscription(){
        cy.get(issue.logo()).should('be.visible').click();
        cy.xpath(issue.pendingSubscription()).should('be.visible').click();
        cy.get(issue.viewFormIssue()).should('be.visible').click();
    };

    //Validar checkbox selecionar todos
    viewCheckSelectAll(){
        cy.get(common.checkSelectAll()).should('be.visible');
    };



    //Validar funcionalidade"Assinar em lote" na aba Assinatura
    clickCheckboxBatchSign(){
        cy.xpath(issue.optionViewByType()).should('be.visible').click();
        cy.xpath(issue.optiondecision()).should('be.visible').click();
        cy.xpath(issue.checkboxBatchSign()).should('be.visible').click();
        cy.xpath(issue.signSelected()).should('be.visible');
    };

    //Validar funcionalidade "devolver em lote"
    viewReturnInBatch(){
        cy.xpath(issue.returnInBatch()).should('be.visible');
    };

    //Validar os botoes "Assinar, Conferir, Devolver, Autos, Marketplace e cancelar" na aba Assinatura
    viewButtonsTabSign(){
        cy.get(issue.buttonSign()).should('be.visible');
        cy.get(issue.buttonCheck()).should('be.visible');
        cy.get(issue.buttonGiveBack()).should('be.visible');
        cy.get(issue.buttonDigitalRecords()).should('be.visible');
        cy.get(issue.buttonMarketplacePDPJ()).should('be.visible');
        cy.get(issue.buttonCancelTask()).should('be.visible');
        cy.get(issue.fieldDocumentType()).should('be.visible');
        cy.get(issue.fieldConclusion()).should('be.visible');
        cy.get(issue.buttonEdit()).should('be.visible');
        cy.get(issue.buttonLoad()).should('be.visible');
        cy.get(issue.buttonDelete()).should('be.visible');
        cy.get(issue.buttonMovements()).should('be.visible');
        // cy.get(issue.buttonComments()).should('be.visible');
    };
};

export default new ConsultationProcesses();