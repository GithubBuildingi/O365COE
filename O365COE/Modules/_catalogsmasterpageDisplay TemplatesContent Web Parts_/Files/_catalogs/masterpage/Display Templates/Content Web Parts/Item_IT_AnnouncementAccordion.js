/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_2d1333477ffa42479fcaa8dc831afc00(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_2d1333477ffa42479fcaa8dc831afc00.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_AnnouncementAccordion.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'BodyOWSMTXT':['BodyOWSMTXT']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_2lines_");
var containerId = encodedId + "container";

var title = $getItemValue(ctx, "Title");
var body = $getItemValue(ctx, "BodyOWSMTXT");

ms_outHtml.push(''
,'		<div class="ms-topBar msit-api-fqi" style="margin: 5px; border: 1px; -moz-border-radius: 5px; border-radius: 5px; padding:1px; width: 100%">'
,'			<div id="', encodedId ,'title" onclick="IT_SearchAnnouncementAccordion_ShowDetails(this); return false;" style="-moz-border-top-left-radius: 5px; border-top-left-radius: 5px; -moz-border-top-right-radius: 5px; border-top-right-radius: 5px; padding:5px; cursor: pointer"> '
,'				', $htmlEncode(title.defaultValueRenderer(title)) ,''
,'			</div>'
,'			<div id="', encodedId ,'body" class="ms-HoverBackground-bgColor" style="display:none; -moz-border-bottom-left-radius: 10px; border-bottom-left-radius: 5px; -moz-border-bottom-right-radius: 5px; border-bottom-right-radius: 5px; padding:10px; border-top: 1px solid rgba(255, 255, 255, 0.6);">'
,'				', STSHtmlDecode(body.defaultValueRenderer(body)) ,''
,'			</div>'
,'		</div>'
,'	'
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_2d1333477ffa42479fcaa8dc831afc00() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("MSIT_Announcement", DisplayTemplate_2d1333477ffa42479fcaa8dc831afc00);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_AnnouncementAccordion.js", DisplayTemplate_2d1333477ffa42479fcaa8dc831afc00);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_AnnouncementAccordion.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_2d1333477ffa42479fcaa8dc831afc00();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_AnnouncementAccordion.js"), RegisterTemplate_2d1333477ffa42479fcaa8dc831afc00);
}