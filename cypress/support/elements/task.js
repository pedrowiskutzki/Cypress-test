class TaskElements {
    buttonNewTask                       = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-redacao > tarefas-layout > div > nav > nav-tarefas > div > div.topo > div.nova-tarefa > button > span.mat-button-wrapper > span' };
    numberProcessInWrinting             = () => { return '#mat-input-0' };
    numberProcessSubscriptionTasks      = () => { return '#mat-input-2' };
    typeOfConclusion                    = () => { return '#mat-select-value-3' };
    typeUrgentDecisionInWrinting        = () => { return '#mat-option-13' };
    typeUrgentDecisionSubscriptionTasks = () => { return '#mat-option-8' };
    checkUgent                          = () => { return '#mat-checkbox-6 > label > span.mat-checkbox-inner-container' };
    taskCancel                          = () => { return 'tarefas-layout > div > nav > nav-tarefas > div > div:nth-child(2) > lista-tarefas > div > mat-list > mat-list-item:nth-child(4) > span > div' };
    buttonCancelTaskInWriting           = () => { return 'tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button:nth-child(5)' };
    buttonCancelSubscriptionTasks       = () => { return 'tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button:nth-child(6)' };
};

export default TaskElements;
