/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_3edfac5831524482a76ec0d10070006b(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_3edfac5831524482a76ec0d10070006b.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsDetail.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'NewsSource':['owstaxIdNewsSource'], 'ListID':['ListID'], 'ListItemID':['ListItemID'], 'Topics':['TopicsOWSTEXT'], 'Picture URL':['PublishingImage', 'PictureURL', 'PictureThumbnailURL', 'PageImage'], 'Title':['Title'], 'Publisher':['PublisherOWSTEXT'], 'PublishDate':['PublishDateOWSDATE'], 'NewsDescription':['NewsArticleContentOWSHTML'], 'Link URL':['Path'], 'LikesCount':['LikesCount'], 'SecondaryFileExtension':null, 'ContentTypeId':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
,''
);

var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_picture3Lines_");

var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncode);

var isLocal = RegExp("^"+_spPageContextInfo.siteAbsoluteUrl,"gi").test(linkURL.value);

var listItemId =  $getItemValue(ctx, "ListItemID");
var listid = $getItemValue(ctx, "ListID");

linkURL = window.location.href;
var commentUrl = window.location.href;
var targetUrl = commentUrl;

var title = $getItemValue(ctx, "Title");

var newssource = $getItemValue(ctx, "NewsSource");
newssource.overrideValueRenderer($contentLineText);

var publisher = $getItemValue(ctx, "Publisher");
var newsPublisher = publisher.value;
if(!publisher.isEmpty)
{
	newsPublisher = "By " + publisher.value;
}

var publishDate = $getItemValue(ctx, "PublishDate");
var articlePublishDate = "";
if(!publishDate.isEmpty)
{
	var convertedMonths = ["Null", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var dates = new Date(publishDate).format("yyyy-MM-dd").split('-'); 	
	articlePublishDate = convertedMonths[+dates[1]] + " " + dates[2] + ", " + dates[0];
}

var likesCount = $getItemValue(ctx, "LikesCount");
if(likesCount.isEmpty)
{
	likesCount = 0;
}

var newsDescription = $getItemValue(ctx, "NewsDescription");
if(newsDescription.isEmpty)
{
	newsDescription.value = "The description field is empty or cannot get the value from search result.";
}


var topics = $getItemValue(ctx, "Topics").value;
var pictureURL = $getItemValue(ctx, "Picture URL");
var pictureId = encodedId + "picture";
var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 100, 100, ctx.CurrentItem, "cbs-picture3LinesImg", title, pictureId);

title.overrideValueRenderer($contentLineText);

var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureContainerId = encodedId + "pictureContainer";
var dataContainerId = encodedId + "dataContainer";

var line1LinkId = encodedId + "titleLink";
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";
var line3Id = encodedId + "line3";

var dataDisplayTemplateTitle = "ItemPicture3Lines";
itemid = listItemId.value;
var clientid = listid.value + "_" + itemid;

 ms_outHtml.push(''
,'		<div class="article-title">'
,'            <span class="ms-Wrap">'
,'            ', title ,''
,'            </span>'
,'		</div>'
);
if(!publisher.isEmpty)
{
ms_outHtml.push('				                '
,'		<div class="article-info ms-noWrap">'
,'	    	<span>'
,'	    	', newsPublisher ,''
,'	    	</span>                	'
,'	    </div>');
}
ms_outHtml.push('	'
,'	    <div class="article-date">                	'
,'			<span>'
,'	    	', articlePublishDate ,''
,'	    	</span>'
,'	    </div>'
,'	    <div class="article-toolbar">'
,'	        <div class="branding"><span>', newssource ,'</span></div>'
,'			<!-- SocialToolBar begin -->'
,'			<div class="divSocialToolbarHost divSocialToolbar ms-textSmall ms-noWrap" id="divSocialToolbarHost_', clientid ,'">'
,'				<input id="', clientid ,'" listID="', listid ,'" listItemID="', itemid ,'" src="', commentUrl ,'" title="', title ,'" type="hidden" alt="False" value="', listid ,',', itemid ,'" />'
,'				<ul class="ulSocialToolbarH">'
);
isLocal = true;
if (isLocal)
{
ms_outHtml.push(''
,'					'
,'				<li class="liLike" id="spLike_', clientid ,'">'
,'					<div class="SocialLike">'
,'					<span id="spLikeIcon_', clientid ,'" class="sprites Like_ICON"></span>'
,'					<a class="aLike" href="javascript:">'
,'						<span class="spLikeLabel" id="spLikeLabel_', clientid ,'">Like</span>'
,'					</a>'
,'					<span class="spLikeBraceL" id="spLikeBraceL_', clientid ,'">(</span>'
,'					<span class="spLikeCount" id="spLikeCount_', clientid ,'">', likesCount ,'</span>'
,'					<span class="spLikeBraceR" id="spLikeBraceR_', clientid ,'">)</span>'
,'					</div>				'
,'				</li>'
);
}
ms_outHtml.push(''
,'					<div class="social_config_custom" unselectable="on" data-object="{Email:&quot;True&quot;,Facebook:&quot;True&quot;,Twitter:&quot;False&quot;,LinkedIn:&quot;False&quot;,Yammer:&quot;True&quot;,ShareTarget:&quot;.article-title&quot;}"></div>					'
,'					<li class="liShare">'
,'						<a class="SocialToolbar" href="javascript:" id="share_', clientid ,'">'
,'							<span class="sprites Share_ICON"></span>'
,'							<span class="spShareLabel">Share</span> '
,'						</a>							'
,'					</li>'
,'					<li class="liComment" style="display:none">'
,'						<a class="aComment" href="', targetUrl ,'#comment" target="_blank" id="comment_', clientid ,'">'
,'							<span class="sprites Comment_ICON"></span>'
,'							<span class="spCommentLabel" id="spCommentLabel_', clientid ,'">Comment</span>'
,'							<span class="spCommentBraceL" id="spCommentBraceL_', clientid ,'" style="display: none;"> (</span>'
,'							<span class="spCommentCount" id="spCommentCount_', clientid ,'" style="display: none;">...</span>'
,'							<span class="spCommentBraceR" id="spCommentBraceR_', clientid ,'" style="display: none;">)</span>'
,'						</a>'
,'					</li>'
,'				</ul>	'
,'				<img src="about:blank" onerror="if(typeof AddSocialToolbar !== \'undefined\') {AddSocialToolbar(\'', clientid ,'\')}" style="display:none" />														'
,'			</div>								'
,'			<!-- SocialToolBar end -->'
,'		</div>'
,'		<div class="article-body">'
,'			', newsDescription.value ,''
,'		</div>'
,'	'
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_3edfac5831524482a76ec0d10070006b() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("MSNewsDetail", DisplayTemplate_3edfac5831524482a76ec0d10070006b);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsDetail.js", DisplayTemplate_3edfac5831524482a76ec0d10070006b);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsDetail.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_3edfac5831524482a76ec0d10070006b();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_IT_NewsDetail.js"), RegisterTemplate_3edfac5831524482a76ec0d10070006b);
}