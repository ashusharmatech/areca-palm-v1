import ExportUtil from "../ExportUtil";

const EXPORT_TRAIL_BALANCE2 =
    '<!--THIS WILL FETCH TRIAL BALANCE DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @Display @Trial Balance @Alt+F1-->' +
    '' +
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
    '<!--This will fetch detailed TB-->' +
    '<EXPLODEALLLEVELS>YES</EXPLODEALLLEVELS>' +
    '<EXPLODEFLAG>YES</EXPLODEFLAG>' +
    '<SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '</STATICVARIABLES>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportTrailBalance2 = function () {
    ExportUtil(EXPORT_TRAIL_BALANCE2)
}

export default ExportTrailBalance2;