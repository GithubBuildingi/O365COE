<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="CustomTag_1" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register Tagprefix="PageFieldUserField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register Tagprefix="PageFieldRichHtmlField" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register Tagprefix="PageFieldTextField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register Tagprefix="PageFieldRichImageField" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register Tagprefix="PageFieldTaxonomyFieldControl" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register Tagprefix="PageFieldNoteField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<script type="text/javascript" src="/sites/O365COE/_catalogs/masterpage/O365/js/O365COE.js">//<![CDATA[//]]></script> 
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content contentplaceholderid="PlaceHolderMain" runat="server">
    <WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
	<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel title-edit">
	
			<fieldset class="ms-subtleEmphasis">
				<legend><span style="color:red; font-weight:bold">Required</span> Page Properties</legend>
				<SharePointWebControls:FileField FieldName="Name" runat="server"></SharePointWebControls:FileField><br />
				<Taxonomy:TaxonomyFieldControl FieldName="Confidentiality" runat="server"></Taxonomy:TaxonomyFieldControl><br />
				<Taxonomy:TaxonomyFieldControl FieldName="COEParentTopic" runat="server"></Taxonomy:TaxonomyFieldControl>
			</fieldset>
		</PublishingWebControls:EditModePanel>
        <div class="row">
        	<div class="small-12 medium-9 columns">
	        	<div class="row">
		        	<div data-name="Page Field: Rollup Image" class="small-12 columns">
						<PageFieldRichImageField:RichImageField runat="server" FieldName="543bc2cf-1f30-488e-8f25-6fe3b689d9ac" RenditionId="7"></PageFieldRichImageField:RichImageField>
					</div>
				</div>
				<div class="row">
					<div data-name="Page Field: Title" class="small-12 columns">
						<h1 id="bi-pageTitle">
							<PageFieldTextField:TextField FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server"></PageFieldTextField:TextField>
						</h1>
					</div>
					<div data-name="Page Field: Owner (People and Groups)" class="small-12 columns">
		        	By: 
					<PageFieldUserField:UserField runat="server" FieldName="2e8881da-0332-4ad9-a565-45b5b8b2702f"></PageFieldUserField:UserField>
		        	</div>
		        </div>
		        <div class="row">
		        	<div data-name="Page Field: Page Content" class="small-12 columns">
						<PageFieldRichHtmlField:RichHtmlField FieldName="f55c4d88-1f2e-4ad9-aaa8-819af4ee7ee8" runat="server"></PageFieldRichHtmlField:RichHtmlField>
					</div>
				</div>
				<div class="row">
					<div class="columns small-12">
						<WebPartPages:WebPartZone id="Bottom" runat="server" title="Bottom Zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					</div>
				</div>
				<div class="row">
					<div class="large-12 medium-12 columns">
						<div id="embedded-feed" style="height:500px;"></div>
					</div>
				</div>
        	</div>
        	<div class="small-12 medium-3 columns">
        		<div class="row">
        			<div class="small-12 columns">
	        			<div id="embedded-like"></div>
	           		</div>
	           	</div>
	           	<div class="row">
        			<div class="small-12 columns">
	        			<h3>Rate this Page</h3>
	           			<CustomTag_1:AverageRatingFieldControl FieldName="5a14d1ab-1513-48c7-97b3-657a5ba6c742" runat="server"></CustomTag_1:AverageRatingFieldControl>
	           		</div>
	           	</div>
	           	<div class="row">
   					<div class="small-12 columns">
   						<h3>Related Content</h3>
   						<ul id="RelatedContent"></ul>
   					</div>
   				</div>
           	</div>
        </div>        

		<script type="text/javascript">
           	GetRelatedTopicItems();
           	initialzeYammerFeed("embedded-feed");
        </script>
		
</asp:Content>
