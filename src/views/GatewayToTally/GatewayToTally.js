import React, {useEffect, useState} from "react";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import {CircularProgress, FormHelperText, Input, MenuItem, Select, TextField} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import {API_BASE_URL} from "../../constants/ApiConstant";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const GatewayToTally = function (props) {
    const classes = useStyles();

    const [isLoading, setLoading] = useState(true);

    const [state, setState] = useState({
        guid: "",
        amount: "",
        ledgerName: "",
        date: "",
        partyLedgerName: "",
        particulars: "",
        description: ""
    })


    const handleChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "guid": state.guid,
            "amount": state.amount,
            "ledgerName": state.ledgerName,
            "date": state.date,
            "partyLedgerName": state.partyLedgerName,
            "particulars": state.particulars
        }

        const headers = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("user"),
                'Content-Type': 'application/json'
            }
        };

        axios.post(API_BASE_URL + '/view/api/vouchers/create', payload, headers)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'voucher created. Redirecting to home page..'
                    }))
                    //redirectToHome();
                    //showError(null);
                } else {
                    //showError("Voucher is not created");
                }
            })
            .catch(function (error) {
                //showError("Username does not exists");
                console.log(error.response.data.message);
            });
    }

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                            <p className={classes.cardCategoryWhite}>Complete your profile</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={6} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            value={state.date}
                                            name="date"
                                            id="date"
                                            label="Date"
                                            type="date"
                                            className={classes.textField}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>

                                    <FormControl className={classes.formControl}>
                                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                            Account
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-placeholder-label-label"
                                            id="account"
                                            name="ledgerName"
                                            value={state.ledgerName}
                                            onChange={handleChange}
                                            displayEmpty
                                            className={classes.selectEmpty}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="CASH">CASH</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                            Amount
                                        </InputLabel>
                                        <Input type="number"
                                               onChange={handleChange}
                                               value={state.amount}
                                               name="amount"
                                               id="amount"
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Particulars</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            value={state.particulars}
                                            onChange={handleChange}
                                            label="Particulars"
                                            name="particulars"
                                            id="particulars"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="SALARY">SALARY</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <TextField
                                            name="description"
                                            id="description"
                                            label="Description"
                                            className={classes.textField}
                                            onChange={handleChange}
                                            value={state.description}
                                        />
                                    </FormControl>
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={handleSubmitClick}>Create Voucher</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default GatewayToTally;

