<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content contentplaceholderid="PlaceHolderPageTitle" runat="server">
    <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content contentplaceholderid="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/SiteAssets/foundation/css/foundation.min.css %>" runat="server"/>
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
            </fieldset></PublishingWebControls:EditModePanel><!-- First Band (Slider) --><div class="row" id="it_rd_row_1">
            <div class="large-12 columns">

                <WebPartPages:WebPartZone id="Top" runat="server" title="Zone 1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            </div>
        </div>

        <!-- Three-up Content Blocks -->

        <div class="row" id="it_rd_row_2">
            <div class="large-4 columns">

                <WebPartPages:WebPartZone id="CenterLeftColumn" runat="server" title="Zone 2"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>

            </div>

            <div class="large-4 columns">

                <WebPartPages:WebPartZone id="CenterColumn" runat="server" title="Zone 3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>

            </div>

            <div class="large-4 columns">

                <WebPartPages:WebPartZone id="CenterRightColumn" runat="server" title="Zone 4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>

            </div>

        </div>

        <!-- Call to Action Panel -->
        <div class="row" id="it_rd_row_3">
            <div class="large-12 columns">

                <WebPartPages:WebPartZone id="Bottom" runat="server" title="Zone 5"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>


            </div>
        </div>


    </div>
</asp:Content>