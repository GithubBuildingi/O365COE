<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content contentplaceholderid="PlaceHolderPageTitle" runat="server">
    <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content contentplaceholderid="PlaceHolderMain" runat="server">
    <WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
    <div class="article article-body">
        <PublishingWebControls:EditModePanel runat="server" cssclass="edit-mode-panel title-edit">
            <fieldset class="ms-subtleEmphasis">
                <legend>Page Properties Edit Panel</legend>
                <SharePointWebControls:TextField runat="server" fieldname="Title" />
                <SharePointWebControls:UserField runat="server" fieldname="ReportOwner" />
                <Taxonomy:TaxonomyFieldControl runat="server" fieldname="Confidentiality" />
                <Taxonomy:TaxonomyFieldControl runat="server" fieldname="TaxKeyword" />
            </fieldset>
        </PublishingWebControls:EditModePanel>

        <!-- First Band (Image) -->
        <div class="row" id="it_rd_row_1">
            <div class="large-12 medium-12 columns">
                <WebPartPages:WebPartZone runat="server" Title="<%$Resources:cms,WebPartZoneTitle_Header%>" ID="Top"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            </div>
        </div>
        <!-- Second Band (Image) -->
        <div class="row" id="it_rd_row_2">
            <div id="main_content" class="large-8 medium-6 large-push-2 medium-push-3 columns">
                <div class="article-content">
                    <WebPartPages:WebPartZone runat="server" Title="<%$Resources:cms,WebPartZoneTitle_Center%>" ID="CenterColumn"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
                </div>
            </div>
            <div id="left_panel" class="large-2 medium-3 large-pull-8 medium-pull-6 columns">
                <WebPartPages:WebPartZone runat="server" Title="<%$Resources:cms,WebPartZoneTitle_CenterLeft%>" ID="CenterLeftColumn"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            </div>
            <div id="right_panel" class="large-2 medium-3 columns">
                <WebPartPages:WebPartZone runat="server" Title="<%$Resources:cms,WebPartZoneTitle_CenterRight%>" ID="CenterRightColumn"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            </div>
        </div>
        <!-- Third Band (Image) -->
        <div class="row" id="it_rd_row_3">
            <div class="large-12 medium-12 columns">
                <WebPartPages:WebPartZone runat="server" Title="<%$Resources:cms,WebPartZoneTitle_Footer%>" ID="Bottom"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            </div>
        </div>
    </div>
</asp:Content>
