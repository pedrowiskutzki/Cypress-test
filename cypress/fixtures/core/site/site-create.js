import faker from 'faker-br';
import Fake from 'faker-br/lib/fake';

export const body_siteCreate = {
  "name": faker.name.firstName(),
  "address": faker.name.firstName(),
  "latitude": faker.address.latitude(),
  "longitude": faker.address.longitude()
}