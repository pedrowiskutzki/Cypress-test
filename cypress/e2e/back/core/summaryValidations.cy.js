/// <reference types="cypress" />

let token;
let bodyAPI = {};
let id;
let responseStatus;

const url = "http://localhost:8084/summary";

describe('Validating qualification functionality - Scenarios positives and negatives', () => {
  ;[
    { scenario: 'Sending Summary create method', method: 'POST', useAuthentication: false, url: url, requestWithParam: false, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
  ].forEach(data => {

    it(`Scenario - ${data.scenario}`, function () {
      const requestToken = data.useAuthentication ? token : undefined;
      const callUrl = getUrlByMethod(data, id);

      switch (data.scenario) {
        case 'Sending Summary create method':
          // Ler o JSON diretamente do arquivo usando o Cypress
          cy.readFile('cypress/fixtures/analysis/summary/bodySummary.json').then((data) => {
            bodyAPI = data;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req('POST', callUrl, requestToken, bodyAPI).then((respReq) => {
              expect(respReq.statusCode).to.deep.equal(data.expectedStatusCode);

              data.assertResponse(cy, respReq);
            });
            cy.screenshot({ capture: 'fullPage' });
          });
          break

        default:
          break
      }

    })
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
  expect(respReq.retBody).to.have.property('messages');
  cy.get('status').then((status) => {
    responseStatus = status;
  });

};

function getUrlByMethod(data, id) {
  return `${data.url}`;
};
