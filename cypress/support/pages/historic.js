/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import WritingElements from '../elements/writing';
import DashboardElements from '../elements/dashboard';
import HeaderElements from '../elements/header';
import HistoricElements from '../elements/historic';
import IssueElements from '../elements/issue';

const common = new CommonElements;
const writing = new WritingElements;
const dash = new DashboardElements;
const header = new HeaderElements;
const historic = new HistoricElements;
const issue = new IssueElements;

class HistoricPage {

    //Acessar pagina historico
    accessPage(){
        cy.xpath(dash.inWriting()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/redacao');
        cy.xpath(historic.tab()).should('be.visible').click();
    };

    //Validar grade com as tabelas "Id, Processo e Data"
    viewGrade(){
        cy.get(historic.grade()).should('be.visible');
    };

    //Validar paginador
    viewPaginator(){
        cy.get(historic.paginator()).should('be.visible');
    };
};

export default new HistoricPage();