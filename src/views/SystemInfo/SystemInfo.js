import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {Avatar, ListItem, ListItemAvatar, ListItemText, TextField} from "@material-ui/core";
import List from "@material-ui/core/List";

import {Check} from "@material-ui/icons";


const os = require('os')
const homeDir = os.homedir()


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

const useStyles = makeStyles(styles);

export default function SystemInfo() {

    console.log(os.cpus());
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Operating System</h4>
                    </CardHeader>
                    <CardBody>

                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Check/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={os.homedir()} secondary="Home Directory"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Check/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={os.cpus()} secondary="Cpu"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Check/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={os.hostname()} secondary="Host Name"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Check/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={os.totalmem()} secondary="Total Memory"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Check/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={os.platform()} secondary="Platform"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Check/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={os.arch()} secondary="CPU architecture"/>
                            </ListItem>
                        </List>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
