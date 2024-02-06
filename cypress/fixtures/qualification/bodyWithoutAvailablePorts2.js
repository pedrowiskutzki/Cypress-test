import faker from 'faker-br';
import Fake from 'faker-br/lib/fake';

export const bodyWithoutAvailablePorts2 = {
  "externalId": faker.random.uuid(),
  "provideAlternative": true,
  "instantSyncQualification": false,
  "provideUnavailabilityReason": true,
  "relatedParty": [
    {
      "id": "SPO-TT123460-069",
      "role": "AccessDesignator"
    },
    {
      "id": "72.081.554/0001-41",
      "role": "FiscalCode"
    },
    {
      "id": "CUS001",
      "role": "Customer",
      "name": "ACME"
    },
    {
      "id": "ACC001",
      "role": "Account",
      "name": "ACME Account 1"
    },
    {
      "id": "GOLD",
      "role": "Segmento"
    },
    {
      "id": "SP",
      "role": "LocalidadeCliente"
    },
    {
      "name": "ServiceNowTask",
      "role": "SistemaOrigem"
    }
  ],
  "serviceQualificationItem": [
    {
      "id": "vini395a-1d06-11ee-be56-0242ac120245",
      "service": {
        "serviceCharacteristic": [
          {
            "name": "place",
            "valueType": "object",
            "value": [
              {
                "@type": "UrbanPropertyAddress",
                "id": "OSB7:04601060:11000:58984:332:::::::::0:20230227100480",
                "city": "SAO PAULO",
                "stateOrProvince": "SP",
                "streetCode": "58984",
                "streetName": "RITA JOANA DE SOUSA",
                "streetNr": "332",
                "telephonicArea": "BE",
                "cnl": "11000",
                "cnlAcronym": "SPO",
                "postCode": "04601060",
                "locality": "BROOKLIN NOVO",
                "network_owner": "VIVO2",
                "geographicSubAddress": []
              }
            ]
          },
          {
            "name": "TipoServico",
            "valueType": "string",
            "value": "INTERNET_DEDICADA"
          },
          {
            "name": "CategoriaServico",
            "valueType": "string",
            "value": "FLEX"
          },
          {
            "name": "NaturezaOrdem",
            "valueType": "string",
            "value": "Alta"
          },
          {
            "name": "Tecnologia",
            "valueType": "string",
            "value": "GPON"
          },
          {
            "name": "VelocidadeMaxima",
            "valueType": "string",
            "value": "50"
          },
          {
            "name": "TipoVelocidadeMaxima",
            "valueType": "string",
            "value": "Megabits"
          },
          {
            "name": "AlteraRoteador",
            "valueType": "boolean",
            "value": "true"
          }
        ],
        "serviceSpecification": {
          "name": "Internet"
        }
      }
    }
  ]
}