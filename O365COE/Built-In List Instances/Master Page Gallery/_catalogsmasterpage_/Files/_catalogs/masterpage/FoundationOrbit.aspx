<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/SiteAssets/foundation/css/foundation.min.css %>" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>	<div class="article article-body zf">
		<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel title-edit">
			<SharePointWebControls:TextField runat="server" FieldName="Title"/>
		</PublishingWebControls:EditModePanel>
		<!-- First Band (Slider) -->
 
  <div class="row">
    <div class="large-10 columns">
    
    <WebPartPages:WebPartZone id="g_CF6EA3849188413185C1890C32F2E6EC" runat="server" title="Zone 1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
         </div>
  </div>
 
<!-- Three-up Content Blocks -->
 
	<div class="row">
		<div class="large-3 columns">
		
      <WebPartPages:WebPartZone id="g_AB4876CD5DB74D14A6BF422FD7E68DE9" runat="server" title="Zone 2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		
    </div>
    
    <div class="large-4 columns">
    
      <WebPartPages:WebPartZone id="g_A851314ACA4C47C29091B23D7A3C3AEB" runat="server" title="Zone 3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    
    </div>
    
    <div class="large-3 columns">
    
      <WebPartPages:WebPartZone id="g_950811B455804EF9AED01D2742E908E7" runat="server" title="Zone 4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    
    </div>
	
    </div>
    
<!-- Call to Action Panel -->
<div class="row">
    <div class="large-10 columns">
    
      <WebPartPages:WebPartZone id="g_614DA21CECB04ABDB632B732DC3270A8" runat="server" title="Zone 5"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    
      
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
