import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import ConnectivityChecker from "../../services/dashboard/ConnectivityChecker";
import SyncData from "../../services/tally/SyncData";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <ConnectivityChecker url="http://localhost:9000"
                                         icon="analytics"
                                         title="Tally"
                    ></ConnectivityChecker>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <ConnectivityChecker url="https://609648fd116f3f00174b2dfb.mockapi.io/check/internet"
                                         icon="network_wifi"
                                         title="Internet"
                    ></ConnectivityChecker>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <SyncData></SyncData>
                </GridItem>
            </GridContainer>
        </div>
    );
}
