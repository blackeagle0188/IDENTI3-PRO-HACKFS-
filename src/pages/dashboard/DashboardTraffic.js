
import React from "react";
import { ChevronDownIcon, CollectionIcon, CubeIcon, GlobeIcon, PresentationChartLineIcon } from "@heroicons/react/solid";
import { Col, Row, Button, Dropdown, ButtonGroup } from 'react-bootstrap';

import { PageTrafficTable } from "components/Tables";
import { BarChartHorizontalWidget, LineGraphChartWidget } from "components/Widgets";
import { trafficShares, trafficVolumes } from "data/charts";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="gray-800" className="d-inline-flex align-items-center dropdown-toggle me-2">
            Categories <ChevronDownIcon className="icon icon-xs ms-2" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
            <Dropdown.Item className="d-flex align-items-center">
              <CubeIcon className="icon icon-xs text-gray-400 me-2" /> My App
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <CollectionIcon className="icon icon-xs text-gray-400 me-2" /> My Website
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <GlobeIcon className="icon icon-xs text-gray-400 me-2" /> Worldwide Traffic
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <PresentationChartLineIcon className="icon icon-xs text-gray-400 me-2" /> Niche Traffic
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-gray-600" size="sm">
            Share
          </Button>
          <Button variant="outline-gray-600" size="sm">
            Export
          </Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col xs={12} xl={6} xxl={4} className="mb-4">
          <BarChartHorizontalWidget
            title="Date Connected"
            data={trafficShares}
          />
        </Col>
        <Col xs={12} xl={6} xxl={8} className="mb-4">
          <LineGraphChartWidget
            title="Traffic Volumes by Source"
            data={trafficVolumes}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-4">
          <PageTrafficTable />
        </Col>
      </Row>
    </>
  );
};
