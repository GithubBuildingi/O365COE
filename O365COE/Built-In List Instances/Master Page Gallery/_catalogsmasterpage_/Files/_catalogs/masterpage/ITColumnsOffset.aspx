<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server"></SharePointWebControls:FieldValue>
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
				<WebPartPages:WebPartZone id="g_7370D4B190DD43ED931AFEC522713537" runat="server" title="Zone 1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>

 		<div class="row" id="it_rd_row_2">
			<div class="large-5 columns">
    				<WebPartPages:WebPartZone id="g_F2C72E52FC154A238522BDA3881D86CE" runat="server" title="Zone 2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    			</div>
			<div class="large-5 columns">
				<WebPartPages:WebPartZone id="g_3BB3A84FAF4444F3A5B3DAE1C8421942" runat="server" title="Zone 3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="large-2 columns">
				<WebPartPages:WebPartZone id="g_109C0613842842858E289CD7AE450757" runat="server" title="Zone 4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
 
		<div class="row" id="it_rd_row_3">
			<div class="large-12 columns"> 
				<WebPartPages:WebPartZone id="g_5716A3E43F2F4BCE8E1BB8208FE9DE6B" runat="server" title="Zone 5"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
	</div>
</asp:Content>
