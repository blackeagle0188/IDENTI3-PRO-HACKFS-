
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

import Profile1 from "assets/img/team/profile-picture-1.jpg"
import Profile2 from "assets/img/team/profile-picture-2.jpg"
import Profile3 from "assets/img/team/profile-picture-3.jpg"
import Profile4 from "assets/img/team/profile-picture-4.jpg"

export default [
    {
        "id": uuidv4(),
        "read": false,
        "favorite": false,
        "image": Profile1,
        "sender": "Roy Fendley",
        "timeSent": "11:01 AM",
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": false,
        "favorite": true,
        "image": Profile3,
        "sender": "Bonnie Green",
        "timeSent": "10:23 AM",
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": true,
        "sender": "Scott Anderson",
        "timeSent": "10:01 AM",
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": false,
        "image": Profile4,
        "sender": "Ronnie Buchanan",
        "timeSent": "07:45 AM",
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": false,
        "image": Profile3,
        "sender": "Jane Rinehart",
        "timeSent": "07:30 AM",
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": false,
        "sender": "William Ginther",
        "timeSent": "06:10 AM",
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": false,
        "image": Profile2,
        "sender": "George Driskell",
        "timeSent": moment().subtract(5,"days").format("MMM DD"),
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": false,
        "image": Profile4,
        "sender": "Ronnie Buchanan",
        "timeSent": moment().subtract(7,"days").format("MMM DD"),
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    },
    {
        "id": uuidv4(),
        "read": true,
        "favorite": true,
        "sender": "Jane Rinehart",
        "timeSent": moment().subtract(8,"days").format("MMM DD"),
        "message": "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t set up email forwarding and we could help you"
    }
]