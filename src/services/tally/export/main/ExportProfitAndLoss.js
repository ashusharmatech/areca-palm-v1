import ExportUtil from "../ExportUtil";

const EXPORT_PROFIT_AND_LOSS =
    '<!-- ' +
    '*********************************************************************** ' +
    'Objective:- To programmatically fetch Profit and Loss A/c details.' +
    'Notes:-   ' +
    '1) Equivalent to using the following option manually in Tally' +
    '   \'Gateway of Tally - Profit and Loss\'' +
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
    '          <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>' +
    '          <!--Specify the FROM DATE here -->' +
    '          <SVFROMDATE>20080401</SVFROMDATE>' +
    '          <!--Specify the TO DATE here -->' +
    '          <SVTODATE>20080430</SVTODATE>' +
    '        </STATICVARIABLES>' +
    '        <REPORTNAME>Profit and Loss</REPORTNAME>' +
    '      </REQUESTDESC>' +
    '    </EXPORTDATA>' +
    '  </BODY>' +
    '</ENVELOPE>';

const ExportProfitLoss = function () {
    ExportUtil(EXPORT_PROFIT_AND_LOSS)
}

export default ExportProfitLoss;