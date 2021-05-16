import ExportUtil from "../ExportUtil";

const EXPORT_DAYBOOK =
    '<!--This XML document contains tags to fetch Daybook Vouchers from Tally-->' +
    '<!--It is equivalent to using the following option in Tally Software manually-->' +
    '<!--Option: Gateway of Tally @Display @Daybook-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<STATICVARIABLES>' +
    '<!--Specify the Period here-->' +
    '<SVFROMDATE>20060401</SVFROMDATE>' +
    '<SVTODATE>20220331</SVTODATE>' +
    '</STATICVARIABLES>' +
    '<!--Specify the Report Name here-->' +
    '<REPORTNAME>Voucher Register</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportDaybook = function () {
    ExportUtil(EXPORT_DAYBOOK, "/vouchers")
}

export default ExportDaybook;