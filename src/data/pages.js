import { v4 as uuidv4 } from "uuid";

import OverviewImg from "assets/img/pages/overview.jpg";
import TrafficSourcesImg from "assets/img/pages/traffic-sources.jpg";
import AppAnalysisImg from "assets/img/pages/app-analysis.jpg";
import KanbanImg from "assets/img/pages/kanban.jpg";
import UsersImg from "assets/img/pages/users-list.jpg";
import TransactionsImg from "assets/img/pages/transactions.jpg";
import TasksImg from "assets/img/pages/tasks.jpg";
import SettingsImg from "assets/img/pages/settings.jpg";
import MessagesImg from "assets/img/pages/messages.jpg";
import ChatImg from "assets/img/pages/single-message.jpg";
import CalendarImg from "assets/img/pages/calendar.jpg";
import BillingImg from "assets/img/pages/billing.jpg";
import InvoiceImg from "assets/img/pages/invoice.jpg";
import PricingImg from "assets/img/pages/pricing.jpg";
import SignInImg from "assets/img/pages/sign-in.jpg";
import SignUpImg from "assets/img/pages/sign-up.jpg";
import LockImg from "assets/img/pages/lock.jpg";
import ForgotPasswordImg from "assets/img/pages/forgot-password.jpg";
import ResetPasswordImg from "assets/img/pages/reset-password.jpg";
import NotFoundImg from "assets/img/pages/404.jpg";
import ServerErrorImg from "assets/img/pages/500.jpg";

import { Routes } from "routes";


export default [
    {
        "id": uuidv4(),
        "name": "Overview",
        "image": OverviewImg,
        "link": Routes.DashboardOverview.path
    },
    {
        "id": uuidv4(),
        "name": "Traffic Sources",
        "image": TrafficSourcesImg,
        "link": Routes.DashboardTraffic.path
    },
    {
        "id": uuidv4(),
        "name": "App Analysis",
        "image": AppAnalysisImg,
        "link": Routes.DashboardProductAnalysis.path
    },
    {
        "id": uuidv4(),
        "name": "Kanban",
        "image": KanbanImg,
        "link": Routes.Kanban.path
    },
    {
        "id": uuidv4(),
        "name": "Users List",
        "image": UsersImg,
        "link": Routes.Users.path
    },
    {
        "id": uuidv4(),
        "name": "Transactions",
        "image": TransactionsImg,
        "link": Routes.Transactions.path
    },
    {
        "id": uuidv4(),
        "name": "Tasks",
        "image": TasksImg,
        "link": Routes.Tasks.path
    },
    {
        "id": uuidv4(),
        "name": "Settings",
        "image": SettingsImg,
        "link": Routes.Settings.path
    },
    {
        "id": uuidv4(),
        "name": "Messages",
        "image": MessagesImg,
        "link": Routes.Messages.path
    },
    {
        "id": uuidv4(),
        "name": "Chat",
        "image": ChatImg,
        "link": Routes.SingleMessage.path
    },
    {
        "id": uuidv4(),
        "name": "Calendar",
        "image": CalendarImg,
        "link": Routes.Calendar.path
    },
    {
        "id": uuidv4(),
        "name": "Billing",
        "image": BillingImg,
        "link": Routes.Billing.path
    },
    {
        "id": uuidv4(),
        "name": "Invoice",
        "image": InvoiceImg,
        "link": Routes.Invoice.path
    },
    {
        "id": uuidv4(),
        "name": "Pricing",
        "image": PricingImg,
        "link": Routes.Pricing.path
    },
    {
        "id": uuidv4(),
        "name": "Sign In",
        "image": SignInImg,
        "link": Routes.Signin
    },
    {
        "id": uuidv4(),
        "name": "Sign Up",
        "image": SignUpImg,
        "link": Routes.Signup.path
    },
    {
        "id": uuidv4(),
        "name": "Lock",
        "image": LockImg,
        "link": Routes.Lock.path
    },
    {
        "id": uuidv4(),
        "name": "Forgot password",
        "image": ForgotPasswordImg,
        "link": Routes.ForgotPassword.path
    },
    {
        "id": uuidv4(),
        "name": "Reset password",
        "image": ResetPasswordImg,
        "link": Routes.ResetPassword.path
    },
    {
        "id": uuidv4(),
        "name": "404",
        "image": NotFoundImg,
        "link": Routes.NotFound.path
    },
    {
        "id": uuidv4(),
        "name": "500",
        "image": ServerErrorImg,
        "link": Routes.ServerError.path
    }
]