# O365COE
CoE on Github

(*) For further instructions on how to import/export terms, please refer to http://www.metaengine.com/2012/02/Export-and-Import-a-Term-Set-on-Office-365-with-no-code
 
Deployment instructions in Publishing Site:
1. If needed, import O365COE\Term Sets\Products.csv to your publishing site term store (*)
2. If needed, import O365COE\Term Sets\Roles.csv to your publishing site term store (*)
3. If needed, import O365COE\Term Sets\Site Navigation.csv to your publishing site term store (*)
4. If needed, import O365COE\Term Sets\Topics.csv to your publishing site term store (*)
5. Add and activate O365COE\WSPs\MicrosoftITDesignPackage-1.7.wsp to the publishing site Solutions
6. Add and activate O365COE\WSPs\MicrosoftITDesignPackage-1.7.1.wsp to the publishing site Solutions
7. Add and activate O365COE\WSPs\IT Office 365 Center of Excellence-1.0.wsp to the publishing site Solutions
8. Create .wsp from O365COE solution
9. Add and activate created O365COE to the publishing site Solutions
10. Review that it contains the following:

GENERAL
  Included Term sets

OFFICE 365 COE COLUMNS (Site Columns)
  - Products (Products)
  - Audience Role (Roles)
  - Parent Topic (Topics)
  - Topic Content (Topics)

CONTENT TYPES (some from CT Hub)
  - Group: Office 365 COE Content Types
  Content Types:
    COE Page
    COE Sub-Topic (inherits from above)
    COE Topic (inherits from above)

DISPLAY TEMPLATES
  Display Templates > Content Web Parts > Control_O365_Topic
  Display Templates > Content Web Parts > Control_O365List
  Display Templates > Content Web Parts > Item_O365TwoLinesNoIcon.js
  Display Templates > Content Web Parts > Item_PictureTitleOnTop.html

PAGE LAYOUTS
  Display Templates > COEArticlePage.aspx
  Display Templates > COEHomePage.aspx
  Display Templates > COESubTopicPage.aspx
  Display Templates > COETopicPage.aspx
