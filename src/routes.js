// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Computer from "@material-ui/icons/Computer";

/*
 core components/views for Admin layout
*/
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import SystemInfo from "views/SystemInfo/SystemInfo.js";
import TableList from "views/TableList/TableList.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin",
    },
    {
        path: "/user",
        name: "User Profile",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
    },
    {
        path: "/info",
        name: "System Information",
        icon: Computer,
        component: SystemInfo,
        layout: "/admin",
    },
    {
        path: "/table",
        name: "Table List",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: Notifications,
        component: NotificationsPage,
        layout: "/admin",
    }
];

export default dashboardRoutes;
