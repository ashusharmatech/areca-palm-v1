import React, {useState} from 'react';
import axios from 'axios';
import './LoginPage.css';
import {API_BASE_URL} from '../../constants/ApiConstant';
import { withRouter } from "react-router-dom";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "@material-ui/core/Button";
import {Input, TextField} from "@material-ui/core";

function LoginPage(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'api/auth/signin', payload)
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem("user",response.data.accessToken)
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        props.history.push('/admin/dashboard');
    }
    const redirectToRegister = () => {
        props.history.push('/register');
    }
    return(
        <div className="App">
            <form className="form">
                <TextField
                    label="Email"
                    variant="outlined"
                    labelText="Email"
                    id="email"
                    value={state.email}
                    formControlProps={{
                        fullWidth: true
                    }}
                    onChange={handleChange}
                    type="text"
                />
                <br/>
                <TextField
                    label="Password"
                    variant="outlined"
                    labelText="Password"
                    id="password"
                    formControlProps={{
                        fullWidth: true
                    }}
                    value={state.password}
                    onChange={handleChange}
                    type="password"
                />

                <Button type="button" color="primary" className="form_custom-button" onClick={handleSubmitClick}>
                    Log in
                </Button>


                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="registerMessage">
                    <span>Dont have an account? </span>
                    <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
                </div>

            </form>
        </div>
    )
}

export default withRouter(LoginPage);