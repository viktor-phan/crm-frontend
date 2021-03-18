import React from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { filterSearchTicket } from "../../pages/ticket-listing/ticketsAction";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const {  value } = e.target;
    dispatch(filterSearchTicket(value));
  };

  return (
    <Form autoComplete="off">
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Search:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="str"
            placeholder="Search..."
            onChange={handleOnChange}
            
          ></Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
};

