import faker from 'faker-br';
import Fake from 'faker-br/lib/fake';

export const bodyQualification1 = {
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
      "name": "EngTask",
      "role": "SistemaOrigem"
    }
  ],
  "serviceQualificationItem": [
    {
      "id": "395a-1d06-11ee-be56-0242ac120245",
      "service": {
        "serviceCharacteristic": [
          {
            "name": "place",
            "valueType": "object",
            "value": [
              {
                "@type": "UrbanPropertyAddress",
                "id": "OSB7:04563061:11000:67164:340:::::::::0:20230705112721",
                "city": "SAO PAULO",
                "stateOrProvince": "SP",
                "streetCode": "67164",
                "streetName": "AVENIDA CONCEICAO DE MONTE ALEGRE",
                "streetNr": "340",
                "telephonicArea": "BE",
                "cnl": "11000",
                "cnlAcronym": "SPO",
                "postCode": "04563061",
                "locality": "SAO PAULO",
                "centralOffice": "BE",
                "network_owner": "VIVO1",
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