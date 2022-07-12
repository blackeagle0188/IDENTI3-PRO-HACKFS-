
import { v4 as uuidv4 } from "uuid";
import { CalendarIcon, ChatAltIcon } from "@heroicons/react/solid";

import Profile1 from "assets/img/team/profile-picture-1.jpg"
import Profile2 from "assets/img/team/profile-picture-2.jpg"
import Profile3 from "assets/img/team/profile-picture-3.jpg"
import Profile4 from "assets/img/team/profile-picture-4.jpg"

export default [
    {
        "id": uuidv4(),
        "image": Profile1,
        "name": "Christopher Wood",
        "statusKey": "online",
        "icon": ChatAltIcon,
        "btnText": "Invite"
    },
    {
        "id": uuidv4(),
        "image": Profile2,
        "name": "Jose Leos",
        "statusKey": "inMeeting",
        "icon": CalendarIcon,
        "btnText": "Message"
    },
    {
        "id": uuidv4(),
        "image": Profile3,
        "name": "Bonnie Green",
        "statusKey": "offline",
        "icon": ChatAltIcon,
        "btnText": "Invite"
    },
    {
        "id": uuidv4(),
        "image": Profile4,
        "name": "Neil Sims",
        "statusKey": "online",
        "icon": CalendarIcon,
        "btnText": "Message"
    }
];