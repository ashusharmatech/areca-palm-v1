import ExportBalanceSheet from "./main/ExportBalanceSheet";
import ExportLedgerVoucher from "./main/ExportLedgerVouchers";
import ExportProfitAndLoss from "./main/ExportProfitAndLoss";
import ExportStockFullDetailed from "./main/ExportStockFullDetailed";
import ExportStockSummaryDetailed from "./main/ExportStockSummaryDetailed";
import ExportStockSummary from "./main/ExportStockSummary";
import ExportRatioAnalysis from "./main/ExportRatioAnalysis";

const ExportGatewayOfTally = function () {
    ExportBalanceSheet();
    ExportLedgerVoucher();
    ExportProfitAndLoss();
    ExportStockFullDetailed();
    ExportStockSummary();
    ExportStockSummaryDetailed();
    ExportRatioAnalysis();
}
export default ExportGatewayOfTally;