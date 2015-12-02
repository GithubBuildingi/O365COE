(function () {
    /*
     * Initialize the variable that store the overrides objects.
     */
	var overrideCtx = {};
	overrideCtx.Templates = {};
	
//	Assign functions or plain html strings to the templateset objects:
//	header, footer and item.
	overrideCtx.Templates.Header = "<ul style='list-style: none; padding: 0px; margin: 0px' class='msit-api-lv'>";
	overrideCtx.Templates.Footer = PagingControl;

// 	This template is assigned to the CustomItem function.
	overrideCtx.Templates.Item = CustomItem;
	overrideCtx.BaseViewID = 1;
	overrideCtx.ListTemplateType = 101;
		
//   	 Register the template overrides.

	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
	
	if (window.addEventListener) {    // most non-IE browsers and IE9
		window.addEventListener("resize", ResizeListView, false);
	} else if (window.attachEvent) {  // Internet Explorer 5 or above
		window.attachEvent("onresize", ResizeListView);
	}
})();

/*
 * This function builds the output for the item template.
 * Uses the Context object to access announcement data.
 */
 var systemFieldName = [ 
 	"ID", "PermMask", "FSObjType", "HTML_x0020_File_x0020_Type", 
 	"UniqueId", "ContentType", "FileLeafRef", "FileRef", "File_x0020_Type", 
 	"File_x0020_Type.mapapp", "HTML_x0020_File_x0020_Type.File_x0020_Type.mapcon", 
 	"HTML_x0020_File_x0020_Type.File_x0020_Type.mapico", "serverurl.progid",
 	"ServerRedirectedEmbedUrl", "File_x0020_Type.progid", "File_x0020_Type.url",
 	"ContentTypeId", "CheckoutUser", "CheckedOutUserId", "IsCheckedoutToLocal", 
 	"Created_x0020_Date.ifnew", "IsCheckedOutToLocal", "_dlc_DocIdUrl", "_dlc_DocIdUrl.desc",
 	"firstRow"
];
 var hasHeader = false;
 
