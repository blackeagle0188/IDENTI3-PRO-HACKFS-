
import React from "react";
import { ArrowNarrowLeftIcon, LockClosedIcon, MailIcon } from "@heroicons/react/solid";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import BgImage from "assets/img/illustrations/signin.svg";
import { FacebookIcon, GithubIcon, TwitterIcon } from "components/BrandIcons";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center vh-lg-100 mt-5 mt-lg-0 bg-soft">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="d-flex align-items-center justify-content-center">
              <ArrowNarrowLeftIcon className="icon icon-xs me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <MailIcon className="icon icon-xs text-gray-600" />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <LockClosedIcon className="icon icon-xs text-gray-600" />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-top mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="gray-800" type="submit">
                      Sign in
                    </Button>
                  </div>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-gray-500" className="btn-icon-only btn-pill me-2">
                    <FacebookIcon size="xs" color="currentColor" />
                  </Button>
                  <Button variant="outline-gray-500" className="btn-icon-only btn-pill me-2">
                    <TwitterIcon size="xs" color="currentColor" />
                  </Button>
                  <Button variant="outline-gray-500" className="btn-icon-only btn-pill">
                    <GithubIcon size="xs" color="currentColor" />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
