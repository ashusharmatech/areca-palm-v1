import React, {useEffect, useState} from 'react';
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../../components/Card/CardFooter";
import Danger from "../../components/Typography/Danger";
import Warning from "@material-ui/icons/Warning";
import Card from "../../components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

const ConnectivityChecker = function (props) {
    const classes = useStyles();

    const [isConnected, setConnected] = useState("No");
    const [color, setColor] = useState("warning");
    const forceUpdate = React.useCallback(() => setConnected(""), []);

    fetch(props.url)
        .then(data => {
            setConnected("Yes");
            setColor("success");
        })
        .catch(function () {
            setConnected("No");
            setColor("warning");
        });
    return (
        <Card>
            <CardHeader color={color} stats icon>
                <CardIcon color={color}>
                    <Icon>{props.icon}</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>{props.title}</p>
                <h3 className={classes.cardTitle}>
                    {isConnected}
                </h3>
            </CardHeader>
            <CardFooter stats>
                <div className={classes.stats}>
                    <Danger>
                        <Warning/>
                    </Danger>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Check how to connect?
                    </a>
                </div>
                <Button
                    color={window.innerWidth > 959 ? "transparent" : "white"}
                    aria-haspopup="true"
                    className={classes.buttonLink}
                    onClick={(e) => forceUpdate()}>
                    <Icon>refresh</Icon>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ConnectivityChecker;
