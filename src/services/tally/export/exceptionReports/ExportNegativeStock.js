import ExportUtil from "../ExportUtil";

const EXPORT_NEGATIVE_STOCK =
    '<!--THIS WILL FETCH BALANCE SHEET DETAILS PROGRAMMATICALLY-->' +
    '<!--WHICH IS EQUIVALENT TO USING THE FOLLOWING OPTION MANUALLY IN TALLY-->' +
    '<!--OPTION:-->' +
    '<!--Gateway of Tally @Balance Sheet-->' +
    '<ENVELOPE>' +
    '<HEADER>' +
    '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '</HEADER>' +
    '<BODY>' +
    '<EXPORTDATA>' +
    '<REQUESTDESC>' +
    '<STATICVARIABLES>' +
    '' +
    '<!--To Fetch data in XML format-->' +
    '<SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '' +
    '<!--To Fetch data in HTML format, change the SVEXPORTFORMAT Tag value as -->' +
    '<!--$$SysName:HTML-->' +
    '' +
    '</STATICVARIABLES>' +
    '<REPORTNAME>Balance Sheet</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportNegativeStock = function () {
    ExportUtil(EXPORT_NEGATIVE_STOCK)
}

export default ExportNegativeStock;