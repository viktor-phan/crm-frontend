import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";
import "../../utils/validation";

export const AddTicketForm = ({handleOnChange, handleOnSubmit, formData}) => {
  return (
    <Jumbotron className="add-new-ticket">
        <h1 className="text-info text-center">Add a New Ticket</h1>
        <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="subject"
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Enter subject"
              required
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Date
          </Form.Label>
          <Col>
            <Form.Control 
            type="date" 
            name="addedDate"
            value={formData.addedDate} 
            onChange={handleOnChange}
            required></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>

          <Form.Control
            as="textarea"
            name="detail"
            placeholder="Details on subject"
            value={formData.detail}
            onChange={handleOnChange}
            required
            rows="4"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="success" block>
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
  
}