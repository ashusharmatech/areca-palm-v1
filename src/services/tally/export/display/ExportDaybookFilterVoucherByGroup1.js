import ExportUtil from "../ExportUtil";

const EXPORT_DAYBOOK_FILTER_VOUCHER_BY_GROUP_1 =
    '<!--This XML document contains tags to fetch SALES-type Vouchers of from Tally-->' +
    '<!--It is equivalent to using the following option in Tally Software manually-->' +
    '<!--Option: Gateway of Tally @Display @Daybook  @F4  @Sales-->' +
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
    '<SVTODATE>20070331</SVTODATE>' +
    '<!--Specify the Voucher-type here-->' +
    '<VOUCHERTYPENAME>SALES</VOUCHERTYPENAME>' +
    '</STATICVARIABLES>' +
    '<!--Specify the Report Name here-->' +
    '<REPORTNAME>Voucher Register</REPORTNAME>' +
    '</REQUESTDESC>' +
    '</EXPORTDATA>' +
    '</BODY>' +
    '</ENVELOPE>';

const ExportDaybookFilterVoucherByGroup1 = function () {
    ExportUtil(EXPORT_DAYBOOK_FILTER_VOUCHER_BY_GROUP_1)
}

export default ExportDaybookFilterVoucherByGroup1;