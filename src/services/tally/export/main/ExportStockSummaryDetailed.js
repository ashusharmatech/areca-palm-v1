import ExportUtil from "../ExportUtil";

const EXPORT_STOCK_SUMMARY_DETAIL =
    '<!--THIS WILL FETCH STOCK SUMMARY DETAILS PROGRAMMATICALLY-->' +
    '<!--Gateway of Tally @Stock Summary @F5 @Alt+F1-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<STATICVARIABLES>' +
    '' +
    '<!--Detailed format-->' +
    '<EXPLODEFLAG>YES</EXPLODEFLAG>' +
    '' +
    '<!--Item-wise report-->' +
    '<ISITEMWISE>YES</ISITEMWISE>' +
    '' +
    '</STATICVARIABLES>' +
    '<REPORTNAME>Stock Summary</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportStockSummaryDetailed = function () {
    ExportUtil(EXPORT_STOCK_SUMMARY_DETAIL)
}

export default ExportStockSummaryDetailed;