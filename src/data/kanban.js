
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

import Profile1 from "assets/img/team/profile-picture-1.jpg";
import Profile2 from "assets/img/team/profile-picture-2.jpg";
import Profile3 from "assets/img/team/profile-picture-3.jpg";
import Profile4 from "assets/img/team/profile-picture-4.jpg";
import ThemesbergMockup from "assets/img/themesberg-mockup.jpg";

export const Members = [
    { "id": uuidv4(), "name": "Ryan Tompson", "image": Profile1 },
    { "id": uuidv4(), "name": "Alexander Smith", "image": Profile2 },
    { "id": uuidv4(), "name": "Bonnie Green", "image": Profile3 },
    { "id": uuidv4(), "name": "Scott Anderson", "image": Profile4 },
];

export const Labels = [
    { "id": uuidv4(), "name": "Help wanted", "color": "primary" },
    { "id": uuidv4(), "name": "Feature", "color": "tertiary" },
    { "id": uuidv4(), "name": "Feature request", "color": "secondary" },
    { "id": uuidv4(), "name": "Urgent", "color": "danger" },
    { "id": uuidv4(), "name": "High priority", "color": "warning" },
    { "id": uuidv4(), "name": "Low priority", "color": "yellow-200" },
    { "id": uuidv4(), "name": "Needs investigation", "color": "indigo" },
    { "id": uuidv4(), "name": "Discussion", "color": "purple" },
];

export const createList = (props = {}) => ({
    "title": "",
    "cards": [],
    ...props,
    "id": uuidv4(),
    "dateCreated": moment().format("DD MMM YYYY"),
});

export const createCard = (props = {}) => ({
    "title": "",
    "description": "",
    "author": Members[0],
    "members": [Members[0]],
    "labels": [Labels[0]],
    "comments": [],
    ...props,
    "id": uuidv4(),
    "dateCreated": moment().format("DD MMM YYYY"),
});

export default [
    {
        "id": uuidv4(),
        "title": "To do",
        "dateCreated": moment().format("DD MMM YYYY"),
        "cards": [
            {
                "id": uuidv4(),
                "title": "variables.scss problems",
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[0],
                "members": [
                    Members[0],
                    Members[1],
                    Members[2],
                ],
                "labels": [Labels[0]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().format("DD MMM YYYY"),
            },
            {
                "id": uuidv4(),
                "title": "Redesign homepage",
                "image": ThemesbergMockup,
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[0],
                "members": [
                    Members[0],
                    Members[1],
                ],
                "labels": [Labels[1]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
            },
            {
                "id": uuidv4(),
                "title": "Upgrade bootstrap version to latest",
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[0],
                "members": [
                    Members[0],
                    Members[1],
                ],
                "labels": [Labels[2]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().subtract(3, "days").format("DD MMM YYYY"),
            },
        ]
    },
    {
        "id": uuidv4(),
        "title": "In progress",
        "dateCreated": moment().format("DD MMM YYYY"),
        "cards": [
            {
                "id": uuidv4(),
                "title": "Design banner",
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[2],
                "members": [
                    Members[2],
                    Members[3],
                ],
                "labels": [Labels[1]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
            },
            {
                "id": uuidv4(),
                "title": "Redesign homepage",
                "image": ThemesbergMockup,
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[0],
                "members": [
                    Members[0],
                    Members[1],
                ],
                "labels": [Labels[1]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
            },
        ]
    },
    {
        "id": uuidv4(),
        "title": "Done",
        "dateCreated": moment().format("DD MMM YYYY"),
        "cards": [
            {
                "id": uuidv4(),
                "title": "variables.scss problems",
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[0],
                "members": [
                    Members[0],
                    Members[1],
                    Members[2],
                ],
                "labels": [Labels[0]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().format("DD MMM YYYY"),
            },
            {
                "id": uuidv4(),
                "title": "Redesign homepage",
                "image": ThemesbergMockup,
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[1],
                "members": [
                    Members[1],
                    Members[0],
                ],
                "labels": [Labels[1]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
            },
        ]
    },
    {
        "id": uuidv4(),
        "title": "Deployed",
        "dateCreated": moment().format("DD MMM YYYY"),
        "cards": [
            {
                "id": uuidv4(),
                "title": "variables.scss problems",
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[1],
                "members": [
                    Members[0],
                    Members[1],
                    Members[2],
                ],
                "labels": [Labels[1]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().format("DD MMM YYYY"),
            },
            {
                "id": uuidv4(),
                "title": "Redesign homepage",
                "image": ThemesbergMockup,
                "description": "On line 672 you define $table_variants. Each instance of \"color-level\" needs to be changed to \"shift-color\".",
                "author": Members[2],
                "members": [
                    Members[2],
                    Members[1],
                ],
                "labels": [Labels[1]],
                "comments": [
                    {
                        "id": uuidv4(),
                        "sender": "Roy Fendley",
                        "timeSent": moment().subtract(30, "minutes"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                    {
                        "id": uuidv4(),
                        "sender": "Ryan Tompson",
                        "timeSent": moment().subtract(1, "hour"),
                        "message": "Volt Pro is a premium Bootstrap 5 UI Kit built on top of React, featuring over 1000 components, 50+ sections and 35 example pages including a fully fledged user dashboard."
                    },
                ],
                "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
            },
        ]
    },
];