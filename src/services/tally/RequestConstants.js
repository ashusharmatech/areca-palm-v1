



const CREATE_GROUP=
      '<!--XML tags to creates a Group named My Debtors under Sundry Debtors-->'+
        '<ENVELOPE>'+
        '   <HEADER>'+
        '       <TALLYREQUEST>Import Data</TALLYREQUEST>'+
        '   </HEADER>'+
        '   <BODY>'+
        '       <IMPORTDATA>'+
        '             <REQUESTDESC>'+
        '                  <REPORTNAME>All Masters</REPORTNAME>'+
        '             </REQUESTDESC>'+
        '             <REQUESTDATA>'+
        '                   <TALLYMESSAGE xmlns:UDF="TallyUDF">'+
        '                       <GROUP NAME="My Debtors-Group" ACTION="Create">'+
        '                            <NAME.LIST>'+
        '                                 <NAME>My Debtors Name</NAME>'+
        '                            </NAME.LIST>'+
        '                            <PARENT>Sundry Debtors</PARENT>'+
        '                            <ISSUBLEDGER>No</ISSUBLEDGER>'+
        '                            <ISBILLWISEON>No</ISBILLWISEON>'+
        '                            <ISCOSTCENTRESON>No</ISCOSTCENTRESON>'+
        '                       </GROUP>'+
        '                   </TALLYMESSAGE>'+
        '             </REQUESTDATA>'+
        '       </IMPORTDATA>'+
        '   </BODY>'+
        '</ENVELOPE>';

const INSERT_EMPLOYEE =
    '<ENVELOPE>\r'+
    '<HEADER>'+
    '  <TALLYREQUEST>Import Data</TALLYREQUEST>'+
    ' </HEADER>'+
    '<BODY>'+
    '  <IMPORTDATA>'+
    '    <REQUESTDESC>'+
    '        <REPORTNAME>All Masters</REPORTNAME>'+
    '        <STATICVARIABLES>'+
    '            <SVCURRENTCOMPANY>$$SysName:XML</SVCURRENTCOMPANY>'+
    '        </STATICVARIABLES>'+
    '    </REQUESTDESC>'+
    '  <REQUESTDATA>'+
    '       <TALLYMESSAGE xmlns:UDF="TallyUDF">'+
    '            <COSTCENTRE NAME="ImportPSOFT" RESERVEDNAME="">'+
    '                  <ADDRESS.LIST TYPE="String">'+
    '                        <ADDRESS>'+address+'</ADDRESS>'+
    '                  </ADDRESS.LIST>'+
    '            <MAILINGNAME.LIST TYPE="String">'+
    '                <MAILINGNAME>10</MAILINGNAME>'+
    '            </MAILINGNAME.LIST>'+
    '            <CATEGORY>'+costCategory+' Cost Category</CATEGORY>'+
    '            <LOCATION>'+location+'</LOCATION>'+
    '            <DESIGNATION>'+designation+'</DESIGNATION>'+
    '            <BLOODGROUP>'+bloodGrp+'</BLOODGROUP>'+
    '            <AFFECTSSTOCK>'+affectsStock+'</AFFECTSSTOCK>'+
    '            <FORPAYROLL>'+payroll+'</FORPAYROLL>'+
    '            <FORJOBCOSTING>'+jobCosting+'</FORJOBCOSTING>'+
    '            <ISEMPLOYEEGROUP>'+employeeGrp+'</ISEMPLOYEEGROUP>'+
    '            <SORTPOSITION>'+sortPosition+'</SORTPOSITION>'+
    '            <DEFAULTLANGUAGE>'+language+'</DEFAULTLANGUAGE>'+
    '            <LANGUAGENAME.LIST>'+
    '                <NAME.LIST TYPE="String">'+
    '                    <NAME>'+name+' </NAME>'+
    '                </NAME.LIST>'+
    '                <LANGUAGEID> 1034</LANGUAGEID>'+
    '             </LANGUAGENAME.LIST>'+
    '            </COSTCENTRE>'+
    '        </TALLYMESSAGE>'+
    '   </REQUESTDATA>'+
    '  </IMPORTDATA>'+
    '</BODY>'+
    '</ENVELOPE>' ;

