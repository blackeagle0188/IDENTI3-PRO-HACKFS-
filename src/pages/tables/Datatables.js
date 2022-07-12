
import React from "react";
import { useHistory } from "react-router-dom";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Col, Row, Card, Button, Form, Breadcrumb } from 'react-bootstrap';
import Table from "react-bootstrap-table-next";
import Pagination, { PaginationListStandalone, PaginationProvider, PaginationTotalStandalone, SizePerPageDropdownStandalone } from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import jobs from "data/jobs";
import { Routes } from "routes";


export default () => {
  const history = useHistory();

  const columns = [
    { dataField: "id", text: "ID", hidden: true },
    { dataField: "name", text: "Name" },
    { dataField: "position", text: "Position" },
    { dataField: "office", text: "Office" },
    { dataField: "age", text: "Age" },
    { dataField: "startDate", text: "Start date" },
    { dataField: "salary", text: "Salary", formatter: (cell) => <span>${cell}</span> }
  ];

  const goToDatatablesDocs = () => {
    history.push(Routes.PluginDatatable.path);
  };

  const customTotal = (from, to, size) => (
    <div>
      Showing {from} to {to} of {size} entries
    </div>
  );

  const customSizePerPage = (props) => {
    const { options, currentSizePerPage, onSizePerPageChange } = props;

    const onPageChange = (e) => {
      const page = e.target.value;
      onSizePerPageChange(page);
    }

    return (
      <Row as="label">
        <Col xs="auto">
          <Form.Select value={currentSizePerPage} onChange={onPageChange} className="pe-5">
            {options.map(o => (
              <option key={o.page} value={o.page}>
                {o.text}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto" className="d-flex align-items-center ps-0">
          entries per page
        </Col>
      </Row>
    );
  };

  return (
    <>
      <div className="py-4">
        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
          <Breadcrumb.Item>Tables</Breadcrumb.Item>
          <Breadcrumb.Item active>DataTables</Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex justify-content-between w-100 flex-wrap">
          <div className="mb-3 mb-lg-0">
            <h4>DataTables (Vanilla JS)</h4>
            <p className="mb-0">
              Dozens of reusable components built to provide buttons, alerts, popovers, and more.
            </p>
          </div>
          <div>
            <Button variant="outline-gray-600" className="d-inline-flex align-items-center" onClick={goToDatatablesDocs}>
              <QuestionMarkCircleIcon className="icon icon-xs me-1" /> DataTables Docs
            </Button>
          </div>
        </div>
      </div>

      <ToolkitProvider
        keyField="id"
        search={true}
        columns={columns}
        data={jobs}
      >
        {({ baseProps, searchProps }) => (
          <PaginationProvider pagination={
            Pagination({
              custom: true,
              showTotal: true,
              alwaysShowAllBtns: true,
              totalSize: jobs.length,
              withFirstAndLast: false,
              paginationTotalRenderer: customTotal,
              sizePerPageRenderer: customSizePerPage
            })
          }>
            {({ paginationProps, paginationTableProps }) => (
              <Card>
                <div className="table-responsive py-4">
                  <div className="dataTable-top">
                    <div className="dataTable-dropdown">
                      <SizePerPageDropdownStandalone {...paginationProps} />
                    </div>
                    <div className="dataTable-search">
                      <Search.SearchBar {...searchProps} placeholder="Search..." />
                    </div>
                  </div>

                  <Table
                    {...baseProps}
                    {...paginationTableProps}
                    headerWrapperClasses="thead-light"
                    bodyClasses="border-0"
                    rowClasses="border-bottom"
                    classes="table-flush dataTable-table"
                  />

                  <div className="dataTable-bottom">
                    <div className="dataTable-info">
                      <PaginationTotalStandalone {...paginationProps} />
                    </div>
                    <div className="dataTable-pagination">
                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </PaginationProvider>
        )}
      </ToolkitProvider>
    </>
  );
};