function PagingControl(ctx) {
	if (typeof(ctx.ListData.FirstRow) == "undefined")
	{
		var html = "<div><a title='Add a new item to this list or library.' class='ms-heroCommandLink js-callout-launchPoint' id='js-newdocWOPI-Hero-WPQ2' onclick='OpenPopUpPageWithTitle(\"" + ctx.newFormUrl + "\", function() { document.location.reload(); }, null, null, \"Add Document\"); return false' href='#'><span class='ms-list-addnew-imgSpan20'><img class='ms-list-addnew-img20' id='js-newdocWOPI-Hero-WPQ2-img' src='/_layouts/15/images/spcommon.png?rev=33'></span><span>new document</span></a></div><div>No items have been uploaded.</div>";
		return html;
	}
	else
	{
		var firstRow = ctx.ListData.FirstRow;
		var lastRow = ctx.ListData.LastRow;
		var prev = ctx.ListData.PrevHref;
		var next = ctx.ListData.NextHref;
		var html = "<div class='Paging' style='min-height:20px'>";
		html += prev ? "<a style='box-sizing:content-box;' class='ms-commandLink ms-promlink-button ms-promlink-button-enabled' href='" + prev + "'><span class='ms-promlink-button-image'><img class='ms-promlink-button-left' src='/_layouts/15/images/spcommon.png?rev=23' /></span></a>" : "";
		html += "<span class='ms-paging'><span class='First'>" + firstRow + "</span> - <span class='Last'>" + lastRow + "</span></span>";
		html += next ? "<a style='box-sizing:content-box;' class='ms-commandLink ms-promlink-button ms-promlink-button-enabled' href='" + next + "'><span class='ms-promlink-button-image'><img class='ms-promlink-button-right' src='/_layouts/15/images/spcommon.png?rev=23'/></span></a>" : "";
		html += "</div>";
		
		DisplayVisibleViewColumns("WebPart" + ctx.wpq);
		
		return html;
	}
}

 function ShowDetails(item)
 {
 	var elem = document.getElementById(item.id.replace("_open", "") + "_Details");
 	var image = document.getElementById(item.id.replace("_open_", "_toggle_"));
 	 	
 	if (elem.style.display == "none")
 	{
 		image.src = image.src.replace("expand.png", "collapse.png");
 		image.parentNode.parentNode.parentNode.style.backgroundColor = "#efefef";
 		elem.style.display = "block";
 	}
 	else
 	{
 		image.src = image.src.replace("collapse.png", "expand.png");
 		image.parentNode.parentNode.parentNode.style.backgroundColor = "inherit";
 		elem.style.display = "none";
 	}
 	
	var elems = document.getElementsByTagName("li");
 	var elemIdx = 0;
 	var elemBaseId = item.id.split("_")[0];
 	for(elemIdx=0; elemIdx<elems.length; elemIdx++)
 	{
 		if (elems[elemIdx].id.indexOf(elemBaseId) == 0 && elems[elemIdx].id.indexOf("_Details") != -1 && item.id.replace("_open", "") + "_Details" != elems[elemIdx].id)
 		{
 			var idArr = elems[elemIdx].id.split("_");
 			var elemImage = document.getElementById(idArr[0] + "_toggle_" + idArr[1]);
 			if (elemImage != null)
 			{
				elemImage.src = image.src.replace("collapse.png", "expand.png");
				elemImage.parentNode.parentNode.parentNode.style.backgroundColor = "inherit";
				elems[elemIdx].style.display = "none"; 
			}				
 		}
 	}
 	
 	var docPreview = elem.getElementsByTagName("iframe");
 	 	
 	if (docPreview.length > 0)
 	{
 		var appSource = docPreview[0].getAttribute("appsource");
 		
 		if (docPreview[0].src.toLowerCase().indexOf(appSource.toLowerCase()) != 0)
 		{
 			docPreview[0].src = appSource;
 		}
 	}
 }
 
 function ShowFolder(folder, view)
 {
 	var newLocationHref = document.location.href;
 	var queryStrings = parseQueryStrings(document.location.href);
 	
 	if (typeof(queryStrings["RootFolder"]) != "undefined")
 	{
 		newLocationHref = document.location.href.split("?")[0] + "?";

		for (qs in queryStrings)
		{
			if (qs != "RootFolder" && qs != "FolderCTID" && qs != "View")
			{
				newLocationHref += qs + "=" + queryStrings[qs];
			}
		}
 	}
 	
 	var folderQueryString = "RootFolder=" + encodeURIComponent(folder) + "&FolderCTID=0x012000FE001BC77E213F439E02D49D72D2517B&View=" + encodeURIComponent(view);
 	
 	if (folder != "")
 	{
	  	if (newLocationHref.indexOf("?") != -1)
	 	{
	 		newLocationHref += "&" + folderQueryString;
	 	}
	 	else
	 	{
	 		newLocationHref += "?" + folderQueryString;
	 	}
 	}
 	
 	document.location.href = newLocationHref;
 }
 
 function getQueryString(queryString, url)
 {
 	var tempUrl = url;
 	
 	if (typeof(url) == "undefined" || url == null || url == "")
 	{
	 	tempUrl = document.location.href;
 	}
 	
 	var queryStrings = parseQueryStrings(tempUrl);
 	
 	if (typeof(queryStrings[queryString]) != "undefined")
 	{
 		return decodeURIComponent(queryStrings[queryString]);
 	}
 	else
 	{
 		return "";
 	}
 }
 
 function parseQueryStrings(url) {
    var params = {}, queries, temp, i, l;
 
    // Split into key/value pairs
    if (url.indexOf("?") != -1)
    {
	    queries = url.split("?")[1].split("&");
 
	    // Convert the array of strings into an object
	    for ( i = 0, l = queries.length; i < l; i++ ) {
	        temp = queries[i].split('=');
	        params[temp[0]] = temp[1];
	    }
    }
 
    return params;
}

