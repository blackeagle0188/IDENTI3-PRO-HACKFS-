
import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { Col, Row, Card, FormCheck, Breadcrumb } from 'react-bootstrap';

import AccordionComponent from "components/AccordionComponent";
import { PriceCardWidget } from "components/Widgets";
import pricings from "data/pricings";


export default () => {
  const [isPriceMonthly, setIsPriceMonthly] = useState(true);
  const priceType = isPriceMonthly ? "monthly" : "annual";

  const togglePriceType = () => {
    setIsPriceMonthly(!isPriceMonthly);
  };

  return (
    <>
      <div className="d-block py-4">
        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
          <Breadcrumb.Item>Volt</Breadcrumb.Item>
          <Breadcrumb.Item active>Pricing</Breadcrumb.Item>
        </Breadcrumb>

        <h3>Choose the best plan for your business</h3>
        <p className="mb-0">
          Get the power, control, and customization you need to manage your team’s and organization’s projects.
        </p>
      </div>

      <Card border="0" className="shadow mb-5">
        <Card.Body>
          <Row className="text-gray">
            <Col xs={12} className="d-flex align-items-center justify-content-center pb-4">
              <h5 className="fw-normal me-4 mt-2">
                Monthly
              </h5>
              <FormCheck type="switch">
                <FormCheck.Input type="checkbox" id="billingSwitch" value={isPriceMonthly} onChange={togglePriceType} />
                <FormCheck.Label htmlFor="billingSwitch" />
              </FormCheck>
              <h5 className="fw-normal ms-1 mt-2">
                Annual
              </h5>
            </Col>
            {pricings.map(pricing => (
              <React.Fragment key={`pricing-${pricing.id}`}>
                <Col xs={12} lg={6} xl={4}>
                  <PriceCardWidget priceType={priceType} {...pricing} />
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Card.Body>
      </Card>

      <Card border="0" className="shadow py-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={6}>
            <Card.Header className="border-0 text-center">
              <h3 className="mb-4">Frequently asked questions</h3>
              <p className="text-gray">Here’s what you need to know about your Rocket license, based on the questions we get asked the most.</p>
            </Card.Header>
            <Card.Body>
              <AccordionComponent
                defaultKey="panel-1"
                data={[
                  {
                    id: 1,
                    eventKey: "panel-1",
                    title: "Does my subscription automatically renew?",
                    description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
                  },
                  {
                    id: 2,
                    eventKey: "panel-2",
                    title: "What happens if I don’t renew my license?",
                    description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
                  },
                  {
                    id: 3,
                    eventKey: "panel-3",
                    title: "Can I cancel my subscription?",
                    description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
                  },
                  {
                    id: 4,
                    eventKey: "panel-4",
                    title: "Do I need to renew my license to receive fixes?",
                    description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
                  },
                  {
                    id: 5,
                    eventKey: "panel-5",
                    title: "Where can I find the End User License Agreement (EULA)?",
                    description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
                  }
                ]} />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};
