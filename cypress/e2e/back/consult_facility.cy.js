/// <reference types="cypress" />

let token;

const url = "http://10.11.187.35:8500/tmf-api/serviceInventory/v4/service";

//GET token
before(() => {
    cy.fixture('token-stg').then(arr => token = arr);
});

describe('Validating qualification functionality - Scenarios positives and negatives', () => {
    ;[
        //Designador Reservado – Legada
        { scenario: 'Sending availability request (vivo1) and reservation designator', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00006-069/serviceTree`, expectedStatusCode: 200},
        { scenario: 'Sending availability request (vivo2) and reservation designator', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00007-069/serviceTree`, expectedStatusCode: 200},
        //Designador Alocado Planta Externa – Legada
        { scenario: 'Sending availability request (vivo1) and external plant allocation', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00008-069/serviceTree`, expectedStatusCode: 200},
        { scenario: 'Sending availability request (vivo2) and external plant allocation', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00009-069/serviceTree`, expectedStatusCode: 200},
        //Designador Alocado Planta IP – Legada
        { scenario: 'Sending availability request (vivo1) and IP plant allocation', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00010-069/serviceTree`, expectedStatusCode: 200},
        { scenario: 'Sending availability request (vivo2) and IP plant allocation', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00011-069/serviceTree`, expectedStatusCode: 200},
        //Designador Alocado Planta Interna – Legada
        { scenario: 'Sending availability request (vivo1) and indoor plant allocation', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF000A001-069/serviceTree`, expectedStatusCode: 200},
        { scenario: 'Sending availability request (vivo2) and indoor plant allocation', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF000A001-069/serviceTree`, expectedStatusCode: 200},
        //Designador Alocado Instalado – Legada
        { scenario: 'Sending availability request (vivo1) and Installed Allocated Designator', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF000254-069/serviceTree`, expectedStatusCode: 200},
        { scenario: 'Sending availability request (vivo2) and Installed Allocated Designator', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF000254-069/serviceTree`, expectedStatusCode: 200},
        //Designador Alocado Configurado CPE – Legada
        { scenario: 'Sending availability request (vivo1) and CPE Configured Allocated Designator', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00016-069/serviceTree`, expectedStatusCode: 200},
        { scenario: 'Sending availability request (vivo2) and CPE Configured Allocated Designator', method: 'GET', useAuthentication: true, url: `${url}/MCK-SF00016-069/serviceTree`, expectedStatusCode: 200},
        
    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;

            cy.req(data.method, data.url, requestToken).then((respReq) => {
                expect(data.expectedStatusCode).to.deep.equal(respReq.statusCod);
                
                //Designador Reservado – Legada
                if (data.scenario === 'Sending availability request (vivo1) and reservation designator') {
                    data.assertResponse(cy, respReq, data.expectedRetBody);
                }
                else if (data.scenario === 'Sending availability request (vivo2) and reservation designator') {
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
                //Designador Alocado Planta Externa – Legada
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
            });
            cy.screenshot();
        });
    });
});
