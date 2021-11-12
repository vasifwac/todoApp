import React from "react";
import { Row, Form, Col, Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBarHead from "../components/NavBarHead";
import useSignIn from "./hooks/useSignIn";
import { LogIn } from "react-feather";

export default function SignIn() {
  const [handleChange, handleSubmit, inputError] = useSignIn();

  return (
    <>
      <NavBarHead />
      <Row style={{ height: "80vh" }}>
        <Col></Col>
        <Col className="p-3 mt-5" md={4}>
          <Container>
            <Form onSubmit={handleSubmit}>
              <div>
                <h3 className="d-flex justify-content-center">
                  {" "}
                  <LogIn size={22} className="mt-2" />
                  Log In
                </h3>
              </div>
              <Form.Group className="mb-3" controlId="username">
                <Form.Control
                  type="text"
                  autoComplete="off"
                  isInvalid={inputError}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter email"
                />

                <Form.Text className="text-muted">
                  use "admin" as username
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Required field
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  autoComplete="off"
                  isInvalid={inputError}
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                />

                <Form.Text className="text-muted">
                  use "password" as password
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Required field
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button className="w-100" variant="success" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
        <Col></Col>
      </Row>
      <Footer />
    </>
  );
}
