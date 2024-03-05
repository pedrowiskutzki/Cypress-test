import faker from 'faker-br';

const name = faker.name.firstName();

export const body_tagCreate = {
  "name": name

}