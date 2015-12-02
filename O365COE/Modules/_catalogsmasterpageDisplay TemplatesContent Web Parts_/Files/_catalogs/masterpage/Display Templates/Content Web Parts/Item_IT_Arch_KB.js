/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_4f2995d1ad9c40a78462463b40f3f008(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_4f2995d1ad9c40a78462463b40f3f008.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_Arch_KB.js';
  ctx['DisplayTemplateData']['TemplateType']='Base';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_ITArchKB_");
var containerId = encodedId + "container";

var title = ctx.CurrentItem.Title;
var body = ctx.CurrentItem.PlaybookBodyOWSMTXT;
var example = ctx.CurrentItem.PlaybookExampleOWSMTXT;
var related = ctx.CurrentItem.PlaybookRelatedOWSMTXT;

if (typeof(example) != "string" || example.length == 0) {
	example = "";
}

if (typeof(related) != "string" || related.length == 0) {
	related = "";
}

var relatedUrls = related.replace(/,/g, ";").split(";");
var ridx = 0;

related = "";

for (ridx = 0; ridx < relatedUrls.length; ridx++) {
	var ruTitle = relatedUrls[ridx];
	var ruUrl = relatedUrls[ridx];
	
	if (relatedUrls[ridx].indexOf("|") != -1) {
		var ruar = relatedUrls[ridx].split("|");
		ruTitle = ruar[0];
		ruUrl = ruar[1];
	}
	related += "<div><a href='" + ruUrl + "'>" + ruTitle + "</a></div>";
}

ms_outHtml.push(''
,'		<h1>', title ,'</h1>'
);
if(typeof(body) == "string" && body.length > 0)
{
ms_outHtml.push(''
,'                <div>', body ,'</div>'
);
}
ms_outHtml.push(''
,''
);
if(typeof(example) == "string" && example.length > 0)
{
ms_outHtml.push(''
,'                <h2>Example</h2>'
,'                <div>', example ,'</div>'
);
}
ms_outHtml.push(''
,''
);
if(typeof(related) == "string" && related.length > 0)
{
ms_outHtml.push(''
,'                <h2>Related Resources</h2>'
,'                <div>', related ,'</div>'
);
}
ms_outHtml.push(''
,''
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_4f2995d1ad9c40a78462463b40f3f008() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_ITArchKB", DisplayTemplate_4f2995d1ad9c40a78462463b40f3f008);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_Arch_KB.js", DisplayTemplate_4f2995d1ad9c40a78462463b40f3f008);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_Arch_KB.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_4f2995d1ad9c40a78462463b40f3f008();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_Arch_KB.js"), RegisterTemplate_4f2995d1ad9c40a78462463b40f3f008);
}