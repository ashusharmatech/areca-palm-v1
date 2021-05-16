const TALLY_URL = "http://localhost:9000"
const SERVER_URL = "http://localhost:9090"

const ExportUtil = function (requestXml, endpoint) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/xml'},
        body: requestXml
    };
    console.log("Calling Tally at " + TALLY_URL);
    fetch(TALLY_URL, requestOptions)
        .then((response) => response.text())
        .then((textResponse) => {
            console.log('response is ', textResponse);
            const requestForServer = {
                method: 'POST',
                headers: {'Content-Type': 'application/xml'},
                body: textResponse
            };
            console.log("Calling server at " + SERVER_URL + endpoint);
            fetch(SERVER_URL + endpoint, requestForServer).then(r => console.log(r));
        })
        .catch((error) => {
            console.log(error);
        });
}
export default ExportUtil;