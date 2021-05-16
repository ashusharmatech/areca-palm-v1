import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import Admin from "./layouts/Admin";

const App = function () {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;