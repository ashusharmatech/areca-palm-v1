import ExportUtil from "../ExportUtil";

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
    '                    <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '                    <LEDGERNAME>CASH</LEDGERNAME>' +
    '                </STATICVARIABLES>' +
    '                <!--Report Name-->' +
    '                <REPORTNAME>Ledger Vouchers</REPORTNAME>' +
    '            </REQUESTDESC>' +
    '        </EXPORTDATA>' +
    '    </BODY>' +
    '</ENVELOPE>';

const endpoint = '/vouchers';

const ExportLedgerVoucher = function () {
    //console.log("exporting ledger vouchers "+endpoint);
    ExportUtil(EXPORT_LEDGER_VOUCHER)
}

export default ExportLedgerVoucher;