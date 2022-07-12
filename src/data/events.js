
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

export default [
    {
        "id": uuidv4(),
        "title": "Call with Jane",
        "start": moment().startOf("month").add(17, "days").toDate(),
        "end": moment().startOf("month").add(17, "days").toDate(),
        "allDay": true,
        "className": "bg-danger border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Dinner meeting",
        "start": moment().startOf("month").add(20, "days").toDate(),
        "end": moment().startOf("month").add(20, "days").toDate(),
        "allDay": true,
        "className": "bg-secondary border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "HackTM conference",
        "start": moment().startOf("month").startOf("day").add(28, "days").toDate(),
        "end": moment().startOf("month").endOf("day").add(29, "days").toDate(),
        "allDay": false,
        "className": "bg-success border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Meeting with John",
        "start": moment().startOf("month").add(1, "month").toDate(),
        "end": moment().startOf("month").add(1, "month").toDate(),
        "allDay": true,
        "className": "bg-blue border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Summer Hackaton",
        "start": moment().startOf("month").startOf("day").add(2, "days").toDate(),
        "end": moment().startOf("month").endOf("day").add(4, "days").toDate(),
        "allDay": false,
        "className": "bg-purple border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Digital event",
        "start": moment().startOf("month").add(6, "days").toDate(),
        "end": moment().startOf("month").add(8, "days").toDate(),
        "allDay": false,
        "className": "bg-info border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Marketing event",
        "start": moment().startOf("month").add(1, "month").add(9, "days").toDate(),
        "end": moment().startOf("month").add(1, "month").add(9, "days").toDate(),
        "allDay": true,
        "className": "bg-blue border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Dinner with Parents",
        "start": moment().startOf("month").add(1, "month").add(20, "days").toDate(),
        "end": moment().startOf("month").add(1, "month").add(20, "days").toDate(),
        "allDay": true,
        "className": "bg-blue border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Important meeting with John",
        "start": moment().startOf("month").add(24, "days").toDate(),
        "end": moment().startOf("month").add(24, "days").toDate(),
        "allDay": true,
        "className": "bg-danger border-0 shadow"
    },
    {
        "id": uuidv4(),
        "title": "Cyber Week",
        "start": moment().startOf("month").add(1, "month").add(1, "day").toDate(),
        "end": moment().startOf("month").add(1, "month").add(7, "days").toDate(),
        "allDay": false,
        "className": "bg-danger border-0 shadow"
    }
];