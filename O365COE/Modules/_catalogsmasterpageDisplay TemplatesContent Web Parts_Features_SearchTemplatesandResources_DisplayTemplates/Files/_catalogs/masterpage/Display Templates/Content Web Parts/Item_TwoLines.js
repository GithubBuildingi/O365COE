/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_d3bf527c43cb4256a119a96d2bc73e4e(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_d3bf527c43cb4256a119a96d2bc73e4e.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_TwoLines.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':[], 'FileExtension':null, 'SecondaryFileExtension':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_2lines_");

var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncodeValueObject);
var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);

var line1 = $getItemValue(ctx, "Line 1");
var line2 = $getItemValue(ctx, "Line 2");
line1.overrideValueRenderer($contentLineText);
line2.overrideValueRenderer($contentLineText);

var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureId = encodedId + "picture";
var dataContainerId = encodedId + "dataContainer";
var line1LinkId = encodedId + "line1Link";
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";
ms_outHtml.push(''
,'        <div class="cbs-Item" id="', containerId ,'" data-displaytemplate="Item2Lines">'
,'            <a class="cbs-ItemLink" title="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', pictureLinkId ,'">'
,'                <img class="cbs-Thumbnail" src="', $urlHtmlEncodeString(iconURL) ,'" alt="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', pictureId ,'" />'
,'            </a>'
,'            <div class="cbs-Detail" id="', dataContainerId ,'">'
,'                <a class="cbs-Line1Link ms-noWrap ms-displayBlock" href="', linkURL ,'" title="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', line1LinkId ,'">', line1 ,'</a>'
);
if(!line2.isEmpty)
{
ms_outHtml.push(''
,'                <div class="cbs-Line2 ms-noWrap" title="', $htmlEncode(line2.defaultValueRenderer(line2)) ,'" id="', line2Id ,'">', line2 ,'</div>'
);
}
ms_outHtml.push(''
,'                </div>'
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_d3bf527c43cb4256a119a96d2bc73e4e() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("TwoLines", DisplayTemplate_d3bf527c43cb4256a119a96d2bc73e4e);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_TwoLines.js", DisplayTemplate_d3bf527c43cb4256a119a96d2bc73e4e);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_TwoLines.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_d3bf527c43cb4256a119a96d2bc73e4e();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_TwoLines.js"), RegisterTemplate_d3bf527c43cb4256a119a96d2bc73e4e);
}