function RenderColumnHeaders(fieldObjs, newFormUrl)
{
	var ret = "";
	if (!hasHeader)
	{
		var extraColumns = 0;
		hasHeader = true;
		ret = "<li style='float: left; width:100%' class='msit-api-lvrow'><a title='Add a new item to this list or library.' class='ms-heroCommandLink js-callout-launchPoint' id='js-newdocWOPI-Hero-WPQ2' onclick='OpenPopUpPageWithTitle(\"" + newFormUrl + "\", function() { document.location.reload(); }, null, null, \"Add Document\"); return false' href='#'><span class='ms-list-addnew-imgSpan20'><img class='ms-list-addnew-img20' id='js-newdocWOPI-Hero-WPQ2-img' src='/_layouts/15/images/spcommon.png?rev=33'></span><span>new document</span></a></li><li style='float: left; width:100%' class='msit-api-lvrow'>";
		ret += "<ul style='list-style: none; padding: 0px; margin: 0px;'>";
		ret += "<li style='float: left; width: 30px;'>&nbsp;</li>";
		ret += "<li style='float: left; width: 240px; font-weight: bold;'>Name</li>";
	
		for (var element in ctx.CurrentItem) {
			if (systemFieldName.indexOf(element) == -1 && element.indexOf(".FriendlyDisplay") == -1)
			{
				if (element == "Author") { element = "Created by"; }
				else if (element == "Editor") { element = "Modified by"; }
				else if (element.indexOf("_x0020_") != -1) { element = element.replace(/_x0020_/g, " "); }
				else if (element.replace(/[^A-Z]/g, "").length > 1)
				{
					element = element.replace(/([a-z])([A-Z])/g, '$1 $2');
				}
				extraColumns++;
				ret += "<li style='float: left; width: 145px; font-weight: bold; display:none;' class='msit-api-lvcol'>" + element + "</li>";
			}
       	 }

		ret += "</ul></li>";
		
		if (document.location.href.indexOf("RootFolder=") != -1)
		{
			var rootFolderUrl = getQueryString("RootFolder");
			rootFolderUrl = rootFolderUrl.substr(0, rootFolderUrl.lastIndexOf("/"));
			
			if (rootFolderUrl == ctx.listUrlDir)
			{
				rootFolderUrl = "";
			}
			
			var viewId = getQueryString("View");
			ret += "<li style='float: left; width: 100%' class='msit-api-lvrow'>";
			ret += "<ul style='list-style: none; padding: 0px; margin: 0px;'>";
			ret += "<li style='float: left; width: 30px;'><img src='/_layouts/15/images/folder.gif'/></li>";
			ret += "<li style='float: left; width: 240px;'><a href=\"javascript:ShowFolder('" + rootFolderUrl + "','" + viewId + "')\">.. Parent Folder ..</li>";
			
			var rfidx = 0;
			for (rfidx=0; rfidx<extraColumns; rfidx++)
			{
				ret += "<li style='float: left; width: 145px; display:none;' class='msit-api-lvcol'>&nbsp;</li>";
			}
	
			ret += "</ul></li>";
		}
	}
	
	return ret;
}

function ResizeListView()
{
	var views = document.querySelectorAll(".msit-api-lv");
	var viewIdx = 0;
	for (viewIdx=0; viewIdx < views.length; viewIdx++)
	{
		var parentId = views[viewIdx].parentElement.parentElement.parentElement.parentElement.parentElement.id;
		setTimeout(function() { DisplayVisibleViewColumns(parentId) }, 200);
	}
}

function DisplayVisibleViewColumns(elemId)
{
	var element = document.getElementById(elemId);
	var rows = element.querySelectorAll(".msit-api-lvrow");
	var rowIdx = 0;
	var numCols = Math.floor((element.offsetWidth -290) / 145);
	for (rowIdx=0; rowIdx < rows.length; rowIdx++)
	{
		var cols = rows[rowIdx].querySelectorAll(".msit-api-lvcol");
		var colIdx = 0;
		var colShowCount = 0;
		for (colIdx = 0; colIdx < cols.length; colIdx++)
		{
			if (colShowCount < numCols)
			{
				cols[colIdx].style.display = "block";
				colShowCount++;
			}
			else
			{
				cols[colIdx].style.display = "none";
			}
		}
		
		var detailRow = document.getElementById(rows[rowIdx].id + "_Details");
		
		if (detailRow != null)
		{
			var details = detailRow.querySelectorAll(".msit-api-lvdetail");
			for (colIdx=0; colIdx < details.length; colIdx++)
			{
				if (colShowCount > 0)
				{
					details[colIdx].style.display = "none";
					colShowCount--;
				}
				else
				{
					details[colIdx].style.display = "block";
				}
			}
		}
	}	
}

function GetUserFieldHtml(fieldObj, fieldId)
{
	var elemVal = "";
	var userRet = "";
	var elemIdx = 0;
	for (elemIdx = 0; elemIdx < fieldObj.length; elemIdx++)
	{
		var elemEmail = fieldObj[elemIdx].email;
		elemVal = fieldObj[elemIdx].title;
		if (elemVal.length > 22)
		{
			elemVal = elemVal.substr(0, 22) + "...";
		}
		userRet += "<div style='clear:both'> <span class='ms-imnSpan' style='float: left;'><a class='ms-imnlink ms-spimn-presenceLink' onclick='IMNImageOnClick(event);return false;' href='#'><span class='ms-spimn-presenceWrapper ms-spimn-imgSize-5x48'><img id='imn_viewcol_" + fieldId + elemIdx +",type=sip' class='ms-spimn-img ms-spimn-presence-disconnected-5x48x4' title='' name='imnmark' alt='No presence information' src='/_layouts/15/images/spimn.png?rev=23' sip='" + elemEmail +"' ShowOfflinePawn='1'></span><img src='/_layouts/15/userphoto.aspx?size=S&accountname=" + elemEmail + "' border='0' style='max-height: 48px; max-width: 48px;'/></a></span>" + elemVal + "</div>";
	}
	return userRet;
}

