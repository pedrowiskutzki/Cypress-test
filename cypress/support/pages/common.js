/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import CommonElements from '../elements/common';
import WritingElements from '../elements/writing';
import DashboardElements from '../elements/dashboard';
import HeaderElements from '../elements/header';
import IssueElements from '../elements/issue';

const common = new CommonElements;
const writing = new WritingElements;
const dash = new DashboardElements;
const header = new HeaderElements;
const issue = new IssueElements;

class CommonPage {
    //Verificando a existencia da LOGO
    imageLogo(){
        cy.get(common.logo()).should('be.visible');
    };
};

export default new CommonPage();