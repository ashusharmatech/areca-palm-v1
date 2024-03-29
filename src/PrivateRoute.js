import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    console.log("Value in localStorage " + localStorage.key("user"));
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            localStorage.key("user") ?
                <Component {...props} />
                : <Redirect to="/Login"/>
        )}/>
    );
};

export default PrivateRoute;