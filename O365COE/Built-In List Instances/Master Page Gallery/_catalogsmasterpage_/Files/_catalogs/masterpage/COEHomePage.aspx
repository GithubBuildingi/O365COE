<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
    
    <div class="row">
      <div class="columns small-12">
        <div class="row">
          <div class="columns small-12 medium-8">
            <WebPartPages:WebPartZone runat="server" Title="Zone1" ID="Zone1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
          </div>
          <div class="columns small-12 medium-4">
            <WebPartPages:WebPartZone runat="server" Title="Zone2" ID="Zone2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
          </div>
        </div>
      </div>
    </div>

	<div class="fullWidth gray">
		<div class="row">
			<div class="columns small-12">
				<WebPartPages:WebPartZone runat="server" Title="Zone3" ID="Zone3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
		<div class="row">
			<div class="columns small-12 medium-4">
				<WebPartPages:WebPartZone runat="server" Title="Zone4" ID="Zone4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="columns small-12 medium-4">
				<WebPartPages:WebPartZone runat="server" Title="Zone5" ID="Zone5"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="columns small-12 medium-4">
				<WebPartPages:WebPartZone runat="server" Title="Zone6" ID="Zone6"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
	</div>

    <div class="fullWidth darkGray">
      <div class="row">
      	<div class="columns small-12"> 
        	<WebPartPages:WebPartZone runat="server" Title="Zone10" ID="Zone10"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
        </div>
      </div>
      <div class="row">
		<div class="columns small-12 medium-4">
			<WebPartPages:WebPartZone runat="server" Title="Zone11" ID="Zone11"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		</div>
		<div class="columns small-12 medium-4">
			<WebPartPages:WebPartZone runat="server" Title="Zone12" ID="Zone12"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		</div>
		<div class="columns small-12 medium-4">
			<WebPartPages:WebPartZone runat="server" Title="Zone13" ID="Zone13"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		</div>
        </div>
      </div>
    </div>   
              
</asp:Content>
