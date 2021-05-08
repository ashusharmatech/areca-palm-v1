import ExportUtil from "../ExportUtil";

const EXPORT_TRAIL_BALANCE =
    '<!--THIS WILL FETCH TRIAL BALANCE DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @Display @Trial Balance-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<!--Specify the Report Name here-->' +
    '<REPORTNAME>Trial Balance</REPORTNAME>' +
    '<STATICVARIABLES>' +
    '<SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '</STATICVARIABLES>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportTrailBalance = function () {
    ExportUtil(EXPORT_TRAIL_BALANCE)
}

export default ExportTrailBalance;