function GetMMSFieldHtml(fieldObj)
{
	var elemVal = "";
	var termRet = "";
	var elemIdx = 0;
	for (elemIdx = 0; elemIdx < fieldObj.length; elemIdx++)
	{
		var elemLabel = fieldObj[elemIdx].Label;
		var elemId = fieldObj[elemIdx].TermID;
		elemVal = elemLabel;
		if (elemVal.length > 19)
		{
			elemVal = elemVal.substr(0, 19) + "...";
		}
		termRet += "<div title='" + elemLabel + "'>" + elemVal + "</div>";
	}
	return termRet;
}

function GetDateFieldHtml(fieldObj)
{
	elemVal = fieldObj;
	if (elemVal.indexOf("0|") == 0)
	{
		elemVal = elemVal.substr(2);
	}
	else if (elemVal.indexOf("1|0|1") == 0)
	{
		elemVal = "A few seconds ago";
	}
	else if (elemVal.indexOf("1|0|2") == 0)
	{
		elemVal = "About a minute ago";
	}
	else if (elemVal.indexOf("1|0|3|") == 0)
	{
		elemVal = elemVal.substr(6) + " minutes ago";
	}
	else if (elemVal.indexOf("1|0|4") == 0)
	{
		elemVal = "About an hour ago";
	}
	else if (elemVal.indexOf("1|0|5|") == 0)
	{
		elemVal = "Yesterday at " + elemVal.substr(6);
	}
	else if (elemVal.indexOf("1|0|6|") == 0)
	{
		elemVal = elemVal.substr(6) + " hours ago";
	}
	else if (elemVal.indexOf("1|0|8|") == 0)
	{
		elemVal = elemVal.substr(6) + " days ago";
	}
	else if (typeof(elemVal) == "undefined" || elemVal == null || elemVal.length == 0)
	{
		elemVal = "&nbsp;";
	}
	
	return elemVal;
}

function GetFieldHtml(fieldObjs, element, wpid)
{
	var fieldObj = fieldObjs[element];
	var elemVal = "";
	if (typeof(fieldObj) == "object")
	{
		if (fieldObj.length == 0)
		{
			elemVal = "&nbsp;";
		}
		else if (typeof(fieldObj[0].email) != "undefined")
		{
			elemVal = GetUserFieldHtml(fieldObj, wpid + "-" + element + "-" + fieldObjs["ID"] + "-");
		}
		else if (typeof(fieldObj[0].TermID) != "undefined")
		{
			elemVal = GetMMSFieldHtml(fieldObj);
		}
	}
	else if (typeof(fieldObjs[element + ".FriendlyDisplay"]) != "undefined")
	{
		elemVal = GetDateFieldHtml(fieldObjs[element + ".FriendlyDisplay"]);
	}
	else
	{
		elemVal = fieldObj;
		if (elemVal.length > 19)
		{
			elemVal = elemVal.substr(0, 19) + "...";
		}
		else if (typeof(elemVal) == "undefined" || elemVal == null || elemVal.length == 0)
		{
			elemVal = "&nbsp;";
		}
	}
	
	return elemVal;
}
 
