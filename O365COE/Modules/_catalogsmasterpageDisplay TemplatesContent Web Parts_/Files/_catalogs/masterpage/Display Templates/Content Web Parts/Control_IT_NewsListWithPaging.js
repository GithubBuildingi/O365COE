/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_88379b08146245799dd9cde71c5da895(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_88379b08146245799dd9cde71c5da895.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsListWithPaging.js';
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


ms_outHtml.push(''
,'	<div class="recentNews-container">'
,'		<div class="rencentNes-title">'
,'			<span style="display:none">Recent News</span>			'
);
var showPaging = ctx.ClientControl.get_showPaging();
if(showPaging)
{
    var pagingInfo = ctx.ClientControl.get_pagingInfo();
    showPaging = !$isEmptyArray(pagingInfo);
    if(showPaging)
    {
        var currentPage = null;
        var firstPage = pagingInfo[0];
        var lastPage = pagingInfo[pagingInfo.length - 1];

        for (var i = 0; i< pagingInfo.length; i++)
        {
            var pl = pagingInfo[i];
            if (!$isNull(pl))
            {
                if (pl.startItem == -1)
                {
                    currentPage = pl;
                }
            }
        }

        var getPagingImageClassName = function(buttonClassNamePrefix, isNext, isEnabled)
        {
            var className = buttonClassNamePrefix;
            className += (isNext && !Srch.U.isRTL()) || (!isNext && Srch.U.isRTL()) ? "right" : "left";
            if(!$isNull(isEnabled) && isEnabled == false)
            {
                className += "-disabled";
            }
            return className;
        }

        var getPagingContainerClassName = function(buttonClassNamePrefix, isEnabled)
        {
            var className = buttonClassNamePrefix;
            className += isEnabled ? "enabled" : "disabled";
            return className;
        }

        var hasNextPage = lastPage.pageNumber == -2;
        var hasPreviousPage = firstPage.pageNumber == -1;
        var buttonClassNamePrefix = "ms-promlink-button-";
        var nextPageContainerClassName = getPagingContainerClassName(buttonClassNamePrefix, hasNextPage);
        var previousPageContainerClassName = getPagingContainerClassName(buttonClassNamePrefix, hasPreviousPage);
        var nextPageImageClassName = getPagingImageClassName(buttonClassNamePrefix, true, hasNextPage);
        var previousPageImageClassName = getPagingImageClassName(buttonClassNamePrefix, false, hasPreviousPage);
ms_outHtml.push(''
,'            <div class="rencentNewsPagingHeader">'
,'                <span class="ms-promlink-headerNav">                    '
,'                    <a class="ms-commandLink ms-promlink-button ', $htmlEncode(nextPageContainerClassName) ,'" title="', $htmlEncode(lastPage.title) ,'" href="#" onclick="$getClientControl(this).page(', $htmlEncode(lastPage.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                        <span class="ms-promlink-button-image">'
,'                            <img class="', $htmlEncode(nextPageImageClassName) ,'" alt="', $htmlEncode(lastPage.title) ,'" src="', $urlHtmlEncode(GetThemedImageUrl('spcommon.png')) ,'" />'
,'                        </span>'
,'                    </a>'
,'                    <span class="ms-promlink-button-inner"></span>'
,'                    <a class="ms-commandLink ms-promlink-button ', $htmlEncode(previousPageContainerClassName) ,'" title="', $htmlEncode(firstPage.title) ,'" href="#" onclick="$getClientControl(this).page(', $htmlEncode(firstPage.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                        <span class="ms-promlink-button-image">'
,'                            <img class="', $htmlEncode(previousPageImageClassName) ,'" alt="', $htmlEncode(firstPage.title) ,'" src="', $urlHtmlEncode(GetThemedImageUrl('spcommon.png')) ,'" />'
,'                        </span>'
,'                    </a>'
,'                </span>'
,'            </div>'
);
    }
}
ms_outHtml.push(''
,''
,'		</div>'
,'        ', ctx.RenderGroups(ctx) ,''
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
function RegisterTemplate_88379b08146245799dd9cde71c5da895() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_RecentNews", DisplayTemplate_88379b08146245799dd9cde71c5da895);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsListWithPaging.js", DisplayTemplate_88379b08146245799dd9cde71c5da895);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsListWithPaging.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_88379b08146245799dd9cde71c5da895();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsListWithPaging.js"), RegisterTemplate_88379b08146245799dd9cde71c5da895);
}