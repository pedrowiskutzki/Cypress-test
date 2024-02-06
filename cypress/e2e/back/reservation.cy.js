/// <reference types="cypress" />
import { body_ReservaVivo1 } from '../../fixtures/reservation/body_ReservaVivo1';

let token;
const body1 = body_ReservaVivo1;
let bodyAPI = {};

const url = "http://10.11.187.35:8500/omtmfgw-services/v4/serviceOrder";
             
//GET token
beforeEach(() => {
    cy.fixture('token-stg').then(arr => token = arr);
});

describe('Validating reservation functionality - Scenarios positives and negatives', () => {
    ;[        
        //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (Dedicada)
        { scenario: 'Sending reservation (vivo 1) Dedicated', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (On Demand)
        // { scenario: 'Sending reservation (vivo 1) On Demand', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (Transito)
        // { scenario: 'Sending reservation (vivo 1) Transito', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (Flex)
        // { scenario: 'Sending reservation (vivo 1) Flex', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (Light)
        // { scenario: 'Sending reservation (vivo 1) Light', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (Nacional)
        // { scenario: 'Sending reservation (vivo 1) Nacional', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Sucesso - Vivo 1 (Internacional)
        // { scenario: 'Sending reservation (vivo 1) Internacional', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Sucesso - Vivo 2
        // { scenario: 'Sending reservation (vivo 1) Sucesso', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},
        // //Reserva de Recurso - GPON  - Dupla Cobertura Dentro de SP
        // { scenario: 'Sending reservation (vivo 1) Dupla Cobertura Dentro de SP', method: 'POST', useAuthentication: true, url: url, sendingdata: body1, expectedStatusCode: 201},

    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;
            //const callUrl = getUrlByMethod(data, id);
           
            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

             cy.req(data.method, url, requestToken, bodyAPI).then((respReq) => {
                 cy.wait(2000)
                 expect(respReq.statusCod).to.deep.equal(data.expectedStatusCode);
                
            //     //Consulta de disponibilidade Vivo1
            //     if (data.scenario === 'Sending availability request (vivo1) and saving id and externalId') {
            //         data.assertResponse(cy, respReq, data.expectedRetBody);
            //     }
            //     else if (data.scenario === 'Sending request with Id and checking return data available ports (vivo1)') {
                   
            //     }
            //     else if (data.scenario === 'Sending request with externalId and checking return data available ports (vivo1)') {
                   
            //     }                
             });
            cy.screenshot();
        });
    });
});

function expectStandardOperation(cy, respReq, expectResp) {
    cy.comparaRet(respReq.restBody, expectResp);   
};

// function getUrlByMethod(data, id) {
//     if (['Sending request with Id and checking return data available ports (vivo1)', 'Sending request with Id and checking return data available ports (vivo2)','Sending a request with Id and checking the return data when the speed is greater than available', 'Sending a request with Id and checking the return data when the area is not covered (vivo1)', 'Sending a request with Id and checking the return data when the area is not covered (vivo2)', 'Sending a request with Id and checking the return data without available ports (vivo1)', 'Sending a request with Id and checking the return data without available ports (vivo2)'].includes(data.scenario) && data.requestWithParam) {
//         return `${data.url}/${id}`;
//     }
//     else if (['Sending request with externalId and checking return data available ports (vivo1)', 'Sending request with externalId and checking return data available ports (vivo2)', 'Sending a request with externalId and checking the return data when the speed is greater than available', 'Sending a request with externalId and checking the return data when the area is not covered (vivo1)', 'Sending a request with externalId and checking the return data when the area is not covered (vivo2)', 'Sending a request with externalId and checking the return data without available ports (vivo1)', 'Sending a request with externalId and checking the return data without available ports (vivo2)'].includes(data.scenario) && data.requestWithParam) {
//         return `${data.url}/${id}_${id2}.svccomponent[0].Qualifier[0].primaryaddressqualification[0].availabilitycheck[0]`;
//     }
//     else if (data.method === 'PATCH' && data.requestWithParam) {
//         return `${data.url}/${id}`;
//     }
//     return data.url;
// };