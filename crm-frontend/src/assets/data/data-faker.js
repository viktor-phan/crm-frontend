
import Faker from 'faker';
import { number, string } from 'prop-types';
import data from "./dummy-tickets.json"

let entity = {
  "id": number,
  "subject": string,
  "status": string,
  "addedDate": string
}
entity.id = faker.name.findName();
entity.subject = faker.internet.email();
entity.status = faker.internet.email();
entity.addedDate = Faker.Date.between(~D[2000-12-20], ~D[2000-12-25]);

data.push(entity);