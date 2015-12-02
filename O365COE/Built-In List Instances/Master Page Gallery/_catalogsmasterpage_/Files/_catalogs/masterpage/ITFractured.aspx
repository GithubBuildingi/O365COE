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
				<legend>Page Properties Edit Panel</legend>
				<SharePointWebControls:TextField runat="server" FieldName="Title"/>
				<SharePointWebControls:UserField runat="server" FieldName="ReportOwner"/>
				<Taxonomy:TaxonomyFieldControl runat="server" FieldName="Confidentiality"/>
				<Taxonomy:TaxonomyFieldControl runat="server" FieldName="TaxKeyword"/>
			</fieldset>
		</PublishingWebControls:EditModePanel>
		
		<div class="row" id="it_rd_row_1">
			<div class="large-12 columns"> 
				<WebPartPages:WebPartZone id="Top" runat="server" title="Zone 1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>

 		<div class="row" id="it_rd_row_2">
			<div class="large-6 columns">
    				<WebPartPages:WebPartZone id="CenterLeftColumn" runat="server" title="Zone 2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    			</div>
			<div class="large-6 columns">
				<WebPartPages:WebPartZone id="CenterRightColumn" runat="server" title="Zone 3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
 
		<div class="row" id="it_rd_row_3">
			<div class="medium-12 large-6 columns">
				<div class="row">
					<div class="medium-6 large-6 columns">
						<WebPartPages:WebPartZone id="CenterZone1" runat="server" title="Zone 4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					</div>
					<div class="medium-6 large-6 columns">
						<WebPartPages:WebPartZone id="CenterZone2" runat="server" title="Zone 5"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					</div>
				</div>
			</div>
			<div class="medium-12 large-6 columns">
				<div class="row">
					<div class="medium-6 large-6 columns">
						<WebPartPages:WebPartZone id="CenterZone3" runat="server" title="Zone 6"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					</div>
					<div class="medium-6 large-6 columns">
						<WebPartPages:WebPartZone id="CenterZone4" runat="server" title="Zone 7"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Fourth Band (Image) -->
		<div class="row" id="it_rd_row_4">
			<div class="large-12 columns"> 
				<WebPartPages:WebPartZone id="Bottom" runat="server" title="Zone 8"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
	</div>
</asp:Content>