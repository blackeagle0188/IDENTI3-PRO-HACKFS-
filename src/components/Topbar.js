
import React, { useState } from "react";
import moment from "moment-timezone";
import { BellIcon, CogIcon, InboxIcon, MenuAlt1Icon, SearchIcon, SupportIcon, UserCircleIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { Row, Col, Nav, Form, Image, Button, Navbar, Dropdown, Container, ListGroup, InputGroup } from 'react-bootstrap';

import { userNotifications } from "data/notifications";
import Profile3 from "assets/img/team/profile-picture-3.jpg";
import { Routes } from "routes";
import { Link } from "react-router-dom";


export default (props) => {
  const [notifications, setNotifications] = useState(userNotifications);
  const allNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);
  const bellIconClasses = !allNotificationsRead ? "unread" : "";

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 400);
  };

  const toggleContracted = () => props.toggleContracted && props.toggleContracted();

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";
    const receiveTime = moment(time).fromNow();

    return (
      <ListGroup.Item action href={link} className="list-group-item-action border-bottom">
        <Row className="align-items-center">
          <Col xs="auto">
            <Image src={image} className="avatar-md rounded" />
          </Col>
          <Col className="ps-0 ms-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>
                  {receiveTime}
                </small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Navbar expand variant="dark" className="navbar-top navbar-dashboard ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Button
              size="lg"
              id="sidebar-toggle"
              variant="icon-only"
              className="sidebar-toggle d-none d-lg-inline-block align-items-center justify-content-center me-3"
              onClick={toggleContracted}
            >
              <MenuAlt1Icon className="toggle-icon" />
            </Button>
            <Form className="navbar-search form-inline">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><SearchIcon className="icon icon-xs" /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
              <Dropdown.Toggle as={Nav.Link} className={`text-dark notification-bell ${bellIconClasses}`}>
                <BellIcon className="icon icon-sm bell-shake text-gray-900" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Notifications
                  </Nav.Link>

                  {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}

                  <Dropdown.Item className="text-center text-primary fw-bold py-3">
                    View all
                  </Dropdown.Item>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className="ms-lg-3">
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image src={Profile3} className="avatar rounded-circle" />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold text-gray-900">Bonnie </span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown dropdown-menu-end mt-2 py-1">
                <Dropdown.Item as={Link} to={Routes.Profile.path} className="d-flex align-items-center" > 
                  <UserCircleIcon className="dropdown-icon text-gray-400 me-2" /> My Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={Routes.Settings.path} className="d-flex align-items-center">
                  <CogIcon className="dropdown-icon text-gray-400 me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={Routes.Messages.path} className="d-flex align-items-center">
                  <InboxIcon className="dropdown-icon text-gray-400 me-2" /> Messages
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={Routes.Profile.path} className="d-flex align-items-center">
                  <SupportIcon className="dropdown-icon text-gray-400 me-2" /> Support
                </Dropdown.Item>

                <Dropdown.Divider as="div" className="my-1" />

                <Dropdown.Item className="d-flex align-items-center">
                  <LogoutIcon className="dropdown-icon text-danger me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
