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

describe('Generating mass of data to send Summmary request', () => {
  ;[
    { scenario: 'Sending Region create method', method: 'POST', useAuthentication: false, url: `${url}/regions`, sendingdata: bodyRegionCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationRegion },
    { scenario: 'Sending Sites create method', method: 'POST', useAuthentication: false, url: `${url}/sites`, sendingdata: bodySiteCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationSites },
    { scenario: 'Sending Suppliers create method', method: 'POST', useAuthentication: false, url: `${url}/suppliers`, sendingdata: bodySupplierCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationSuppliers },
    { scenario: 'Sending Vendors create method', method: 'POST', useAuthentication: false, url: `${url}/vendors`, sendingdata: bodyVendorCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationVendors },
    { scenario: 'Sending Tags create method', method: 'POST', useAuthentication: false, url: `${url}/tag`, sendingdata: bodyTagCreate, expectedStatusCode: 201, assertResponse: expectSuccessOperationTags },
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
        cy.writeFile(`cypress/fixtures/analysis/summary/bodySummary.json`, {
          "limit": 0,
          "offset": 0,
          "sortColumn": "string",
          "sortOrder": "string",
          "platformId": idPlatform,
          "active": true,
          "siteId": idSites,
          "supplierId": idSuppliers,
          "vendorId": idVendors,
          "regionId": idRegions,
          "tagId": idTag,
          "torreId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "ips": [
            faker.internet.ip()
          ]
        }),

          cy.screenshot({ capture: 'fullPage' });
      });
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
  cy.wrap(respReq.retBody.id).as('newIdTags');

  cy.get('@newIdTags').then((newIdTags) => {
    idTag = newIdTags;
  });
};
