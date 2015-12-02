/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_2dfce6840a5148478e94bb612244ce49(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_2dfce6840a5148478e94bb612244ce49.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsCarousel.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
); 
var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

if (!$isNull(ctx.ClientControl) &&
    !$isNull(ctx.ClientControl.shouldRenderControl) &&
    !ctx.ClientControl.shouldRenderControl())
{
    return "";
}
ctx.ListDataJSONGroupsKey = "ResultTables";

var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_slideShow_");
var itemsContainerId = encodedId + "container";
var pagingOverlayId = encodedId + "pagingOverlay";
var pagingBarId = encodedId + "pagingBar";
var pagingMoreId = encodedId + "pagingMore";


window.Slides_timer = function(controlDiv, currentIdx){
    var TimerDelayMilliSeconds = 5000;
    
    currentIdx ++;
    var numResults = $(".slides_pagingBar li").length;
    if(currentIdx >= numResults){
        currentIdx = 0;
    }
    else if(currentIdx < 0)
    {
        currentIdx = numResults - 1;
    }
    clearTimeout(controlDiv.timer);
    controlDiv.timer = setTimeout(function(){Slides_changeSlide(currentIdx); controlDiv = null; currentIdx = null;}, TimerDelayMilliSeconds);
};
window.Slides_pagingClicked = function(clicked)
{
	var controlDiv = document.querySelectorAll(".slides_container")[0];	
    var current = $(".slides_pagingBar li.current").index();
    var next = parseInt(clicked,10);
    if(current !== next )
    {	    	
		clearTimeout(controlDiv.timer);
		Slides_changeSlide(clicked);
	}
}

var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{
    var iStr = [];
    iStr.push('<div class="slide-cell">');
    iStr.push(itemRenderResult);
    iStr.push('</div>');
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
ctx.OnPostRender = [];

ctx.OnPostRender.push(function(){
    var slideshows = document.querySelectorAll(".slides_container");

    for(var i = 0; i < slideshows.length; i++){
        Slides_init(slideshows[i]);
    }
});
window.Slides_init = function(controlDiv){
	if(!controlDiv.timer){
		var timer = document.createAttribute("timer");
        controlDiv.setAttributeNode(timer);
        var firstSlide = $(controlDiv).find(".slides_control .slide-row>div:first").clone();
        var lastSlide = $(controlDiv).find(".slides_control .slide-row>div:last").clone();
		$(controlDiv).find(".slides_control .slide-row").append(firstSlide);
		$(controlDiv).find(".slides_control .slide-row").prepend(lastSlide);
		$(controlDiv).mouseover(function()
		{
			clearTimeout(controlDiv.timer);
			console.log("stop");
		});
		$(controlDiv).mouseout(function()
		{
			var current = $(".slides_pagingBar li.current").index();
			Slides_timer(controlDiv, current);
		});
		$(".slides_control").animate({top:"-100%"},0,Slides_callback)
							.animate({left:-805},0,Slides_callback);
        Slides_timer(controlDiv, 0);
    }
};
window.Slides_changeSlide = function(clicked){
	var current = $(".slides_pagingBar li.current").index();
	//var n = $(".slides_control>div").length;
	//var slideWidth = $(".slides_control>div").width();
	//$(".slides_control>div").css("width", slideWidth)
	//.css("float","left");
	//$(".slides_control").css("width", n*slideWidth);	
	//$(".slides_control")[0].style.cssText ="left: -"+current*slideWidth+"px;width:"+slideWidth*n+"px !important;"
	
	
	var controlDiv = document.querySelectorAll(".slides_container")[0];
    var next = parseInt(clicked,10);
    if(current !== next )
    {	    	
    	var x = -(next+1)*805;
    	var y = -(next+1)*100 + "%";
    	var spd = Math.abs(next-current)*1000;
    	if($(".slides_pagingBar li:last-child").index() == current && 
    	$(".slides_pagingBar li:first-child").index() == next)
    	{
    		spd = 1000;
    	}
    	$(".slides_pagingBar li.current").removeClass("current")
		$(".slides_pagingBar li").eq(next).addClass("current");
		
		if($(".slides_control").width() == $(".slides_container").width())
		{
			$(".slides_control").animate({top:y},spd,Slides_callback)
								.animate({left:x},0);
		}
		else
		{
			$(".slides_control").animate({left:x},spd,Slides_callback)
								.animate({top:y},0);
		}

		
		
    	$(".slides_control").animate({left:x},spd,Slides_callback);
    	Slides_timer(controlDiv, next);
    	if($(".slides_pagingBar li:last-child").index() == next){    		
    		if($(".slides_control").width() == $(".slides_container").width())
			{
				$(".slides_control").animate({top:0},0,Slides_callback);
			}
			else
			{
				$(".slides_control").animate({left:0},0,Slides_callback);
			}
    	}
    }
    
};
window.Slides_callback = function()
{	
	var idx = $(".slides_pagingBar li.current").index();
	idx++;
	if(idx == $(".slides_pagingBar li").length)
	{
		idx = 0;
	}
	$(".slides_control").attr("class","slides_control slide-" + idx);
}
window.getHotNewsNoPictureMarkup = function()
{
	return '<img src="'+_spPageContextInfo.webServerRelativeUrl+'/SiteAssets/Default_318.png"/>';
}

ms_outHtml.push(''
,'	<div class="slides_outerContainer">'
,'		<div class="slides_innerContainer">'
,'	        <div class="slides_container" data-displaytemplate="ControlHotNews">'
,'	            <div class="slides_control">'
,'	            	<div class="slide-row">                         	         	'
,'	                ', ctx.RenderGroups(ctx) ,''
,'	                </div>                            '
,'	            </div>'
);
	if (ctx.ClientControl.get_shouldShowNoResultMessage()){
	ms_outHtml.push(''
,'	            <div class="slides_noResults">', $noResults ,'</div>'
);
	}
	ms_outHtml.push(''
,'			</div>'
,'		</div>'
,'        <div class="slides_pagingBar" id="', pagingBarId ,'">'
,'        	<span style="display:none">Hot News</span>'
,'        	<ul class="slides_pagination">'
);
var MaxNumOfResults = ctx.ClientControl.get_numberOfItems();
var numResults = ctx.DataProvider.get_rowCount();
var numResultsToShowPaging = Math.min(numResults, MaxNumOfResults);
for(var i = 0; i < numResultsToShowPaging; i++){
var anchorId = encodedId + "pagingControl" + i; 
var current = "";
if(i==0)
{
current = "current";
}
ms_outHtml.push(''
,'			<li class="', current ,'">'
,'                <a href="javascript:{}" onclick="Slides_pagingClicked(', i ,');" id="', anchorId ,'">'
,'                    <span>&#9679;</span>'
,'                </a>'
,'            </li>'
);
}
ms_outHtml.push(''
,'			</ul>'
,'        </div>'
,''
,'    </div>'
,'            '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_2dfce6840a5148478e94bb612244ce49() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("HotNews", DisplayTemplate_2dfce6840a5148478e94bb612244ce49);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsCarousel.js", DisplayTemplate_2dfce6840a5148478e94bb612244ce49);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsCarousel.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_2dfce6840a5148478e94bb612244ce49();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_IT_NewsCarousel.js"), RegisterTemplate_2dfce6840a5148478e94bb612244ce49);
}