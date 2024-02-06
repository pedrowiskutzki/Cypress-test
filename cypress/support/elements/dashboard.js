class DashboardElements {
    nameUser                            = () => { return 'body > app-root > dashboard > app-layout > div > header > userinfo > div > button > span.mat-button-wrapper > span' };
    process                             = () => { return 'body > app-root > dashboard > app-layout > div > main > div > div.col1 > dashboard-item > div > div.title > div' };
    signaturePending                    = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[2]' };
    urgentSubscription                  = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[3]/text()' };
    withLegalPriority                   = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[4]/text()' };
    stoppedForMoreThan100days           = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[5]/text()' };
    otherFiles                          = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[1]/div[6]/text()' };
    panel                               = () => { return 'body > app-root > dashboard > app-layout > div > main > div > div.col2 > dashboard-item > div > div.title > div' };
    schedule                            = () => { return 'body > app-root > dashboard > app-layout > div > main > div > div.col3 > dashboard-item > div > div.title > div' };
    inWriting                           = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[3]' };
    urgent                              = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[4]/text()' };
    returnedForCorrection               = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[5]/text()' };
    withLegalPriorityInWriting          = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[6]/text()' };
    stoppedForMoreThan100daysInWriting  = () => { return '/html/body/app-root/dashboard/app-layout/div/main/div/div[1]/dashboard-item/div/div[2]/div[2]/div[7]/text()' };
}

export default DashboardElements;
