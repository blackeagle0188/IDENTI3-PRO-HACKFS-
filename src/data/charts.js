
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

const lastWeekLabels = [
    moment().subtract(6, "days").format("DD MMM"),
    moment().subtract(5, "days").format("DD MMM"),
    moment().subtract(4, "days").format("DD MMM"),
    moment().subtract(3, "days").format("DD MMM"),
    moment().subtract(2, "days").format("DD MMM"),
    moment().subtract(1, "day").format("DD MMM"),
    moment().format("DD MMM"),
];


export const dailySales = {
    data: [20, 16, 10, 23, 37, 41, 45, 39, 27],
    labels: [
        moment().minutes(0).subtract(24, "hours").format("HH:mm"),
        moment().minutes(0).subtract(21, "hours").format("HH:mm"),
        moment().minutes(0).subtract(18, "hours").format("HH:mm"),
        moment().minutes(0).subtract(15, "hours").format("HH:mm"),
        moment().minutes(0).subtract(12, "hours").format("HH:mm"),
        moment().minutes(0).subtract(9, "hours").format("HH:mm"),
        moment().minutes(0).subtract(6, "hour").format("HH:mm"),
        moment().minutes(0).subtract(3, "hours").format("HH:mm"),
        moment().minutes(0).format("HH:mm"),
    ]
};

export const weeklySales = {
    data: [11, 22, 16, 35, 19, 39, 29],
    labels: lastWeekLabels,
};

export const monthlySales = {
    data: [21, 22, 16, 25, 29, 31, 30, 27, 25, 29],
    labels: [
        moment().subtract(1, "month").format("DD MMM"),
        moment().subtract(27, "days").format("DD MMM"),
        moment().subtract(24, "days").format("DD MMM"),
        moment().subtract(21, "days").format("DD MMM"),
        moment().subtract(18, "days").format("DD MMM"),
        moment().subtract(15, "days").format("DD MMM"),
        moment().subtract(12, "day").format("DD MMM"),
        moment().subtract(9, "day").format("DD MMM"),
        moment().subtract(6, "day").format("DD MMM"),
        moment().subtract(3, "days").format("DD MMM"),
        moment().format("DD MMM"),
    ]
};

export const yearlySales = {
    data: [21, 22, 16, 25, 29, 30, 28, 27, 25, 24, 26, 28, 31],
    labels: [
        moment().date(1).subtract(1, "year").format("MMM 'YY"),
        moment().date(1).subtract(11, "months").format("MMM 'YY"),
        moment().date(1).subtract(10, "months").format("MMM 'YY"),
        moment().date(1).subtract(9, "months").format("MMM 'YY"),
        moment().date(1).subtract(8, "months").format("MMM 'YY"),
        moment().date(1).subtract(7, "months").format("MMM 'YY"),
        moment().date(1).subtract(6, "months").format("MMM 'YY"),
        moment().date(1).subtract(5, "months").format("MMM 'YY"),
        moment().date(1).subtract(4, "months").format("MMM 'YY"),
        moment().date(1).subtract(3, "months").format("MMM 'YY"),
        moment().date(1).subtract(2, "months").format("MMM 'YY"),
        moment().date(1).subtract(1, "month").format("MMM 'YY"),
        moment().date(1).format("MMM 'YY"),
    ]
};

export const customers = {
    data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140],
    labels: [
        moment().subtract(10, "days").format("DD MMM"),
        moment().subtract(9, "days").format("DD MMM"),
        moment().subtract(8, "days").format("DD MMM"),
        moment().subtract(7, "days").format("DD MMM"),
        ...lastWeekLabels
    ]
};

export const revenue = {
    data: [34, 29, 32, 38, 39, 35, 36],
    labels: lastWeekLabels,
};

export const users = {
    data: [520, 560, 500, 570, 520, 550, 570, 550, 550, 590, 540],
    labels: [
        moment().subtract(10, "days").format("DD MMM"),
        moment().subtract(9, "days").format("DD MMM"),
        moment().subtract(8, "days").format("DD MMM"),
        moment().subtract(7, "days").format("DD MMM"),
        ...lastWeekLabels
    ]
};

export const weeklyReport = {
    data: [32, 44, 37, 47, 42, 55, 47, 65],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
};

