
import React from "react";
import { Col, Row, Card, Form, Button } from 'react-bootstrap';

import { CardDetailsForm } from "components/Forms";
import { OrderHistoryWidget, ChangePlanWidget } from "components/Widgets";


export default () => {
  const RequiredLabel = ({ label }) => (
    <Form.Label>
      {label}
      <span className="text-danger"> * </span>
    </Form.Label>
  );

  return (
    <>
      <Row className="my-4">
        <Col xs={12} lg={6}>
          <ChangePlanWidget />
        </Col>
        <Col xs={12} lg={6}>
          <OrderHistoryWidget />
        </Col>
      </Row>

      <Card as="form" border="0" className="shadow p-3 pb-4 mb-4">
        <Card.Header className="mx-lg-4 p-0 py-3 py-lg-4 mb-4 mb-md-0">
          <h5 className="mb-0">Billing details</h5>
        </Card.Header>
        <Card.Body className="p-0 p-md-4">
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <Form.Group id="cartInputEmail1" className="mb-4">
                <RequiredLabel label="Email address" />
                <Form.Control required type="email" placeholder="example@company.com" />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Label htmlFor="country">Country</Form.Label>
              <Form.Select className="mb-4" id="country">
                <option defaultChecked>Choose...</option>
                <option value="1">United States</option>
                <option value="2">Germany</option>
                <option value="3">Canada</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="cartInputAdress1" className="mb-4">
                <Form.Label>Adress</Form.Label>
                <Form.Control type="text" placeholder="Texas" />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="cartInputCity1" className="mb-4">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Dallas" />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group className="mb-4">
                <Form.Label>Zip/Postal code</Form.Label>
                <Form.Control type="number" placeholder="123456" />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="cartInputCompany1" className="mb-4">
                <RequiredLabel label="Company Name" />
                <Form.Control required type="text" placeholder="Company LLC" />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="cartInputVAT1" className="mb-4">
                <Form.Label>VAT ID</Form.Label>
                <Form.Control type="number" placeholder="NL232142" />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="cartInputPhone1" className="mb-4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="+(12)345 6789" />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Button variant="gray-800" className="animate-up-2 mt-2" type="submit">
                Update
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <CardDetailsForm />
    </>
  );
};
