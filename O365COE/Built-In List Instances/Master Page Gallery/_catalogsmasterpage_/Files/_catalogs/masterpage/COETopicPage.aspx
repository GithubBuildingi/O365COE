<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server"></SharePointWebControls:FieldValue>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/SiteAssets/foundation/css/foundation.min.css %>" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
	<div class="article article-body">
		<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel title-edit">
			<fieldset class="ms-subtleEmphasis">
				<legend><span style="color:red; font-weight:bold">Required</span> Page Properties</legend>
				<SharePointWebControls:FileField FieldName="Name" runat="server"></SharePointWebControls:FileField><br />
				<SharePointWebControls:UserField FieldName="ReportOwner" runat="server"></SharePointWebControls:UserField><br />
				<Taxonomy:TaxonomyFieldControl FieldName="Confidentiality" runat="server"></Taxonomy:TaxonomyFieldControl><br />
				<PublishingWebControls:RichHtmlField FieldName="PublishingPageContent" runat="server"></PublishingWebControls:RichHtmlField><br />
				<Taxonomy:TaxonomyFieldControl FieldName="COEParentTopic" runat="server"></Taxonomy:TaxonomyFieldControl>
			</fieldset>
		</PublishingWebControls:EditModePanel>
		<div class="row">
			<div class="small-12 columns">
		 		<h1 id="bi-pageTitle">
				<SharePointWebControls:TextField runat="server" FieldName="Title"/></h1>
		 	</div>
		 </div>
		 <div class="row">
		 	<div class="small-12 columns">
		 		<WebPartPages:WebPartZone runat="server" Title="Zone 1" ID="Zone1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>	        </div>
	    </div>
	</div>
</asp:Content>
