/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_3844accaa9ee44e68ed8a98c9e30e1ee(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_3844accaa9ee44e68ed8a98c9e30e1ee.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fGroup_Content.js';
  ctx['DisplayTemplateData']['TemplateType']='Group';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
if(!$isNull(ctx.ClientControl) && ctx.ClientControl.shouldShowTable(ctx.CurrentGroup))
{
    ctx.ListDataJSONItemsKey = "ResultRows";
ms_outHtml.push(''
,'    ', ctx.RenderItems(ctx) ,''
);
}
ms_outHtml.push(''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_3844accaa9ee44e68ed8a98c9e30e1ee() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Group_Content", DisplayTemplate_3844accaa9ee44e68ed8a98c9e30e1ee);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fGroup_Content.js", DisplayTemplate_3844accaa9ee44e68ed8a98c9e30e1ee);
}

}
RegisterTemplate_3844accaa9ee44e68ed8a98c9e30e1ee();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fGroup_Content.js"), RegisterTemplate_3844accaa9ee44e68ed8a98c9e30e1ee);
}