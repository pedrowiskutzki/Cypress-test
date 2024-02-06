class IssueElements {
    logo                            = () => { return 'body > app-root > tarefas > app-layout > div > header > div > a > img' };
    subscriptionText                = () => { return '#mat-tab-link-4 > span' };
    inWritingText                   = () => { return '#mat-tab-link-5 > span' };
    historicText                    = () => { return '#mat-tab-link-3 > span' };
    buttonSubscription              = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > nav > nav-tarefas > div > div.topo > div.nova-tarefa > button > span.mat-button-wrapper > span' };
    viewFormIssue                   = () => { return '//*[@id="mat-select-value-1"]/span' };
    optionViewByTypeGeneral         = () => { return '//*[@id="mat-option-0"]/span'};
    optionViewByTypeOfConclusion    = () => { return '//*[@id="mat-option-1"]/span'};
    optionViewByTypeFolder          = () => { return '//*[@id="mat-option-2"]/span'};
    optionViewByTypeHangTags        = () => { return '//*[@id="mat-option-3"]/span'};
    optionViewByTypeProceduralClass = () => { return '//*[@id="mat-option-4"]/span'};
    checkboxSelectAll               = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-redacao > tarefas-layout > div > nav > nav-tarefas > div > div:nth-child(2) > lista-tarefas > div > div > div.left'};

    checkboxBatchSign           = () => { return '//*[@id="cdk-accordion-child-0"]/div/lista-tarefas/div/div/div[1]'};
    optiondecision              = () => { return '//*[@id="mat-expansion-panel-header-0"]/span[1]/mat-panel-title' };
    signSelected                = () => { return '//*[@id="cdk-accordion-child-0"]/div/lista-tarefas/div/div/div[1]/div/span/button[1]/i' };
    checkInBatch                = () => { return '//*[@id="cdk-accordion-child-0"]/div/lista-tarefas/div/div/div[1]/div/span/button[2]/i' };
    returnInBatch               = () => { return '//*[@id="cdk-accordion-child-0"]/div/lista-tarefas/div/div/div[1]/div/span/button[3]/i' };
    buttonSearch                = () => { return 'tarefas-layout > div > nav > nav-tarefas > div > div.topo > div.filtro > button' };
    buttonSign                  = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > span > button' };
    buttonCheck                 = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button.mat-focus-indicator.mat-tooltip-trigger.btn-conferir.mat-raised-button.mat-button-base.mat-secondary.ng-star-inserted' };
    buttonGiveBack              = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button.mat-focus-indicator.mat-tooltip-trigger.btn-devolver.mat-raised-button.mat-button-base.mat-secondary.ng-star-inserted' };
    buttonDigitalRecords        = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button.mat-focus-indicator.mat-tooltip-trigger.btn-autos-digitais.mat-raised-button.mat-button-base.mat-secondary' };
    buttonMarketplacePDPJ       = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button.mat-focus-indicator.mat-tooltip-trigger.btn-marketplace.mat-raised-button.mat-button-base.mat-secondary' };
    buttonCancelTask            = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.barra-botoes > tarefa-barra-botoes > div > div.barra > button:nth-child(6)' };
    fieldDocumentType           = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.tarefa > div.top > div.comboboxes > div:nth-child(1) > app-autocomplete > form > button > i' };
    fieldConclusion             = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.tarefa > div.top > div.comboboxes > div.muda-conclusao.ng-star-inserted > app-autocomplete > form > button > i' };
    buttonEdit                  = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.tarefa > div.top > div.botoes-edicao.ng-star-inserted > button:nth-child(1) > span.mat-button-wrapper > span' };
    buttonLoad                  = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.tarefa > div.top > div.botoes-edicao.ng-star-inserted > button:nth-child(3) > span.mat-button-wrapper > span' };
    buttonDelete                = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.tarefa > div.top > div.botoes-edicao.ng-star-inserted > button.mat-focus-indicator.mat-tooltip-trigger.mat-stroked-button.mat-button-base.mat-accent.ng-star-inserted > span.mat-button-wrapper > span' };
    buttonMovements             = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.acoes > div > button > span.mat-button-wrapper' };
    buttonComments              = () => { return 'body > app-root > tarefas > app-layout > div > main > tarefas-assinaturas > tarefas-layout > div > div > tarefa-detalhe > div > div.mat-tooltip-trigger.observacao.ng-star-inserted > div > div > button > span.mat-button-wrapper' };
};

export default IssueElements;
