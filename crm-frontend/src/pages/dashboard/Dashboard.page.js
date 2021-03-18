import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Link } from "react-router-dom";
import { fetchAllTickets } from "../ticket-listing/ticketsAction";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState();

  useEffect(()=>{
    dispatch(fetchAllTickets())
  }, [str, dispatch])
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
            <Link to="/add-ticket">
              <Button variant="info" style={{ fontSize: "2rem" }}>
                Add new Ticket
              </Button>
            </Link>
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
            <TicketTable/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
