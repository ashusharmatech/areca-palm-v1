import React, {useState} from 'react';
import axios from 'axios';
import './LoginPage.css';
import {API_BASE_URL} from '../../constants/ApiConstant';
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {AlertTitle} from "@material-ui/lab";
import AlertBox from "../Alert/AlertBox";


function LoginPage(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null,
        status: "",
        errorMessage: null
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const showError = (message) => {
        console.log(message);
        setState(prevState => ({
            ...prevState,
            errorMessage: message,
            status: "Error"
        }));
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        }
        axios.post(API_BASE_URL + '/api/auth/signin', payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Register successful. Redirecting to home page..'
                    }))
                    localStorage.setItem("user", response.data.accessToken)
                    redirectToHome();
                    showError(null);
                } else {
                    showError("Username does not exists");
                }
            })
            .catch(function (error) {
                showError("Username does not exists");
                console.log(error.response.data.message);
            });
    }
    const redirectToHome = () => {
        props.history.push('/admin/dashboard');
    }
    const redirectToRegister = () => {
        props.history.push('/register');
    }


    return (
        <div className="App">
            <form className="form">
                <TextField
                    label="Email"
                    variant="outlined"
                    id="email"
                    value={state.email}
                    onChange={handleChange}
                    type="text"
                />
                <br/>
                <TextField
                    label="Password"
                    variant="outlined"
                    id="password"
                    value={state.password}
                    onChange={handleChange}
                    type="password"
                />

                <Button type="button" color="primary" className="form_custom-button" onClick={handleSubmitClick}>
                    Log in
                </Button>


                <div id="error" className="alert alert-success mt-2" style={{display: state.errorMessage ? 'block' : 'none'}} role="alert">
                    {state.errorMessage}
                </div>
            </form>
        </div>
    )
}

export default withRouter(LoginPage);