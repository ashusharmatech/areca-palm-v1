const EXPORT_LEDGER_VOUCHER =
    '<!--Gateway of Tally @Display @Statement of Accounts..contd-->' +
    '<!--@Account Books @Cash/Bank summary-->' +
    '<ENVELOPE>' +
    '    <HEADER>' +
    '        <TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '    </HEADER>' +
    '    <BODY>' +
    '        <EXPORTDATA>' +
    '            <REQUESTDESC>' +
    '                <STATICVARIABLES>' +
    '                    <!--Specify the Export format here  HTML or XML or SDF-->' +
    '                    <SVEXPORTFORMAT>$$SysName:SDF</SVEXPORTFORMAT>' +
    '                    <LEDGERNAME>CASH</LEDGERNAME>' +
    '                </STATICVARIABLES>' +
    '                <!--Report Name-->' +
    '                <REPORTNAME>Ledger Vouchers</REPORTNAME>' +
    '            </REQUESTDESC>' +
    '        </EXPORTDATA>' +
    '    </BODY>' +
    '</ENVELOPE>';
const TALLY_URL = "http://localhost:9000"
const SERVER_URL = "http://localhost:7777"

// Simple POST request with a JSON body using fetch
const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/xml'},
    body: EXPORT_LEDGER_VOUCHER
};


const ExportLedgerData = function () {
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

export default ExportLedgerData;