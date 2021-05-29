import axios from "axios";
import {API_BASE_URL} from "../../../constants/ApiConstant";

const TALLY_URL = "http://localhost:9000"

const ExportUtil = function (requestXml, endpoint) {

    console.log("Calling Tally at " + TALLY_URL);

    const tallyPayload = {
        method: 'POST',
        headers: {'Content-Type': 'application/xml'},
        body: requestXml
    };
    axios.post(TALLY_URL, tallyPayload)
        .then(function (response) {
            if (response.status === 200) {
                const headers = {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("user"),
                        'Content-Type': 'text/xml'
                    }
                };
                axios.post(API_BASE_URL + endpoint, response.data, headers)
                    .then(function (response) {
                        if (response.status === 200) {
                            console.log("Data submitted");
                        } else {
                            console.log("Error occurred while submitting the data to server")
                        }
                    });
            } else {
                console.log("Error occurred while reading the data from tally")
            }
        })
        .catch(function (error) {
            console.log(error);
        });


}
export default ExportUtil;