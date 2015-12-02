function getQueryStringParameter(paramToRetrieve) {
	try
	{
	    var params =
	        document.URL.split("?")[1].split("&");
	    var strParams = "";
	    for (var i = 0; i < params.length; i = i + 1) {
	        var singleParam = params[i].split("=");
	        if (singleParam[0] == paramToRetrieve)
	            return singleParam[1];
	    }
	}
	catch(err){}    
    return "";
}
function isDefinedAndNotNullOrEmpty(a) {
    return typeof a !== "undefined" && a !== null && a !== "";
}
SP.SOD.executeFunc("SP.js", "SP.ClientContext", function () {
    
    var listName = getQueryStringParameter("listName");
    var listItem = getQueryStringParameter("listItem");
    if(IsStrNullOrEmpty(listName) || IsStrNullOrEmpty(listItem))
    {    	
    	return;
    }
    else
    {
    	var clientContext = new SP.ClientContext.get_current();
    	var oList = clientContext.get_web().get_lists().getById(listName);
    	var oListItem = oList.getItemById(listItem);
    	clientContext.load(oListItem);//, 'Include(Id, Title,_Author,Publish_x0020_Date, HasUniqueRoleAssignments)');	    
	    clientContext.executeQueryAsync(function(sender,args){
	    	var a = [];
	    	var ID = oListItem.get_id();
	    	var title = oListItem.get_item('Title')||"";
	    	a.push('<div class="article-title"> <span class="ms-Wrap">'+title+'</span></div>');
	    	var newsPublisher = oListItem.get_item('_Author');
			if(!IsStrNullOrEmpty(newsPublisher))
			{
			    a.push('<div class="article-info ms-noWrap"><span>By '+newsPublisher+'</span></div>');     	
			}
			var newsPublishDate = oListItem.get_item("Publish_x0020_Date");
			if(!IsStrNullOrEmpty(newsPublishDate))
			{	
				var dates = new Date(newsPublishDate).format("dddd MMMM dd"); 	              	
			    a.push('<div class="article-date"><span>'+dates+'</span></div>');    
			}
			a.push('<div class="article-toolbar">');
			
			var newsSource =oListItem.get_item("NewsSource");
			if(isDefinedAndNotNullOrEmpty(newsSource)&&isDefinedAndNotNullOrEmpty(newsSource.Label))
			{
				a.push('<div class="branding"><span>'+newsSource.Label+'</span></div>');
			}
			a.push('	<div class="divSocialToolbarHost divSocialToolbar ms-textSmall ms-noWrap" id="divSocialToolbarHost_'+ID+'">');
		    a.push('		<ul class="ulSocialToolbarH">');
		    //a.push('			<li class="liLike" id="spLike_'+ID+'"><div class="SocialLike"></div></li>');		
		    a.push('<div class="social_config_custom" unselectable="on" data-object=\'{Email:"True",Facebook:"True",Twitter:"False",LinkedIn:"False",Yammer:"True",ShareTarget:".article-title"}\'></div>');
		    a.push('			<li class="liShare">');
			a.push('				<a title="Share" class="SocialToolbar" href="javascript:" id="share_'+ID+'">');
			a.push('					<span class="sprites Share_ICON"></span>');
			a.push('					<span class="spShareLabel">Share</span > ');
			a.push('				</a>');							
			a.push('			</li>');
			a.push('		</ul>');
			a.push('	</div>');
			a.push('</div>');
			
			var newsBody = oListItem.get_item("NewsArticleContent")||"";
			a.push('<div class="article-body">'+newsBody+'</div>');
			$('#ItNewsDetailContainer').html(a.join(''));
	    },
	    function(sender,args){
	    	var a = [];
	    	a.push(args.get_message());
	    	$('#ItNewsDetailContainer').html(a.join(''));
	    });
    }
    
});
