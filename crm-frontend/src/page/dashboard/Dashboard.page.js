import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {TicketTable} from "../../components/ticket-table/TicketTable.comp"
import tickets from "../../assets/data/dummy-tickets.json";
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp"


export const Dashboard = () => {
  return (
    <div>
      <Container>
          <Row>
              <Col>
              <PageBreadcrumb page="Dashboard" />
              </Col>
          </Row>
        <Row>
          <Col className="text-center mt-5 mb-4">
            <Button variant="info" style={{ fontSize: "2rem" }}>
              Add new Ticket
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-4">
            <div>Total tickets: 50</div>
            <div>Pending tickets: 40</div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-4">
            <div>Recently Added Ticket</div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket">
            <TicketTable  tickets={tickets}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
