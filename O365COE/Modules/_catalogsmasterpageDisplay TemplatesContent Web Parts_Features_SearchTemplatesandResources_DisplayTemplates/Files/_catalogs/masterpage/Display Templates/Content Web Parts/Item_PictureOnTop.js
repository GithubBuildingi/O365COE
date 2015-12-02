/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureOnTop.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Picture URL':['PublishingImage', 'PictureURL', 'PictureThumbnailURL'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':['Description'], 'Line 3':[], 'SecondaryFileExtension':null, 'ContentTypeId':null};
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
var line2 = $getItemValue(ctx, "Line 2");
line2.overrideValueRenderer(setLineHeightRenderer);
var line3 = $getItemValue(ctx, "Line 3");
line3.overrideValueRenderer(setLineHeightRenderer);

var pictureURL = $getItemValue(ctx, "Picture URL");
var pictureId = encodedId + "picture";
var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 304, 100, ctx.CurrentItem, "cbs-pictureOnTopImg", line1, pictureId);

var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureContainerId = encodedId + "pictureContainer";
var dataContainerId = encodedId + "dataContainer";
var line1LinkId = encodedId + "line1Link";
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";
var line3Id = encodedId + "line3";
 ms_outHtml.push(''
,'        <div class="cbs-pictureOnTopContainer" id="', containerId ,'" data-displaytemplate="ItemPictureOnTop">'
,'            <div class="cbs-pictureOnTopImageContainer" id="', pictureContainerId ,'">'
,'                <a class="cbs-pictureImgLink" href="', linkURL ,'" title="', $htmlEncode(line1) ,'" id="', pictureLinkId ,'">'
,'                    ', pictureMarkup ,''
,'                </a>'
,'            </div>'
,'            <div class="cbs-pictureOnTopDataContainer" id="', dataContainerId ,'">'
,'                <a class="cbs-pictureOnTopLine1Link" href="', linkURL ,'" title="', $htmlEncode(line1) ,'" id="', line1LinkId ,'">'
,'                    <h2 class="cbs-pictureOnTopLine1 ms-accentText2 ms-noWrap" id="', line1Id ,'"> ', line1 ,'</h2>'
,'                </a>'
,'                <div class="cbs-pictureOnTopLine2 ms-noWrap" title="', $htmlEncode(line2) ,'" id="', line2Id ,'"> ', line2 ,'</div>'
,'                <div class="cbs-pictureLine3 ms-textSmall ms-noWrap" id="', line3Id ,'" title="', $htmlEncode(line3) ,'">', line3 ,'</div>'
,'            </div>'
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_PictureOnTop", DisplayTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureOnTop.js", DisplayTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureOnTop.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_PictureOnTop.js"), RegisterTemplate_a6f7c558bd3845b9b1a95c9d3ec20cbf);
}