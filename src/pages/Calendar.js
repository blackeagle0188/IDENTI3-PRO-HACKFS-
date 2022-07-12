import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, Button, Breadcrumb } from "react-bootstrap";

import { Routes } from "routes";
import { EventModal } from "components/Modals";
import EVENTS_DATA from "data/events";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: "btn btn-primary me-3",
    cancelButton: "btn btn-gray"
  },
  buttonsStyling: false
}));

export default () => {
  const defaultModalProps = { id: "", title: "", start: null, end: null };
  const history = useHistory();
  const [events, setEvents] = useState(EVENTS_DATA);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalProps, setModalProps] = useState(defaultModalProps);
  const calendarRef = useRef();

  const currentDate = moment().format("YYYY-MM-DD");

  const onDateClick = (props) => {
    const id = events.length + 1;
    const date = new Date(props.date);
    const endDate = moment(date).endOf("day").add(1, "day").toDate();

    setModalProps({ ...defaultModalProps, id, start: date, end: endDate });
    setShowAddModal(true);
  };

  const onEventClick = (props) => {
    const { event: { id, title, start, end } } = props;
    setModalProps({ id, title, start, end });
    setShowEditModal(true);
  };

  const onEventUpdate = (props) => {
    const { id, title, start, end, sameDay } = props;
    const calendarApi = calendarRef.current.getApi();
    const calendarElem = calendarApi.getEventById(id);

    if (calendarElem) {
      calendarElem.setProp("title", title);
      calendarElem.setDates(start, end, { allDay: sameDay });
    }

    setShowEditModal(false);
  };

  const onEventAdd = (props) => {
    const newEvent = { ...props, dragable: true, className: "bg-blue", allDay: props.sameDay };

    setShowAddModal(false);
    setEvents([...events, newEvent]);
    setModalProps(defaultModalProps);
  };

  const onEventDelete = async (id) => {
    const result = await SwalWithBootstrapButtons.fire({
      icon: "error",
      title: "Confirm deletion",
      text: "Are you sure you want to delete this event?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    });

    setShowEditModal(false);
    setModalProps(defaultModalProps);

    if (result.isConfirmed) {      
      const newEvents = events.filter(e => e.id !== id);
      setEvents(newEvents);

      await SwalWithBootstrapButtons.fire("Deleted!", "The event has been deleted.", "success");
    }
  };

  const handleClose = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };

  const goToCalendarDocs = () => {
    history.push(Routes.PluginCalendar.path);
  };

  return (
    <>
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

      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
            <Breadcrumb.Item>Volt</Breadcrumb.Item>
            <Breadcrumb.Item active>Calendar</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Calendar</h4>
          <p className="mb-0">
            Dozens of reusable components built to provide buttons, alerts, popovers, and more.
          </p>
        </div>
        <div>
          <Button
            variant="outline-gray-600"
            className="d-inline-flex align-items-center"
            onClick={goToCalendarDocs}
          >
            <QuestionMarkCircleIcon className="icon icon-xs me-1" /> Calendar Docs
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow">
        <Card.Body>
          <FullCalendar
            editable
            selectable
            ref={calendarRef}
            events={events}
            displayEventTime={false}
            themeSystem="bootstrap"
            plugins={[dayGridPlugin, timeGridPlugin, bootstrapPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            buttonText={{
              prev: "Previous",
              next: "Next",
              month: "Month",
              week: "Week",
              day: "Day",
              today: "Today",
            }}
            bootstrapFontAwesome={false}
            initialDate={currentDate}
            eventClick={onEventClick}
            dateClick={onDateClick}
          />
        </Card.Body>
      </Card>
    </>
  );
};