export const trafficShares = [
    { id: uuidv4(), label: "Referrals", value: 29.4 },
    { id: uuidv4(), label: "Organic", value: 9.10 },
    { id: uuidv4(), label: "Direct", value: 51.5 },
    { id: uuidv4(), label: "Mail", value: 3.5 },
    { id: uuidv4(), label: "Social", value: 6.5 },
];

export const trafficVolumes = [
    {
        id: uuidv4(),
        label: "Direct",
        color: "#4D4AE8",
        values: [
            { value: 7100, date: moment().subtract(6, "days").format("DD MMM") },
            { value: 9600, date: moment().subtract(5, "days").format("DD MMM") },
            { value: 10000, date: moment().subtract(4, "days").format("DD MMM") },
            { value: 8700, date: moment().subtract(3, "days").format("DD MMM") },
            { value: 12000, date: moment().subtract(2, "days").format("DD MMM") },
            { value: 15400, date: moment().subtract(1, "day").format("DD MMM") },
            { value: 19000, date: moment().format("DD MMM") },
        ],
    },
    {
        id: uuidv4(),
        label: "Referrals",
        color: "#FD8E7A",
        values: [
            { value: 4100, date: moment().subtract(6, "days").format("DD MMM") },
            { value: 6800, date: moment().subtract(5, "days").format("DD MMM") },
            { value: 7000, date: moment().subtract(4, "days").format("DD MMM") },
            { value: 6700, date: moment().subtract(3, "days").format("DD MMM") },
            { value: 7200, date: moment().subtract(2, "days").format("DD MMM") },
            { value: 14000, date: moment().subtract(1, "day").format("DD MMM") },
            { value: 12000, date: moment().format("DD MMM") },
        ],
    },
    {
        id: uuidv4(),
        label: "Organic",
        color: "#06A77D",
        values: [
            { value: 1100, date: moment().subtract(6, "days").format("DD MMM") },
            { value: 3200, date: moment().subtract(5, "days").format("DD MMM") },
            { value: 4500, date: moment().subtract(4, "days").format("DD MMM") },
            { value: 3200, date: moment().subtract(3, "days").format("DD MMM") },
            { value: 3400, date: moment().subtract(2, "days").format("DD MMM") },
            { value: 5200, date: moment().subtract(1, "day").format("DD MMM") },
            { value: 4100, date: moment().format("DD MMM") },
        ],
    },
];

export const totalOrders = [
    { id: uuidv4(), label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: uuidv4(), label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export const appRanking = [
    {
        id: uuidv4(),
        label: "Travel & Local",
        color: "#f0bc74",
        values: [
            { value: 44, date: moment().subtract(8, "months").format("MMM") },
            { value: 55, date: moment().subtract(7, "months").format("MMM") },
            { value: 57, date: moment().subtract(6, "months").format("MMM") },
            { value: 56, date: moment().subtract(5, "months").format("MMM") },
            { value: 61, date: moment().subtract(4, "months").format("MMM") },
            { value: 58, date: moment().subtract(3, "months").format("MMM") },
            { value: 63, date: moment().subtract(2, "months").format("MMM") },
            { value: 60, date: moment().subtract(1, "month").format("MMM") },
            { value: 66, date: moment().format("MMM") },
        ],
    },
    {
        id: uuidv4(),
        label: "Widgets",
        color: "#31316A",
        values: [
            { value: 76, date: moment().subtract(8, "months").format("MMM") },
            { value: 85, date: moment().subtract(7, "months").format("MMM") },
            { value: 101, date: moment().subtract(6, "months").format("MMM") },
            { value: 98, date: moment().subtract(5, "months").format("MMM") },
            { value: 87, date: moment().subtract(4, "months").format("MMM") },
            { value: 105, date: moment().subtract(3, "months").format("MMM") },
            { value: 91, date: moment().subtract(2, "months").format("MMM") },
            { value: 114, date: moment().subtract(1, "month").format("MMM") },
            { value: 94, date: moment().format("MMM") },
        ],
    }
];

export const trafficBySource = [
    { id: uuidv4(), label: "Google", value: 70, color: "primary" },
    { id: uuidv4(), label: "Yahoo", value: 20, color: "secondary" },
    { id: uuidv4(), label: "Yandex", value: 10, color: "tertiary" }
];

export const trafficDistribution = [
    { id: uuidv4(), label: "Organic", value: 30, color: "primary" },
    { id: uuidv4(), label: "Direct", value: 50, color: "secondary" },
    { id: uuidv4(), label: "Paid", value: 20, color: "tertiary" }
];
