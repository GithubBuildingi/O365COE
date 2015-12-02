<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server"></SharePointWebControls:FieldValue>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/SiteAssets/foundation/css/foundation.min.css %>" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>	<div class="article article-body zf">
		<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel title-edit">
			<SharePointWebControls:TextField runat="server" FieldName="Title"/>
		</PublishingWebControls:EditModePanel>
		
  <!-- First Band (Image) -->
 
  <div class="row">
    <div class="large-10 columns"> 
      <WebPartPages:WebPartZone id="g_7370D4B190DD43ED931AFEC522713537" runat="server" title="Zone 1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
 
      <hr>
    </div>
  </div>
  <!-- Second Band (Image Left with Text) -->
 
  <div class="row">
    <div class="large-3 columns">
    
<WebPartPages:WebPartZone id="g_F2C72E52FC154A238522BDA3881D86CE" runat="server" title="Zone 2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
      
    </div>
    <div class="large-7 columns">
    
      <WebPartPages:WebPartZone id="g_3BB3A84FAF4444F3A5B3DAE1C8421942" runat="server" title="Zone 3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    
    </div>
  </div>
 
 
  <!-- Third Band (Image Right with Text) -->
 
  <div class="row">
    <div class="large-7 columns">
    
      <WebPartPages:WebPartZone id="g_2F7EC13D463E4612981AE640BE8EF3CE" runat="server" title="Zone 4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
 
    </div>
    <div class="large-3 columns">
      
    	<WebPartPages:WebPartZone id="g_109C0613842842858E289CD7AE450757" runat="server" title="Zone 5"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
      
    </div>
  </div>
 

		<div class="article-content">
			<PublishingWebControls:RichHtmlField FieldName="PublishingPageContent" HasInitialFocus="True" MinimumEditHeight="400px" runat="server"/>
		</div>
		
		<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel roll-up">
			<PublishingWebControls:RichImageField FieldName="PublishingRollupImage" AllowHyperLinks="false" runat="server" />
			<asp:Label text="<%$Resources:cms,Article_rollup_image_text15%>" CssClass="ms-textSmall" runat="server" />
		</PublishingWebControls:EditModePanel>
	</div>
</asp:Content>
