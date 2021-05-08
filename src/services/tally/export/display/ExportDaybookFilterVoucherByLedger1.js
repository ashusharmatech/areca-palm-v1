import ExportUtil from "../ExportUtil";

const EXPORT_DAYBOOK_FILTER_VOUCHER_BY_LEDGER_1 =
    '<!-- ' +
    '*********************************************************************** ' +
    'Objective:- To programmatically fetch vouchers of a specific Ledger' +
    'Notes:-   ' +
    '1) The report \'RTS FilteredVouchers\' has been defined in file ' +
    '   FILTERED-VOUCHERS.TXT (TDL file)' +
    '2) You need to make changes in your Tally.ini file and include the said' +
    '   TDL file ' +
    '*********************************************************************** ' +
    '-->' +
    '' +
    '<ENVELOPE>' +
    '  <HEADER>' +
    '    <TALLYREQUEST>Export Data</TALLYREQUEST>' +
    '  </HEADER>' +
    '  <BODY>' +
    '    <EXPORTDATA>' +
    '      <REQUESTDESC>' +
    '        <STATICVARIABLES>' +
    '' +
    '          <!--Specify the Ledger here-->' +
    '          <RTSSVLEDGERNAME>Cash</RTSSVLEDGERNAME>' +
    '' +
    '          <!--Specify the FROM DATE here-->' +
    '          <SVFROMDATE>20050401</SVFROMDATE>' +
    '' +
    '          <!--Specify the TO DATE here-->' +
    '          <SVTODATE>20090331</SVTODATE>' +
    '' +
    '          <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '        </STATICVARIABLES>' +
    '' +
    '        <!-- This is a user-defined Report which is defined in the attached TDL file -->' +
    '        <REPORTNAME>RTS FilteredVouchers</REPORTNAME>' +
    '' +
    '      </REQUESTDESC>' +
    '    </EXPORTDATA>' +
    '  </BODY>' +
    '</ENVELOPE>';

const ExportDaybookFilterVoucherByLedger1 = function () {
    ExportUtil(EXPORT_DAYBOOK_FILTER_VOUCHER_BY_LEDGER_1)
}

export default ExportDaybookFilterVoucherByLedger1;