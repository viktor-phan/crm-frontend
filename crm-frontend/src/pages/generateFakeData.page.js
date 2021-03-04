import React from "react";
import { Row, Button, Container, Col } from "react-bootstrap";
import Faker from "faker";
export const GenerateFakeData = () => {
  let data = [];
  const genrateFake = () => {
    let entity = { id: "", subject: "", status: "", addedDate: "" };
    entity.id = Faker.random.number().toString();
    entity.subject = Faker.name.firstName() + " " + Faker.name.lastName();
    entity.status = Faker.company.catchPhrase();
    entity.addedDate =
      Faker.random.number({
        min: 2010,
        max: 2021,
      }).toString() + "-" +
      Faker.random.number({
        min: 1,
        max: 12,
      }).toString() + "-" +
      Faker.random.number({
        min: 1,
        max: 31,
      }).toString();

   
    return entity;
  };
  return (
    <Container>
      <Row>
        <Col>
          <Button
            onClick={() => {
              data.push(genrateFake());
              
              
              let dict =JSON.stringify(data);
              console.log(dict);
            }}
          >
            Add fake data
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
