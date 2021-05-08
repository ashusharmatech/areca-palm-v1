import ExportUtil from "../ExportUtil";

const EXPORT_STOCK_SUMMARY =
    '<!--THIS WILL FETCH STOCK SUMMARY DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @STOCK SUMMARY-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<STATICVARIABLES>' +
    '</STATICVARIABLES>' +
    '<REPORTNAME>Stock Summary</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportStockSummary = function () {
    ExportUtil(EXPORT_STOCK_SUMMARY)
}

export default ExportStockSummary;