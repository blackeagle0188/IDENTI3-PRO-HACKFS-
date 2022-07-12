
import React, { useState } from "react";
import { ArrowNarrowDownIcon, ArrowNarrowUpIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, DotsHorizontalIcon, ExternalLinkIcon, EyeIcon, InformationCircleIcon, PencilAltIcon, ShieldExclamationIcon, TrashIcon, UserRemoveIcon, XCircleIcon } from "@heroicons/react/solid";
import { Col, Row, Nav, Card, Form, Image, Button, Table, Dropdown, ProgressBar, Pagination, Tooltip, FormCheck, ButtonGroup, OverlayTrigger } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { Routes } from "routes";
import { pageVisits, pageTraffic, pageRanking } from "data/tables";
import commands from "data/commands";

const capitalizeFirstLetter = (string) => (
  string[0].toUpperCase() + string.slice(1)
);

const getFirstLetterOfEachWord = (text) => (
  text.match(/\b\w/g).join('')
);

const ValueChange = ({ value, suffix }) => {
  const ValueIcon = value < 0 ? ChevronDownIcon : ChevronUpIcon;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={`d-flex align-items-center ${valueTxtColor}`}>
      <ValueIcon className="icon icon-xxs me-1" />
      <span className="fw-bold">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};

export const PageVisitsTable = () => {
  const history = useHistory();

  const goToTrafficSources = () => {
    history.push(Routes.DashboardTraffic.path);
  }

  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const BounceIcon = bounceRate < 0 ? ArrowNarrowDownIcon : ArrowNarrowUpIcon;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr className="border-bottom">
        <th className="text-gray-900" scope="row">
          {pageName}
        </th>
        <td className="fw-bolder text-gray-500">
          {views}
        </td>
        <td className="fw-bolder text-gray-500">
          ${returnValue}
        </td>
        <td className="fw-bolder text-gray-500">
          <div className="d-flex align-items-center">
            <BounceIcon className={`icon icon-xs ${bounceTxtColor} me-2`} />
            {Math.abs(bounceRate)}%
          </div>
        </td>
      </tr>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h2 className="fs-5 fw-bold mb-0">
              Page visits
            </h2>
          </Col>
          <Col className="text-end">
            <Button variant="primary" size="sm" onClick={goToTrafficSources}>
              See all
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th className="border-bottom" scope="col">Page name</th>
            <th className="border-bottom" scope="col">Page Views</th>
            <th className="border-bottom" scope="col">Page Value</th>
            <th className="border-bottom" scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody className="border-0">
          {pageVisits.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const { index, source, sourceIcon, sourceType, category, rank, trafficShare, change } = props;

    return (
      <tr className="border-bottom">
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {index}
          </Card.Link>
        </td>
        <td className="fw-bold">
          <div className="d-flex align-items-center">
            {sourceIcon}
            {source}
          </div>
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? `#${rank}` : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar variant="primary" className="progress-lg bg-dark mb-0" now={trafficShare} min={0} max={100} />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="0" className="shadow mb-4">
      <Card.Body>
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0 rounded-start">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0 rounded-end">Change</th>
            </tr>
          </thead>
          <tbody className="border-0">
            {pageTraffic.map((pt, ind) => <TableRow key={`page-traffic-${pt.id}`} index={ind + 1} {...pt} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const { country, countryImage, overallRank, overallRankChange, travelRank, travelRankChange, widgetsRank, widgetsRankChange } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image src={countryImage} className="image-small rounded-circle me-2" />
            <div><span className="h6">{country}</span></div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">
          {overallRank ? overallRank : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">
          {travelRank ? travelRank : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">
          {widgetsRank ? widgetsRank : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0 rounded-start">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0 rounded-end">Widgets Change</th>
            </tr>
          </thead>
          <tbody className="border-0">
            {pageRanking.map(r => <TableRow key={`ranking-${r.id}`} {...r} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const UsersTable = (props) => {
  const { users = [], allSelected } = props;
  const [bulkOption, setBulkOption] = useState(0);
  const disabledBulkMenu = users.filter(u => u.isSelected).length === 0;

  const selectUser = (id) => {
    props.selectUser && props.selectUser(id);
  };

  const selectAllUsers = () => {
    props.selectAllUsers && props.selectAllUsers();
  };

  const bulkActionChange = (e) => {
    const newOption = e.target.value;
    setBulkOption(newOption);
  }

  const applyBulkAction = () => {
    if (bulkOption === "delete_user") deleteUsers();
  }

  const deleteUsers = (ids) => {
    props.deleteUsers && props.deleteUsers(ids)
  }

  const TableRow = (props) => {
    const { id, verified, status, image, name, email, dateCreated, isSelected } = props;
    const VerifiedIcon = verified ? CheckCircleIcon : InformationCircleIcon;
    const statusVariant = status === "active" ? "success"
      : status === "inactive" ? "warning"
        : status === "pending" ? "purple"
          : status === "suspended" ? "danger" : "primary";

    return (
      <tr className="border-bottom">
        <td>
          <FormCheck type="checkbox" className="dashboard-check">
            <FormCheck.Input id={`user-${id}`} checked={isSelected} onChange={() => selectUser(id)} />
            <FormCheck.Label htmlFor={`user-${id}`} />
          </FormCheck>
        </td>
        <td>
          <Card.Link className="d-flex align-items-center">
            {image
              ? (
                <Image
                  src={image}
                  className="avatar rounded-circle me-3"
                />
              ) : (
                <div className="avatar d-flex align-items-center justify-content-center fw-bold rounded bg-secondary me-3">
                  <span>{getFirstLetterOfEachWord(name)}</span>
                </div>
              )}
            <div className="d-block">
              <span className="fw-bold">{name}</span>
              <div className="small text-gray">{email}</div>
            </div>
          </Card.Link>
        </td>
        <td><span className="fw-normal">{dateCreated}</span></td>
        <td>
          <span className="fw-normal d-flex align-items-center">
            <VerifiedIcon className={`icon icon-xxs text-${statusVariant} me-1`} />
            Email
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>
            {capitalizeFirstLetter(status)}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <DotsHorizontalIcon className="icon icon-xs" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
              <Dropdown.Item className="d-flex align-items-center">
                <ShieldExclamationIcon className="dropdown-icon text-gray-400 me-2" />
                Reset Pass
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <EyeIcon className="dropdown-icon text-gray-400 me-2" />
                View Details
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <UserRemoveIcon className="dropdown-icon text-danger me-2" />
                Suspend
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <OverlayTrigger placement="top" overlay={<Tooltip className="m-0">Delete</Tooltip>}>
            <Card.Link className="ms-2" onClick={() => deleteUsers([id])}>
              <XCircleIcon className="icon icon-xs text-danger" />
            </Card.Link>
          </OverlayTrigger>
        </td>
      </tr>
    );
  };

  return (
    <Card border="0" className="table-wrapper table-responsive shadow">
      <Card.Body>
        <div className="d-flex mb-3">
          <Form.Select className="fmxw-200" disabled={disabledBulkMenu} value={bulkOption} onChange={bulkActionChange}>
            <option value="bulk_action">Bulk Action</option>
            <option value="send_email">Send Email</option>
            <option value="change_group">Change Group</option>
            <option value="delete_user">Delete User</option>
          </Form.Select>
          <Button variant="secondary" size="sm" className="ms-3" disabled={disabledBulkMenu} onClick={applyBulkAction}>
            Apply
          </Button>
        </div>
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">
                <FormCheck type="checkbox" className="dashboard-check">
                  <FormCheck.Input id="userCheckAll" checked={allSelected} onChange={selectAllUsers} />
                  <FormCheck.Label htmlFor="userCheckAll" />
                </FormCheck>
              </th>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Date Created</th>
              <th className="border-bottom">Verified</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody className="border-0">
            {users.map(u => <TableRow key={`user-${u.id}`} {...u} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-normal small mt-4 mt-lg-0">
            Showing <b>{users.length}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const TransactionsTable = (props) => {
  const { transactions } = props;
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
    const statusVariant = status === "paid" ? "success"
      : status === "due" ? "warning"
        : status === "cancelled" ? "danger" : "primary";

    return (
      <tr className="border-bottom">
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-bold">
            {invoiceNumber}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {subscription}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {issueDate}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {dueDate}
          </span>
        </td>
        <td>
          <span className="fw-bold">
            ${parseFloat(price).toFixed(2)}
          </span>
        </td>
        <td>
          <span className={`fw-bold text-${statusVariant}`}>
            {capitalizeFirstLetter(status)}
          </span>
        </td>
        <td className="text-center">
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <DotsHorizontalIcon className="icon icon-xs icon-dark" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="py-0">
              <Dropdown.Item as={Link} to={Routes.Invoice.path}>
                <EyeIcon className="icon icon-xs me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={Routes.Invoice.path}>
                <PencilAltIcon className="icon icon-xs me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item>
                <TrashIcon className="icon icon-xs text-danger me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="0" className="table-wrapper table-responsive shadow">
      <Card.Body>
        <Table hover>
          <thead>
            <tr>
              <th className="border-gray-200">#</th>
              <th className="border-gray-200">Bill For</th>
              <th className="border-gray-200">Issue Date</th>
              <th className="border-gray-200">Due Date</th>
              <th className="border-gray-200">Total</th>
              <th className="border-gray-200">Status</th>
              <th className="border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody className="border-0">
            {transactions.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-normal mt-4 mt-lg-0">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: '5%' }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: '5%' }}>
          <ul className="ps-0">
            {usage.map(u => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: '50%' }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: '40%' }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More <ExternalLinkIcon className="icon icon-xs ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table responsive className="table-centered rounded" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: '5%' }}>Name</th>
              <th className="border-0" style={{ width: '5%' }}>Usage</th>
              <th className="border-0" style={{ width: '50%' }}>Description</th>
              <th className="border-0" style={{ width: '40%' }}>Extra</th>
            </tr>
          </thead>
          <tbody className="border-0">
            {commands.map(c => <TableRow key={`command-${c.id}`} {...c} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};