import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <br />
          <Form autoComplete="off" onSubmit="handleOnSubmit">
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
              <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  value={pass}
                  placeholder="Enter password"
                  required></Form.Control>
              </Form.Group>
              <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
          <Col>
          <a href="#" onClick={() => formSwitcher('reset')}>Forget password</a>
          </Col>
      </Row>

    </Container> 
  );
};

LoginForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}