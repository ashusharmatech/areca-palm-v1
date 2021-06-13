// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import FavoriteRounded from "@material-ui/icons/FavoriteRounded";
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
import Charts from "views/Charts/Charts";
import GatewayToTally from "./views/GatewayToTally/GatewayToTally";
import {LocalCafe, MultilineChart} from "@material-ui/icons";


const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
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
    },
    {
        path: "/userprofile",
        name: "User Profile",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
    },
    ,
    {
        path: "/charts",
        name: "Charts",
        icon: MultilineChart,
        component: Charts,
        layout: "/admin",
    },
    {
        path: "/gatewaytotally",
        name: "GatewayToTally",
        icon: LocalCafe,
        component: GatewayToTally,
        layout: "/admin",
    }
];

export default dashboardRoutes;
