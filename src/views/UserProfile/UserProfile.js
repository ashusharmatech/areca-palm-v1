import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
  const [loggedOut, setLoggedOut] = useState(false)
  const handleLogout = (event) => {
    localStorage.removeItem("user")
    setLoggedOut(true)
  };






  if (loggedOut) {
    return <Redirect to="/login"/>
  }

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
                  <ListItemText primary="Ashutosh Sharma" secondary="Name"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Email/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="test@test.com" secondary="Email"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Phone/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="+91-8888888888" secondary="Mobile Number"/>
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
