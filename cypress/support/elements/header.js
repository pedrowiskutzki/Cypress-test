class HeaderElements {
    pendingSubscriptionsOption  = () => { return '/html/body/app-root/dashboard/app-layout/div/nav/div[2]/a/span[1]' };
    writingAssignmentsOption    = () => { return '/html/body/app-root/dashboard/app-layout/div/nav/div[3]/a/span[1]' };
    consultProcessesOption      = () => { return '/html/body/app-root/dashboard/app-layout/div/nav/div[4]/a/span[1]' };
    taskHistoryOption           = () => { return '/html/body/app-root/dashboard/app-layout/div/nav/div[5]/a/span[1]' };
    settingsOption              = () => { return '/html/body/app-root/dashboard/app-layout/div/nav/div[6]/a/span[1]' };
    title                       = () => { return 'body > app-root > dashboard > app-layout > div > header > barra-principal > div > div.esquerda' };
    fieldConsult                = () => { return 'body > app-root > dashboard > app-layout > div > header > barra-principal > div > div.direita > div > input' };
    nameUser                    = () => { return 'app-layout > div > header > userinfo > div > button > span.mat-button-wrapper > span' };
    nameComplete                = () => { return '//*[@id="mat-menu-panel-0"]/div/mat-list/div/mat-list/mat-list-item/span/span[2]/div/h4' };
    updateUserButton            = () => { return '//*[@id="mat-menu-panel-0"]/div/mat-list/mat-list/div/button/span[1]/i' };
    cabinetComarcaParelhas      = () => { return 'select' };
    buttonExit                  = () => { return 'div > mat-list > mat-action-list > a > span' };
};

export default HeaderElements;
