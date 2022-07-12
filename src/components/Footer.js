
import React from "react";
import moment from "moment-timezone";
import { CogIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from 'react-bootstrap';
import BS5Logo from "assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "assets/img/technologies/react-logo.svg";

export default (props) => {
  const { showSettings } = props;
  const currentYear = moment().get("year");

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  };

  return (
    <div>
      {showSettings ? (
        <Card className="theme-settings">
          <Card.Body className="pt-4">
            <Button className="theme-settings-close" variant="close" size="sm" aria-label="Close" onClick={() => { toggleSettings(false) }} />
            <Button href="https://themesberg.com/product/dashboard/volt-pro-react" target="_blank" variant="secondary" className="mb-3 w-100">
              <ShoppingCartIcon className="icon icon-xs me-1" /> Purchase now
            </Button>
            <p className="fs-7 text-gray-700 text-center">Available in the following technologies:</p>
            <div className="d-flex justify-content-center">
              <Card.Link href="https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard" target="_blank">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="m-0">
                      Bootstrap 5 · The most popular HTML, CSS, and JS library in the world.
                    </Tooltip>
                  }>
                  <Image src={BS5Logo} className="image image-xs" />
                </OverlayTrigger>
              </Card.Link>

              <Card.Link href="https://themesberg.com/product/dashboard/volt-pro-react" target="_blank">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="m-0">
                      React · A JavaScript library for building user interfaces.
                    </Tooltip>
                  }>
                  <Image src={ReactLogo} className="image image-xs" />
                </OverlayTrigger>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card className="theme-settings theme-settings-expand" onClick={() => { toggleSettings(true) }}>
          <Card.Body className="p-3 py-2">
            <span className="fw-bold h6">
              <CogIcon className="icon icon-xs me-1 fs-7" /> Settings
            </span>
          </Card.Body>
        </Card>
      )}
      <footer className="bg-white rounded shadow p-5 mb-4 mt-4">
        <Row>
          <Col xs={12} md={4} xl={6} className="mb-4 mb-md-0">
            <p className="mb-0 text-center text-lg-start">
              © 2019-{`${currentYear} `}
              <Card.Link href="https://themesberg.com" target="_blank" className="text-primary fw-normal">
                Themesberg
              </Card.Link>
            </p>
          </Col>
          <Col xs={12} md={8} xl={6} className="text-center text-lg-start">
            <ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/about" target="_blank">
                  About
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/themes" target="_blank">
                  Themes
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/blog" target="_blank">
                  Blog
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/contact" target="_blank">
                  Contact
                </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
