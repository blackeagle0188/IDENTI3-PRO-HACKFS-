
import React from "react";
import { CloudUploadIcon, CollectionIcon, FireIcon, PlusIcon, ShieldExclamationIcon, UserAddIcon } from "@heroicons/react/solid";
import { Col, Row, Button, Dropdown, ButtonGroup } from 'react-bootstrap';

import { RankingTable } from "components/Tables";
import { BarChartWidget, RatingsWidget, CardWidget, ListChartWidget } from "components/Widgets";
import { appRanking } from "data/charts";


export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="gray-800" className="d-inline-flex align-items-center me-2">
            <PlusIcon className="icon icon-xs me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
            <Dropdown.Item className="d-flex align-items-center">
              <UserAddIcon className="icon icon-xs text-gray-400 me-2" /> Add User
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <CollectionIcon className="icon icon-xs text-gray-400 me-2" /> Add Widget
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <CloudUploadIcon className="icon icon-xs text-gray-400 me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <ShieldExclamationIcon className="icon icon-xs text-gray-400 me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider as="div" className="my-1" />

            <Dropdown.Item className="d-flex align-items-center">
              <FireIcon className="icon icon-xs text-danger me-2" /> Upgrade to Pro
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
        <Col xs={12} xl={6} className="mb-4">
          <BarChartWidget
            title="App Ranking"
            worldRank={155}
            data={appRanking}
          />
        </Col>
        <Col xs={12} xl={6} className="mb-4">
          <Row>
            <Col xs={12} className="mb-4">
              <RatingsWidget />
            </Col>
            <Col xs={12} xxl={6} className="mb-4 mb-xxl-0">
              <CardWidget
                title="Total Installs"
                value="367,567"
                period="Feb 1 - Apr 1"
                country="USA"
              />
            </Col>
            <Col xs={12} xxl={6}>
              <ListChartWidget />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-4">
          <RankingTable />
        </Col>
      </Row>
    </>
  );
};
