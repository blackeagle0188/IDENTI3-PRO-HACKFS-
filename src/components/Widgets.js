
import React, { useState } from "react";
import moment from 'moment-timezone';
import CountUp from "react-countup";
import { ArchiveIcon, ArrowDownIcon, ArrowNarrowRightIcon, ArrowUpIcon, CalendarIcon, ChartBarIcon, ChatAltIcon, CheckCircleIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon, ClipboardListIcon, ClockIcon, DocumentTextIcon, DotsHorizontalIcon, EyeIcon, FlagIcon, FolderOpenIcon, GlobeIcon, MailIcon, MailOpenIcon, PaperClipIcon, PencilAltIcon, PresentationChartBarIcon, PresentationChartLineIcon, SaveIcon, ShareIcon, StarIcon, TrashIcon, UserAddIcon } from "@heroicons/react/solid";
import { Col, Row, Card, Form, Badge, Image, Button, ListGroup, ProgressBar, Tooltip, Dropdown, OverlayTrigger, ButtonGroup } from 'react-bootstrap';
import { BarChartHorizontal, BarChart, PieChart, DognutChart, LineGraphChart, SalesValueChart, CustomersChart, RevenueChart, UsersChart, WeeklyReportChart } from "components/Charts";
import { Link, useHistory } from 'react-router-dom';

import Profile2 from "assets/img/team/profile-picture-2.jpg";
import ProfileCover from "assets/img/profile-cover.jpg";

import { Routes } from "routes";
import teamMembers from "data/teamMembers";
import countries from "data/countries";
import authorEarnings from "data/authorEarnings";
import { productNotifications } from "data/notifications";
import { GoogleIcon, TwitterIcon, YoutubeIcon } from "components/BrandIcons";

