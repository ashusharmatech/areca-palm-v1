import ExportUtil from "../ExportUtil";

const EXPORT_RATIO_ANALYSIS =
    '<!--THIS WILL FETCH RATIO ANALYSIS DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @Ratio Analysis-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<STATICVARIABLES>' +
    '</STATICVARIABLES>' +
    '<REPORTNAME>Ratio Analysis</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportRatioAnalysis = function () {
    ExportUtil(EXPORT_RATIO_ANALYSIS)
}

export default ExportRatioAnalysis;