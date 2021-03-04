
import Faker from 'faker';
import Fs from 'fs';


var data = {};

data.id = faker.name.findName();
data.subject = faker.internet.email();
data.status = faker.internet.email();
data.addedDate = Faker.Date.between(~D[2000-12-20], ~D[2000-12-25]);

fs.writeFile('data.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});