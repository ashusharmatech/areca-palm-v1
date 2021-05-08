import ExportUtil from "../ExportUtil";

const EXPORT_TRAIL_BALANCE5 =
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
    '<!--Show the Opening balance-->' +
    '<DSPSHOWOPENING>YES</DSPSHOWOPENING>' +
    '<!--Show the transactions Dr/Cr-->' +
    '<DSPSHOWTRANS>YES</DSPSHOWTRANS>' +
    '<!--This will fetch detailed TB-->' +
    '<EXPLODEALLLEVELS>YES</EXPLODEALLLEVELS>' +
    '<EXPLODEFLAG>YES</EXPLODEFLAG>' +
    '<SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '</STATICVARIABLES>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportTrailBalance4 = function () {
    ExportUtil(EXPORT_TRAIL_BALANCE5)
}

export default ExportTrailBalance5;