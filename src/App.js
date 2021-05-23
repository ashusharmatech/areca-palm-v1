import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import Admin from "./layouts/Admin";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./views/Login/LoginPage";
import Register from "./views/Login/Register";

const App = function () {
    return (

        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/admin" component={Admin}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={Register}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;