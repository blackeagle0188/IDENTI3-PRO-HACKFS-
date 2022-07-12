import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Col, Row, Form, Button, Tooltip, Dropdown, InputGroup, ButtonGroup, OverlayTrigger } from 'react-bootstrap';

import { TaskCardWidget } from "components/Widgets";
import TASKS_DATA from "data/tasks";
import { ArchiveIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, CloudUploadIcon, FireIcon, PlusIcon, ShieldCheckIcon, TrashIcon, ViewGridAddIcon } from "@heroicons/react/solid";

const ArchiveIconHtml = ReactDOMServer.renderToString(
  <ArchiveIcon className="h-50 w-auto" />
);

const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-gray'
  },
  buttonsStyling: false
}));


export default () => {
  const [tasks, setTasks] = useState(TASKS_DATA.map(t => ({ ...t, show: true })));
  const [searchValue, setSearchValue] = useState("");
  const selectedTasksIds = tasks.filter(m => m.isSelected).map(m => m.id);
  const disableMenu = selectedTasksIds.length === 0;

  const toggleDoneStatus = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, statusKey: t.statusKey === "done" ? "inProgress" : "done" } : t));
  };

  const selectTask = (id) => {
    const newTasks = tasks.map(t => {
      const isSelected = t.id === id ? !t.isSelected : t.isSelected;
      return { ...t, isSelected };
    });

    setTasks(newTasks);
  };

  const markSelectedTasksAsDone = async () => {
    const newTasks = tasks.map(t => selectedTasksIds.includes(t.id) ? { ...t, "statusKey": "done" } : t);
    setTasks(newTasks);

    await SwalWithBootstrapButtons.fire("Successfully marked as done.", "", 'success');
  };

  const deleteTasks = async (ids) => {
    const tasksNr = ids.length;
    const textMessage = tasksNr === 1
      ? "Are you sure do you want to delete this task?"
      : `Are you sure do you want to delete these ${tasksNr} tasks?`;

    const result = await SwalWithBootstrapButtons.fire({
      icon: "error",
      title: "Confirm deletion",
      text: textMessage,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    });

    if (result.isConfirmed) {
      const newTasks = tasks.filter(t => !ids.includes(t.id));
      const confirmMessage = tasksNr === 1 ? "The task has been deleted." : "The tasks have been deleted.";

      setTasks(newTasks);
      await SwalWithBootstrapButtons.fire('Deleted', confirmMessage, 'success');
    }
  };

  const archiveSelectedTasks = async () => {
    const tasksNr = selectedTasksIds.length;
    const textMessage = tasksNr === 1
      ? "Are you sure do you want to archive this task?"
      : `Are you sure do you want to archive these ${tasksNr} tasks?`;

    const result = await SwalWithBootstrapButtons.fire({
      icon: "question",
      iconHtml: ArchiveIconHtml,
      title: "Confirm archivation",
      text: textMessage,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    });

    if (result.isConfirmed) {
      const newTasks = tasks.filter(f => !selectedTasksIds.includes(f.id));
      const confirmMessage = tasksNr === 1 ? "The task has been archived." : "The tasks have been archived.";

      setTasks(newTasks);
      await SwalWithBootstrapButtons.fire('Archived', confirmMessage, 'success');
    }
  };

  const changeSearchValue = (e) => {
    const newSearchValue = e.target.value;
    const newTasks = tasks.map(t => {
      const title = t.title.toLowerCase();
      const description = t.description.toLowerCase();

      const shouldShow = title.includes(newSearchValue)
        || description.includes(newSearchValue)
        || `${t.time}`.includes(newSearchValue);

      return ({ ...t, show: shouldShow, isSelected: shouldShow && t.isSelected ? false : t.isSelected });
    });

    setTasks(newTasks);
    setSearchValue(newSearchValue);
  }

  return (
    <>
      <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Col xs="auto" className="d-flex justify-content-between ps-0 mb-4 mb-lg-0">
          <div className="me-lg-3">
            <Dropdown>
              <Dropdown.Toggle as={Button} variant="secondary" className="d-inline-flex align-items-center me-2">
                <PlusIcon className="icon icon-xs me-2" /> New Task
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
                <Dropdown.Item className="d-flex align-items-center">
                  <PlusIcon className="icon icon-xs text-gray-400 me-2" /> Add Task
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center">
                  <ViewGridAddIcon className="icon icon-xs text-gray-400 me-2" /> Add Widget
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center">
                  <CloudUploadIcon className="icon icon-xs text-gray-400 me-2" /> Upload Files
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center">
                  <ShieldCheckIcon className="icon icon-xs text-gray-400 me-2" /> Preview Security
                </Dropdown.Item>

                <Dropdown.Divider as="div" className="my-1" />

                <Dropdown.Item className="d-flex align-items-center">
                  <FireIcon className="icon icon-xs text-danger me-2" /> Upgrade to Pro
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <ButtonGroup>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip className="m-0">Archive</Tooltip>}
            >
              <Button variant="gray-800" disabled={disableMenu} onClick={archiveSelectedTasks}>
                <ArchiveIcon className="icon icon-xs" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip className="m-0">Mark as done</Tooltip>}
            >
              <Button variant="gray-800" disabled={disableMenu} onClick={markSelectedTasksAsDone}>
                <CheckCircleIcon className="icon icon-xs" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip className="m-0">Delete</Tooltip>}
            >
              <Button variant="gray-800" disabled={disableMenu} onClick={() => deleteTasks(selectedTasksIds)}>
                <TrashIcon className="icon icon-xs" />
              </Button>
            </OverlayTrigger>
          </ButtonGroup>
        </Col>

        <Col xs={12} lg={6}>
          <InputGroup className="d-flex justify-content-lg-end">
            <Form.Control
              type="text"
              placeholder="Search Tasks Here"
              className="w-100 fmxw-300"
              value={searchValue}
              onChange={changeSearchValue}
            />
          </InputGroup>
        </Col>
      </div>

      <div className="task-wrapper border bg-white border-light shadow-sm py-1 rounded">
        {tasks.filter(t => t.show).map(t =>
          <TaskCardWidget
            {...t}
            key={`task-${t.id}`}
            selectTask={selectTask}
            toggleDoneStatus={toggleDoneStatus}
            deleteTask={id => deleteTasks([id])}
          />
        )}

        <Row className="d-flex align-items-center p-4">
          <Col xs={7} className="mt-1">
            Showing 1 - {tasks.length} of 289
          </Col>
          <Col xs={5}>
            <ButtonGroup className="float-end">
              <Button variant="light">
                <ChevronLeftIcon className="icon icon-xs" />
              </Button>
              <Button variant="primary">
                <ChevronRightIcon className="icon icon-xs" />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};