function CustomItem(ctx) {
	var ret = "";
	var details = "";
	
	ret += RenderColumnHeaders(ctx.CurrentItem, ctx.newFormUrl);
	
	ret += "<li style='float: left; width:100%; margin-top: 10px;' id='" + ctx.wpq + "_" + ctx.CurrentItem["ID"] + "' class='msit-api-lvrow'>";
	ret += "<ul style='list-style: none; padding: 0px; margin: 0px;'>";
	
	var fileName = ctx.CurrentItem.FileLeafRef;
	if (fileName.length > 35)
	{
		fileName = fileName.substr(0, 32) + "...";
	}
	
	if (ctx.CurrentItem["ContentType"] == "Folder")
	{
		ret += "<li style='float: left; width: 30px;'><img src='/_layouts/15/images/folder.gif'/></li>";
		ret += "<li style='float: left; width: 240px;'><a href=\"javascript:ShowFolder('" + ctx.CurrentItem.FileRef + "','" + ctx.view + "')\">" + fileName + "</a></li>";
	}
	else
	{
		ret += "<li style='float: left; width: 30px;'><img src='/_layouts/images/" + ctx.CurrentItem["HTML_x0020_File_x0020_Type.File_x0020_Type.mapico"] + "'/></li>";
		ret += "<li style='float: left; width: 240px;' title='" + ctx.CurrentItem.FileLeafRef + "'><a href='" + ctx.CurrentItem.FileRef + "'>" + fileName + "</a></li>";
	}
	
	for (var element in ctx.CurrentItem) 
	{
		var elemVal = "";
		if (systemFieldName.indexOf(element) == -1  && element.indexOf(".FriendlyDisplay") == -1)
		{
			elemVal = GetFieldHtml(ctx.CurrentItem, element, ctx.wpq);

			if (typeof(ctx.CurrentItem[element]) != "object")
			{
				ret += "<li style='float: left; width: 130px; display: none; margin-right: 15px;' title='" + ctx.CurrentItem[element] + "' class='msit-api-lvcol'>" + elemVal + "</li>";
			}
			else
			{
				ret += "<li style='float: left; width: 130px; display: none; margin-right: 15px;' class='msit-api-lvcol'>" + elemVal + "</li>";
			}
	
			if (typeof(elemVal) != "undefined" && elemVal != "&nbsp;" && elemVal != "" && elemVal != null)
			{
				details += "<div style='float:left; display: none; margin-right: 15px;' class='msit-api-lvdetail'>" + element +": " + elemVal.replace(/_viewcol_/g, "_details_") + "</div>";
			}
		}
        }
        
       if (ctx.CurrentItem["ContentType"] != "Folder")
	{
		ret += "<li style='float: right; width: 20px; cursor: pointer; margin-right: 5px;' onclick='ShowDetails(this)' id='" + ctx.wpq + "_open_" + ctx.CurrentItem["ID"] + "'><img id='" + ctx.wpq + "_toggle_" + ctx.CurrentItem["ID"] + "' src='/teams/itdesign/library/MicrosoftIT/img/expand.png'/></li>";
	}
	else
	{
		ret += "<li style='float: left; width: 20px;height:24px;'>&nbsp;</li>";
	}
	
	details += "<div style='float:left;margin-top: -3px; margin-bottom: 3px;'>QR Code: <a title='Open this link on a phone' style='padding: 2px; right: 0px; display: inline-block;;' onclick='LaunchQrCodePage(\"" + ctx.CurrentItem.FileRef + "?Web=1\")' href='javascript:void(0)'><img style='border: currentColor;' alt='Open this link on a phone' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABwSURBVHjabFBBDsAwCELTD+3/j2OHAqtZTdoYVETqIRwFgPoVS/CGqDxYp7RBJicA9NGLkZfJOYpj+xqThoO1tjHSTuVDGg+mg5y52NRmqM6mytuLpJyXk8zCFtnUXxY6XfsMVsPfNbuPm2ueFMs7ACjGLVZ4Q9Z9AAAAAElFTkSuQmCC'></a></div>";

	ret += "</ul>";
	
	switch (ctx.CurrentItem.File_x0020_Type)
	{
		case "jpg":
		case "png":
		case "gif":
		case "tif":
			details = "<div style='clear:both; margin: 10px 0px;'><a href='" + ctx.CurrentItem.FileRef + "'><div style='height: 160px; width: 240px;'><img src='" + ctx.CurrentItem.FileRef + "' style='max-width: 240px; max-height: 160px;'/></div></a></div>" + details;
			break;
		case "docx":
		case "xlsx":
		case "pptx":
			details = "<div style='clear:both; margin: 10px 0px;'><iframe style='width: 240px; height: 252px;' frameborder='0' src='' appsource='" + ctx.CurrentItem["serverurl.progid"].substr(1).replace("action=default", "action=interactivepreview&wdSmallView=1")  + "'></iframe><div></div>" + details;
			break;
		default:
			break;
	}
	ret += "</li>";
	ret += "<li style='float: left; width:100%; display: none;background-color: #efefef' id='" + ctx.wpq + "_" + ctx.CurrentItem["ID"] + "_Details'><div style='margin: 10px 30px;'>" + details + "</div></li>";
	ret += "<li style='float: left; width:100%; display: none;' id='" + ctx.wpq + "_" + ctx.CurrentItem["ID"] +"_KeywordResults'>"
	ret += "</li>";
	return ret;
}