/// <reference types="cypress" />

import { body_regionCreate } from '../../../fixtures/core/region/region-create';
import { body_siteCreate } from '../../../fixtures/core/site/site-create';
import { body_supplierCreate } from '../../../fixtures/core/supplier/supplier-create';
import { body_vendorCreate } from '../../../fixtures/core/vendor/vendor-create';

let bodyAPI = {};
const bodyRegionCreate = body_regionCreate;
const bodySiteCreate = body_siteCreate;
const bodySupplierCreate = body_supplierCreate;
const bodyVendorCreate = body_vendorCreate;

let idRegions;
let idSites;
let idSuppliers;
let idVendors;

const url = "http://192.168.1.18:8082";

describe('Generating mass of data to send HOST request', () => {
    ;[
        { scenario: 'Sending Region create method', method: 'POST', useAuthentication: falso, url: `${url}/regions`, sendingdata: bodyRegionCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending Sites create method', method: 'POST', useAuthentication: falso, url: `${url}/sites`, sendingdata: bodySiteCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending Suppliers create method', method: 'POST', useAuthentication: falso, url: `${url}/suppliers`, sendingdata: bodySupplierCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperation },
        { scenario: 'Sending Vendors create method', method: 'POST', useAuthentication: falso, url: `${url}/vendors`, sendingdata: bodyVendorCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperation },

    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(data.method, data.url, requestToken, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(data.expectedStatusCode);
                data.assertResponse(cy, respReq, data.expectedRetBody);
                cy.writeFile(`cypress/fixtures/core/host/bodyHost.js`, {
                        "name": faker.name.firstName(),
                        "site": {
                            "id": idSites
                        },
                        "region": {
                            "id": idRegions
                        },
                        "vendor": {
                            "id": idVendors
                        },
                        "supplier": {
                            "id": idSuppliers
                        },
                        "platform": {
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                        },
                        "sitePosition": faker.system.fileName(),
                        "managementBoard": {
                            "distribution": {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                            },
                            "template": {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                            },
                            "active": true,
                            "templatesCustom": [
                                {
                                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                                }
                            ],
                            "snmpIpAddress": faker.internet.ip(),
                            "snmpVersion": faker.name.firstName(),
                            "snmpCommunity": faker.name.firstName(),
                            "snmpContextName": faker.system.fileName(),
                            "snmpSecurityName": faker.system.fileName(),
                            "snmpSecurityLevel": "AUTHPRIV",
                            "snmpAuthProtocol": faker.system.fileName(),
                            "snmpAuthPassphrase": faker.system.fileName(),
                            "snmpPrivacyProtocol": faker.system.fileName(),
                            "snmpPrivacyPassphrase": faker.system.fileName()
                        },
                        "operatingSystem": {
                            "distribution": {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                            },
                            "template": {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                            },
                            "active": true,
                            "templatesCustom": [
                                {
                                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                                }
                            ],
                            "sshIpAddress": "",
                            "sshUsername": "string",
                            "sshPassword": "string",
                            "snmpIpAddress": "252254255255",
                            "snmpVersion": "",
                            "snmpCommunity": "string",
                            "snmpContextName": "string",
                            "snmpSecurityName": "string",
                            "snmpSecurityLevel": "AUTHPRIV",
                            "snmpAuthProtocol": "string",
                            "snmpAuthPassphrase": "string",
                            "snmpPrivacyProtocol": "string",
                            "snmpPrivacyPassphrase": "string"
                        },
                        "dracoActiveServicesMonitoring": {
                            "active": true,
                            "directory": "string",
                            "minute": 59,
                            "hour": 23,
                            "dailyFrequency": 0,
                            "interval": 0
                        },
                        "filesMonitoring": [
                            {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                "name": "string",
                                "directory": "string",
                                "fileRegex": "string",
                                "hourCheck": 0,
                                "active": true,
                                "minSize": 0,
                                "minSizeSeverity": "CLEAR",
                                "maxSize": 0,
                                "maxSizeSeverity": "CLEAR",
                                "amountFiles": 0,
                                "amountFilesSeverity": "CLEAR"
                            }
                        ],
                        "haProxyMonitoring": {
                            "active": true,
                            "minute": 59,
                            "hour": 23,
                            "dailyFrequency": 0,
                            "interval": 0,
                            "reverseLogic": true,
                            "limit1": 80,
                            "limit2": 80
                        },
                        "huaweiNCEMonitoring": {
                            "name": "string",
                            "directory": "string",
                            "active": true
                        },
                        "tags": [
                            {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                            }
                        ]
                    }
                );
            });
            cy.screenshot({ capture: 'fullPage' });
        });
    });
});

function expectSuccessOperation(cy, respReq, expectResp) {
    expect(respReq.retBody).to.have.property('id');
    cy.wrap(respReq.retBody.id).as('newIdRegions');
    cy.wrap(respReq.retBody.id).as('newIdSites');
    cy.wrap(respReq.retBody.id).as('newIdSuppliers');
    cy.wrap(respReq.retBody.id).as('newIdVendors');
    cy.get('@newIdRegions').then((newIdRegions) => {
        idRegions = newIdRegions;
    });
    cy.get('@newIdSites').then((newIdSites) => {
        idSites = newIdSites;
    });
    cy.get('@newIdSuppliers').then((newIdSuppliers) => {
        idSuppliers = newIdSuppliers;
    });
    cy.get('@newIdVendors').then((newIdVendors) => {
        idVendors = newIdVendors;
    });
};