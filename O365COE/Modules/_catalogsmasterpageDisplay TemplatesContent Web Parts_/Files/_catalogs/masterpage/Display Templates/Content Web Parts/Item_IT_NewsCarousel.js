/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_ceb20d02eea1451d9e2054e80c5967f5(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_ceb20d02eea1451d9e2054e80c5967f5.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsCarousel.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Source URL':['URLOWSURLH'], 'Picture URL':['PublishingImage', 'PictureURL', 'PictureThumbnailURL'], 'Title':['Title'], 'Publisher':['AuthorOWSTEXT', 'PublisherOWSTEXT'], 'PublishDate':['PublishDateOWSDATE'], 'NewsDescription':['NewsDescriptionOWSMTXT'], 'Link URL':['Path'], 'ListID':null, 'ListItemID':null, 'LikesCount':null, 'SecondaryFileExtension':null, 'ContentTypeId':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
,''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_hotNews_");
var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureId = encodedId + "picture";
var pictureContainerId = encodedId + "pictureContainer";
var dataContainerId = encodedId + "dataContainer";
var line1LinkId = encodedId + "titleLink";
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";
var line3Id = encodedId + "line3";
var dataDisplayTemplateTitle = "ItemHotNews";



var itemid =  $getItemValue(ctx, "ListItemID");
var listid = $getItemValue(ctx, "ListID");

var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncode);
var remoteHostUrl = linkURL.value.match(/^https?:\/\/[^\/]+/gi);
var isLocal = RegExp("^"+_spPageContextInfo.siteAbsoluteUrl,"gi").test(linkURL.value);	

var targetUrl = _spPageContextInfo.webAbsoluteUrl+"/Pages/News-Detail-Page.aspx?source=" + escape(linkURL);
var commentUrl = targetUrl;
var sourceUrl = $getItemValue(ctx, "Source URL");
if(!sourceUrl.isEmpty)
{
	//targetUrl = sourceUrl;
}

var title = $getItemValue(ctx, "Title");
title.overrideValueRenderer($contentLineText);

var publisher = $getItemValue(ctx, "Publisher");
var newsPublisher = publisher.value;
if(!publisher.isEmpty)
{
	newsPublisher = "By " + publisher.value;
}

var publishDate = $getItemValue(ctx, "PublishDate");
var newsPublishDate = publishDate.value;
if(!publishDate.isEmpty)
{	
	var dates = new Date(publishDate).format("dddd MMMM dd"); 	
	newsPublishDate = dates;
}

var likesCount = $getItemValue(ctx, "LikesCount");
if(likesCount.isEmpty)
{
	likesCount = 0;
}

