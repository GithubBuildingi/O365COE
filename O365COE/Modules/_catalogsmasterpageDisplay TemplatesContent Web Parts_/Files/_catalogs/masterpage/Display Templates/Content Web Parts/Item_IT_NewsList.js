/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_ec267ffaf5a14c1894ed6463feae3353(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_ec267ffaf5a14c1894ed6463feae3353.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsList.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'NewsSource':['owstaxIdNewsSource'], 'Source URL':['URLOWSURLH'], 'Picture URL':['PublishingImage', 'PictureURL', 'PictureThumbnailURL'], 'Title':['Title'], 'Publisher':['AuthorOWSTEXT', 'PublisherOWSTEXT'], 'PublishDate':['PublishDateOWSDATE'], 'NewsDescription':['NewsDescriptionOWSMTXT'], 'Link URL':['Path'], 'ListID':null, 'ListItemID':null, 'LikesCount':null, 'SecondaryFileExtension':null, 'ContentTypeId':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
,''
);
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_recentNews");
var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureId = encodedId + "picture";
var pictureContainerId = encodedId + "pictureContainer";
var dataContainerId = encodedId + "dataContainer";
var line1LinkId = encodedId + "titleLink";
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";
var line3Id = encodedId + "line3";
var dataDisplayTemplateTitle = "ItemRecentNews";

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

var newssource = $getItemValue(ctx, "NewsSource");
newssource.overrideValueRenderer($contentLineText);

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
	pictureMarkup = '<img id="' + pictureId  + '" onerror="this.parentNode.innerHTML=window.getRecentNewsNoPictureMarkup();" alt="' + title + '" src="' + imgSrc + '?width=142&#38;height=84"/>';
}

var newsDescription = $getItemValue(ctx, "NewsDescription");
newsDescription.overrideValueRenderer($contentLineText);
var maxLen = 130;
if(pictureURL.isEmpty)
{
	maxLen *=2;
}
if(newsDescription.isEmpty)
{
	newsDescription.value = "The reslult value is empty. This might because the description field is empty or the NewsDescription managed property doesn't work well.";
}
else if(newsDescription.value.length > maxLen)
{
	newsDescription.value = newsDescription.value.substring(0,maxLen)+"...";	
}


var clientid = listid.value + "_" + itemid;
 ms_outHtml.push(''
,'        <div class="recentNews-item-container social_config_scope" id="', containerId ,'">        '
);
var className ="recentNews-item-contentContainer";
if (!pictureURL.isEmpty)
{
ms_outHtml.push(''
,'	        '
,'            <div class="recentNews-item-imageContainer" id="', pictureContainerId ,'">'
,'                <a href="', commentUrl ,'" title="',title,'" id="', pictureLinkId ,'">'
,'                ', pictureMarkup ,''
,'                </a>'
,'            </div>'
);
}
else
{
	className = "recentNews-item-contentContainerNoPicture";
}
ms_outHtml.push(''
,'	            '
,'            <div class="', className ,'">            	'
,'                <div class="rencentNews-title">'
,'	                <a href="', targetUrl ,'" title="', title ,'">'
,'	                    <span class="ms-Wrap">'
,'	                    ', title ,''
,'	                    </span>'
,'	                </a>'
,'                </div>                                '
,'                <div class="rencentNews-info ms-noWrap">'
,'                	<span>'
,'                	', newsPublisher ,''
,'                	</span>                	'
,'                </div>'
,'                <div class="rencentNews-date">                	'
,'            		<span>'
,'                	', newsPublishDate ,''
,'                	</span>'
,'                </div>'
,'                <div class="rencentNews-toolbar">'
,'	                <div class="branding"><span>', newssource ,'</span></div>'
,'					<!-- SocialToolBar begin -->'
,'					<div class="divSocialToolbarHost divSocialToolbar ms-textSmall ms-noWrap" id="divSocialToolbarHost_', clientid ,'">'
,'						<input id="', clientid ,'" listID="', listid ,'" listItemID="', itemid ,'" src="', commentUrl ,'" title="', title ,'" type="hidden" alt="False" value="', listid ,',', itemid ,'" />'
,'						<ul class="ulSocialToolbarH">'
);
	isLocal = true;
	if (isLocal)
	{
	ms_outHtml.push(''
,'							'
,'							<li class="liLike" id="spLike_', clientid ,'">'
,'								<div class="SocialLike">'
,'								<span id="spLikeIcon_', clientid ,'" class="sprites Like_ICON"></span>'
,'								<a class="aLike" href="javascript:">'
,'									<span class="spLikeLabel" id="spLikeLabel_', clientid ,'">Like</span>'
,'								</a>'
,'								<span class="spLikeBraceL" id="spLikeBraceL_', clientid ,'">(</span>'
,'								<span class="spLikeCount" id="spLikeCount_', clientid ,'">', likesCount ,'</span>'
,'								<span class="spLikeBraceR" id="spLikeBraceR_', clientid ,'">)</span>'
,'								</div>'
,'							</li>'
);
	}
	ms_outHtml.push(''
,'							<div class="social_config_custom" unselectable="on" data-object="{Email:&quot;True&quot;,Facebook:&quot;True&quot;,Twitter:&quot;False&quot;,LinkedIn:&quot;False&quot;,Yammer:&quot;True&quot;,ShareTarget:&quot;.rencentNews-title a&quot;}"></div>'
,''
,'							<li class="liShare">'
,'								<a title="Share" class="SocialToolbar" href="javascript:" id="share_', clientid ,'">'
,'									<span class="sprites Share_ICON"></span>'
,'									<span class="spShareLabel">Share</span> '
,'								</a>							'
,'							</li>'
,'							<li class="liComment" style="display:none">'
,'								<a class="aComment" href="', targetUrl ,'#comment" target="_blank" id="comment_', clientid ,'">'
,'									<span class="sprites Comment_ICON"></span>'
,'									<span class="spCommentLabel" id="spCommentLabel_', clientid ,'">Comment</span>'
,'									<span class="spCommentBraceL" id="spCommentBraceL_', clientid ,'" style="display: none;"> (</span>'
,'									<span class="spCommentCount" id="spCommentCount_', clientid ,'" style="display: none;">...</span>'
,'									<span class="spCommentBraceR" id="spCommentBraceR_', clientid ,'" style="display: none;">)</span>'
,'								</a>'
,'							</li>'
,'						</ul>	'
,'						<img src="about:blank" onerror="if(typeof AddSocialToolbar !== \'undefined\') {AddSocialToolbar(\'', clientid ,'\')}" style="display:none" />														'
,'					</div>								'
,'					<!-- SocialToolBar end -->'
,'				</div>'
,'			</div>'
,'			</div>        '
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_ec267ffaf5a14c1894ed6463feae3353() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("RecentNews", DisplayTemplate_ec267ffaf5a14c1894ed6463feae3353);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsList.js", DisplayTemplate_ec267ffaf5a14c1894ed6463feae3353);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsList.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_ec267ffaf5a14c1894ed6463feae3353();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsList.js"), RegisterTemplate_ec267ffaf5a14c1894ed6463feae3353);
}