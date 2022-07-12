
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

import Profile1 from "assets/img/team/profile-picture-1.jpg"
import Profile2 from "assets/img/team/profile-picture-2.jpg"


export const createMessage = (message) => ({
    "id": uuidv4(),
    "sender": {
        "name": "Your Answer",
        "isMe": true,
        "image": Profile2
    },
    "timeSent": moment().format("MMMM DD, HH:mm"),
    "message": message
});

export default [
    {
        "id": uuidv4(),
        "sender": {
            "name": "Neil Sims",
            "image": Profile1
        },
        "timeSent": moment().subtract(5, "minutes").format("MMMM DD, HH:mm"),
        "message": "Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches on the internet."
    },
    {
        "id": uuidv4(),
        "sender": {
            "name": "Your Answer",
            "isMe": true,
            "image": Profile2
        },
        "timeSent": moment().subtract(4, "minutes").format("MMMM DD, HH:mm"),
        "message": "Hi Neil, thanks for sharing your thoughts regarding Volt."
    },
    {
        "id": uuidv4(),
        "sender": {
            "name": "Neil Sims",
            "image": Profile1
        },
        "timeSent": moment().subtract(3, "minutes").format("MMMM DD, HH:mm"),
        "message": "Chris, it literally saved me a lot of time and searches on the internet."
    },
    {
        "id": uuidv4(),
        "sender": {
            "name": "Neil Sims",
            "image": Profile1
        },
        "timeSent": moment().subtract(3, "minutes").format("MMMM DD, HH:mm"),
        "message": "I couldn't be more grateful for the wonderful work you are doing. Keep up the good work!"
    },
    {
        "id": uuidv4(),
        "sender": {
            "name": "Your Answer",
            "isMe": true,
            "image": Profile2
        },
        "timeSent": moment().subtract(1, "minute").format("MMMM DD, HH:mm"),
        "message": "Neil, it means a lot for me to hear that you'are happy with the product."
    }
];