var pictureURL = $getItemValue(ctx, "Picture URL");
var pictureMarkup = "";
if(!pictureURL.isEmpty)
{
	var v = pictureURL.value;
	var regx = /(?:src=)["|']([^?"']*)/gi;
	regx.test(v);	
	var imgSrc = isLocal ? RegExp.$1 : remoteHostUrl + RegExp.$1;
	if(typeof window.nc_hotNews_resizeImage == "undefined")
	{
		window.nc_hotNews_resizeImage = function(elm)
		{
			var x= elm.parentNode.parentNode.clientWidth-elm.width;
			var y= elm.parentNode.parentNode.clientHeight-elm.height;			
			if(x>0&&y>0)
			{
				if(x>y)
				{
					elm.className +=" slide_imageAutoHeight";
				}
				else
				{
					elm.className +=" slide_imageAutoWidth";
				}
			}else if( x<0 && y<0){
				if(x>y)
				{
					elm.className +=" slide_imageAutoHeight";
				}
				else
				{
					elm.className +=" slide_imageAutoWidth";
				}
			}else if(x>0)
			{
				elm.className +=" slide_imageAutoHeight";
			}
			else if(y>0)
			{
				elm.className +=" slide_imageAutoWidth";
			}			
		}
	}	
	pictureMarkup = '<img id="' + pictureId  + '" onLoad="nc_hotNews_resizeImage(this);" onerror="this.parentNode.innerHTML=window.getHotNewsNoPictureMarkup();" alt="' + title + '" src="' + imgSrc + '?width=512&#38;height=318"/>';
}
else
{
	pictureMarkup = '<img src="'+_spPageContextInfo.webServerRelativeUrl+'/SiteAssets/Default_318.png"/>';
}

var newsDescription = $getItemValue(ctx, "NewsDescription");
newsDescription.overrideValueRenderer($contentLineText);
var maxLen = 130;
var showMore=false;
if(newsDescription.isEmpty)
{
	newsDescription.value = "The result value is empty. This might because the description field is empty or the NewsDescription managed property doesn't work well.";
}
else if(newsDescription.value.length > maxLen)
{
	newsDescription.value = newsDescription.value.substring(0,maxLen)+"...";
	showMore = true;	
}

var clientid = listid.value + "_" + itemid;
 ms_outHtml.push(''
,'        <div class="slide_container social_config_scope">'
,'        	<div class="ms-table">'
,'        		<div class="ms-tableRow">'
,'        			<div class="ms-tableCell">'
,'        				<div class="slide_imageContainer">'
,'			                <a href="', targetUrl ,'" title="', title ,'">'
,'			                ', pictureMarkup ,''
,'			                </a>'
,'		            	</div>'
,'        			</div>'
,'        			<div class="ms-tableCell ms-EmphasisBackground-bgColor">'
,'        				<div class="slide_contentContainer slide_inheritBackground">	            '
,'			            	<div class="slide_contentInfo">'
,'				            	<div class="nc_hotNewsTitle">'
,'					                <a href="', targetUrl ,'" title="',title,'">'
,'					                    <span class="ms-Wrap">'
,'					                    ', title ,''
,'					                    </span>'
,'					                </a>'
,'				                </div>'
,'				                <div class="nc-hotNewsDescription ms-Wrap nc-hide">'
,'				                ', newsDescription.value ,'				                				                '
,'				                </div>'
,'				                <div class="nc-hotNewsInfo ms-noWrap">'
);
if(!publisher.isEmpty)
{
ms_outHtml.push('				                '
,'				                	<span>'
,'				                	', newsPublisher ,''
,'				                	</span>'
);
}
ms_outHtml.push('					                	'
,'				                	<span>'
,'				                	', newsPublishDate ,''
,'				                	</span>'
,'				                </div>'
,'			                </div>	                '
,'							<!-- SocialToolBar begin -->'
,'							<div class="divSocialToolbarHost divSocialToolbar ms-textSmall ms-noWrap" id="divSocialToolbarHost_', clientid ,'">'
,'								<input id="', clientid ,'" listID="', listid ,'" listItemID="', itemid ,'" src="', commentUrl ,'" title="', title ,'" type="hidden" alt="False" value="', listid ,',', itemid ,'" />'
,'								<ul class="ulSocialToolbarH">'
);
		isLocal = true;
		if (isLocal)
		{
		ms_outHtml.push(''
,'								'
,'									<li class="liLike" id="spLike_', clientid ,'">'
,'										<div class="SocialLike">'
,'										<span id="spLikeIcon_', clientid ,'" class="sprites Like_ICON2"></span>'
,'										<a class="aLike" href="javascript:">'
,'											<span class="spLikeLabel" id="spLikeLabel_', clientid ,'">Like</span>'
,'										</a>'
,'										<span class="spLikeBraceL" id="spLikeBraceL_', clientid ,'">(</span>'
,'										<span class="spLikeCount" id="spLikeCount_', clientid ,'">', likesCount ,'</span>'
,'										<span class="spLikeBraceR" id="spLikeBraceR_', clientid ,'">)</span>'
,'										</div>'
,'									</li>'
);
		}
		ms_outHtml.push(''
,'									'
,'									<li class="liShare">'
,'										<div class="social_config_custom" unselectable="on" data-object="{Email:\'True\',Facebook:\'True\',Twitter:\'False\',LinkedIn:\'False\',Yammer:\'True\',ShareTarget:\'.nc_hotNewsTitle a\'}"></div>										'
,'										<a class="SocialToolbar" href="javascript:" id="share_', clientid ,'">'
,'											<span class="sprites Share_ICON2"></span>'
,'											<span class="spShareLabel">Share</span> '
,'										</a>							'
,'									</li>'
,'									<li class="liComment" style="display:none">'
,'										<a class="aComment" href="', targetUrl ,'#comment" target="_blank" id="comment_', clientid ,'">'
,'											<span class="sprites Comment_ICON2"></span>'
,'											<span class="spCommentLabel" id="spCommentLabel_', clientid ,'">Comment</span>'
,'											<span class="spCommentBraceL" id="spCommentBraceL_', clientid ,'" style="display: none;"> (</span>'
,'											<span class="spCommentCount" id="spCommentCount_', clientid ,'" style="display: none;">...</span>'
,'											<span class="spCommentBraceR" id="spCommentBraceR_', clientid ,'" style="display: none;">)</span>'
,'										</a>'
,'									</li>'
,'								</ul>	'
,'								<img src="about:blank" onerror="if(typeof AddSocialToolbar !== \'undefined\') {AddSocialToolbar(\'', clientid ,'\')}" style="display:none" />														'
,'							</div>								'
,'							<!-- SocialToolBar end -->'
,'						</div>'
,'        			</div>'
,'        			<div class="ms-tableCell">'
,'        				<div class="slide_separator ms-tableCell"></div>'
,'        			</div>        			        			'
,'        		</div>'
,'        	</div>        	      '
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_ceb20d02eea1451d9e2054e80c5967f5() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("ENTNews", DisplayTemplate_ceb20d02eea1451d9e2054e80c5967f5);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsCarousel.js", DisplayTemplate_ceb20d02eea1451d9e2054e80c5967f5);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsCarousel.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_ceb20d02eea1451d9e2054e80c5967f5();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsCarousel.js"), RegisterTemplate_ceb20d02eea1451d9e2054e80c5967f5);
}