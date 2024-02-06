/// <reference types="cypress" />

import { bodyQualification1 } from '../../fixtures/qualification/bodyQualification1';
import { bodyQualification2 } from '../../fixtures/qualification/bodyQualification2';
import { bodyHigherSpeed } from '../../fixtures/qualification/bodyHigherSpeed';
import { bodyNoCoverageVivo1 } from '../../fixtures/qualification/bodyNoCoverageVivo1';
import { bodyNoCoverageVivo2 } from '../../fixtures/qualification/bodyNoCoverageVivo2';
import { bodyWithoutAvailablePorts1 } from '../../fixtures/qualification/bodyWithoutAvailablePorts1';
import { bodyWithoutAvailablePorts2 } from '../../fixtures/qualification/bodyWithoutAvailablePorts2';

let token;
let bodyAPI = {};
const body1 = bodyQualification1;
const body2 = bodyQualification2;
const body_Speed = bodyHigherSpeed;
const body_NoCoverageVivo1 = bodyNoCoverageVivo1;
const body_NoCoverageVivo2 = bodyNoCoverageVivo2;
const body_WithoutAvailablePorts1 = bodyWithoutAvailablePorts1;
const body_WithoutAvailablePorts2 = bodyWithoutAvailablePorts2;
let id;
let id2;

const url = "http://10.11.187.35:8500/tmf-api/serviceQualificationManagement/v4/checkServiceQualification";
const urlGET = 'http://10.11.187.35:8080/v2/omtenant/services';

//GET token
beforeEach(() => {
    cy.fixture('token-stg').then(arr => token = arr);
});

describe('Validating qualification functionality - Scenarios positives and negatives', () => {
    ;[
        //Consulta de disponibilidade Vivo1
        { scenario: 'Sending availability request (vivo1) and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body1, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending request with Id and checking return data available ports (vivo1)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending request with externalId and checking return data available ports (vivo1)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        //Consulta de disponibilidade Vivo2
        { scenario: 'Sending availability request (vivo2) and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body2, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending request with Id and checking return data available ports (vivo2)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending request with externalId and checking return data available ports (vivo2)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        //Enviando requisição com velocidade maior que a disponível para validar exceção
        { scenario: 'Sending a request with a desired speed greater than that available and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body_Speed, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending a request with Id and checking the return data when the speed is greater than available', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending a request with externalId and checking the return data when the speed is greater than available', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        //Consulta em área sem cobertura (Vivo 1)
        { scenario: 'Sending a request in an area without coverage (vivo1) and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body_NoCoverageVivo1, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending a request with Id and checking the return data when the area is not covered (vivo1)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending a request with externalId and checking the return data when the area is not covered (vivo1)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        //Consulta em área sem cobertura (Vivo 2)
        { scenario: 'Sending a request in an area without coverage (vivo2) and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body_NoCoverageVivo2, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending a request with Id and checking the return data when the area is not covered (vivo2)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending a request with externalId and checking the return data when the area is not covered (vivo2)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        //Consulta de disponibilidade (Vivo1) SP, porém sem portas disponiveis
        { scenario: 'Sending an availability request (vivo1) SP, but without available ports and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body_WithoutAvailablePorts1, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending a request with Id and checking the return data without available ports (vivo1)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending a request with externalId and checking the return data without available ports (vivo1)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        //Consulta de disponibilidade (Vivo2) SP, porém sem portas disponiveis
        { scenario: 'Sending an availability request (vivo2) SP, but without available ports and saving id and externalId', method: 'POST', useAuthentication: true, url: url, requestWithParam: false, sendingdata: body_WithoutAvailablePorts2, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending a request with Id and checking the return data without available ports (vivo2)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },
        { scenario: 'Sending a request with externalId and checking the return data without available ports (vivo2)', method: 'GET', useAuthentication: true, url: urlGET, requestWithParam: true, expectedStatusCode: 200 },

    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;
            const callUrl = getUrlByMethod(data, id);

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(data.method, callUrl, requestToken, bodyAPI).then((respReq) => {
                cy.wait(2000)
                expect(respReq.statusCod).to.deep.equal(data.expectedStatusCode);
                
                //Consulta de disponibilidade Vivo1
                if (data.scenario === 'Sending availability request (vivo1) and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending request with Id and checking return data available ports (vivo1)') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('qualified');
                }
                else if (data.scenario === 'Sending request with externalId and checking return data available ports (vivo1)') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][6]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('100');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('1048576');
                    expect(state).to.deep.equal('available')
                }
                //Consulta de disponibilidade Vivo2
                else if (data.scenario === 'Sending availability request (vivo2) and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending request with Id and checking return data available ports (vivo2)') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('qualified');
                }
                else if (data.scenario === 'Sending request with externalId and checking return data available ports (vivo2)') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][7]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('100');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('2213888');
                    expect(state).to.deep.equal('available')
                }
                //Enviando requisição com velocidade maior que a disponível para validar exceção
                else if (data.scenario === 'Sending a request with a desired speed greater than that available and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending a request with Id and checking the return data when the speed is greater than available') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('unqualified');
                }
                else if (data.scenario === 'Sending a request with externalId and checking the return data when the speed is greater than available') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][6]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('100');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('1048576');
                    expect(state).to.deep.equal('available')
                }
                //Consulta em área sem cobertura (Vivo 1)
                else if (data.scenario === 'Sending a request in an area without coverage (vivo1) and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending a request with Id and checking the return data when the area is not covered (vivo1)') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('unqualified');
                }
                else if (data.scenario === 'Sending a request with externalId and checking the return data when the area is not covered (vivo1)') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][6]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('0');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('1048576');
                    expect(state).to.deep.equal('unavailable')
                }
                //Consulta em área sem cobertura (Vivo 2)
                else if (data.scenario === 'Sending a request in an area without coverage (vivo2) and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending a request with Id and checking the return data when the area is not covered (vivo2)') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('qualified');
                }
                else if (data.scenario === 'Sending a request with externalId and checking the return data when the area is not covered (vivo2)') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][7]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('100');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('2213888');
                    expect(state).to.deep.equal('available')
                }
                //Enviando requisição com dados válidos para validar retorno com sucesso
                else if (data.scenario === 'Sending an availability request (vivo1) SP, but without available ports and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending a request with Id and checking the return data without available ports (vivo1)') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('unqualified');
                }
                else if (data.scenario === 'Sending a request with externalId and checking the return data without available ports (vivo1)') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][6]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('0');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('1048576');
                    expect(state).to.deep.equal('unavailable')
                }
                // Enviando requisição com velocidade maior que a disponível para validar exceção
                else if (data.scenario === 'Sending an availability request (vivo2) SP, but without available ports and saving id and externalId') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending a request with Id and checking the return data without available ports (vivo2)') {
                    const fiscalCode = respReq.retBody.service.serviceresponse.metadata.relatedparty[1].id;
                    const customer = respReq.retBody.service.serviceresponse.metadata.relatedparty[2].id;
                    const account = respReq.retBody.service.serviceresponse.metadata.relatedparty[3].id;
                    const qualificationstate = respReq.retBody.service.serviceresponse.metadata.qualificationstate;
                    const qualificationresult = respReq.retBody.service.serviceresponse.metadata.qualificationresult;
                    expect(fiscalCode).to.deep.equal('72.081.554/0001-41');
                    expect(customer).to.deep.equal('CUS001');
                    expect(account).to.deep.equal('ACC001');
                    expect(qualificationstate).to.deep.equal('done');
                    expect(qualificationresult).to.deep.equal('unqualified');
                }
                else if (data.scenario === 'Sending a request with externalId and checking the return data without available ports (vivo2)') {
                    const appliedCapacityAmount = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.appliedCapacityAmount;
                    const MAX_BROADBAND_SPEED = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['characteristic'][6]['value'];
                    const state = respReq.retBody.service.serviceresponse.metadata.response.appliedResourceCapacity.resource[0]['state'];
                    expect(appliedCapacityAmount).to.deep.equal('0');
                    expect(MAX_BROADBAND_SPEED).to.deep.equal('1048576');
                    expect(state).to.deep.equal('unavailable')
                }
            });
            cy.screenshot({capture: 'fullPage'});
        });
    });
});

