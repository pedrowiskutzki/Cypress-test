/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import DraftElements from '../elements/draft';
import IssueElements from '../elements/issue';
import TaskElements from '../elements/task';

const common = new CommonElements;
const draft = new DraftElements;
const issue = new IssueElements;
const task = new TaskElements;

class Draft {

    //Adicionando Minuta
    new(){
        const newUrl = "https://gabinete.stg.pdpj.jus.br/tarefas/redacao";
        cy.window().then(win => {
            cy.stub(win, 'open');
        });
        cy.get(draft.buttonNewDraft()).should('be.visible').click();
        cy.window().then(win => {
            win.location.href = newUrl;
        });
        cy.get(draft.buttonCancelDraft()).should('be.visible').click();
    };

    //Editando Minuta
    edit(){
        const newUrl = "https://gabinete.stg.pdpj.jus.br/tarefas/redacao";
        cy.window().then(win => {
            cy.stub(win, 'open');
        });
        cy.get(draft.buttonNewDraft()).should('be.visible').click();
        cy.window().then(win => {
            win.location.href = newUrl;
        });
        cy.window().then(win => {
            cy.stub(win, 'open');
        });
        cy.get(draft.buttonEditDraft()).should('be.visible').click();
        cy.get(draft.buttonCancelDraft()).should('be.visible').click();
    };

    //Cancelando Minuta
    cancel(){
        const newUrl = "https://gabinete.stg.pdpj.jus.br/tarefas/redacao";
        cy.window().then(win => {
            cy.stub(win, 'open');
        });
        cy.get(draft.buttonNewDraft()).should('be.visible').click();
        cy.window().then(win => {
            win.location.href = newUrl;
        });
        cy.get(draft.buttonCancelDraft()).should('be.visible').click();
    };

    //Minutar em lote
    inBatch(){
        cy.get(draft.checkOneDraft()).should('be.visible').click();
        cy.get('#mat-checkbox-1').scrollIntoView()
        cy.get(draft.inBatchDraft()).should('be.visible').click();
        cy.get(draft.typeDocument()).should('be.visible').click();
        cy.get(draft.optionDecsion()).should('be.visible').click();
        cy.get(draft.typeModel()).should('be.visible').click();
        cy.get(draft.optionBlock()).should('be.visible').click();
        cy.get(draft.buttonMoviment()).should('be.visible').click();
        cy.get(draft.fieldMoviment()).should('be.visible').click();
        cy.get(draft.optionMagistrate()).should('be.visible').click();
        cy.wait(1000);
        cy.get(draft.buttonConfirm()).should('be.visible').click();
        cy.get(common.button()).contains('Confirmar').should('be.visible').click();
        cy.get(draft.inBatchDraft()).should('be.visible').click();
        cy.get(common.button()).contains('Cancelar').should('be.visible').click();
    };
};

export default new Draft();