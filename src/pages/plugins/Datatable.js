
import React from 'react';
import moment from "moment-timezone";
import { Row, Col, Card, Form, Container } from 'react-bootstrap';
import Table from "react-bootstrap-table-next";
import Pagination from "react-bootstrap-table2-paginator";
import * as Paginator from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import Documentation from "components/Documentation";
import entries from "data/jobs";


export default () => {

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <h1 className="h2" id="datatables">DataTables</h1>
              <p className="fs-5 fw-light">
                React Bootstrap Table integration to create searchable and paginated tables.
              </p>

              <h2 className="fs-5">Getting started</h2>
              <p>Volt React makes use of the great and powerful <Card.Link href="https://react-bootstrap-table.github.io/react-bootstrap-table2/" target="_blank">react-bootstrap-table2</Card.Link> library.</p>

              <Documentation
                title="Example"
                description={
                  <p>Use the following code snippet to fully customize your table:</p>
                }
                scope={{ moment, Row, Col, Card, Form, Table, Pagination, Paginator, ToolkitProvider, Search, entries }}
                imports={`import { Row, Col, Card, Form } from 'react-bootstrap';
import Table from "react-bootstrap-table-next";
import Pagination from "react-bootstrap-table2-paginator";
import * as Paginator from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import entries from "src/data/jobs";`}
                example={`const columns = [
  { dataField: "id", text: "ID", hidden: true },
  { dataField: "name", text: "Name" },
  { dataField: "position", text: "Position" },
  { dataField: "office", text: "Office" },
  { dataField: "age", text: "Age" },
  { dataField: "startDate", text: "Start date" },
  { dataField: "salary", text: "Salary", formatter: (cell) => <span>\${cell}</span> }
];

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
    <Row>
      <Col xs="auto">
        <Form.Select value={currentSizePerPage} onChange={onPageChange} className="pe-5">
          {options.map(o => (
            <option key={o.page} value={o.page}>
              {o.text}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs="auto" className="d-flex align-items-center">
        entries per page
      </Col>
    </Row>
  );
};

render(
  <ToolkitProvider
    keyField="id"
    search={true}
    columns={columns}
    data={entries}
    wrapperClasses="table-responsive"
  >
    {({ baseProps, searchProps }) => (
      <Paginator.PaginationProvider pagination={
        Pagination({
          custom: true,
          showTotal: true,
          alwaysShowAllBtns: true,
          totalSize: entries.length,
          paginationTotalRenderer: customTotal,
          sizePerPageRenderer: customSizePerPage
        })
      }>
        {({ paginationProps, paginationTableProps }) => (
          <Card>
            <div className="table-responsive py-2">
              <Card.Header>
                <Row>
                  <Col xs={12} md={6} className="py-1">
                    <Paginator.SizePerPageDropdownStandalone {...paginationProps} />
                  </Col>
                  <Col xs={12} md={6} className="d-flex justify-content-md-end py-1">
                    <Search.SearchBar {...searchProps} />
                  </Col>
                </Row>
              </Card.Header>

              <Table 
                {...baseProps} 
                {...paginationTableProps} 
                bodyClasses="border-0" 
                rowClasses="border-bottom"
                classes="table-flush dataTable-table"
              />

              <Card.Footer>
                <Row>
                  <Col xs={12} md={6} className="d-flex align-items-center py-1">
                    <Paginator.PaginationTotalStandalone {...paginationProps} />
                  </Col>
                  <Col xs={12} md={6} className="d-flex justify-content-md-end align-items-center mb-0 py-1">
                    <Paginator.PaginationListStandalone {...paginationProps} />
                  </Col>
                </Row>
              </Card.Footer>
            </div>
          </Card>
        )}
      </Paginator.PaginationProvider>
    )}
  </ToolkitProvider>
);`}
              />

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
