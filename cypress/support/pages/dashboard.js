/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import DashboardElements from '../elements/dashboard';
const dash = new DashboardElements;

class Dashboard {

    //Verificando texto da dashboard painel processos
    process(){
        cy.get(dash.process()).should('have.text', 'Processos');
    };

    //Verificando texto da dashboard painel estatistico
    panel(){
        cy.get(dash.panel()).should('have.text', 'Painel estatístico');
    };

    // //Verificando texto da dashboard painel agenda
    // schedule(){
    //     cy.get(dash.schedule()).should('have.text', 'Agenda');
    // };
};

export default new Dashboard();