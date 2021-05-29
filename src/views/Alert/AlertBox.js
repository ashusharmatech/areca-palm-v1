import {AlertTitle} from "@material-ui/lab";
import React, {useState} from "react";


function AlertBox(props) {
    const [state, setState] = useState({
        title: "Success",
        successMessage: "",
        status: "Success"
    });

    return (
        <AlertBox severity={state.status}>
            <AlertTitle>{state.title}</AlertTitle>
            {state.successMessage}
        </AlertBox>
    );
}

export default AlertBox;