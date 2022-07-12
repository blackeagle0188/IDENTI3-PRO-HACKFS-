import React from "react";
import { Col, Row, Button, ButtonGroup, Container, Tooltip, OverlayTrigger } from "react-bootstrap";
import { ArchiveIcon, PlusIcon, SelectorIcon, TrashIcon } from "@heroicons/react/solid";


export default (props) => {
  return (
    <Container fluid className="px-3">
      <Row className="mt-4 mb-3">
        <Col xs={6} className="d-flex justify-content-between ps-0">
          <div className="me-lg-3">
            <Button as={Button} variant="secondary" className="d-inline-flex align-items-center me-2" onClick={props.onNewCard}>
              <PlusIcon className="icon icon-xs me-2" /> New Card
            </Button>
          </div>
        </Col>
        <Col xs={6} className="px-0 text-end">
          <ButtonGroup>
            <OverlayTrigger placement="bottom" overlay={<Tooltip className="m-0">Archive</Tooltip>}>
              <Button variant="gray-800">
                <ArchiveIcon className="icon icon-xs text-white" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={<Tooltip className="m-0">Move</Tooltip>}>
              <Button variant="gray-800">
                <SelectorIcon className="icon icon-xs text-white" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={<Tooltip className="m-0">Delete</Tooltip>}>
              <Button variant="gray-800">
                <TrashIcon className="icon icon-xs text-white" />
              </Button>
            </OverlayTrigger>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};