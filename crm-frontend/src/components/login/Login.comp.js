import React from "react";
import PropTypes from "prop-types";
import "./Login.comp.style.css";
import { useState } from "react";
import { loginPending, loginSuccess, loginFail } from "./login.slice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { getUserProfile } from "../../pages/dashboard/userAction";
export const LoginForm = ({ formSwitcher }) => {
  const dispatch = useDispatch();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Fill up all the form");
    }
    dispatch(loginPending());
    //TODO call api to submit the form
    try {
      const isAuth = await userLogin({ email, password });
      console.log(isAuth);
      if (isAuth.status === "Invalid email or password") {
        return dispatch(loginFail(isAuth.status));
      }
      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="">Client Login</h2>
          <br />
          {error && <Alert variant="danger" />}
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter email"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Enter password"
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" block>
              Login
            </Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={() => formSwitcher("reset")}>
            Forget password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};
