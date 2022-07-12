
import React from 'react';
import Swal from "sweetalert2";
import moment from "moment-timezone";
import { Col, Row, Form, Card, Modal, Button, InputGroup, Container } from 'react-bootstrap';
import Datetime from "react-datetime";
import { CalendarIcon } from "@heroicons/react/solid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import withReactContent from "sweetalert2-react-content";

import Code from "components/Code";
import Documentation from "components/Documentation";
import entries from "data/events";


export default () => {

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <h1 className="h2" id="calendar">Calendar</h1>
              <p className="fs-5 fw-light">
                Volt React has an advanced integration of <Card.Link href="https://fullcalendar.io/docs/react" target="_blank">FullCalendar</Card.Link> to show, edit and delete events.
              </p>

              <h2 className="fs-5">Getting started</h2>
              <p>
                The first step is to install the FullCalendar related dependencies. You’ll need the React adapter and any additional plugins you plan to use (the full list can be found <Card.Link href="https://fullcalendar.io/docs/plugin-index" target="_blank">here</Card.Link>):
              </p>
              <Code code="$ npm install --save @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/bootstrap @fullcalendar/interaction" language="bash" />

              <Documentation
                title="Example"
                description={
                  <p>Here’s an example of a calendar that combines two great libraries FullCalendar and SweetAlert:</p>
                }
                imports={`import { Col, Row, Form, Modal, Button, InputGroup } from "react-bootstrap";
import Datetime from "react-datetime";
import { CalendarIcon } from "@heroicons/react/solid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import withReactContent from "sweetalert2-react-content";`}
                scope={{ Col, Row, Form, Modal, Button, InputGroup, entries, Date, moment, FullCalendar, dayGridPlugin, timeGridPlugin, bootstrapPlugin, interactionPlugin, Datetime, Swal, withReactContent, CalendarIcon }}
                example={`const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-gray'
  },
  buttonsStyling: false
}));
                
const EventModal = (props) => {
  const [title, setTitle] = React.useState(props.title);
  const [start, setStart] = React.useState(props.start);
  const [end, setEnd] = React.useState(props.end);

  const { show = false, edit = false, id } = props;
  const startDate = start ? moment(start).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");
  const endDate = end ? moment(end).endOf("day").format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");

  const onTitleChange = (e) => setTitle(e.target.value);

  const onConfirm = () => {
    const finalStart = moment(startDate).toDate();
    const finalEnd = moment(endDate).toDate();
    const payload = { id, title, start: finalStart, end: finalEnd };

    if (edit) {
      return props.onUpdate && props.onUpdate(payload);
    }

    return props.onAdd && props.onAdd(payload);
  }
  const onDelete = () => edit && props.onDelete && props.onDelete(id);
  const onHide = () => props.onHide && props.onHide();

  return (
    <Modal as={Modal.Dialog} centered show={show} onHide={onHide}>
      <Form className="modal-content">
        <Modal.Body>
          <Form.Group id="title" className="mb-4">
            <Form.Label>Event title</Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              value={title}
              onChange={onTitleChange} />
          </Form.Group>
          <Row>
            <Col xs={12} lg={6}>
              <Form.Group id="startDate">
                <Form.Label>Select start date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setStart}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <CalendarIcon className="icon icon-xs" />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={startDate}
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="endDate" className="mb-2">
                <Form.Label>Select end date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setEnd}
                  isValidDate={currDate => currDate.isAfter(start)}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={endDate}
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="me-2" onClick={onConfirm}>
            {edit ? "Update event" : "Add new event"}
          </Button>

          {edit ? (
            <Button variant="danger" onClick={onDelete}>
              Delete event
            </Button>
          ) : null}

          <Button variant="link" className="text-gray ms-auto" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
                
const Calendar = () => {
  const defaultModalProps = { id: "", title: "", start: null, end: null };
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [modalProps, setModalProps] = React.useState(defaultModalProps);
  const [events, setEvents] = React.useState(entries);

  const calendarRef = React.useRef();
  const currentDate = moment().format("YYYY-MM-DD");

  const onDateClick = (props) => {
    const { date } = props;
    const id = events.length + 1;
    const endDate = new Date(date).setDate(date.getDate() + 1);

    setModalProps({ ...modalProps, id, start: date, end: endDate });
    setShowAddModal(true);
  };

  const onEventClick = (props) => {
    const { event: { id, title, start, end } } = props;
    setModalProps({ id, title, start, end });
    setShowEditModal(true);
  };

  const onEventUpdate = (props) => {
    const { id, title, start, end } = props;
    const calendarApi = calendarRef.current.getApi();
    const calendarElem = calendarApi.getEventById(id);

    if (calendarElem) {
      calendarElem.setProp("title", title);
      calendarElem.setStart(start);
      calendarElem.setEnd(end);
    }

    setShowEditModal(false);
  };

  const onEventAdd = (props) => {
    const newEvent = { ...props, dragable: true, className: 'bg-blue text-white', allDay: true };

    setShowAddModal(false);
    setEvents([...events, newEvent]);
    setModalProps(defaultModalProps);
  };

  const onEventDelete = async function(id) {
    const result = await SwalWithBootstrapButtons.fire({
      icon: 'error',
      title: 'Confirm deletion',
      text: 'Are you sure you want to delete this event?',
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: 'Cancel'
    });

    setShowEditModal(false);
    setModalProps(defaultModalProps);

    if (result.isConfirmed) {
      await SwalWithBootstrapButtons.fire('Deleted!', 'The event has been deleted.', 'success');

      const newEvents = events.filter(e => e.id !== id);
      setEvents(newEvents);
    }
  };

  const handleClose = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };

  return <>
    {showEditModal ? (
      <EventModal
        {...modalProps}
        edit={true}
        show={showEditModal}
        onUpdate={onEventUpdate}
        onDelete={onEventDelete}
        onHide={handleClose}
      />
    ) : null}

    {showAddModal ? (
      <EventModal
        {...modalProps}
        show={showAddModal}
        onAdd={onEventAdd}
        onHide={handleClose}
      />
    ) : null}

    <FullCalendar
      editable
      selectable
      events={events}
      ref={calendarRef}
      themeSystem="bootstrap"
      initialView="dayGridMonth"
      displayEventTime={false}
      initialDate={currentDate}
      dateClick={onDateClick}
      eventClick={onEventClick}
      plugins={[dayGridPlugin, timeGridPlugin, bootstrapPlugin, interactionPlugin]}
      buttonText={{
        prev: "Previous",
        next: "Next",
        month: "Month",
        week: "Week",
        day: "Day",
        today: "Today",
      }}
    />
  </>;
};

render( <Calendar /> );`}
              />

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
