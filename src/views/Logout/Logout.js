import React, {useState} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";


function Logout(props) {
    const [loggedOut, setLoggedOut] = useState(false)

    const logout = () => {
        localStorage.removeItem("user")
        setLoggedOut(true)
    };

    if (loggedOut) {
        return <Redirect to="/Login"/>
    }

    return <Button onClick={logout}>LogOut</Button>
}

export default withRouter(Logout);