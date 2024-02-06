/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import IssueElements from '../elements/issue';
import TaskElements from '../elements/task';

const common = new CommonElements;
const issue = new IssueElements;
const task = new TaskElements;

class NewTask {

    //Adicionando Nova tarefa em redação
    addingTaskInWrinting(){
        cy.get(common.buttonNewTask()).should('have.text', 'Nova tarefa').click();
        cy.get(task.numberProcessInWrinting()).should('be.visible').type('0800760-06.2021.8.20.5123');
        cy.get(task.typeOfConclusion()).click();
        cy.get(task.typeUrgentDecisionInWrinting()).click();
        cy.get(common.button()).contains('Criar').should('be.visible').click();
    };

    //Adicionando Nova tarefa de assinaturas
    addingTaskSubscriptionTasks(){
        cy.get(common.buttonNewTask()).should('have.text', 'Nova tarefa').click();
        cy.get(task.numberProcessSubscriptionTasks()).should('be.visible').type('0800760-06.2021.8.20.5123');
        cy.get(task.typeOfConclusion()).click();
        cy.get(task.typeUrgentDecisionSubscriptionTasks()).click();
        cy.get(common.button()).contains('Criar').should('be.visible').click();
    };

    //Cancelando tarefa em redação
    cancelingTaskInWriting(){
        cy.get(task.taskCancel()).should('be.visible').click();
        cy.get(task.buttonCancelTaskInWriting()).should('be.visible').click();
        cy.get(common.button()).contains('Confirmar').should('be.visible').click();
    };

    //Cancelando tarefa de assinaturas
    cancelingSubscriptionTasks(){
        cy.get(task.taskCancel()).should('be.visible').click();
        cy.get(task.buttonCancelSubscriptionTasks()).should('be.visible').click();
        cy.get(common.button()).contains('Confirmar').should('be.visible').click();
    };
};

export default new NewTask();