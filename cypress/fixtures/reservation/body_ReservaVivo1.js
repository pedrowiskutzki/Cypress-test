import faker from 'faker-br';
import Fake from 'faker-br/lib/fake';

var idSPO = "MCK-SF000"+faker.random.number(99)+"-069";
var ORDER_DATE = "COM:TMF641:"+faker.random.number(99)+"-069";
var randomInt = faker.random.number(99);
var BroadbandDesignator = "MCK-SF000"+faker.random.number(99)+"-069";
var CU = "CUS000"+faker.random.number(99);

export const body_ReservaVivo1 = {
    "@type": "MSOServiceOrder",
    "@baseType": "ServiceOrder",
    "externalId": faker.random.uuid(),
    "category": "Internet",
    "externalReference": [
        {
            "externalReferenceType": "EngTask",
            "id": faker.random.number(99)
        }
    ],
    "relatedParty": [
        {
            "id": ORDER_DATE,
            "role": "CommercialOfferId"
        },
        {
            "id": randomInt,
            "role": "CommercialOrderId"
        },
        {
            "id": idSPO,
            "role": "AccessDesignator"
        },
		{
            "id": BroadbandDesignator,
            "role": "BroadbandDesignator"
        },
        {
            "id": CU,
            "role": "Customer",
            "name": "ACME MOCK"
        },
        {
            "id": "ACC000"+ idSPO,
            "role": "Account",
            "name": "MOCK Account" + idSPO
        },
        {
            "id": "72.081.554/0001-41",
            "role": "FiscalCode"
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
            "id": "B2B",
            "role": "TipoCliente"
        }
    ],
    "serviceOrderItem": [
        {
            "id": "serviceOrderItem_ID1",
            "action": "add",
            "service": {
                "id": idSPO,
                "category": "Reserva",
                "serviceSpecification": {
                    "id": "Internet"
                },
                "serviceCharacteristic": [
					{
						"name": "place",
						"valueType": "object",
						"value": [
						{
								"@type": "UrbanPropertyAddress",
								"id": "OSB7:04563061:11000:67164:340:::::::::0:20230810112725",
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
								"network_owner":"VIVO1",
								"geographicSubAddress": [
								]
							}
						]
					},
				    {
                        "name": "CategoriaServico",
						"valueType": "string",
                        "value": "Light"
                    },
					{
						"name": "Tecnologia",
						"valueType": "string",
						"value": "GPON"
					},
					{
						"name": "NaturezaOrdem",
						"valueType": "string",
						"value": "Alta"
					},
					{
						"name": "TipoVelocidadeDown",
						"valueType": "string",
						"value": "Megabits"
					},
					{
						"name": "TipoVelocidadeUp",
						"valueType": "string",
						"value": "Megabits"
					},
					{
						"name": "TipoServico",
						"valueType": "string",
						"value": "INTERNET_DEDICADA"
					},
					{
						"name": "TipoRoteadorCliente",
						"valueType": "string",
						"value": "Proprio"
					},
					{
						"name": "VelocidadeDown",
						"valueType": "string",
						"value": "50"
					},
					{
						"name": "VelocidadeUp",
						"valueType": "string",
						"value": "50"
					}
                ]
            }
        }
    ] 
}