/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_e086aa9e089c42eea5cf0f4418438ee9(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_e086aa9e089c42eea5cf0f4418438ee9.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureTitleOnTop.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Picture URL':['PublishingImage', 'PictureURL', 'PictureThumbnailURL'], 'Link URL':['Path'], 'Line 1':['Title']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_pictureOnTop_");

var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncodeValueObject);

var line1 = $getItemValue(ctx, "Line 1");
var setLineHeightRenderer = function(valueInfoObj)
{
    if(!$isNull(valueInfoObj) && !valueInfoObj.isEmpty)
    {
        if(!$isNull(valueInfoObj.defaultValueRenderer))
        {
            return valueInfoObj.defaultValueRenderer(valueInfoObj);
        }
        else
        {
            return valueInfoObj.toString();
        }
    }
    else
    {
        return "&nbsp;";
    }
}

var pictureURL = $getItemValue(ctx, "Picture URL");
var pictureId = encodedId + "picture";
var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 304, 100, ctx.CurrentItem, "cbs-pictureOnTopImg", line1, pictureId);

var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureContainerId = encodedId + "pictureContainer";
var dataContainerId = encodedId + "dataContainer";
var line1LinkId = encodedId + "line1Link";
var line1Id = encodedId + "line1";
 ms_outHtml.push(''
,'	     '
,'	    <div class="bi-topicContainer">'
,'	    	<img src="', pictureURL ,'" data-themekey="#" alt="', line1 ,'" />'
,'	    	<div class="bi-topicTitle"> '
,'	        	<a href="', linkURL ,'" title="', line1 ,'">', line1 ,'</a>'
,'	    	</div>'
,'	    </div>'
,'        '
,'        '
,'        '
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_e086aa9e089c42eea5cf0f4418438ee9() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_PictureOnTop", DisplayTemplate_e086aa9e089c42eea5cf0f4418438ee9);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureTitleOnTop.js", DisplayTemplate_e086aa9e089c42eea5cf0f4418438ee9);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureTitleOnTop.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_e086aa9e089c42eea5cf0f4418438ee9();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureTitleOnTop.js"), RegisterTemplate_e086aa9e089c42eea5cf0f4418438ee9);
}