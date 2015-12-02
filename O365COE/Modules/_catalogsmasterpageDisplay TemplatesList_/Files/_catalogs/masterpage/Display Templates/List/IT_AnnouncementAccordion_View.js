(function () {
    /*
     * Initialize the variable that store the overrides objects.
     */
	var overrideCtx = {};
	overrideCtx.Templates = {};
	
//	Assign functions or plain html strings to the templateset objects:
//	header, footer and item.
	overrideCtx.Templates.Header = IT_AnnouncementAccordion_View_HeaderControl;

// 	This template is assigned to the CustomItem function.
	overrideCtx.Templates.Item = CustomItem;
	overrideCtx.BaseViewID = 1;
	overrideCtx.ListTemplateType = 104;
		
//   	 Register the template overrides.

	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

/*
 * This function builds the output for the item template.
 * Uses the Context object to access announcement data.
 */
function IT_AnnouncementAccordion_View_HeaderControl(ctx) {
	var html = RenderTableHeader(ctx).replace("<table ", "<table style='width: 100%; padding: 0px; margin: 0px;' ");
	return html;
}

function IT_AnnouncementAccordion_View_RemoveStyles(element)
{
	element.removeAttribute("style");
	
	var idx = 0;
	for (idx = 0; idx < element.children.length; idx++)
	{
		IT_AnnouncementAccordion_View_RemoveStyles(element.children[idx]);
	}
}

 function IT_AnnouncementAccordion_View_ShowDetails(item)
 {
 	var elem = document.getElementById(item.id.replace("_title", "") + "_body");
	var allitems = elem.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("div");
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
 		IT_AnnouncementAccordion_View_RemoveStyles(elem);
 		elem.style.display = "block";
 	}
 	else
 	{ 		
 		item.className = "";
 		item.style.fontWeight = "normal";
 		elem.style.display = "none";
 	}
 }
 
function CustomItem(ctx) {
	var ret = "<tr style='padding: 0px; margin: 0px;'><td width='100%' colspan='42' style='padding: 0px; margin: 0px'><div class='ms-topBar msit-api-fqi' style='margin: 3px; border: 1px; -moz-border-radius: 5px; border-radius: 5px; padding:1px;'>";
	var uniqueItemId = ctx.wpq + "_" + ctx.CurrentItem["ID"] + "_";
	
	ret += "<div id='" + uniqueItemId + "title' onclick='IT_AnnouncementAccordion_View_ShowDetails(this); return false;' style='-moz-border-top-left-radius: 5px; border-top-left-radius: 5px; -moz-border-top-right-radius: 5px; border-top-right-radius: 5px; padding:5px; cursor: pointer'>" + ctx.CurrentItem["Title"] + "</div>";
	ret += "<div class='ms-HoverBackground-bgColor' style='display:none; -moz-border-bottom-left-radius: 10px; border-bottom-left-radius: 5px; -moz-border-bottom-right-radius: 5px; border-bottom-right-radius: 5px; padding:10px; border-top: 1px solid rgba(255, 255, 255, 0.6);' id='" + uniqueItemId + "body'>" + ctx.CurrentItem["Body"] + "</div>";
	ret += "</div></td></tr>";
	return ret;
}