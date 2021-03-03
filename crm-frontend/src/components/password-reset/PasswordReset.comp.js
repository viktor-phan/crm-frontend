import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email, pass}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-info text-center">Reset Password</h2>
          <br />
          <Form autoComplete="off" onSubmit="handleOnResetSubmit">
              <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={email}
                  placeholder="Enter email"
                  required></Form.Control>
              </Form.Group>
              
              <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
          <Col>
          <a href="#" onClick = {()=> formSwitcher('login')}>Login Now</a>
          </Col>
      </Row>

    </Container>
  );
};

ResetPassword.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
   
}