import { Status } from "../../const.js";
import { generateID } from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "уник"
            },
            {
                id: generateID(),
                name: "машина"
            },
            {
                id: generateID(),
                name: "дом"
            }
        ]
    },
    {
        status: Status.PROCESSING,
        tasks: [
            {
                id: generateID(),
                name: "зал"
            },
            {
                id: generateID(),
                name: "помыть тачку"
            },
            {
                id: generateID(),
                name: "уборка"
            }
        ]
    },
    {
        status: Status.DONE,
        tasks: [
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "поспать"
            },
            {
                id: generateID(),
                name: "воскреснуть"
            }
        ]
    }
];