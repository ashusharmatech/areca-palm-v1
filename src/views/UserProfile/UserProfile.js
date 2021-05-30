import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Check, Email, Face, MobileFriendly, Phone} from "@material-ui/icons";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {API_BASE_URL} from "../../constants/ApiConstant";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {

    const classes = useStyles();
    const [loggedOut, setLoggedOut] = useState(false);
    const [id, setId] = useState(false);
    const [name, setName] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [email, setEmail] = useState(false);
    const [response, setResponse] = useState(false);

    //User Details


    const handleLogout = (event) => {
        localStorage.removeItem("user")
        setLoggedOut(true)
    };

    if (loggedOut) {
        return <Redirect to="/login"/>
    }

    const headers = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("user"),
            'Content-Type': 'text/xml'
        }
    };

    var res;


    useEffect(() => {
        axios.post(API_BASE_URL + '/api/user', "", headers)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    setName(response.data.name);
                    setMobile(response.data.mobile);
                    setId(response.data.id);
                    setEmail(response.data.email);
                } else {

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [name,mobile,id,email]);


    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardBody>
                            <GridContainer>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Face/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary="Name"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Email/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={email} secondary="Email"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Phone/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={mobile} secondary="Mobile Number"/>
                                </ListItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={handleLogout}>Logout</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
