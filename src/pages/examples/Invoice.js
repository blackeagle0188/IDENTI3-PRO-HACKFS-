
import React from "react";
import moment from "moment-timezone";
import { Col, Row, Card, Table, Badge, Image, ListGroup } from 'react-bootstrap';

import ThemesbergLogo from "assets/img/themesberg.svg";
import { invoiceItems } from "data/tables";


export default () => {
  const issueDate = moment().subtract(1, "days").format("DD/MM/YYYY");
  const dueDate = moment().subtract(1, "days").add(1, "month").format("DD/MM/YYYY");

  const subtotal = invoiceItems.reduce((acc, curr) => acc += parseFloat(curr.price) * curr.quantity, 0);
  const totalDiscount = 20 / 100 * subtotal;
  const vat = 10 / 100 * (subtotal - totalDiscount);
  const total = subtotal - totalDiscount + vat;

  const TableRow = (props) => {
    const { item, description, price, quantity } = props;
    const itemTotal = parseFloat(price) * quantity;

    return (
      <tr className="border-bottom">
        <th className="h6 text-left fw-bold">{item}</th>
        <td>{description}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>${itemTotal.toFixed(2)}</td>
      </tr>
    );
  };

  return (
    <>
      <Row className="justify-content-center mt-4">
        <Col xs={12} xl={9}>
          <Card border="0" className="shadow position-relative p-4 p-md-5">
            <div className="d-sm-flex justify-content-between border-bottom border-light pb-4 pb-md-5 mb-4 mb-md-5">
              <Image src={ThemesbergLogo} width={30} height={30} className="image-md" />
              <div>
                <h4>Volt LLC.</h4>
                <ListGroup className="simple-list">
                  <ListGroup.Item className="fw-normal">
                    112 Washington Square
                  </ListGroup.Item>
                  <ListGroup.Item className="fw-normal">
                    New York, USA
                  </ListGroup.Item>
                  <ListGroup.Item className="fw-normal">
                    <Card.Link className="fw-bold text-primary">company@themesberg.com</Card.Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-6">
              <h1 className="mb-0">Invoice #300500</h1>
              <Badge bg="success" className="badge-lg ms-4">
                Paid
              </Badge>
            </div>
            <Row className="justify-content-between mb-4 mb-md-5">
              <Col className="col-sm">
                <h5>Client Information:</h5>
                <div>
                  <ListGroup className="list-group simple-list">
                    <ListGroup.Item className="fw-normal">Henry M. Pike</ListGroup.Item>
                    <ListGroup.Item className="fw-normal">Themesberg LLC</ListGroup.Item>
                    <ListGroup.Item className="fw-normal">311 West Mechanic Lane Middletown, NY 10940</ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      <Card.Link className="fw-bold text-primary">name@company.com</Card.Link>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col lg={4} className="col-sm">
                <Row className="text-sm-right">
                  <Col xs={6}> <dt><strong>Invoice No.</strong></dt></Col>
                  <Col xs={6}> <dd>300500</dd></Col>

                  <Col xs={6}> <dt><strong>Date issued:</strong></dt></Col>
                  <Col xs={6}> <dd>{issueDate}</dd></Col>

                  <Col xs={6}> <dt><strong>Due Date:</strong></dt></Col>
                  <Col xs={6}> <dd>{dueDate}</dd></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Table responsive className="mb-0">
                  <thead className="bg-light border-top">
                    <tr>
                      <th className="border-0 text-left">
                        Item
                      </th>
                      <th className="border-0">
                        Description
                      </th>
                      <th className="border-0">
                        Price
                      </th>
                      <th className="border-0">
                        Qty
                      </th>
                      <th className="border-0">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    {invoiceItems.map(i => <TableRow key={`invoice-item-${i.id}`} {...i} />)}
                  </tbody>
                </Table>

                <div className="d-flex justify-content-end text-end mb-4 py-4">
                  <div className="mt-4">
                    <Table className="table-clear">
                      <tbody>
                        <tr>
                          <td className="left">
                            <strong>Subtotal</strong>
                          </td>
                          <td className="right">${subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>Discount (20%)</strong>
                          </td>
                          <td className="right">${totalDiscount.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>VAT (10%)</strong>
                          </td>
                          <td className="right">${vat.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>Total</strong>
                          </td>
                          <td className="right">
                            <strong>${total.toFixed(2)}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <h4>Payments to:</h4>
                <span>payment@volt.com</span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
