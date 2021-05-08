import ExportUtil from "../ExportUtil";

const EXPORT_TRAIL_BALANCE3 =
    '<!--THIS WILL FETCH TRIAL BALANCE DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @Display @Trial Balance @F2-->' +
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
    '<SVTODATE>20060630</SVTODATE>' +
    '</STATICVARIABLES>' +
    '<!--Specify the Report Name here-->' +
    '<REPORTNAME>Trial Balance</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportTrailBalance3 = function () {
    ExportUtil(EXPORT_TRAIL_BALANCE3)
}

export default ExportTrailBalance3;