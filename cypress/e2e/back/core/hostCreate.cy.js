/// <reference types="cypress" />

import { body_hostCreate } from '../../../fixtures/core/host/host-create';

let token;
let bodyAPI = {};
const bodyHostCreate = body_hostCreate;

let id;

const url = "http://192.168.1.18:8082/hosts";

describe('Validating qualification functionality - Scenarios positives and negatives', () => {
    ;[
        { scenario: 'Sending Vendor create method', method: 'POST', useAuthentication: false, url: url, requestWithParam: false, sendingdata: bodyHostCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperation },

    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;
            const callUrl = getUrlByMethod(data, id);

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(data.method, callUrl, requestToken, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(data.expectedStatusCode);
                   
                data.assertResponse(cy, respReq, data.expectedRetBody);
                
            });
            cy.screenshot({capture: 'fullPage'});
        });
    });
});

function expectSuccessOperation(cy, respReq, expectResp) {
    expect(respReq.retBody).to.have.property('id');
    cy.wrap(respReq.retBody.id).as('newId');
    cy.get('@newId').then((newId) => {
        id = newId;
    });
};

function getUrlByMethod(data, id) {
    return `${data.url}`;
};