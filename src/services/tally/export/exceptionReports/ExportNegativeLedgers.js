import ExportUtil from "../ExportUtil";

const EXPORT_NEGATIVE_LEDGERS =
    '<!--THIS WILL FETCH NEGATIVE LEDGER REPORT DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @ Display @ Exception Reports @ Negative Ledgers-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<STATICVARIABLES>' +
    '</STATICVARIABLES>' +
    '<!--Specify the Report Name here-->' +
    '<REPORTNAME>Negative Ledgers</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportNegativeLedgers = function () {
    ExportUtil(EXPORT_NEGATIVE_LEDGERS)
}

export default ExportNegativeStock;