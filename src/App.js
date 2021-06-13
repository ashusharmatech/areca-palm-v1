import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import Admin from "./layouts/Admin";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./views/LoginPage/LoginPage";
import Register from "./views/Register/Register";
import UserProfile from "./views/UserProfile/UserProfile";
import GatewayToTally from "./views/GatewayToTally/GatewayToTally";

const App = function () {
    return (

        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/admin" component={Admin}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/userprofile" component={UserProfile}/>
                <Route path="/gatewaytotally" component={GatewayToTally}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;