const PeriodOverviewWidget = (props) => {
  const { category, title, period, percentage, ChartComponent = CustomersChart } = props;
  const PercentageIcon = percentage < 0 ? ChevronDownIcon : ChevronUpIcon;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <Row className="d-block d-xxl-flex align-items-center">
          <Col xs={12} xxl={6} className="px-xxl-0 mb-3 mb-xxl-0">
            <ChartComponent />
          </Col>
          <Col xs={12} xxl={6} className="ps-xxl-4 pe-xxl-0">
            <h2 className="fs-5 fw-normal mb-1">
              {category}
            </h2>
            <h3 className="fw-extrabold mb-1">
              {title}
            </h3>
            <small className="d-flex align-items-center">
              <CalendarIcon className="icon icon-xxs text-gray-400 me-1" />
              {period}
            </small>
            <div className="small d-flex mt-1">
              <PercentageIcon className={`icon icon-xs ${percentageColor}`} />
              <span className={`${percentageColor} fw-bolder me-1`}>
                {Math.abs(percentage)}%
              </span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CardWidget = (props) => {
  const { title, value, period, country } = props;

  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <h2 className="fs-5 fw-normal">
          {title}
        </h2>
        <h3 className="fs-1 fw-extrabold mb-1">
          {value}
        </h3>
        <div className="d-flex align-items-center">
          <span className="me-3">
            {period}
          </span>
          <GlobeIcon className="icon icon-xxs text-gray-500 me-1" />
          <span>{country}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export const ProfileCardWidget = (props) => {
  const { fullName, picture, jobTitle, location } = props;

  return (
    <Card border="0" className="shadow text-center p-0">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={picture} className="avatar-xl rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>{fullName}</Card.Title>
        <Card.Subtitle className="fw-normal">
          {jobTitle}
        </Card.Subtitle>
        <Card.Text className="text-gray mb-4">
          {location}
        </Card.Text>

        <Button variant="gray-800" size="sm" className="d-inline-flex align-items-center me-2">
          <UserAddIcon className="icon icon-xs me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">Send Message</Button>
      </Card.Body>
    </Card>
  );
};

export const PriceCardWidget = (props) => {
  const { variant = "gray-800", priceType = "monthly", priceMonthly, priceYearly, period = "month", title, description, features = [], btnText, btnTextColor = "" } = props;
  const btnClassName = btnTextColor ? `w-100 text-${btnTextColor}` : `w-100`;
  const price = priceType === "monthly" ? priceMonthly : priceYearly;

  const Feature = ({ text }) => {
    return (
      <div className="d-flex align-items-center mb-3">
        <CheckIcon className="icon icon-sm me-2" />
        <span>{text}</span>
      </div>
    );
  };

  return (
    <Card className="mb-4 mb-xl-0">
      <Card.Header className="border-gray-100 py-5 px-4">
        <div className="d-flex mb-3">
          <h5 className="mb-0">$</h5>
          <span className={`price display-2 text-${variant} mb-0`}>
            <CountUp start={priceMonthly} end={price} duration={2} />
          </span>
          <h6 className="fw-normal align-self-end">/{period}</h6>
        </div>
        <h4 className="mb-3 text-black">{title}</h4>
        <p className="fw-normal mb-0">{description}</p>
      </Card.Header>
      <Card.Body className="py-5 px-4">
        {features.map((text, index) => <Feature key={`feature-${index}`} text={text} />)}
      </Card.Body>
      <Card.Footer className="border-gray-100 d-grid px-4 pb-4">
        <Button as={Link} variant={variant} to={Routes.Signup.path} target="_blank" className={btnClassName}>
          {btnText} <ArrowNarrowRightIcon className="icon icon-xs ms-3" />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export const OrderHistoryWidget = () => {
  const InvoiceItem = (props) => {
    const { invoiceNumber, invoiceDate, invoiceStatus, last } = props
      , invoiceDateFormatted = invoiceDate.format("MMMM DD, YYYY")
      , isInvoicePaid = invoiceStatus === "paid"
      , listItemClassNames = last ? "py-3" : "border-bottom py-3";

    return (
      <ListGroup.Item className={listItemClassNames}>
        <Row className="align-items-center">
          <Col>
            <h6 className="mb-1">
              <a href="#!">Invoice #{invoiceNumber}</a>
            </h6>
            <small className="text-gray-700">
              Billed {invoiceDateFormatted}
            </small>
          </Col>
          <Col xs="auto">
            {isInvoicePaid ? (
              <Badge bg="success" className="rounded px-3 py-2">
                <span className="text-uppercase fw-bolder">
                  Paid
                </span>
              </Badge>
            ) : (
              <Button variant="gray-800" size="sm">
                Pay now
              </Button>
            )}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="0" className="shadow p-0 p-md-4">
      <Card.Header className="border-bottom p-3">
        <h5>Order History</h5>
        <Card.Text className="mb-0">
          Manage billing information and view receipts
        </Card.Text>
      </Card.Header>
      <Card.Body className="px-0 py-0">
        <ListGroup>
          <InvoiceItem
            invoiceNumber="120345"
            invoiceStatus="issued"
            invoiceDate={moment().subtract("1", "day")}
          />
          <InvoiceItem
            last={true}
            invoiceNumber="120344"
            invoiceStatus="paid"
            invoiceDate={moment().subtract("2", "days")}
          />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

  return (
    <Card border="0" className="shadow mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <PaperClipIcon className="icon text-gray-500 me-2" />
                <input type="file" />
                <div className="d-md-block text-left">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const MessageCardWidget = (props) => {
  const { id, image, read, favorite, sender, timeSent, message, isSelected } = props;
  const nameFirstLetters = sender.match(/\b\w/g).join('');
  const timeColor = read ? "text-muted" : "text-danger";
  const textColor = read ? "fw-normal" : "fw-bold";
  const readText = read ? "Mark as Unread" : "Mark as Read";
  const favoriteClass = favorite ? "selected" : "";
  const MessageIcon = read ? MailIcon : MailOpenIcon;

  const toggleReadStatus = () => {
    props.toggleReadStatus && props.toggleReadStatus(id);
  };

  const toggleFavorite = () => {
    props.toggleFavorite && props.toggleFavorite(id);
  };

  const deleteMessage = () => {
    props.deleteMessage && props.deleteMessage(id);
  };

  const archiveMessage = () => {
    props.archiveMessage && props.archiveMessage(id);
  };

  const selectMessage = () => {
    props.selectMessage && props.selectMessage(id);
  };

  return (
    <Card border="bottom" className="hover-state rounded-0 rounded-top py-3">
      <Card.Body className="d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
        <Col xs={1} className="align-items-center px-0 d-none d-lg-flex">
          <Form.Check type="checkbox" className="form-check inbox-check me-2 mb-0">
            <Form.Check.Input
              id={`message-${id}`}
              value={isSelected}
              onChange={selectMessage}
            />
          </Form.Check>
          <StarIcon
            className={`icon icon-sm rating-star ${favoriteClass}`}
            onClick={toggleFavorite}
          />
        </Col>
        <Col xs={10} lg={2} className="ps-0 ps-lg-3 pe-lg-3">
          <Card.Link as={Link} to={Routes.SingleMessage.path} className="d-flex align-items-center">
            {image
              ? (
                <Image
                  src={image}
                  className="avatar-sm rounded-circle me-3"
                />
              ) : (
                <div className="avatar-sm bg-secondary d-flex align-items-center justify-content-center rounded me-3">
                  <small className="fw-bold p-1">
                    {nameFirstLetters}
                  </small>
                </div>
              )
            }
            <h6 className={`${textColor} mb-0`}>
              {sender}
            </h6>
          </Card.Link>
        </Col>
        <Col xs={2} lg={2} className="d-flex align-items-center justify-content-end px-0 order-lg-4">
          <div className={`${timeColor} small d-none d-lg-block`}>
            {timeSent}
          </div>
          <Dropdown className="ms-3">
            <Dropdown.Toggle as={Button} size="sm" variant="link" className="fs-6 px-1 py-0">
              <DotsHorizontalIcon className="icon icon-xs" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item as={Button} variant="link" className="ms-0" onClick={archiveMessage}>
                <ArchiveIcon className="dropdown-icon text-gray-400 me-2" /> Archive
              </Dropdown.Item>
              <Dropdown.Item as={Button} variant="link" className="ms-0" onClick={toggleReadStatus}>
                <MessageIcon className="dropdown-icon text-gray-400 me-2" /> {readText}
              </Dropdown.Item>
              <Dropdown.Item as={Button} variant="link" className="ms-0">
                <ClockIcon className="dropdown-icon text-gray-400 me-2" /> Snooze
              </Dropdown.Item>

              <Dropdown.Divider as="div" className="my-1" />

              <Dropdown.Item as={Button} variant="link" className="text-danger ms-0" onClick={deleteMessage}>
                <TrashIcon className="dropdown-icon text-danger me-2" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} lg={7} className="d-flex align-items-center mt-3 mt-lg-0 ps-0">
          <Card.Link as={Link} to={Routes.SingleMessage.path} className="fw-normal text-gray truncate-text">
            <span className={`${textColor} ps-lg-3`}>
              {message}
            </span>
          </Card.Link>
        </Col>
      </Card.Body>
    </Card>
  );
};

export const TaskCardWidget = (props) => {
  const { id, title, time, statusKey, description, isSelected } = props;
  const formCheckId = `task-${id}`;
  const completed = statusKey === "done";
  const completedClassName = completed ? "line-through" : "";

  const status = {
    done: { color: "success", label: "Done" },
    inProgress: { color: "warning", label: "In Progress" },
    waiting: { color: "purple", label: "Waiting" }
  };

  const statusColor = status[statusKey] ? status[statusKey].color : 'danger'
    , statusLabel = status[statusKey] ? status[statusKey].label : 'Offline'
    , doneText = statusKey === "done" ? "Mark as In Progress" : "Mark as Done"
    , doneColor = statusKey === "done" ? status.inProgress.color : status.done.color;

  const toggleDoneStatus = () => {
    props.toggleDoneStatus && props.toggleDoneStatus(id);
  };

  const deleteTask = () => {
    props.deleteTask && props.deleteTask(id);
  };

  const selectTask = () => {
    props.selectTask && props.selectTask(id);
  };

  return (
    <Card border="bottom" className="hover-state rounded-0 rounded-top py-3">
      <Card.Body className="d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0">
        <Col xs={1} className="text-left text-sm-center mb-2 mb-sm-0">
          <Form.Check type="checkbox" className="form-check check-lg inbox-check me-sm-2">
            <Form.Check.Input id={formCheckId} value={isSelected} onChange={selectTask} />
          </Form.Check>
        </Col>
        <Col xs={11} lg={10} className="px-0 mb-4 mb-md-0">
          <div className="mb-2">
            <h5 className={completedClassName}>
              {title}
            </h5>
            <div className="d-block d-sm-flex">
              <div>
                <h6 className="fw-normal text-gray mb-3 mb-sm-0">
                  <ClockIcon className="icon icon-xxs text-gray-500 me-2" /> {time}
                </h6>
              </div>
              <div className="ms-sm-3">
                <Badge bg={statusColor} className="super-badge">
                  {statusLabel}
                </Badge>
              </div>
            </div>
          </div>
          <div>
            <Card.Link as={Link} to={Routes.SingleMessage.path} className="fw-bold text-dark">
              <span className={`fw-normal text-gray ${completedClassName}`}>
                {description}
              </span>
            </Card.Link>
          </div>
        </Col>
        <Col xs={10} sm={1} lg={1} xl={1} className="d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-right justify-content-center px-md-0">
          <Dropdown className="d-flex justify-content-end">
            <Dropdown.Toggle as={Button} variant="link" className="text-dark dropdown-toggle-split m-0 p-0">
              <DotsHorizontalIcon className="icon icon-xs icon-dark" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
              <Dropdown.Item as={Button} variant="link" className={`d-flex align-items-center text-${doneColor}`} onClick={toggleDoneStatus}>
                <CheckCircleIcon className="dropdown-icon me-2" /> {doneText}
              </Dropdown.Item>
              <Dropdown.Item as={Button} variant="link" className="d-flex align-items-center" onClick={deleteTask}>
                <TrashIcon className="dropdown-icon text-danger me-2" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Card.Body>
    </Card>
  );
};

export const ListChartWidget = () => {
  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <h5>Related Sites</h5>
        <ul className="list-unstyled mb-0">
          <li className="mb-1">
            <GoogleIcon size="xxs" color="gray-500" className="me-2" />
            google.com
          </li>
          <li className="mb-1">
            <YoutubeIcon size="xxs" color="gray-500" className="me-2" />
            youtube.com
          </li>
          <li className="mb-1">
            <TwitterIcon size="xxs" color="gray-500" className="me-2" />
            twitter.com
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export const CustomersWidget = (props) => {
  return (
    <PeriodOverviewWidget
      {...props}
      ChartComponent={CustomersChart}
    />
  );
};

export const RevenueWidget = (props) => {
  return (
    <PeriodOverviewWidget
      {...props}
      ChartComponent={RevenueChart}
    />
  );
};

export const UsersWidget = (props) => {
  return (
    <PeriodOverviewWidget
      {...props}
      ChartComponent={UsersChart}
    />
  );
};

export const WeeklyReportWidget = (props) => {
  const { headerTitle, headerSubtitle, reportTitle, reportSubtitle } = props;

  return (
    <Card border="0" className="shadow">
      <Card.Header className="border-bottom">
        <h2 className="fs-5 fw-bold mb-1">
          {headerTitle}
        </h2>
        <small>{headerSubtitle}</small>
      </Card.Header>
      <Card.Body className="text-center py-4 py-xl-5">
        <h3 className="display-3 fw-extrabold mb-0">
          {reportTitle}
        </h3>
        <p>{reportSubtitle}</p>
        <Button variant="primary" className="d-inline-flex align-items-center">
          <DocumentTextIcon className="icon icon-xxs me-2" />
          Generate Report
        </Button>
      </Card.Body>
      <Card.Footer className="border-0 px-3 py-4">
        <WeeklyReportChart />
      </Card.Footer>
    </Card>
  );
};

export const BarChartHorizontalWidget = (props) => {
  const { title, data = [] } = props;
  const dataOrderedAsc = [...data].sort((a, b) => a.value - b.value);
  const dataOrderedDesc = [...data].sort((a, b) => b.value - a.value);

  const topLabel = dataOrderedDesc[0] ? dataOrderedDesc[0].label : "No data";
  const topValue = dataOrderedDesc[0] ? dataOrderedDesc[0].value : 0;

  const PercentageIcon = topValue < 0 ? ChevronDownIcon : ChevronUpIcon;
  const percentageColor = topValue < 0 ? "text-danger" : "text-success";

  return (
    <Card border="0" className="shadow">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">
            {title}
          </h6>
          <h4>{topLabel}</h4>
          <small className={`d-flex align-items-center ${percentageColor} mt-2`}>
            <PercentageIcon className="icon icon-xs" />
            <span className="fw-bold">{topValue}%</span>
          </small>
        </div>
        <div className="ms-auto">
          {dataOrderedDesc.map(d => (
            <div key={`bar-chart-${d.id}`} className="d-flex align-items-center mb-2">
              <small className="fw-normal me-3">{d.label}</small>
              <small className="fw-bold text-dark ms-auto">{d.value}%</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2 py-5">
        <BarChartHorizontal
          title={title}
          data={dataOrderedAsc}
        />
      </Card.Body>
    </Card>
  );
};

export const TopAuthorsWidget = (props) => {
  const { title } = props;

  const AuthorItem = (props) => {
    const { name, image, jobTitle, salary } = props;

    return (
      <ListGroup.Item className="bg-transparent border-bottom py-3 px-0">
        <Row className="align-items-center">
          <Col xs="auto">
            <Card.Link href="#" className="avatar-md">
              <Image rounded src={image} className="m-0" />
            </Card.Link>
          </Col>
          <Col xs="auto" className="px-0">
            <h4 className="fs-6 text-dark mb-0">
              <Card.Link href={`#${name}`}>
                {name}
              </Card.Link>
            </h4>
            <small>{jobTitle}</small>
          </Col>
          <Col className="text-end">
            <span className="fs-6 fw-bolder text-dark">
              ${salary}
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }

  return (
    <Card border="0" className="shadow">
      <Card.Header className="border-bottom">
        <h2 className="fs-5 fw-bold mb-0">
          {title}
        </h2>
      </Card.Header>
      <Card.Body className="py-0">
        <ListGroup className="list-group-flush">
          {authorEarnings.map(author => <AuthorItem key={`author-${author.id}`} {...author} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, worldRank, data = [] } = props;

  return (
    <Card border="0" className="shadow">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <div className="mb-3">
            <h2 className="fs-3 fw-extrabold">
              {title}
            </h2>
            <div className="small mt-2 d-flex">
              <div className="d-flex align-items-center me-2">
                <ChevronUpIcon className="icon icon-xs text-success" />
                <span className="text-success fw-bold">
                  {worldRank}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <GlobeIcon className="icon icon-xxs text-gray-500 me-1" />
                <span>WorldWide</span>
              </div>
            </div>
          </div>
          <div className="d-flex">
            {data.map(d => (
              <div key={`bar-chart-${d.id}`} className="d-flex align-items-center me-3 lh-130">
                <span style={{ backgroundColor: d.color }} className="dot rounded-circle me-2" />
                <small className="fw-normal">{d.label}</small>
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart data={data} />
      </Card.Body>
    </Card>
  );
};

export const PieChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.reduce((acc, curr) => {
    acc.values.push(curr.value);

    if (acc.top.value < curr.value) {
      acc.top = curr;
    }

    return acc
  }, { values: [], top: { value: 0, label: "No data" } });

  const PercentageIcon = series.top.value < 0 ? ArrowDownIcon : ArrowUpIcon;
  const percentageColor = series.top.value < 0 ? "text-danger" : "text-success";

  return (
    <Card border="0" className="shadow">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h4>{series.top.label}</h4>
          <small className={`${percentageColor} mt-2`}>
            <PercentageIcon className="icon icon-xs me-1" />
            <span className="fw-bold">{series.top.value}%</span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`pie-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <span className="fw-normal small">{d.label}</span>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <PieChart series={series.values} />
      </Card.Body>
    </Card>
  );
};

export const DognutChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const series = data.map(d => d.value);
  const PercentageIcon = percentage < 0 ? ArrowDownIcon : ArrowUpIcon;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="0" className="shadow">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h4>{value}</h4>
          <small className={`${percentageColor} mt-2`}>
            <PercentageIcon className="me-1" />
            <span className="fw-bold">
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`dognut-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <DognutChart series={series} />
      </Card.Body>
    </Card>
  );
};

export const TeamMembersWidget = () => {
  const history = useHistory();

  const goToUsers = () => {
    history.push(Routes.Users.path);
  }

  const TeamMember = (props) => {
    const { name, statusKey, image, icon: ButtonIcon = CalendarIcon, btnText } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" }
    };

    const statusColor = status[statusKey] ? status[statusKey].color : 'danger'
      , statusLabel = status[statusKey] ? status[statusKey].label : 'Offline';

    return (
      <ListGroup.Item className="px-0">
        <Row className="align-items-center">
          <Col xs="auto">
            <Card.Link href="#top" className="avatar">
              <Image src={image} className="rounded m-0" />
            </Card.Link>
          </Col>
          <Col xs="auto" className="ms--2">
            <h4 className="h6 mb-0">
              <Card.Link href={`#${name}`}>
                {name}
              </Card.Link>
            </h4>
            <div className="d-flex align-items-center">
              <div className={`bg-${statusColor} dot rounded-circle me-1`} />
              <small>{statusLabel}</small>
            </div>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm" className="d-inline-flex align-items-center">
              <ButtonIcon className="icon icon-xxs me-2" /> {btnText}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Header className="border-bottom d-flex align-items-center justify-content-between">
        <h2 className="fs-5 fw-bold mb-0">
          Team members
        </h2>
        <Button variant="primary" size="sm" onClick={goToUsers}>
          See all
        </Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list my--3">
          {teamMembers.map(tm => <TeamMember key={`team-member-${tm.id}`} {...tm} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ProgressTrackWidget = () => {
  const history = useHistory();

  const goToTasks = () => {
    history.push(Routes.Tasks.path);
  }

  const Progress = (props) => {
    const { title, percentage, color, last = false } = props;
    const rowClassName = last ? "mb-3" : "mb-4";

    return (
      <Row className={`d-flex align-items-center ${rowClassName}`}>
        <Col xs="auto">
          <ClipboardListIcon className="icon icon-sm text-gray-500" />
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-gray-500">
                <span>{percentage} %</span>
              </small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} className="mb-0" />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Header className="border-bottom d-flex align-items-center justify-content-between">
        <h2 className="fs-5 fw-bold mb-0">
          Progress track
        </h2>
        <Button variant="primary" size="sm" onClick={goToTasks}>
          See tasks
        </Button>
      </Card.Header>
      <Card.Body>
        <Progress title="Rocket - SaaS Template" color="purple" percentage={34} />
        <Progress title="Themesberg - Design System" color="success" percentage={60} />
        <Progress title="Homepage Design in Figma" color="warning" percentage={45} />
        <Progress last title="Backend for Themesberg v2" color="danger" percentage={34} />
      </Card.Body>
    </Card>
  );
};

export const EventsWidget = () => {
  const Event = (props) => {
    const { organizer, startDate, endDate, location, address, onlyTime, lastItem } = props
      , startDateTime = startDate.format('HH:mm A')
      , startDateMonth = startDate.format('MMM')
      , startDateDay = startDate.format('D')
      , startDateFormatted = startDate.format('ddd, D MMM')
      , endDateFormatted = endDate.format('ddd, D MMM YYYY')
      , eventDuration = `${startDateFormatted} - ${endDateFormatted}`
      , rowClassName = lastItem ? "" : "border-bottom pb-4 mb-4";

    return (
      <Row className={`align-items-center d-block d-sm-flex ${rowClassName}`}>
        <Col xs="auto" className="mb-3 mb-sm-0">
          <div className="calendar d-flex">
            <span className="calendar-month">{startDateMonth}</span>
            <span className="calendar-day py-2">{startDateDay}</span>
          </div>
        </Col>
        <Col>
          <Card.Link as={Link} to={Routes.Calendar.path} className="mb-1">
            <h5 className="mb-1">{location}</h5>
          </Card.Link>
          <span>Organized by <Card.Link href="#">{organizer}</Card.Link></span>
          <div className="small fw-bold">{onlyTime ? `Time: ${startDateTime}` : eventDuration}</div>
          <span className="small fw-bold">Place: {address}</span>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Header className="border-bottom">
        <h2 className="fs-5 fw-bold mb-1">Events</h2>
      </Card.Header>
      <Card.Body>
        <Event
          organizer="University of Oxford"
          startDate={moment().hour(20).minutes(0)}
          endDate={moment().add(1, "day")}
          location="Newmarket Nights"
          address="Cambridge Boat Club, Cambridge"
          onlyTime={true}
        />
        <Event
          organizer="University of Oxford"
          startDate={moment().add(5, "days")}
          endDate={moment().add(7, "days")}
          location="Noco Hemp Expo"
          address="Denver Expo Club, USA"
        />
        <Event
          organizer="University of Oxford"
          startDate={moment().add("1", "month").add("10", "days")}
          endDate={moment().add("1", "month").add("17", "days")}
          location="Canadian National Exhibition (CNE)"
          address="Toronto, Canada"
        />
        <Event
          organizer="University of Oxford"
          startDate={moment().add("1", "month").add("15", "days")}
          endDate={moment().add("1", "month").add("16", "days")}
          location="Great Opera Hits"
          address="Sydney Opera House, Australia"
          lastItem={true}
        />
      </Card.Body>
      <Card.Footer as={Link} to={Routes.Calendar.path} className="border-top bg-gray-50">
        <div className="d-flex align-items-center justify-content-center fw-bold">
          <EyeIcon className="icon icon-xs me-2" />
          See all
        </div>
      </Card.Footer>
    </Card>
  );
};

export const RankingWidget = () => {
  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
          <div className="d-flex align-items-center h6 mb-0">
            <GlobeIcon className="icon icon-xs text-gray-500 me-2" />
            Global Rank
          </div>
          <div>
            <Card.Link href="#" className="d-flex align-items-center fw-bold">
              #755
              <PresentationChartLineIcon className="icon icon-xs text-gray-500 ms-1" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom py-3">
          <div>
            <div className="d-flex align-items-center h6 mb-0">
              <FlagIcon className="icon icon-xs text-gray-500 me-2" />
              Country Rank
            </div>
            <div className="d-flex align-items-center small card-stats">
              United States
              <ChevronUpIcon className="icon icon-xs text-success ms-2" />
            </div>
          </div>
          <div>
            <Card.Link href="#top" className="d-flex align-items-center fw-bold">
              #32
              <PresentationChartLineIcon className="icon icon-xs text-gray-500 ms-1" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <div className="d-flex align-items-center h6 mb-0">
              <FolderOpenIcon className="icon icon-xs text-gray-500 me-2" />
              Category Rank
            </div>
            <Card.Link href="#top" className="small card-stats d-flex align-items-center">
              Computers Electronics &gt; Technology
              <ChevronUpIcon className="icon icon-xs text-success ms-2" />
            </Card.Link>
          </div>
          <div>
            <Card.Link href="#top" className="d-flex align-items-center fw-bold">
              #11
              <PresentationChartLineIcon className="icon icon-xs text-gray-500 ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const VisitsMapWidget = () => {
  const Country = (props) => {
    const { image, name, visits, percentage, color = "primary" } = props;

    return (
      <Row className="align-items-center mb-4">
        <Col xs="auto">
          <Image roundedCircle src={image} className="image-xs" />
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{name} <span className="text-gray-500 font-small">({visits})</span></h6>
              <small className="fw-bold"><span>{percentage} %</span></small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} className="mb-0" />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Header className="pb-5">
        <h2 className="fs-5 fw-bold mb-1">
          Visits past 30 days by country
        </h2>
      </Card.Header>
      <Card.Body className="py-4">
        {countries.map(c => <Country key={`country-${c.id}`} {...c} />)}
      </Card.Body>
      <Card.Footer as={Link} to={Routes.Calendar.path} className="bg-gray-50 border-top text-center">
        <div className="d-flex align-items-center justify-content-center fw-bold">
          <EyeIcon className="icon icon-xs me-2" />
          See all
        </div>
      </Card.Footer>
    </Card>
  );
};

export const LineGraphChartWidget = (props) => {
  const { title, data = [] } = props;
  const dataWithTotal = data.map(d => ({ ...d, total: d.values.map(v => v.value).reduce((a, b) => a + b) }));
  dataWithTotal.sort((a, b) => a.total + b.total);

  const valuesTotal = dataWithTotal.reduce((a, b) => a + b.total, 0);
  const topLabel = dataWithTotal[0] ? dataWithTotal[0].label : "No data";

  const PercentageIcon = valuesTotal < 0 ? ChevronDownIcon : ChevronUpIcon;
  const percentageColor = valuesTotal < 0 ? "text-danger" : "text-success";

  const formatNumber = number => {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
      minimumFractionDigits: 1,
    }).format(number);
  };

  return (
    <Card border="0" className="shadow">
      <Card.Body className="d-flex flex-row align-items-center justify-content-between flex-0 border-bottom">
        <div>
          <div className="fs-5 fw-normal mb-2">
            {title}
          </div>
          <h2 className="fs-3 fw-extrabold">
            {topLabel}
          </h2>
          <small className="d-flex mt-2">
            <div className={`d-flex align-items-center ${percentageColor} me-2`}>
              <PercentageIcon className="icon icon-xs" />
              <span className="fw-bold">
                {formatNumber(valuesTotal)}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <GlobeIcon className="icon icon-xxs text-gray-500 me-1" />
              <span>WorldWide</span>
            </div>
          </small>
        </div>
        <div className="d-xxl-flex flex-wrap justify-content-end mt-4 mt-sm-0">
          {dataWithTotal.map(d => (
            <div key={`line-chart-${d.id}`} className="d-flex align-items-center mb-2 me-3 lh-130">
              <span style={{ backgroundColor: d.color }} className={`dot rounded-circle me-2`} />
              <small className="fw-normal">{d.label}</small>
              <small className="fw-bold text-dark ms-1">{formatNumber(d.total)}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2 pb-5">
        <LineGraphChart data={data} />
      </Card.Body>
    </Card>
  );
};

export const RatingsWidget = () => {
  const Review = (props) => {
    const { starsCount } = props;

    return (
      <Row className="d-flex align-items-center mb-2">
        <Col xs={2} color="gray" className="d-flex align-items-center fw-bold px-0 small">
          {starsCount}
          <StarIcon className="icon icon-xs text-warning ms-1" />
        </Col>
        <Col xs={10} className="px-0">
          <ProgressBar
            min={0}
            max={100}
            now={starsCount * 10}
            variant="primary"
            className="rounded progress-lg mb-0"
          />
        </Col>
      </Row>
    );
  };

  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <Row className="d-block d-md-flex align-items-center">
          <Col xs={12} md={5}>
            <h2 className="fs-5 fw-normal mb-1">
              Average Rating
            </h2>
            <h3 className="fs-1 fw-extrabold mb-1">
              4.5
            </h3>
            <div className="mb-2">
              <StarIcon className="icon icon-sm text-warning" />
              <StarIcon className="icon icon-sm text-warning" />
              <StarIcon className="icon icon-sm text-warning" />
              <StarIcon className="icon icon-sm text-warning" />
              <StarIcon className="icon icon-sm text-warning" />
            </div>
            <small>Based on <span color="dark" className="fw-bold">103,456</span> ratings</small>
          </Col>
          <Col xs={12} md={7} className="mt-3 mt-md-0">
            <Col xs={12}>
              <Review starsCount={5} />
              <Review starsCount={4} />
              <Review starsCount={3} />
              <Review starsCount={2} />
              <Review starsCount={1} />
            </Col>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const NotificationsWidget = () => {
  const SettingsItem = (props) => {
    const { id, title, subtitle, enabled = false, last = false } = props;
    const borderBottomClass = !last ? "border-bottom" : "";

    return (
      <ListGroup.Item className={`d-flex align-items-center justify-content-between px-0 ${borderBottomClass}`}>
        <div>
          <Card.Text className="h6 mb-1">{title}</Card.Text>
          <p className="small pe-4">{subtitle}</p>
        </div>
        <div>
          <Form.Check className="form-switch">
            <Form.Check.Input defaultChecked={enabled} type="checkbox" id={`user-notification-${id}`} />
          </Form.Check>
        </div>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="0" className="shadow mb-4 mb-xl-0">
      <Card.Body>
        <h5 className="mb-4">Alerts &amp; Notifications</h5>

        <ListGroup className="list-group-flush">
          <SettingsItem
            id={1}
            enabled={false}
            title="Company News"
            subtitle="Get Rocket news, announcements, and product updates"
          />
          <SettingsItem
            id={2}
            enabled={true}
            title="Account Activity"
            subtitle="Get important notifications about you or activity you've missed"
          />
          <SettingsItem
            id={3}
            last={true}
            enabled={true}
            title="Meetups Near You"
            subtitle="Get an email when a Dribbble Meetup is posted close to my location"
          />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidget = (props) => {
  const [period, setPeriod] = useState("week");
  const { title, value, percentage } = props;

  const PercentageIcon = percentage < 0 ? ChevronDownIcon : ChevronUpIcon;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="border-0 bg-secondary-alt shadow">
      <Card.Header className="d-sm-flex flex-row align-items-center border-0 flex-0">
        <div className="d-block mb-3 mb-sm-0">
          <h5 className="fs-5 fw-normal mb-2">
            {title}
          </h5>
          <h3 className="fs-3 fw-extrabold">
            ${value}
          </h3>
          <small className="d-flex align-items-center mt-2">
            <span className="fw-normal me-2">
              Yesterday
            </span>
            <PercentageIcon className={`icon icon-xs ${percentageColor}`} />
            <span className={`fw-bold ${percentageColor}`}>
              {percentage}%
            </span>
          </small>
        </div>
        <ButtonGroup className="ms-auto">
          <Button
            variant="secondary"
            active={period === "day"}
            onClick={() => setPeriod("day")}
          >
            Day
          </Button>
          <Button
            variant="secondary"
            active={period === "week"}
            onClick={() => setPeriod("week")}
          >
            Week
          </Button>
          <Button
            variant="secondary"
            active={period === "month"}
            onClick={() => setPeriod("month")}
          >
            Month
          </Button>
          <Button
            variant="secondary"
            active={period === "year"}
            onClick={() => setPeriod("year")}
          >
            Year
          </Button>
        </ButtonGroup>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChart period={period} />
      </Card.Body>
    </Card>
  );
};

export const AcquisitionWidget = () => {
  return (
    <Card border="0" className="shadow">
      <Card.Body>
        <h2 className="fs-5 fw-bold mb-1">
          Acquisition
        </h2>
        <p>Tells you where your visitors originated from, such as search engines, social networks or website referrals.</p>
        <div className="d-block">
          <div className="d-flex align-items-center me-5">
            <div className="icon-shape icon-sm icon-shape-danger rounded me-3">
              <PresentationChartBarIcon />
            </div>
            <div className="d-block">
              <label className="mb-0">Bounce Rate</label>
              <h4 className="mb-0">33.50%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon-shape icon-sm icon-shape-purple rounded me-3">
              <ChartBarIcon />
            </div>
            <div className="d-block">
              <label className="mb-0">Sessions</label>
              <h4 className="mb-0">9,567</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const ChangePlanWidget = () => {
  const currentDay = moment().format("MMMM DD, YYYY");

  return (
    <Card border="0" className="shadow text-center py-4 mb-4 mb-lg-0">
      <Card.Body>
        <h2 className="display-3 mb-3">
          Volt <span className="pro-badge subscription-badge bg-secondary fw-bolder">PRO</span>
        </h2>
        <p>Switch your subscription to a different type, such as a monthly plan, annual plan, or student plan. And see a list of subscription plans that Volt offers</p>
        <p className="text-dark my-4">Next payment of <span className="fw-bold">$36 (yearly)</span>{` occurs on ${currentDay}.`}</p>

        <Card.Link as={Button} variant="outline-gray-800" size="sm" className="me-2">
          Cancel subscription
        </Card.Link>
        <Button as={Link} variant="secondary" size="sm" to={Routes.Pricing.path}>
          Change plan
        </Button>
      </Card.Body>
    </Card>
  );
};

export const TimelineWidget = (props) => {
  const { title } = props;

  const TimelineItem = (props) => {
    const { title, message, time, icon: ItemIcon, iconBg } = props;
    const receiveTime = moment(time).fromNow();

    return (
      <ListGroup.Item className="border-o">
        <Row className="ps-lg-1">
          <Col xs="auto">
            <div className={`icon-shape icon-xs icon-shape-${iconBg} rounded`}>
              <ItemIcon />
            </div>
          </Col>
          <Col className="ms-n2 mb-3">
            <h3 className="fs-6 fw-bold mb-1">
              {title}
            </h3>
            <Card.Text className="mb-1">
              {message}
            </Card.Text>
            <div className="d-flex align-items-center">
              <ClockIcon className="icon icon-xxs text-gray-400 me-1" />
              <small>{receiveTime}</small>
            </div>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="0" className="notification-card shadow">
      <Card.Header className="d-flex align-items-center">
        <h2 className="fs-5 fw-bold mb-0">
          {title}
        </h2>
        <div className="ms-auto">
          <Card.Link href="#" className="d-inline-flex align-items-center fw-normal">
            <EyeIcon className="icon icon-xxs me-2" />
            View all
          </Card.Link>
        </div>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list-group-timeline">
          {productNotifications.map(notif => <TimelineItem key={`notif-${notif.id}`} {...notif} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const BlogCardWidget = () => {
  return (
    <Card border="0" className="shadow p-2 p-md-4">
      <Card.Header className="rounded rounded-0 pt-0">
        <div className="post-meta">
          <div className="media d-flex align-items-center justify-content-between">
            <div className="post-group">
              <OverlayTrigger placement="top" overlay={<Tooltip className="m-0">23k followers</Tooltip>}>
                <div><Image src={Profile2} className="avatar-sm me-2 m-0 img-fluid rounded-circle" alt="avatar" /> techhub</div>
              </OverlayTrigger>
            </div>
            <div className="d-flex align-items-center">
              <div className="author-name text-dark font-weight-bold font-small me-4 d-none d-lg-block">
                Posted by <Card.Link href="#top" className="me-2">@bonniegreen</Card.Link>5 hours ago
              </div>
              <Dropdown>
                <Dropdown.Toggle split variant="link" className="m-0 p-0">
                  <DotsHorizontalIcon className="icon icon-sm icon-dark" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <PencilAltIcon className="dropdown-icon text-gray-400 me-2" /> Edit post
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TrashIcon className="dropdown-icon text-danger me-2" /> Delete post
                  </Dropdown.Item >
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="py-4 px-0">
        <Card.Link href="#profile">
          <Image src={ProfileCover} className="card-img-top rounded m-0" alt="blog image" />
          <h4 className="my-4">List of public corporations by market capitalization</h4>
        </Card.Link>
        <Card.Text className="mb-4">
          All of the world's 10 largest companies as measured by market capitalization are American. Market capitalization is the total value of a company's entire purchased shares of stock. While these companies...
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0 pt-0 px-0">
        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
          <div className="post-details mb-3 mb-lg-0">
            <Button size="sm" variant="primary" className="animate-hover me-2">
              <ArrowUpIcon className="me-2 animate-up-2" /> 4
            </Button>
            <Button size="sm" variant="danger" className="animate-hover">
              <ArrowDownIcon className="me-2 animate-up-2" /> 1
            </Button>
          </div>
          <div className="post-meta">
            <Card.Link className="text-dark me-3" href="#comments">
              <ChatAltIcon className="icon icon-xs me-2" /> 33.7k
            </Card.Link>
            <Button variant="link" className="me-3 text-primary">
              <ShareIcon className="icon icon-xs me-2" /> Share
            </Button>
            <Button variant="secondary">
              <SaveIcon className="icon icon-xs me-2" /> Save
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};