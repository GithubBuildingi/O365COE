/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_e55ab695a69f40ee92c1814a96cd6dfd(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_e55ab695a69f40ee92c1814a96cd6dfd.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList.js';
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
var targetUrl = _spPageContextInfo.webAbsoluteUrl+"/news-list";
ctx.ListDataJSONGroupsKey = "ResultTables";
var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

var noResultsClassName = "ms-srch-result-noResults";
window.getRecentNewsNoPictureMarkup = function()
{
	return '<img src="'+_spPageContextInfo.webServerRelativeUrl+'/SiteAssets/Default_142.png"/>';
}

ms_outHtml.push(''
,'	<div class="recentNews-container">'
,'		<div class="rencentNes-title">'
,'			<span style="display:none">Recent News</span>'
,'			<a href="', targetUrl ,'" style="font-family:\'Segoe UI\'">More</a>'
,'		</div>'
,'        ', ctx.RenderGroups(ctx) ,''
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
function RegisterTemplate_e55ab695a69f40ee92c1814a96cd6dfd() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_RecentNews", DisplayTemplate_e55ab695a69f40ee92c1814a96cd6dfd);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList.js", DisplayTemplate_e55ab695a69f40ee92c1814a96cd6dfd);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_e55ab695a69f40ee92c1814a96cd6dfd();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsList.js"), RegisterTemplate_e55ab695a69f40ee92c1814a96cd6dfd);
}