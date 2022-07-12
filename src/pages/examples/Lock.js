
import React from "react";
import { ArrowNarrowLeftIcon, LockClosedIcon } from "@heroicons/react/solid";
import { Col, Row, Form, Card, Image, Button, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import BgImage from "assets/img/illustrations/signin.svg";
import Profile3 from "assets/img/team/profile-picture-3.jpg";

export default () => {
  return (
    <main>
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Card.Link as={Link} to={Routes.DashboardOverview.path} className="d-flex align-items-center justify-content-center mb-4">
            <ArrowNarrowLeftIcon className="icon icon-xs me-2" /> Back to homepage
          </Card.Link>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <div className="avatar avatar-lg mx-auto mb-3">
                    <Image src={Profile3} className="rounded-circle" />
                  </div>
                  <h3>Bonnie Green</h3>
                  <p className="text-gray">Better to be safe than sorry.</p>
                </div>
                <Form className="mt-5">
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <LockClosedIcon className="icon icon-xs text-gray-600" />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                  <div className="d-grid mt-3">
                    <Button variant="primary" type="submit">
                      Unlock
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
