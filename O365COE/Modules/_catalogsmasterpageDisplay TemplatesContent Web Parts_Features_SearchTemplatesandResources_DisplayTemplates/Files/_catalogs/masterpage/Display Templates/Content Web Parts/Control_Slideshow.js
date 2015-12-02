/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_deb1ffdf0fc0450794546f85e60c3f7f(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_deb1ffdf0fc0450794546f85e60c3f7f.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_Slideshow.js';
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

window.cbs_Slideshow_init = function(controlDiv){
    if(!controlDiv.timer){
        cbs_Slideshow_setSlideStatus(controlDiv.children[0].children[0], controlDiv.children[2].children[0], true);
        var timer = document.createAttribute("timer");
        controlDiv.setAttributeNode(timer);

        cbs_addMouseHandlers(controlDiv);

        var numResults = ctx.ClientControl.get_numberOfItems();
        if($isNull(window._slideShowCount))
        {
            window._slideShowCount = {};
        }
        window._slideShowCount[controlDiv.id] = numResults;

        var startIndex = cbs_getStyle(controlDiv, 'direction') != 'rtl' ? 0 : numResults - 1;
        cbs_Slideshow_changeSlide(controlDiv, startIndex);
        cbs_Slideshow_timer(controlDiv, startIndex);
    }
};

window.cbs_addMouseHandlers = function(slideshow)
{
    if($isNull(slideshow) || $isNull(slideshow.children) || slideshow.children.length == 0 || 
        $isNull(slideshow.children[0].children) || slideshow.children[0].children.length == 0){
        return;
    }
    var slideItems = slideshow.children[0].children;
    for(var slideNum = 0; slideNum < slideItems.length; slideNum++){

        (function()
        {
            var currentSlideNumber = slideNum;
            var slideItem = slideItems[currentSlideNumber];
            cbs_addEventListener(slideItem, 'mouseover', function(){ clearTimeout(slideshow.timer); });
            cbs_addEventListener(slideItem, 'mouseout', function(){ cbs_Slideshow_changeSlide(slideshow, currentSlideNumber); }); 
        })();
    }
}

window.cbs_Slideshow_timer = function(controlDiv, currentIdx){
    var TimerDelayMilliSeconds = 5000;
    if($isNull(controlDiv) || controlDiv.children.length == 0){
        setTimeout(function(){cbs_Slideshow_timer(controlDiv, currentIdx); controlDiv = null; currentIdx = null;}, TimerDelayMilliSeconds);
        return;
    }

    currentIdx += cbs_getStyle(controlDiv, 'direction') != 'rtl' ? 1 : -1;
    var numResults = window._slideShowCount[controlDiv.id];
    if(currentIdx >= numResults){
        currentIdx = 0;
    }
    else if(currentIdx < 0)
    {
        currentIdx = numResults - 1;
    }
    clearTimeout(controlDiv.timer);
    controlDiv.timer = setTimeout(function(){cbs_Slideshow_changeSlide(controlDiv, currentIdx); controlDiv = null; currentIdx = null;}, TimerDelayMilliSeconds);
};

window.cbs_Slideshow_onclick = function(target, idx){
    var slideshow = target.parentNode.parentNode;

    clearTimeout(slideshow.timer);
    cbs_Slideshow_changeSlide(slideshow, idx);
};

window.cbs_Slideshow_changeSlide = function(slideshow, slideIndex){
    if($isNull(slideshow)){return;}
    if($isNull(slideshow.children) || slideshow.children.length == 0){cbs_Slideshow_timer(slideshow, slideIndex); return;}

    var slideItems = slideshow.children[0].children;
    var buttonItems = slideshow.children[2].children;
    var numResults = slideItems.length;
    for(var k = 0; k < numResults; k++){
        if(k == slideIndex) {continue;}
        var buttonElement = k < buttonItems.length ? buttonItems[k] : null;
        cbs_Slideshow_setSlideStatus(slideItems[k], buttonElement, false);
    }
    if(slideIndex >= 0 && slideIndex < numResults){
        var buttonElement = slideIndex < buttonItems.length ? buttonItems[slideIndex] : null;
        cbs_Slideshow_setSlideStatus(slideItems[slideIndex], buttonElement, true);
    }

    cbs_Slideshow_timer(slideshow, slideIndex); 
};

window.cbs_Slideshow_setSlideStatus = function(slideElement, buttonElement, isActive){
    if(!$isNull(slideElement)){
        slideElement.style.display = isActive ? "block" : "none";
    }
    if(!$isNull(buttonElement)){
        var activeButtonClassName = "cbs-SlideshowPagingLink-Active";
        var inactiveButtonClassName = "cbs-SlideshowPagingLink-Inactive";
        var oldClassName = isActive ? inactiveButtonClassName : activeButtonClassName;
        var newClassName = isActive ? activeButtonClassName : inactiveButtonClassName;
        buttonElement.className = buttonElement.className.replace(oldClassName, newClassName);
    }
}

window.cbs_getStyle = function(element,propertyName)
{
    var styleValue = null;
    if($isNull(element)){return styleValue;}

    if (element.currentStyle){
        styleValue = element.currentStyle[propertyName];
    }
    else if (window.getComputedStyle){
        styleValue = document.defaultView.getComputedStyle(element,null).getPropertyValue(propertyName);
    }
    return styleValue;
}

window.cbs_addEventListener = function(element, eventName, func)
{
    if(!$isNull(element) && !$isEmptyString(eventName) && !$isNull(func))
    {
        if(!$isNull(element.addEventListener))
        {
            element.addEventListener(eventName, func);
        }
        else if (!$isNull(element.attachEvent))
        {
            eventName = eventName.indexOf("on") == 0 ? eventName : "on" + eventName;
            element.attachEvent(eventName, func);
        }
    }
}

var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_slideShow_");
var itemsContainerId = encodedId + "container";
var pagingOverlayId = encodedId + "pagingOverlay";
var pagingBarId = encodedId + "pagingBar";
var pagingMoreId = encodedId + "pagingMore";

ctx.OnPostRender = [];

ctx.OnPostRender.push(function(){
    var slideshows = document.querySelectorAll(".cbs-Slideshow");

    for(var i = 0; i < slideshows.length; i++){
        cbs_Slideshow_init(slideshows[i]);
    }
});
ms_outHtml.push(''
,'        <div class="cbs-Slideshow" id="', encodedId ,'" data-displaytemplate="ControlSlideshow">'
,'            <div class="cbs-SlideshowItems" id="', itemsContainerId ,'">'
,'                ', ctx.RenderGroups(ctx) ,''
,'            </div>'
);
if (ctx.ClientControl.get_shouldShowNoResultMessage()){
ms_outHtml.push(''
,'            <div class="cbs-SlideShow-noResults">', $noResults ,'</div>'
);
}
ms_outHtml.push(''
,'            <div class="cbs-SlideshowPagingBarOverlay" id="', pagingOverlayId ,'"></div>'
,'            <div class="cbs-SlideshowPagingBar" id="', pagingBarId ,'">'
);
var MaxNumOfResults = 12;
var numResults = ctx.ClientControl.get_numberOfItems();
var numResultsToShowPaging = Math.min(numResults, MaxNumOfResults);
for(var i = 0; i < numResultsToShowPaging; i++){
    var anchorId = encodedId + "pagingControl" + i;
ms_outHtml.push(''
,'                <a class="cbs-SlideshowPagingLink-Inactive" href="javascript:{}" onclick="cbs_Slideshow_onclick(this, ', i ,');" id="', anchorId ,'">'
,'                    <span>&#160;</span>'
,'                </a>'
);
}
if(numResults > numResultsToShowPaging){
ms_outHtml.push(''
,'                <div class="cbs-SlideshowPaging-More" id="', pagingMoreId ,'">'
,'                    <span>&#8230;</span>'
,'                </div>'
);
}
ms_outHtml.push(''
,'            </div>'
,'        </div>'
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_deb1ffdf0fc0450794546f85e60c3f7f() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Slideshow", DisplayTemplate_deb1ffdf0fc0450794546f85e60c3f7f);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_Slideshow.js", DisplayTemplate_deb1ffdf0fc0450794546f85e60c3f7f);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_Slideshow.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_deb1ffdf0fc0450794546f85e60c3f7f();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_Slideshow.js"), RegisterTemplate_deb1ffdf0fc0450794546f85e60c3f7f);
}