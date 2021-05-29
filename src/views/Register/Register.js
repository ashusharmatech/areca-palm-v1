import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/ApiConstant';
import {withRouter} from "react-router-dom";
import "./Register.css";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function RegistrationForm(props) {
    const [state, setState] = useState({
        email: "",
        mobile: "",
        name: "",
        password: "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            //props.showError(null);
            const payload = {
                "name": state.name,
                "mobile": state.mobile,
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + '/api/auth/signup', payload)
                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        //props.showError(null)
                    } else {
                        //props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            //props.showError('Please enter valid username and password')
        }

    }
    const redirectToHome = () => {
        props.history.push('/admin/dashboard');
    }
    const redirectToLogin = () => {
        props.history.push('/login');
    }
    const handleSubmitClick = (e) => {
        console.log(e);
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            //props.showError('Passwords do not match');
        }
    }
    return (
        <div className="App">
            <form className="form">
                <TextField
                    variant="outlined"
                    label="Name"
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={handleChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={state.email}
                    onChange={handleChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    type="mobile"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                    value={state.mobile}
                    onChange={handleChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={state.confirmPassword}
                    onChange={handleChange}
                />
                <br/>
                <Button type="button" color="primary" className="form_custom-button" onClick={handleSubmitClick}>
                    Register
                </Button>


                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none'}}
                     role="alert">
                    {state.successMessage}
                </div>

                <div className="mt-2">
                    <span>Already have an account? </span>
                    <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
                </div>
            </form>



        </div>
    )
}

export default withRouter(RegistrationForm);