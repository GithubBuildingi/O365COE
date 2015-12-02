/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_6ca859e06d6341abb7adb14246bafca6(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_6ca859e06d6341abb7adb14246bafca6.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_AnnouncementAccordion.js';
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

var isRollupPageInDisplayMode = Srch.ContentBySearch.isRollupPage(ctx.ClientControl) && !Srch.U.isPageInEditMode();
var noResultsClassName = isRollupPageInDisplayMode ? "ms-attractMode ms-uppercase ms-alignCenter" : "ms-srch-result-noResults";

var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{
    var iStr = [];
    iStr.push('<li>');
    iStr.push(itemRenderResult);
    iStr.push('</li>');
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
ms_outHtml.push(''
,'    <ul class="cbs-List" style="width: 100%">'
,'                  ', ctx.RenderGroups(ctx) ,''
,''
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
        var startItemNum = (firstPage.startItem == -1) ? 1 : (firstPage.startItem + ctx.ClientControl.get_numberOfItems());
        var lastItemNum = (lastPage.startItem == -1) ? ctx.DataProvider.$2n_3.result.ResultTables[0].TotalRows : lastPage.startItem - 1;
ms_outHtml.push(''
,'            <li class="ms-promlink-header">'
,'                <span>'
);
                	if (hasPreviousPage)
                	{
                ms_outHtml.push(''
,'                    <a class="ms-commandLink ms-promlink-button ', $htmlEncode(previousPageContainerClassName) ,'" title="', $htmlEncode(firstPage.title) ,'" href="#" onclick="$getClientControl(this).page(', $htmlEncode(firstPage.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                        <span class="ms-promlink-button-image">'
,'                            <img class="', $htmlEncode(previousPageImageClassName) ,'" alt="', $htmlEncode(firstPage.title) ,'" src="', $urlHtmlEncode(GetThemedImageUrl('spcommon.png')) ,'" />'
,'                        </span>'
,'                    </a>'
);
                    	}
                    	ms_outHtml.push(''
,'                    <span class="ms-promlink-button-inner">', startItemNum ,' - ', lastItemNum ,'</span>'
);
                	if (hasNextPage)
                	{
                ms_outHtml.push(''
,'                    <a class="ms-commandLink ms-promlink-button ', $htmlEncode(nextPageContainerClassName) ,'" title="', $htmlEncode(lastPage.title) ,'" href="#" onclick="$getClientControl(this).page(', $htmlEncode(lastPage.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                        <span class="ms-promlink-button-image">'
,'                            <img class="', $htmlEncode(nextPageImageClassName) ,'" alt="', $htmlEncode(lastPage.title) ,'" src="', $urlHtmlEncode(GetThemedImageUrl('spcommon.png')) ,'" />'
,'                        </span>'
,'                    </a>'
);
                    	}
                    	ms_outHtml.push(''
,'                </span>'
,'            </li>'
);
    }
}

window.IT_SearchAnnouncementAccordion_RemoveStyles = function(element)
{
	element.removeAttribute("style");
	
	var idx = 0;
	for (idx = 0; idx < element.children.length; idx++)
	{
		IT_SearchAnnouncementAccordion_RemoveStyles(element.children[idx]);
	}
}

window.IT_SearchAnnouncementAccordion_ShowDetails = function(item)
 {
 	var elem = document.getElementById(item.id.replace("_title", "") + "_body");
	var allitems = elem.parentNode.parentNode.parentNode.getElementsByTagName("div");
	for (idx = 0; idx < allitems.length; idx++)
	{
		if (allitems[idx].className.indexOf("msit-api-fqi") != -1)
		{
			var children = allitems[idx].getElementsByTagName("div");
			if (children[0].className.indexOf("ms-bgSelected") != -1 && item != children[0])
			{
				children[0].className = "";
				children[0].style.fontWeight = "normal";
				children[1].style.display = "none";
			}
		}
	}

 	if (elem.style.display == "none")
 	{
 		item.className = "ms-bgSelected";
 		item.style.fontWeight = "bold";
 		IT_SearchAnnouncementAccordion_RemoveStyles(elem);
 		elem.style.display = "block";
 	}
 	else
 	{ 		
 		item.className = "";
 		item.style.fontWeight = "normal";
 		elem.style.display = "none";
 	}
 }
ms_outHtml.push(''
,'  </ul>'
);
if (ctx.ClientControl.get_shouldShowNoResultMessage())
{
ms_outHtml.push(''
,'        <div class="', noResultsClassName ,'">', $noResults ,'</div>'
);
}
ms_outHtml.push(''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_6ca859e06d6341abb7adb14246bafca6() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_ListWithPaging", DisplayTemplate_6ca859e06d6341abb7adb14246bafca6);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_AnnouncementAccordion.js", DisplayTemplate_6ca859e06d6341abb7adb14246bafca6);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_AnnouncementAccordion.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_6ca859e06d6341abb7adb14246bafca6();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_AnnouncementAccordion.js"), RegisterTemplate_6ca859e06d6341abb7adb14246bafca6);
}