import faker from 'faker-br';
import Fake from 'faker-br/lib/fake';

export const body_regionCreate = {
  "name": faker.name.firstName(),
  "ufs": [
    {
      "id": "0e15011b-8c65-4cab-b670-b3d4606c428e"
    }
  ]
}