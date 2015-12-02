function GetRelatedTopicItems(){
	
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext',function(){
		SP.SOD.registerSod('sp.taxonomy.js', SP.Utilities.Utility.getLayoutsPageUrl('sp.taxonomy.js'));
		SP.SOD.executeFunc('sp.taxonomy.js', 'SP.Taxonomy.TaxonomySession', function () {
			getRelatedItems();
		});
	});
}

function buildTermArray(tags) {
    var termsLabels = new Array();
    for (var i = 0; i < tags.get_count() ; i++) {
        var termsLabel = tags.getItemAtIndex(i).get_label();
        termsLabels.push(termsLabel);
    }

    var uniqueTerms = new Array();
    for (var i = 0; i < termsLabels.length; i++) {
        var parts = termsLabels[i].split(":");
        for (var j = 0; j < parts.length; j++) {
            // Adding position to indicate what is parent and children.
            // Will use position later to boost childterm/most specific term more
            var posLabel = (j + 1) + ":" + parts[j];
            if (jQuery.inArray(posLabel, uniqueTerms) == -1) {
                uniqueTerms.push(posLabel);
            }
        }
    }
    uniqueTerms.sort().reverse();
    return uniqueTerms;
}

function createQuery(queryTerms, mpPrefix) {
    //queryTerms -> ["2:Web Based Solutions", "1:Plan"]
    var orTerms = new Array();
    for (var i = 0; i < queryTerms.length; i++) {
        var parts = queryTerms[i].split(":");
        var labelQuery = mpPrefix + ':"' + parts[1] + '"';
        orTerms.push(labelQuery);
    }
    var kqlQuery = orTerms.join(" ");
    //kqlQuery -> owstaxIdCOEParentTopic:"Web Based Solutions" owstaxIdCOEParentTopic:"Plan"
    return kqlQuery;
}

function createXrankQuery(kqlQuery, queryTerms, mpPrefix, boostMultiplier) {
    if (queryTerms.length == 0) return kqlQuery;
    var xRankTerms = new Array();
    for (var i = 0; i < queryTerms.length; i++) {
        var parts = queryTerms[i].split(":");
        var labelQuery = mpPrefix + ':"' + parts[1] + '"';
        var cbRank = parts[0] * boostMultiplier;
        xRankTerms.push("XRANK(cb=" + cbRank + ") " + labelQuery)
    }
    for (var i = 0; i < xRankTerms.length; i++) {
        kqlQuery = "(" + kqlQuery + ") " + xRankTerms[i];
    }
    // submit an app is the more specific term and is boosted more than the parent term
    //((owstaxIdCOEParentTopic:"Submit an App" owstaxIdCOEParentTopic:"Deploy") XRANK(cb=2000) owstaxIdCOEParentTopic:"Submit an App") XRANK(cb=1000) owstaxIdCOEParentTopic:"Deploy"    
    return kqlQuery;
}

function getRelatedItems(){
	var context = SP.ClientContext.get_current();
			
	var web = context.get_web(); 
	var currentList = web.get_lists().getById(_spPageContextInfo.pageListId); 
	var currentListItem = currentList.getItemById(_spPageContextInfo.pageItemId);
	context.load(currentListItem);
	context.executeQueryAsync(
	 	function(){
	 		var parentTopicTags = currentListItem.get_item("COEParentTopic");
	 		var audienceRoleTags = currentListItem.get_item("COEAudienceRole");
	 		var productsTags = currentListItem.get_item("COEProducts");
	 		
	 		var queryTerms = buildTermArray(parentTopicTags);
	 		
	 		
	 		var kql = "path:\"" + _spPageContextInfo.siteAbsoluteUrl + "\" IsDocument:\"True\" (-ListItemId=" + _spPageContextInfo.pageItemId + " ListId:\"" + _spPageContextInfo.pageListId + "\")";
	 		kql = kql + " " + createQuery(queryTerms, "owstaxIdCOEParentTopic");
	 		kql = createXrankQuery(kql, queryTerms, "owstaxIdCOEParentTopic", 1000);
	 		queryTerms = buildTermArray(audienceRoleTags);
	 	    kql = createXrankQuery(kql, queryTerms, "owstaxIdCOEAudienceRole", 100); // add boost to items with the same role(s)
	 	    queryTerms = buildTermArray(productsTags);
	 	    kql = createXrankQuery(kql, queryTerms, "owstaxIdCOEProducts", 10); // add boost to items with the same products(s)
	 		
	 		console.log("Query for Related Topic Items: " + kql);
			executeQuery(kql, 'Title;Url;FileExtension'); 
	 	},
	 	function(){
	 		alert('An error occured.');
	 	}
	);//end context.executeQueryAsync
}

function executeQuery(queryText, queryProperties){
	SP.SOD.executeFunc('SP.Search.js', 'Microsoft.SharePoint.Client.Search.Query', function(){
		var propertiesToAdd = queryProperties.split(";");
	        
	    var context = SP.ClientContext.get_current();
	    
	    var keywordQuery = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context);
	    keywordQuery.set_queryText(queryText);
	    
	    var properties = keywordQuery.get_selectProperties();
	    for(i=0; i<propertiesToAdd.length; i++){
	    	properties.add(propertiesToAdd[i]);
	    }
	    
		keywordQuery.set_rowLimit(10);
			
	    var searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context);
	
		results = searchExecutor.executeQuery(keywordQuery);
		
		context.executeQueryAsync(onQuerySuccess, onQueryError);
	});
}

function onQuerySuccess(){
	
	var relatedContentElement = jQuery('#RelatedContent');
	
	if (results.m_value.ResultTables) {
		jQuery.each(results.m_value.ResultTables, function(index, table) {  
			if(table.TableType == "RelevantResults") {
				if(results.m_value.ResultTables[index].ResultRows.length > 0){
					jQuery.each(results.m_value.ResultTables[index].ResultRows, function () { 
						var extention = this.FileExtension;
						var className = "";
						switch(extention){
							case "aspx":
								className = "PageDocType";
								break;
							case "doc":
							case "docx":
								className = "wordDocType";
								break;
							case "xls":
							case "xlsx":
								className = "excelDocType";
								break;
							case "ppt":
							case "pptx":
								className = "powerpointDocType";
								break;
							case "pdf":
								className = "pdfDocType";
								break;
							default:
								className = "UnknownDocType";
								break;
						}
						
						jQuery("<li class='RelatedItem'><span class='"+className+"'><a href='" + this.Url + "' Title='" + this.Title + "'>" + this.Title + "</a></span></li>").appendTo(relatedContentElement);						
					});
				}
			}  
		});
		
	}
}

function onQueryError(){
	alert('onQueryError');
}

function initialzeYammerFeed(containerId){
	var currentUrl = window.location.href;
				
	yam.connect.embedFeed({
		container: ('#'+containerId)
		, network: 'microsoft.com'
		, feedType: 'open-graph'
		, feedId: ''
		, config: {
			defaultGroupId: '5850179'
		}
		, objectProperties: { 
	      	url: currentUrl
	      	, type: 'page'
	    }
	});
	
	yam.connect.actionButton({
		container: '#embedded-like'
		, network: 'microsoft.com'
		, action: 'like'
	});
}

/*************************
 * HTML SNIPPET JavaScript
 *************************
 */
$(document).ready(function () {
    $(".htmlSnippetAccordion .section .title").click(function () {
	    $(this).closest('.section').toggleClass('open');
	});
});