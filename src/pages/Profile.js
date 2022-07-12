
import React from "react";
import { useHistory } from "react-router-dom";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Button, Breadcrumb } from 'react-bootstrap';

import { PageTrafficTable, RankingTable } from "components/Tables";
import { Routes } from "routes";


export default () => {
  const history = useHistory();

  const goToTablesDocs = () => {
    history.push(Routes.Tables.path);
  };

  return (
    <>
      <div className="py-4">
        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
          <Breadcrumb.Item>Tables</Breadcrumb.Item>
          <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex justify-content-between w-100 flex-wrap">
          <div className="mb-3 mb-lg-0">
            <h4>Bootstrap tables</h4>
            <p className="mb-0">
              Dozens of reusable components built to provide buttons, alerts, popovers, and more.
            </p>
          </div>
          <div>
            <Button variant="outline-gray-600" className="d-inline-flex align-items-center" onClick={goToTablesDocs}>
              <QuestionMarkCircleIcon className="icon icon-xs me-1" /> Bootstrap Tables Docs
            </Button>
          </div>
        </div>
      </div>

      <PageTrafficTable />
      <RankingTable />
    </>
  );
};
