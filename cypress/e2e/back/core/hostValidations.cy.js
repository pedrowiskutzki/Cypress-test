/// <reference types="cypress" />

let token;
let bodyAPI = {};
let id;
let responseStatus;

const url = "http://localhost:8082/hosts";

describe('Validating qualification functionality - Scenarios positives and negatives', () => {
    ;[
        { scenario: 'Sending Host create method', method: 'POST', useAuthentication: false, url: url, requestWithParam: false, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending Host with all mandatory fields except os and om', method: 'POST', useAuthentication: false, url: url, requestWithParam: false, expectedStatusCode: 400, assertResponse: expectErrorOperation },
        { scenario: 'Sending Host with an existing host name', method: 'POST', useAuthentication: false, url: url, requestWithParam: false, expectedStatusCode: 400, assertResponse: expectErrorOperationSameHostName },
    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;
            const callUrl = getUrlByMethod(data, id);

            switch (data.scenario) {
                case 'Sending Host create method':
                    // Ler o JSON diretamente do arquivo usando o Cypress
                    cy.readFile('cypress/fixtures/core/host/bodyHost.json').then((dataBody) => {
                        bodyAPI = dataBody;
                        const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
                        cy.log(`bodyAPI = ${logbodyAPI}`);

                        cy.req(data.method, data.url, requestToken, bodyAPI).then((respReq) => {
                            expect(data.expectedStatusCode).to.deep.equal(respReq.statusCod);

                            data.assertResponse(cy, respReq, data.expectedRetBody);
                        });
                        cy.screenshot({ capture: 'fullPage' });
                    });
                    break

                case 'Sending Host with all mandatory fields except os and om':

                    cy.readFile('cypress/fixtures/core/host/bodyHostNoOsMb.json').then((dataBody) => {
                        bodyAPI = dataBody;
                        const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
                        cy.log(`bodyAPI = ${logbodyAPI}`);

                        cy.req(data.method, data.url, requestToken, bodyAPI).then((respReq) => {
                            expect(data.expectedStatusCode).to.deep.equal(respReq.statusCod);

                            data.assertResponse(cy, respReq);
                        });
                        cy.screenshot({ capture: 'fullPage' });
                    });
                    break

                case 'Sending Host with an existing host name':

                    cy.readFile('cypress/fixtures/core/host/bodyHost.json').then((dataBody) => {
                        bodyAPI = dataBody;
                        const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
                        cy.log(`bodyAPI = ${logbodyAPI}`);

                        cy.req(data.method, data.url, requestToken, bodyAPI).then((respReq) => {
                            expect(data.expectedStatusCode).to.deep.equal(respReq.statusCod);

                            data.assertResponse(cy, respReq, data.expectedRetBody);
                        });
                        cy.screenshot({ capture: 'fullPage' });
                    });
                    break

                default:
                    break;
            }
        });
    });
});

function expectSuccessOperation(cy, respReq) {
    expect(respReq.retBody).to.have.property('id');
    cy.wrap(respReq.retBody.id).as('newId');
    cy.get('@newId').then((newId) => {
        id = newId;
    });
};

function expectErrorOperation(cy, respReq) {
    expect(respReq.retBody).to.have.property('status');
    expect(respReq.retBody).to.have.property('title');

    expect(respReq.retBody.status).to.deep.equal(400);
    expect(respReq.retBody.title).to.deep.equal("Invalid arguments.");
};

function expectErrorOperationSameHostName(cy, respReq) {
    expect(respReq.retBody).to.have.property('status');
    expect(respReq.retBody).to.have.property('title');

    expect(respReq.retBody.status).to.deep.equal(400);
    expect(respReq.retBody.title).to.deep.equal("Host already exists.");
};

function getUrlByMethod(data, id) {
    return `${data.url}`;
};
