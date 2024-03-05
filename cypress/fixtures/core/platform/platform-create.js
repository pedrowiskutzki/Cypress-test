import faker from 'faker-br';

export const body_platformCreate = {
  "name": faker.name.firstName(),
  "description": faker.name.firstName(),
  "torre": {
    "id": "94aa756c-2d00-41a6-9475-699293406660"
  }
}