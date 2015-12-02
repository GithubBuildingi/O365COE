/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_c676107dccad484fbd2e1d4ab1683c5d(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_c676107dccad484fbd2e1d4ab1683c5d.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList_TwoColumn.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,''
); 
if (!$isNull(ctx.ClientControl) &&
    !$isNull(ctx.ClientControl.shouldRenderControl) &&
    !ctx.ClientControl.shouldRenderControl())
{
    return "";
}
ctx.ListDataJSONGroupsKey = "ResultTables";
var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

var noResultsClassName = "ms-srch-result-noResults";
window.getRecentNewsNoPictureMarkup = function()
{
	return '<img src="'+_spPageContextInfo.webServerRelativeUrl+'/SiteAssets/Default_142.png"/>';
}

var targetUrl = _spPageContextInfo.webAbsoluteUrl+"/news-list";

var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{
    var iStr = [];
    if(ctx.CurrentItemIdx%2 == 0)
    {
	    iStr.push('<tr>');
    }
    iStr.push('<td style="width: 50%; vertical-align: top;">');
    iStr.push(itemRenderResult);
    iStr.push('</td>');    
    if(ctx.CurrentItemIdx%2 == 1 || ctx.CurrentItemIdx+1 == ctx.CurrentGroup.RowCount)
    {
	    iStr.push('</tr>');
    }
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;


ms_outHtml.push(''
,'	<div class="recentNews-container">'
,'		<div class="rencentNes-title">'
,'			<span style="display:none">Recent News</span>			'
,'			<a href="', targetUrl ,'" style="font-family:\'Segoe UI\'">More</a>			'
,'		</div>'
,'		<table>'
,'        ', ctx.RenderGroups(ctx) ,''
,'        </table>'
,'        '
);
if (ctx.ClientControl.get_shouldShowNoResultMessage())
{
ms_outHtml.push(''
,'        <div class="', noResultsClassName ,'">', $noResults ,'</div>'
);
}
ms_outHtml.push(''
,'		</div>'
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_c676107dccad484fbd2e1d4ab1683c5d() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_RecentNews", DisplayTemplate_c676107dccad484fbd2e1d4ab1683c5d);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList_TwoColumn.js", DisplayTemplate_c676107dccad484fbd2e1d4ab1683c5d);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList_TwoColumn.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_c676107dccad484fbd2e1d4ab1683c5d();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList_TwoColumn.js"), RegisterTemplate_c676107dccad484fbd2e1d4ab1683c5d);
}