import React, {useEffect, useState} from 'react';
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../../components/Card/CardFooter";
import Card from "../../components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Button from "../../components/CustomButtons/Button";
import ExportLedgerVouchers from "./export/main/ExportLedgerVouchers";
import ExportAll from "./export/ExportAll";
import {CircularProgress, LinearProgress} from "@material-ui/core";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import axios from "axios";
import ImportAll from "./import/ImportAll";

const useStyles = makeStyles(styles);

const SyncData = function (props) {
    const classes = useStyles();
    const [isLoading, setLoading] = useState(false);

    const promise = new Promise(() => {
        ExportAll();
    });

    const promiseImport = new Promise(() => {
        ImportAll();
    });

    const importData = React.useCallback(() => {
        setLoading(true);
        promiseImport.then(function (res) {
            console.log("voucher data imported");
            console.log(res);
            setLoading(false);
        });
    }, () => {
        setLoading(false)
    });

    const forceUpdate = React.useCallback(() => {
        setLoading(true);
        promise.then(function (res) {
            console.log("voucher data uploaded");
            console.log(res);
            setLoading(false);
        });
    }, () => {
        setLoading(false)
    });

    return (
        <Card>
            <CardHeader color="success" stats icon>
                <CardIcon color="success">
                    <Icon>leak_add</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Sync the data with server{isLoading}</p>

                    {isLoading ?
                        <LinearProgress />
                        :
                        <h3 className={classes.cardTitle}>

                            <Button
                                color={window.innerWidth > 959 ? "transparent" : "white"}
                                aria-haspopup="true"
                                className={classes.buttonLink}
                                onClick={(e) => importData()}>
                                <Icon>cloud-upload-alt</Icon>
                            </Button>

                        <Button
                            color={window.innerWidth > 959 ? "transparent" : "white"}
                            aria-haspopup="true"
                            className={classes.buttonLink}
                            onClick={(e) => forceUpdate()}>
                            <Icon>sync_alt</Icon>
                        </Button>
                        </h3>

                    }


            </CardHeader>
            <CardFooter stats>
                <div className={classes.stats}>
                    This will allow the system to interact with server.
                </div>
            </CardFooter>
        </Card>
    )
}

export default SyncData;
