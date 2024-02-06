import faker from 'faker-br';
import Fake from 'faker-br/lib/fake';

export const body_hostCreate = {
  "name": faker.name.firstName(),
  "site": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "region": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "vendor": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "supplier": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
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