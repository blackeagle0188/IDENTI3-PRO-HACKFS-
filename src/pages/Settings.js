import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArchiveIcon, CalendarIcon, ChatIcon, ChevronDownIcon, ClipboardListIcon, CloudUploadIcon, DocumentTextIcon, FireIcon, PlusIcon, PresentationChartBarIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/solid";
import { Col, Row, Card, Form, Image, Button, Dropdown } from 'react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget, NotificationsWidget } from "components/Widgets";
import { GeneralInfoForm } from "components/Forms";
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import Profile1 from "assets/img/team/profile-picture-1.jpg";
import Profile3 from "assets/img/team/profile-picture-3.jpg";
import ProfileCover from "assets/img/profile-cover.jpg";


export default () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: files => setFiles(files.map(file => ({
      ...file,
      preview: URL.createObjectURL(file)
    })))
  });

  const DropzoneFile = (props) => {
    const { path, preview } = props;

    return (
      <Col xs={6} className="dropzone-preview">
        <Image src={preview} className="dropzone-image" />
        <Card.Text className="dropzone-filename">
          {path}
        </Card.Text>
      </Col>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div>
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="secondary" className="d-inline-flex align-items-center me-2">
              <PlusIcon className="icon icon-xs me-2" /> New
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
              <Dropdown.Item className="d-flex align-items-center">
                <DocumentTextIcon className="dropdown-icon text-gray-400 me-2" /> Document
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <ChatIcon className="dropdown-icon text-gray-400 me-2" /> Message
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <CloudUploadIcon className="dropdown-icon text-gray-400 me-2" /> Product
              </Dropdown.Item>

              <Dropdown.Divider as="div" className="my-1" />

              <Dropdown.Item className="d-flex align-items-center">
                <FireIcon className="dropdown-icon text-danger me-2" /> My Plan
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex">
          <Button as={Link} to={Routes.Calendar.path} variant="gray-800" className="me-2">
            <CalendarIcon className="icon icon-xs" />
          </Button>
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="gray-800">
              <ClipboardListIcon className="icon icon-xs me-2" />
              Reports
              <ChevronDownIcon className="icon icon-xs ms-1" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
              <Dropdown.Item className="d-flex align-items-center">
                <ArchiveIcon className="dropdown-icon text-gray-400 me-2" /> Products
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <UsersIcon className="dropdown-icon text-gray-400 me-2" /> Customers
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <ShoppingBagIcon className="dropdown-icon text-gray-400 me-2" /> Orders
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <PresentationChartBarIcon className="dropdown-icon text-gray-400 me-2" /> Console
              </Dropdown.Item>

              <Dropdown.Divider as="div" className="my-1" />

              <Dropdown.Item className="d-flex align-items-center">
                <ClipboardListIcon className="dropdown-icon text-gray-800 me-2" /> All Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
          <NotificationsWidget />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12} className="mb-4">
              <ProfileCardWidget
                fullName="Neil Sims"
                picture={Profile1}
                jobTitle="Senior Software Engineer"
                location="New York, USA"
              />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile3}
              />
            </Col>
            <Col xs={12} sm={6} xl={12}>
              <Form {...getRootProps({ className: "dropzone rounded d-flex align-items-center justify-content-center mb-4" })}>
                <Form.Control {...getInputProps()} />
                <div className="dz-default dz-message text-center">
                  <p className="dz-button mb-0">Drop files here to upload</p>
                </div>
              </Form>
              <Row className="dropzone-files">
                {files.map(file => <DropzoneFile key={file.path} {...file} />)}
              </Row>
            </Col>
            <Col xs={12} sm={6} xl={12}>
              <ChoosePhotoWidget
                title="Select cover photo"
                photo={ProfileCover}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
