import ExportUtil from "../ExportUtil";

const EXPORT_STOCK_FULL_DETAIL =
    '<!--THIS WILL FETCH STOCK SUMMARY DETAILS PROGRAMMATICALLY-->' +
    '<!--Gateway of Tally @Stock Summary -->' +
    '<ENVELOPE>' +
    '  <HEADER>' +
    '    <TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '  </HEADER>' +
    '  <BODY>' +
    '    <EXPORTDATA>' +
    '      <REQUESTDESC>' +
    '        <STATICVARIABLES>' +
    '' +
    '          <!-- Expand ALL levels in detailed format = Yes or No-->' +
    '          <EXPLODEALLLEVELS>YES</EXPLODEALLLEVELS>' +
    '' +
    '          <!-- Format = Detailed or Condensed -->' +
    '          <!-- Yes means Detailed -->' +
    '          <!-- No means Condensed -->' +
    '          <EXPLODEFLAG>YES</EXPLODEFLAG>' +
    '' +
    '          <!-- Show ALL Accts (incl Empty A/cs) = Yes or No-->' +
    '          <DSPSHOWALLACCOUNTS>Yes</DSPSHOWALLACCOUNTS>' +
    '' +
    '          <!-- Show Opening balances = Yes or No -->' +
    '          <DSPSHOWOPENING>Yes</DSPSHOWOPENING>' +
    '          ' +
    '          <!-- Show goods inwards = Yes or No -->' +
    '          <DSPSHOWINWARDS>YES</DSPSHOWINWARDS>' +
    '          <!-- Show goods outwards = Yes or No-->' +
    '          <DSPSHOWOUTWARDS>YES</DSPSHOWOUTWARDS>' +
    '          <!-- Show Closing balances = Yes or No -->' +
    '          <DSPSHOWCLOSING>Yes</DSPSHOWCLOSING>' +
    '' +
    '          <!--Method of Information = Grouped or Item-wise-->' +
    '          <!-- Yes means Grouped-->' +
    '          <!-- No means Item-wise -->' +
    '          <ISITEMWISE>No</ISITEMWISE>' +
    '' +
    '        </STATICVARIABLES>' +
    '        <REPORTNAME>Stock Summary</REPORTNAME>' +
    '      </REQUESTDESC>' +
    '    </EXPORTDATA>' +
    '  </BODY>' +
    '</ENVELOPE>';

const ExportStockFullDetailed = function () {
    ExportUtil(EXPORT_STOCK_FULL_DETAIL)
}

export default ExportStockFullDetailed;