function expectSuccessOperation(cy, respReq, expectResp) {
    expect(respReq.retBody).to.have.property('id');
    expect(respReq.retBody.serviceQualificationItem[0]).to.have.property('id');
    cy.wrap(respReq.retBody.id).as('newId');
    cy.wrap(respReq.retBody.serviceQualificationItem[0].id).as('newId2');
    cy.get('@newId').then((newId) => {
        id = newId;
    });
    cy.get('@newId2').then((newId2) => {
        id2 = newId2;
    });
};

function expectStandardOperation(cy, respReq, expectResp) {
    cy.comparaRet(respReq.restBody, expectResp);
};

function getUrlByMethod(data, id) {
    if (['Sending request with Id and checking return data available ports (vivo1)', 'Sending request with Id and checking return data available ports (vivo2)','Sending a request with Id and checking the return data when the speed is greater than available', 'Sending a request with Id and checking the return data when the area is not covered (vivo1)', 'Sending a request with Id and checking the return data when the area is not covered (vivo2)', 'Sending a request with Id and checking the return data without available ports (vivo1)', 'Sending a request with Id and checking the return data without available ports (vivo2)'].includes(data.scenario) && data.requestWithParam) {
        return `${data.url}/${id}`;
    }
    else if (['Sending request with externalId and checking return data available ports (vivo1)', 'Sending request with externalId and checking return data available ports (vivo2)', 'Sending a request with externalId and checking the return data when the speed is greater than available', 'Sending a request with externalId and checking the return data when the area is not covered (vivo1)', 'Sending a request with externalId and checking the return data when the area is not covered (vivo2)', 'Sending a request with externalId and checking the return data without available ports (vivo1)', 'Sending a request with externalId and checking the return data without available ports (vivo2)'].includes(data.scenario) && data.requestWithParam) {
        return `${data.url}/${id}_${id2}.svccomponent[0].Qualifier[0].primaryaddressqualification[0].availabilitycheck[0]`;
    }
    else if (data.method === 'PATCH' && data.requestWithParam) {
        return `${data.url}/${id}`;
    }
    return data.url;
};