class ConsultationProcessesElements {
    fieldConsultProcessHeader           = () => { return 'body > app-root > dashboard > app-layout > div > header > barra-principal > div > div.direita > div > input' };
    fieldConsultProcessMenu             = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.consulta-processo.ng-star-inserted > form > label > input' };
    fieldConsultProcessDigitMenu        = () => { return '/html/body/app-root/consulta-processo/app-layout/div/main/div[2]/form/input[1]' };
    fieldConsultProcessYearMenu         = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.consulta-processo.ng-star-inserted > form > input:nth-child(3)' };
    fieldConsultProcessJtrMenu          = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.consulta-processo.ng-star-inserted > form > input:nth-child(4)' };
    fieldConsultProcessForumMenu        = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.consulta-processo.ng-star-inserted > form > input:nth-child(5)' };
    copyToClipboard                     = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.resultado.ng-star-inserted > div > processo-card > div > div > div.numero > botao-clipboard > i' };
    openDigitalRecords                  = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.resultado.ng-star-inserted > div > processo-card > div > div > div.numero > span > a' };
    messageNoProcessFound               = () => { return 'body > app-root > consulta-processo > app-layout > div > main > div.resultado.ng-star-inserted > div > em' };
    logo                                = () => { return 'body > app-root > consulta-processo > app-layout > div > header > div > a > img' };
    urgentSubscription                  = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[3]' };
    withLegalPriority                   = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[4]' };
    stoppedForMoreThan100days           = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[5]' };
    otherFiles                          = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[6]' };
    panel                               = () => { return 'body > app-root > dashboard > app-layout > div > main > div > div.col2 > dashboard-item > div > div.title > div' };
    schedule                            = () => { return 'body > app-root > dashboard > app-layout > div > main > div > div.col3 > dashboard-item > div > div.title > div' };
    urgent                              = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[4]' };
    returnedForCorrection               = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[5]' };
    withLegalPriorityInWriting          = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[6]' };
    stoppedForMoreThan100daysInWriting  = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[7]' };
};

export default ConsultationProcessesElements;
