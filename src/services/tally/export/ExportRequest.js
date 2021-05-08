import ExportBalanceSheet from "./main/ExportBalanceSheet";
import ExportLedgerVoucher from "./main/ExportLedgerVouchers";
import ExportProfitAndLoss from "./main/ExportProfitAndLoss";
import ExportStockFullDetailed from "./main/ExportStockFullDetailed";
import ExportStockSummaryDetailed from "./main/ExportStockSummaryDetailed";
import ExportStockSummary from "./main/ExportStockSummary";
import ExportRatioAnalysis from "./main/ExportRatioAnalysis";



const ExportRequest = function (reportName) {

    var baseRequest =
        '<ENVELOPE>' +
        '<HEADER>' +
        '<TALLYREQUEST>Export Data</TALLYREQUEST>' +
        '</HEADER>' +
        '<BODY>' +
        '<EXPORTDATA>' +
        '<REQUESTDESC>' +
        '<STATICVARIABLES>' +
        '</STATICVARIABLES>' +
        '<!--Specify the Report Name here-->' +
        '<REPORTNAME>'+{reportName}+'</REPORTNAME>' +
        '</REQUESTDESC>' +
        '</EXPORTDATA>' +
        '</BODY>' +
        '</ENVELOPE>';

    return baseRequest;

}
export default ExportRequest;