/// <reference types="cypress" />
import faker from 'faker-br';

import { body_platformCreate } from '../../../fixtures/core/platform/platform-create';
import { body_regionCreate } from '../../../fixtures/core/region/region-create';
import { body_siteCreate } from '../../../fixtures/core/site/site-create';
import { body_supplierCreate } from '../../../fixtures/core/supplier/supplier-create';
import { body_tagCreate } from '../../../fixtures/core/tag/tag-create';
import { body_vendorCreate } from '../../../fixtures/core/vendor/vendor-create';

let bodyAPI = {};
const bodyRegionCreate = body_regionCreate;
const bodySiteCreate = body_siteCreate;
const bodySupplierCreate = body_supplierCreate;
const bodyVendorCreate = body_vendorCreate;
const bodyPlatformCreate = body_platformCreate;
const bodyTagCreate = body_tagCreate;


let idRegions;
let idSites;
let idSuppliers;
let idVendors;
let idPlatform;
let idTag;

const url = "http://localhost:8082";

describe('Generating mass of data to send HOST request', () => {
    ;[
        { scenario: 'Sending Region create method', method: 'POST', useAuthentication: false, url: `${url}/regions`, sendingdata: bodyRegionCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationRegion },
        { scenario: 'Sending Sites create method', method: 'POST', useAuthentication: false, url: `${url}/sites`, sendingdata: bodySiteCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationSites },
        { scenario: 'Sending Suppliers create method', method: 'POST', useAuthentication: false, url: `${url}/suppliers`, sendingdata: bodySupplierCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationSuppliers },
        { scenario: 'Sending Vendors create method', method: 'POST', useAuthentication: false, url: `${url}/vendors`, sendingdata: bodyVendorCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationVendors },
        { scenario: 'Sending Platfomrs create method', method: 'POST', useAuthentication: false, url: `${url}/platforms`, sendingdata: bodyPlatformCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationPlatforms },
    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function () {
            const requestToken = data.useAuthentication ? token : undefined;

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(data.method, data.url, requestToken, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(data.expectedStatusCode);
                data.assertResponse(cy, respReq, data.expectedRetBody);
                cy.writeFile(`cypress/fixtures/core/host/bodyHost.json`, {
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
                        "id": idPlatform
                    },
                    "active": true,
                    "sitePosition": faker.system.fileName(),
                    "managementBoard": {
                        "distribution": {
                            "id": "c1385024-0039-4640-a9da-d1266044fa81"
                        },
                        "template": {
                            "id": "30294821-48e3-4707-bf61-9a4c609bc851"
                        },
                        "active": true,
                        "templatesCustom": [
                            {
                                "id": "0a473be1-fd26-4216-bb3e-aee189663e04"
                            }
                        ],
                        "snmpIpAddress": faker.internet.ip(),
                        "snmpVersion": "SNMPv1",
                        "snmpCommunity": faker.name.firstName(),
                        "snmpContextName": "",
                        "snmpSecurityName": "",
                        "snmpSecurityLevel": null,
                        "snmpAuthProtocol": "",
                        "snmpAuthPassphrase": "",
                        "snmpPrivacyProtocol": "",
                        "snmpPrivacyPassphrase": ""
                    },
                    "operatingSystem": {
                        "distribution": {
                            "id": "c1385024-0039-4640-a9da-d1266044fa81"
                        },
                        "template": {
                            "id": "d0a559a4-c8fe-4c1d-b391-850c9ed15486"
                        },
                        "active": true,
                        "templatesCustom": [
                            {
                                "id": "0a473be1-fd26-4216-bb3e-aee189663e04"
                            }
                        ],
                        "sshIpAddress": faker.internet.ip(),
                        "sshUsername": "testessh",
                        "sshPassword": "",
                        "snmpIpAddress": faker.internet.ip(),
                        "snmpVersion": null,
                        "snmpCommunity": "",
                        "snmpContextName": "",
                        "snmpSecurityName": "",
                        "snmpSecurityLevel": null,
                        "snmpAuthProtocol": "",
                        "snmpAuthPassphrase": "",
                        "snmpPrivacyProtocol": "",
                        "snmpPrivacyPassphrase": ""
                    },
                    "dracoActiveServicesMonitoring": null,
                    "filesMonitoring": null,
                    "haProxyMonitoring": null,
                    "tags": [
                        {
                            "id": idTag
                        }
                    ],
                    "huaweiNCEMonitoring": null
                }),

                    cy.writeFile(`cypress/fixtures/core/host/bodyHostNoOsMb.json`, {
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
                            "id": idPlatform
                        },
                        "active": true,
                        "sitePosition": faker.system.fileName(),
                        "dracoActiveServicesMonitoring": null,
                        "filesMonitoring": null,
                        "haProxyMonitoring": null,
                        "huaweiNCEMonitoring": null,
                    }
                    );
            });
            cy.screenshot({ capture: 'fullPage' });
        });
    });
});

function expectSuccessOperationRegion(cy, respReq) {
    expect(respReq.retBody).to.have.property('id');
    cy.wrap(respReq.retBody.id).as('newIdRegions');

    cy.get('@newIdRegions').then((newIdRegions) => {
        idRegions = newIdRegions;
    });

};

function expectSuccessOperationSites(cy, respReq) {
    cy.wrap(respReq.retBody.id).as('newIdSites');

    cy.get('@newIdSites').then((newIdSites) => {
        idSites = newIdSites;
    });
};

function expectSuccessOperationSuppliers(cy, respReq) {
    cy.wrap(respReq.retBody.id).as('newIdSuppliers');

    cy.get('@newIdSuppliers').then((newIdSuppliers) => {
        idSuppliers = newIdSuppliers;
    });
};

function expectSuccessOperationVendors(cy, respReq) {
    cy.wrap(respReq.retBody.id).as('newIdVendors');

    cy.get('@newIdVendors').then((newIdVendors) => {
        idVendors = newIdVendors;
    });
};

function expectSuccessOperationPlatforms(cy, respReq) {
    cy.wrap(respReq.retBody.id).as('newIdPlatfomrs');

    cy.get('@newIdPlatfomrs').then((newIdPlatfomrs) => {
        idPlatform = newIdPlatfomrs;
    });
};

function expectSuccessOperationTags(cy, respReq) {
    cy.wrap(respReq.retBody.name).as('newIdTags');

    cy.get('@newIdTags').then((newIdTags) => {
        idTag = newIdTags;
    });
};
