
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";
import { ExclamationIcon, InboxIcon, RefreshIcon, ShoppingCartIcon } from "@heroicons/react/solid";

import { Routes } from "routes";
import Profile1 from "assets/img/team/profile-picture-1.jpg"
import Profile2 from "assets/img/team/profile-picture-2.jpg"
import Profile3 from "assets/img/team/profile-picture-3.jpg"
import Profile4 from "assets/img/team/profile-picture-4.jpg"
import Profile5 from "assets/img/team/profile-picture-5.jpg"

export const userNotifications = [
    {
        "id": uuidv4(),
        "read": false,
        "image": Profile1,
        "sender": "Jose Leos",
        "time": moment().subtract(15, "seconds"),
        "link": Routes.Calendar.path,
        "message": `Added you to an event "Project stand-up" tomorrow at 12:30 AM.`
    },
    {
        "id": uuidv4(),
        "read": false,
        "image": Profile2,
        "sender": "Neil Sims",
        "time": moment().subtract(2, "hours"),
        "link": Routes.Tasks.path,
        "message": `You've been assigned a task for "Awesome new project".`
    },
    {
        "id": uuidv4(),
        "read": false,
        "image": Profile3,
        "sender": "Roberta Casas",
        "time": moment().subtract(5, "hours"),
        "link": Routes.Tasks.path,
        "message": `Tagged you in a document called "First quarter financial plans".`
    },
    {
        "id": uuidv4(),
        "read": true,
        "image": Profile4,
        "sender": "Joseph Garth",
        "time": moment().subtract(1, "day"),
        "link": Routes.Messages.path,
        "message": `New message: "Hey, what's up? All set for the presentation?"`
    },
    {
        "id": uuidv4(),
        "read": true,
        "image": Profile5,
        "sender": "Jose Leos",
        "time": moment().subtract(2, "days"),
        "link": Routes.Messages.path,
        "message": `New message: "We need to improve the UI/UX for the landing page."`
    },
];

export const productNotifications = [
    {
        "id": uuidv4(),
        "title": "You sold an item",
        "time": moment().subtract(1, "minute"),
        "icon": ShoppingCartIcon,
        "iconBg": "purple",
        "message": "Bonnie Green just purchased \"Volt - Admin Dashboard\"!",
    },
    {
        "id": uuidv4(),
        "title": "New message",
        "time": moment().subtract(8, "minutes"),
        "icon": InboxIcon,
        "iconBg": "primary",
        "message": "Let's meet at Starbucks at 11:30. Wdyt?",
    },
    {
        "id": uuidv4(),
        "title": "Product issue",
        "time": moment().subtract(10, "minutes"),
        "icon": ExclamationIcon,
        "iconBg": "warning",
        "message": "A new issue has been reported for Pixel Pro.",
    },
    {
        "id": uuidv4(),
        "title": "Product update",
        "time": moment().subtract(4, "hours"),
        "icon": RefreshIcon,
        "iconBg": "success",
        "message": "Spaces - Listings Template has been updated.",
    },
    {
        "id": uuidv4(),
        "title": "Product update",
        "time": moment().subtract(5, "hours"),
        "icon": RefreshIcon,
        "iconBg": "success",
        "message": "Volt - Admin Dashboard has been updated.",
    },
];