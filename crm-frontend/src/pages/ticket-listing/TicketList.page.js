import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { Link } from "react-router-dom";

export const TicketList = () => {
  const dispatch = useDispatch()

  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState();

  useEffect(() => {

    dispatch(fetchAllTickets())
  }, [str, dispatch]);

  // const handleOnChange = (e) => {
  //   const { value } = e.target;
  //   setStr(value);
  //   searchTicket(value);
  // };

  // const searchTicket = (sttr) => {
  //   const displayTickets = tickets.filter((row) =>
  //     /* Need to chaneg soon */
  //     row.subject.toLowerCase().includes(sttr.toLowerCase())
  //   );
  // };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
