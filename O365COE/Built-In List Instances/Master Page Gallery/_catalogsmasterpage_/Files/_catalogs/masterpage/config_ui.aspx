<!DOCTYPE html>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <link rel="stylesheet" type="text/css" href="https://microsoft.sharepoint.com/_layouts/15/1033/styles/Themable/oslo.css?rev=SgyJONLkA34%2FDumltyHaEA%3D%3DTAG5" />
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js"></script>
    <script type='text/javascript' src='https://microsoft.sharepoint.com/teams/itdesign/library/MicrosoftIT-1.7/js/knockout-3.1.0.js'></script>
    <script type='text/javascript' src='https://microsoft.sharepoint.com/teams/itdesign/library/MicrosoftIT-1.7/js/usagetrack.js'></script>
    <script type='text/javascript' src='https://microsoft.sharepoint.com/teams/itdesign/library/MicrosoftIT-1.7/js/config_ui.js'></script>

    <!--[if gte mso 9]><SharePoint:CTFieldRefs runat=server Prefix="mso:" FieldList="FileLeafRef"><xml>
<mso:CustomDocumentProperties>
<mso:ContentTypeId msdt:dt="string">0x0101004C3AAEF136E94C488AF808BACE1F7D2A</mso:ContentTypeId>
</mso:CustomDocumentProperties>
</xml></SharePoint:CTFieldRefs><![endif]-->
<title></title></head>
<body style='height: 600px; overflow-y: scroll; overflow-x: hidden;'>
    <div id='package_config' style='display: none'>
        <br />
        <div class='config_entry'>
            <h2>Navigation:</h2>
            <select data-bind='options: topNavOptions, optionsText: "title", optionsValue: "value", value: topNavRenderFunction'></select>
        </div>
        <div class='config_entry'>
            <h2>Resources:</h2>
            <input type='button' data-bind='click: addResource' value='Add'></input>
            <table>
                <tbody data-bind='foreach: resources'>
                    <tr>
                        <td>
                            <select data-bind='options: ["js", "css"], value: type'></select></td>
                        <td>
                            <input type='text' data-bind='value: href'></input></td>
                        <td>
                            <input type='checkbox' data-bind='checked: cache'>Cached</input></td>
                        <td>
                            <input type='button' data-bind='click: $root.deleteResource' value='Delete'></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class='config_entry'>
            <h2>Resource Loaded:</h2>
            <textarea rows='5' cols='50' data-bind='value: resourceLoadComplete'></textarea>
        </div>
        <div class='config_entry'>
            <h2>Footer HTML:</h2>
            <textarea rows='5' cols='50' data-bind='value: footerHTML'></textarea>
        </div>
        <div class='config_entry'>
            <h2>Alerts:</h2>
            <input type='button' data-bind='click: addAlert' value='Add'></input>
            <table>
                <tbody data-bind='foreach: alerts'>
                    <tr>
                        <td>
                            <select data-bind='options: $root.alertColorOptions, optionsText: "title", optionsValue: "value", value: color'></select></td>
                        <td>
                            <input type='text' data-bind='value: html'></input></td>
                        <td>
                            <input type='checkbox' data-bind='checked: enabled'>Enabled</input></td>
                        <td>
                            <input type='button' data-bind='click: $root.deleteAlert' value='Delete'></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
        <input type='button' data-bind='enable: changed, click: save_config' value='Save'></input>
        <!--<input type='button' data-bind='click: cancel_config' value='Cancel'></input>-->
        <span style="float:right; padding-right:30px; font-size:x-small">
            <label>version:</label>
            <label id="packageversion" data-bind="text: version" />
        </span>
    </div>
    <div id='wait_box'>
        <br />
        <h2>Loading...</h2>
    </div>
</body>
</html>
