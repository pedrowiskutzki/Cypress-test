/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import DashboardElements from '../elements/dashboard';
import HeaderElements from '../elements/header';

const common = new CommonElements;
const dash = new DashboardElements;
const header = new HeaderElements;

class Header {
    //Verificando a existencia do menu hamburguer
    menu(){
        cy.get(common.menu()).should('be.visible');
    };

    //Verificando existencia da opção assinatura e retornando para dashboard
    pendingSubscriptionsMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.pendingSubscriptionsOption()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/assinaturas');
        cy.get(common.menu()).should('be.visible').click();
        cy.get(common.dashboardOption()).should('be.visible').click();
    };

    writingAssignmentsMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.writingAssignmentsOption()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/redacao');
        cy.get(common.menu()).should('be.visible').click();
        cy.get(common.dashboardOption()).should('be.visible').click();
    };

    consultProcessesMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.consultProcessesOption()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta');
        cy.get(common.menu()).should('be.visible').click();
        cy.get(common.dashboardOption()).should('be.visible').click();
    };

    taskHistoryMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.taskHistoryOption()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/tarefas/ultimas');
        cy.get(common.menu()).should('be.visible').click();
        cy.get(common.dashboardOption()).should('be.visible').click();
    };

    settingsMenu(){
        cy.get(common.menu()).should('be.visible').click();
        cy.xpath(header.settingsOption()).should('be.visible').click();
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/config/sistemas');
        cy.get(common.menu()).should('be.visible').click();
        cy.get(common.dashboardOption()).should('be.visible').click();
    };

    //Verificando a existencia da LOGO
    logo(){
        cy.get(common.logo()).should('be.visible');
    };

    //Verificando a existencia do titulo
    title(){
        cy.get(header.title()).should('have.text', ' Gabinete do Magistrado ');
    };

    //Verificando a existencia e clicando no nome do usuario
    nameUser(){
        cy.get(header.nameUser()).should('have.text', 'SILMAR').click();
    };

    //Verificando a existencia do nome completo do usuario
    nameComplete(){
        cy.xpath(header.nameComplete()).should('have.text', 'SILMAR LIMA CARVALHO');
    };

    //Verificando o botao atualizar os perfis do usuario
    updateUserButton(){
        cy.xpath(header.updateUserButton()).should('be.visible');
    };

    //Selecionar gabinete Vara Única da Comarca de Parelhas
    selectCabinet(){
        cy.get(header.cabinetComarcaParelhas()).select('184827');
    };

    //Selecionar botao sair
    buttonExit(){
        cy.get(dash.nameUser()).click();
        cy.get(header.buttonExit()).should('be.visible').click();
    };
    
    //Realizando consulta de um processo com sucesso, indiferente do Status
    consultProcess(){
        cy.get(header.fieldConsult()).should('be.visible').type('0800363-78.2020.8.20.5123{enter}');
        cy.url().should('eq', 'https://gabinete.stg.pdpj.jus.br/consulta?numero=08003637820208205123');
    };
};

export default new Header();