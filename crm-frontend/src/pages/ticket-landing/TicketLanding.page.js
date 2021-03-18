import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { Link, useParams } from "react-router-dom";


export const TicketLanding = () => {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = () => {
    alert("need API");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page={`Ticket  /  ${ticket.id}`} />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="id">ID: {ticket.id}</div>
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="status">Status: {ticket.status}</div>
          <div className="date">Date: {ticket.addedDate}</div>
        </Col>
        <Col className="text-right">
          <Link to="/tickets">
            <Button variant="outline-info">Close Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>

      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
          />
        </Col>
      </Row>
    </Container>
  );
};
