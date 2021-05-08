const TALLY_URL = "http://localhost:9000"
const SERVER_URL = "http://localhost:7777"

const ExportUtil = function (requestXml) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/xml'},
        body:requestXml
    };
    fetch(TALLY_URL, requestOptions)
        .then((response) => response.text())
        .then((textResponse) => {
            console.log('response is ', textResponse);
            const requestForServer = {
                method: 'POST',
                headers: {'Content-Type': 'application/xml'},
                body: textResponse
            };
            fetch(SERVER_URL, requestForServer).then(r => console.log(r));
        })
        .catch((error) => {
            console.log(error);
        });
}
export default ExportUtil;