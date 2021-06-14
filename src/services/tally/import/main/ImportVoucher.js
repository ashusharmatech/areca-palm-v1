import axios from "axios";
import {API_BASE_URL} from "../../../../constants/ApiConstant";


const ImportVoucher = function () {
    const TALLY_URL = "http://localhost:9000"

    const headers = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("user"),
            'Content-Type': 'text/xml'
        }
    };

    axios.post(API_BASE_URL + "/view/api/vouchers/import", {}, headers)
        .then(function (response) {
            if (response.status === 200) {
                console.log(response.data);
                axios.post(TALLY_URL, response.data)
                    .then(function (response) {
                        console.log(response);
                        console.log("data imported");
                    });
            } else {
                console.log(response);
            }
        });

}

export default ImportVoucher;