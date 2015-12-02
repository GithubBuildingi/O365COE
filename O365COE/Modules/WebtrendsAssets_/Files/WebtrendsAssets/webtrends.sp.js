/*
Copyright (c) 2014 Webtrends, Inc.
SharePoint 2013/SPO Plugin v4.1.6
*/
(function () {
    WebTrendsSP_intra = function (tag, plugin) {
        this.enabled = true;
        this.tagObj = tag;
        this.tagVersion = "4.1.6";

        // Config support features
        this.cfg = {
            extraUserInfo: (typeof (plugin.extraUserInfo) !== 'undefined') ? plugin.extraUserInfo : true,
            username: (typeof (plugin.username) !== 'undefined') ? plugin.username : true,
            content: (typeof (plugin.content) !== 'undefined') ? plugin.content : true,
            search: (typeof (plugin.search) !== 'undefined') ? plugin.search : true,
            bread: (typeof (plugin.bread) !== 'undefined') ? plugin.bread : true,
            webparts: (typeof (plugin.webparts) !== 'undefined') ? plugin.webparts : true,
            documentMenuClick: (typeof (plugin.documentMenuClick) !== 'undefined') ? plugin.documentMenuClick : true,
            list: (typeof (plugin.list) !== 'undefined') ? plugin.list : true,
            socialMenuClick: (typeof (plugin.socialMenuClick) !== 'undefined') ? plugin.socialMenuClick : true,
            allClick: (typeof (plugin.allClick) !== 'undefined') ? plugin.allClick : false,
            webPartLimit: (typeof (plugin.webPartLimit) !== 'undefined') ? plugin.webPartLimit : "40"
        };

        // Page constants
        this.ids = {
            breadid: (typeof (plugin.ids.breadid) != 'undefined') ? plugin.ids.breadid : "DeltaPlaceHolderPageTitleInTitleArea",
            pritopleveluserid: (typeof (plugin.ids.pritopleveluserid) != 'undefined') ? plugin.ids.pritopleveluserid : "SuiteNavUserName", // SPO primary option
            //pritopleveluserid: "zz4_Menu", // SP2013 primary option
            sectopleveluserid: (typeof (plugin.ids.sectopleveluserid) != 'undefined') ? plugin.ids.sectopleveluserid : "zz5_Menu", // SP2013 secondary option
            searchBox: (typeof (plugin.ids.searchBox) != 'undefined') ? plugin.ids.searchBox : "DataProvider",
            searchPage: (typeof (plugin.ids.searchPage) != 'undefined') ? plugin.ids.searchPage : "osssearchresults.aspx,results.aspx,search.aspx"
        };

        // <a Links with dedicated selectors that should be excluded from generic download tracking and all link tracking
        this.anchors = "a" +
            ":not([class*='-calloutLinkEnabled'])" +
            ":not([class*='ms-calloutLink ms-uppercase'])" +
            ":not([class*='ms-listlink'])" +
            ":not([id*='newdocWOPI-divWord'])" +
            ":not([id*='newdocWOPI-divExcel'])" +
            ":not([id*='newdocWOPI-divPowerPoint'])" +
            ":not([id*='newdocWOPI-divOne:note'])" +
            ":not([id*='newdocWOPI-divFolder'])" +
            ":not([class^='ms-cui-ctl-a1'])" +
            ":not([id^='Ribbon.Documents.New.AddDocument'])" +
            ":not([id^='idHomePageNewDocument'])" +
            ":not([id^='Ribbon.Documents.New.NewFolder'])" +
            ":not([id^='Ribbon.Documents.EditCheckout.EditDocument'])" +
            ":not([id^='Ribbon.Documents.EditCheckout.CheckOut'])" +
            ":not([id^='Ribbon.Documents.EditCheckout.CheckIn'])" +
            ":not([id^='Ribbon.Documents.EditCheckout.DiscardCheckOut'])" +
            ":not([id^='Ribbon.Documents.Manage.ViewProperties'])" +
            ":not([id^='Ribbon.Documents.Manage.EditProperties'])" +
            ":not([id^='Ribbon.Documents.Manage.ViewVersions'])" +
            ":not([id^='Ribbon.Documents.Manage.ManagePermissions'])" +
            ":not([id^='Ribbon.Documents.Manage.Delete'])" +
            ":not([id^='Ribbon.Documents.Share.ShareItem'])" +
            ":not([id^='Ribbon.Documents.Share.AlertMe.Menu.Scope.AlertSelection'])" +
            ":not([id^='Ribbon.Documents.Share.AlertMe.Menu.ManageAlerts'])" +
            ":not([id^='Ribbon.Documents.Share.ViewAnalyticsReport'])" +
            ":not([id^='Ribbon.Documents.Share.Follow'])" +
            ":not([id^='Ribbon.Documents.Copies.Download'])" +
            ":not([id^='Ribbon.Document.All.SendTo.Menu.Items.OtherLocation'])" +
            ":not([id^='Ribbon.Document.All.SendTo.Menu.Items.CreateDocumentWorkspace'])" +
            ":not([id^='Ribbon.Documents.Copies.ManageCopies'])" +
            ":not([id^='Ribbon.Documents.Copies.GoToSourceItem'])" +
            ":not([id^='Ribbon.Documents.Workflow.ViewWorkflows'])" +
            ":not([id^='Ribbon.Documents.Workflow.Publish'])" +
            ":not([id^='Ribbon.Documents.Workflow.Unpublish'])" +
            ":not([id^='Ribbon.Documents.Workflow.Moderate'])" +
            ":not([id^='Ribbon.Documents.Workflow.CancelApproval'])" +
            ":not([id^='Ribbon.Documents.TagsAnd:notes'])" +
            ":not([id^='Ribbon.Documents.Share.EmailItemLink'])" +
            ":not([id^='DlgClose'])" +
            ":not([class*='srch-item-link'])" +
            ":not([id*='_hoverOpen'])" +
            ":not([id*='item_hoverFollow'])" +
            ":not([id*='item_hoverSend'])" +
            ":not([id*='item_hoverParentLink'])" +
            ":not([id^='Ribbon.ListForm.Edit.Commit.Publish'])" +
            ":not([id^='Ribbon.ListForm.Display.Manage.ManagePermissions'])" +
            ":not([id^='Ribbon.ListItem.Manage.ManagePermissions-Medium'])" +
            ":not([id^='Ribbon.ListForm.Display.Manage.DeleteItem'])" +
            ":not([id^='Ribbon.ListForm.Edit.Actions.DeleteItem'])" +
            ":not([id^='Ribbon.ListForm.Display.Manage.Alert'])" +
            ":not([id^='Ribbon.ListItem.TagsAnd:notes.TagsAnd:notes'])" +
            ":not([id^='Ribbon.ListForm.Display.Manage.Workflows'])" +
            ":not([id^='Ribbon.ListForm.Edit.Commit.Publish'])" +
            ":not([id^='Ribbon.DocLibListForm.Edit.Commit.Publish'])" +
            ":not([id^='Ribbon.ListItem.Manage.Delete'])" +
            ":not([id^='Ribbon.ListItem.Actions.AttachFile'])" +
            ":not([id^='Ribbon.ListForm.Edit.Actions.AttachFile'])" +
            ":not([id^='Ribbon.ListItem.Share.AlertMe.Menu.Scope.AlertSelection'])" +
            ":not([id^='Ribbon.ListItem.Share.AlertMe.Menu.ManageAlerts.ManageAlerts'])" +
            ":not([id*='likebutton'])" +
            ":not([id*='followlinkfori'])" +
            ":not([id*='FollowLinkFor'])" +
            ":not([class*='ms-microfeed-button'])" +
            ":not([class*='ellipsis'])" +
            ":not([class*='closeButton'])" +
            ":not([class*='core-menu-root'])";
    };

    // Retrieves href of selected items in document libraries or lists
    WebTrendsSP_intra.prototype.getCurrentCheckedItem = function () {
        var selectedDocNames = [];
        var selectedDocURLs = [];
        var selectedDocTypes = [];
        var selectedTypes = [];
        var selectedList = [];
        try {
            var tables;
            if (window.self !== window.top) tables = parent.document.getElementsByTagName("table");
            else tables = document.getElementsByTagName("table");
            var docTables = [];
            if (tables) {
                var i = 0;
                for (i = 0; i < tables.length; i++) {
                    if (tables[i].className === "ms-listviewtable" && tables[i].id.indexOf("ecbtab_") === -1) {
                        docTables.push(tables[i]);
                    }
                }
                for (i = 0; i < docTables.length; i++) {
                    var rows = docTables[i].getElementsByTagName("tr");
                    for (var n = 0; n < rows.length; n++) {
                        if (rows[n].className.indexOf("itm-selected") >= 0) {
                            for (var j = 0; j < rows[n].childNodes.length; j++) {
                                if (rows[n].childNodes[j].className.indexOf("ms-cellstyle ms-vb-title") >= 0) {
                                    var docTypeElem = rows[n].childNodes[j].firstChild.firstChild;
                                    var docName = docTypeElem.innerHTML.replace(/\n|<.*?>/g, '');
                                    selectedDocNames.push(docName);
                                    var docUrl = docTypeElem.href;
                                    selectedDocURLs.push(docUrl);
                                    if (docTables[i].id.indexOf("onetidDoclibViewTbl0") >= 0) {
                                        selectedTypes.push("Document Library");
                                        if (docTypeElem.attributes) {
                                            for (var k = 0; k < docTypeElem.attributes.length; k++) {
                                                if (docTypeElem.attributes[k].name === "aria-label") {
                                                    var attribValue = docTypeElem.attributes[k].nodeValue;
                                                    var val = attribValue.substring(attribValue.lastIndexOf(",") + 2);
                                                    if (val.indexOf(" ") >= 0) val = val.substring(0, val.lastIndexOf(" "));
                                                    selectedDocTypes.push(val);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        selectedTypes.push("List Library");
                                        if (window.location.href.indexOf("/AllItems.aspx") >= 0) {
                                            var list = document.title.substring(0, document.title.indexOf(" - "));
                                            selectedList.push(list);
                                        } else {
                                            var row = rows[n];
                                            var parentId = row.parentNode.parentNode.parentNode.id;
                                            var id = parentId.substring(parentId.indexOf("script") + 6, parentId.length);
                                            var titleEl = document.getElementById("WebPartCaption" + id);
                                            var title = titleEl.parentNode.firstChild.innerHTML;
                                            title = title.replace(/\n|<.*?>/g, '');
                                            selectedList.push(title);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
        }
        selectedDocURLs.join(";");
        selectedDocNames.join(";");
        selectedDocTypes.join(";");
        selectedTypes.join(";");
        selectedList.join(";");

        var res = {
            "selectedDocURLs": selectedDocURLs,
            "selectedDocNames": selectedDocNames,
            "selectedDocTypes": selectedDocTypes,
            "selectedTypes": selectedTypes,
            "selectedList": selectedList
        };
        return res;
    };

    // Replacement for default getElementsByClassName which isn't supported in all browsers
    WebTrendsSP_intra.prototype.getElementsByClassName = function (className) {
        var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
        var allElements = parent.document.getElementsByTagName("*");
        var results = [];
        var elementClass;
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className !== null && allElements[i].className !== undefined && allElements[i].className !== "") {
                elementClass = allElements[i].className;
                if (elementClass.toString().indexOf(className) >= 0 && hasClassName.test(elementClass)) {
                    results.push(allElements[i]);
                }
            }
        }
        return results;
    };

    // Currently used to check for Search Data Provider element which is loaded later in the page load.
    WebTrendsSP_intra.prototype.waitForElement = function (elementId, timeout, callback) {
        var elem = parent.document.getElementById(elementId);
        if (elem) {
            callback(elem);
        }
        else {
            // Element not found, poll for it
            this.pollForElement(elementId, new Date().getTime(), timeout, callback);
        }
    };

    // Sub Process of waitForElement function.
    WebTrendsSP_intra.prototype.pollForElement = function (elementId, startTime, timeout, callback) {
        var self = this;
        if (new Date().getTime() - startTime > timeout) {
            // Polling timeout
            callback();
        }
        else {
            window.setTimeout(function () {
                var elem = parent.document.getElementById(elementId);
                if (elem) {
                    // Found element, call the callback
                    callback(elem);
                }
                else {
                    // Element not found, try again
                    self.pollForElement(elementId, startTime, timeout, callback);
                }
            }, 200);
        }
    };

    // Initiates the search for the Search results Data Provider element
    WebTrendsSP_intra.prototype.addSearchResultListener = function () {
        this.waitForElement(this.ids.searchBox, 5000, function (elem) {
            try {
                if (!elem) return; //if Search box not found 

                //var spVersion = "";
                var searchTerm = "";
                var resultCount = "";
                var dataProvider = "";
                var globals = wt_sp_globals;
                var plugin = wt_sp_globals.pluginObj;
                var ids = wt_sp_globals.pluginObj.ids;
                var debugmode = wt_sp_globals.pluginObj.cfg.debugmode;
                var spVersion = wt_sp_globals.pluginObj.spVersion;

                // Get control of dataProvider
                dataProvider = $getClientControl(elem) || Srch.U.getClientComponent(elem);

                // Callback function for when results are ready
                dataProvider.add_resultReady(function (dataProvider) {
                    if (spVersion == "SPO") {
                        searchTerm = dataProvider.$2_3.k;
                        resultCount = dataProvider.$8_3;
                    }
                    else {
                        searchTerm = dataProvider.$2_3.k;
                        resultCount = dataProvider.$9_3;
                    }
                    // If last search term doesn't exist, this is a page load event
                    if (searchTerm && globals.lastSearchTerm === undefined) {
                        globals.lastSearchTerm = searchTerm;
                        globals.currentSearchTerm = searchTerm;
                        globals.currentSearchCount = resultCount;
                        plugin.searchRegisterPlugin(ids);
                    }
                    // If current search term is different than last, new search was run with Enter key press or click to search button
                    else if (searchTerm && searchTerm != globals.lastSearchTerm) {
                        globals.lastSearchTerm = searchTerm;
                        globals.currentSearchTerm = searchTerm;
                        globals.currentSearchCount = resultCount;
                        dcs.track({
                            argsa: [
                                "WT.oss", searchTerm,
                                "WT.oss_r", resultCount?resultCount:"0",
                                "WT.ti", "Search Results",
                                "WT.cg_s", "Search"
                            ],
                            finish: function (dcsObject, multiTrackObject) {
                                window.wt_sp_globals.pluginObj.finishCleanup(dcsObject);
                            }
                        });
                    }
                    // If current search term is same as last, do nothing.
                    else if (searchTerm && searchTerm == globals.lastSearchTerm) {
                    }
                    // Fallback to failed attempt to gather results
                    else {
                        globals.lastSearchTerm = searchTerm;
                        globals.currentSearchTerm = "Collection of Search Results Failed";
                        globals.currentSearchCount = 0;
                        plugin.searchRegisterPlugin(ids);
                    }
                });

                // If search results are ready on page before our code runs, dataProvider.add_resultReady is not triggered.
                // Look for search results that already exist
                searchTerm = dataProvider.$2_3.k;
                if (dataProvider.$9_3 !== undefined) {
                    resultCount = dataProvider.$9_3;
                }
                else {
                    resultCount = dataProvider.$8_3;
                }
                if (searchTerm !== undefined && resultCount !== undefined) {
                    globals.lastSearchTerm = searchTerm;
                    globals.currentSearchTerm = searchTerm;
                    globals.currentSearchCount = resultCount;
                    plugin.searchRegisterPlugin(ids);
                }
            }
            catch (ex) {
                globals.currentSearchTerm = "Collection of search results failed";
                globals.currentSearchCount = 0;
                plugin.searchRegisterPlugin(ids);
            }
        });
    };

    // Registers the plugin callback for search pages
    WebTrendsSP_intra.prototype.searchRegisterPlugin = function (ids) {
        if (window.wt_sp_globals.pluginObj.tagObj.config.plugins.ups) {
            var upsPing = 0;
            var upsPlugin = setInterval(function () {
                if (typeof (wt_sp_user) !== "undefined" || upsPing >= 40) {
                    window.wt_sp_globals.pluginObj.tagObj.registerPluginCallback("sp");
                    clearInterval(upsPlugin);
                } else {
                    upsPing++;
                }
            }, 100);

        } else {
            var unamePing = 0;
            var unamePlugin = setInterval(function () {
                if (parent.document.getElementById(ids.pritopleveluserid) !== null || parent.document.getElementById(ids.sectopleveluserid) !== null || unamePing >= 40) {
                    window.wt_sp_globals.pluginObj.tagObj.registerPluginCallback("sp");
                    clearInterval(unamePlugin);
                } else {
                    unamePing++;
                }
            }, 100);
        }
    };

    // Checks if the current page is a search results page
    WebTrendsSP_intra.prototype.searchPageTest = function () {
        var path = "";
        if (window.location.href.indexOf("/start.aspx#") >= 0) {
            path = window.location.hash.toLowerCase();
        }
        else {
            path = window.location.pathname.toLowerCase();
        }
        var searchPage = window.wt_sp_globals.configs.plugins.sp.ids.searchPage.toLowerCase().split(",");
        //var searchPage = window.wt_sp_globals.configs.plugins.sp.searchPage.toLowerCase().split(",");
        for (var i = 0; i < searchPage.length; i++) {
            if (path.indexOf(searchPage[i]) >= 0) {
                window.wt_sp_globals.isSearchPage = true;
                return true;
            }
        }
        window.wt_sp_globals.isSearchPage = false;
        return false;
    };

    // Checks if the query string has a document 
    WebTrendsSP_intra.prototype.isDocParam = function (qry, types) {
        var results = {};
        if (qry !== "") {
            var query = qry.split("&");
            for (var i = 0; i < query.length; i++) {
                var param = query[i].split("=");
                for (var j = 0; j < types.length; j++) {
                    if (param[1].indexOf("." + types[j]) >= 0) {
                        results.check = true;
                        results.file = decodeURIComponent(param[1].substring(param[1].lastIndexOf("/") + 1));
                        return results;
                    }
                }
            }
        }
        results.check = false;
        return results;
    };

    // Checks if the URI Stem has a document
    WebTrendsSP_intra.prototype.isDocURI = function (uri, types) {
        var results = {};
        var ext = uri.toLowerCase().substring(uri.lastIndexOf(".") + 1, uri.length);
        for (var i = 0; i < types.length; i++) {
            if (ext.indexOf(types[i]) === 0) {
                results.check = true;
                results.file = decodeURIComponent(uri.substring(uri.lastIndexOf("/") + 1, uri.length));
                return results;
            }
        }
        results.check = false;
        return results;
    };

    // Get "On-site" URL if not preset
    WebTrendsSP_intra.prototype.getHomeSite = function () {
        if (typeof wt_sp_globals.configs.homesite === 'undefined' || wt_sp_globals.configs.homesite === "") {
            var homesite;
            if (typeof _spPageContextInfo !== 'undefined') {
                homesite = _spPageContextInfo.siteAbsoluteUrl;
            }
            else {
                var pathname = window.location.pathname;
                var dir = pathname.split("/");
                dir = dir.slice(0, 3);
                pathname = dir.join("/");
                homesite = window.location.protocol + "//" + window.location.hostname + pathname;
            }
            return homesite;
        }
        return wt_sp_globals.configs.homesite;
    };

    // Check if SharePoint 2013 or SPO
    WebTrendsSP_intra.prototype.getSPVersion = function () {
        var spVersion = "";
        if (typeof _spPageContextInfo !== 'undefined') {
            var clientTag = _spPageContextInfo.siteClientTag;
            clientTag = clientTag.substring(clientTag.indexOf("$$") + 2, clientTag.indexOf("."));
            spVersion = (clientTag == "16") ? "SPO" : "2013";
        }
        return spVersion;
    };

    // Determine browser compatibility for binding event listeners
    WebTrendsSP_intra.prototype.setBindingOption = function () {
        var browserVer;
        var option;
        var agent = window.navigator.userAgent;
        if (agent.indexOf("MSIE") >= 0) {
            if (agent.indexOf("Trident/") >= 0) {
                agent = agent.substring(agent.indexOf("Trident/") + 8, agent.length);
                browserVer = agent.substring(0, agent.indexOf(";"));
                option = (parseFloat(browserVer) > 4.0) ? "mousedown" : "mouseup";
            }
            else {
                option = "mouseup";
            }
        }
        else {
            option = "mousedown";
        }
        return option;
    };

    WebTrendsSP_intra.prototype.getDocTypeFromUriArr = function (uriArr) {
        var retDocType = "unknown document type";
        if (uriArr !== undefined) {
            if (uriArr.dcsuri && uriArr.dcsuri !== 'undefined' && uriArr.dcsuri.length > 4) {
                retDocType = uriArr.dcsuri.substring(uriArr.dcsuri.lastIndexOf(".") + 1, uriArr.dcsuri.length);
            }
            // handle unexpected conditions
            if (retDocType === "aspx" || retDocType === "unknown document type") {
                retDocType = "unknown doctype";
                if (this.getCurrentCheckedItem().selectedDocTypes[0] === "OneNote") {
                    retDocType = "one";
                } else if (this.getCurrentCheckedItem().selectedDocTypes[0] === "Folder") {
                    retDocType = "Library Folder";
                }
            }
        }
        return retDocType;
    };

    // Disassemble HREF
    WebTrendsSP_intra.prototype.getURIArrFromHREF = function (href) {
        var res = {};
        res.dcssip = "";
        res.dcsuri = "";
        res.dcsqry = "";
        res.dcshash = "";
        res.dcsref = "";
        if (href !== undefined) {
            var a = href.substring(href.indexOf("//") + 2, href.length);
            if (a.indexOf("/start.aspx") < 0) {
                res.dcssip = a.substring(0, a.indexOf("/"));
                res.dcsuri = a.substring(a.indexOf("/"), (a.indexOf("?") >= 0 ? a.indexOf("?") : (a.indexOf("#") >= 0 ? a.indexOf("#") : a.length)));
                res.dcsqry = a.substring(a.indexOf("?") >= 0 ? a.indexOf("?") + 1 : (a.indexOf("#") >= 0 ? a.indexOf("#") : a.length), (a.indexOf("#") >= 0 ? a.indexOf("#") : a.length));
                res.dcshash = a.substring(a.indexOf("#") >= 0 ? a.indexOf("#") : a.length, a.length);
                res.dcsref = window.location.href;
            }
            else {
                res.dcssip = a.substring(0, a.indexOf("/"));
                res.dcsuri = a.substring(a.indexOf("/"), (a.indexOf("?") >= 0 ? a.indexOf("?") : a.length));
                res.dcsqry = a.substring(a.indexOf("?") >= 0 ? a.indexOf("?") + 1 : a.length);
                res.dcshash = a.substring(a.indexOf("#") >= 0 ? a.indexOf("#") : a.length, a.indexOf("?") >= 0 ? a.indexOf("?") : a.length);
                res.dcsref = window.location.href;
            }
        }
        return res;
    };

    // Bind to direct links in Document Libraries
    // Necessary because some file types cancelBubble which breaks our addSelector
    WebTrendsSP_intra.prototype.documentLinkBind = function () {
        setTimeout(function () {
            var plugin = window.wt_sp_globals.pluginObj;
            var classname = plugin.getElementsByClassName("ms-listlink");
            for (var i = 0; i < classname.length; i++) {
                if (classname[i].href.toLowerCase().indexOf("/listform.aspx") < 0) {
                    if (classname[i].documentLinkBinded) continue;
                    if (parent.document.addEventListener) classname[i].addEventListener(plugin.eventOption, plugin.onClickBoundLink, false);
                    else classname[i].attachEvent(plugin.eventOption, plugin.onClickBoundLink);
                    classname[i].documentLinkBinded = true;
                }
            }
        }, 1500);
    };

    // Direct Links in Document Library 
    WebTrendsSP_intra.prototype.onClickBoundLink = function (event) {
        var action = "Open";
        var docName = "";
        var docType = "";
        var docLib = "";
        var dl = "";
        var element = event.target || event.srcElement;
        var plugin = window.wt_sp_globals.pluginObj;
        var parElem = element.parentNode;
        var ctxID = parElem.attributes.ctxname.value;
        var elID = parElem.attributes.id.value;
        var ctxList = window[ctxID];
        var ctxRow = window[ctxID].ListData.Row;
        for (var i = 0; i < ctxRow.length; i++) {
            if (ctxRow[i].ID === elID) {
                ctxFile = ctxRow[i];
                break;
            }
        }
        var url = plugin.getURIArrFromHREF("//" + window.location.hostname + ctxFile.FileRef);
        if (ctxFile.FSObjType === "1") {
            docType = (ctxFile.HTML_x0020_File_x0020_Type === "OneNote.Notebook") ? "one" : "Library Folder";
            dl = (ctxFile.HTML_x0020_File_x0020_Type === "OneNote.Notebook") ? "20" : "SHP";
        }
        else if (ctxFile.FSObjType === "0") {
            docType = ctxFile.File_x0020_Type;
            dl = "20";
        }
        else {
            docType = "Unknown";
            dl = "SHP";
        }
        docName = ctxFile.FileLeafRef;
        docLib = decodeURIComponent(ctxList.listUrlDir); // check i18n?
        Webtrends.multiTrack({
            argsa: [
                "DCS.dcssip", url.dcssip,
                "DCS.dcsuri", url.dcsuri,
                "DCS.dcsqry", url.dcsqry,
                "DCS.dcsref", url.dcsref,
                "WT.ti", docName,
                "WT.nv", element.className,
                "WT.dl", dl,
                "WT.shp_doc", docName,
                "WT.shp_doc_a", action,
                "WT.shp_doc_type", docType,
                "WT.shp_doc_lib", docLib,
                "WT.shp_act_loc", "Direct Link"
            ],
            finish: function (dcsObject, multiTrackObject) {
                window.wt_sp_globals.pluginObj.finishCleanup(dcsObject);
            }
        });
    };

    // Document Pop Up Window Links
    WebTrendsSP_intra.prototype.docItemPopUpLink = function (element) {
        var plugin = window.wt_sp_globals.pluginObj;
        var currentItems = plugin.getCurrentCheckedItem();
        var a = currentItems.selectedDocURLs[0];
        var url = plugin.getURIArrFromHREF(a);
        var action = "";
        var dl;
        var docName = "";
        var docType = "";
        var docResult = plugin.isDocURI(url.dcsuri, plugin.types);
        if (docResult.check === true) docName = docResult.file;
        else docResult = plugin.isDocParam(url.dcsqry, plugin.types);
        var elType = currentItems.selectedDocTypes[0];
        if (docResult.check === true) {
            docName = docResult.file;
            docType = docName.substring(docName.lastIndexOf(".") + 1, docName.length);
        } else {
            docName = currentItems.selectedDocNames[0];
            docType = (elType === "OneNote") ? "one" : "Library Folder";
        }
        if (element.innerHTML.toUpperCase().indexOf("EDIT") >= 0) {
            a = decodeURIComponent(a);
            action = (docResult.check === true) ? "Edit" : "Open";
            dl = (docResult.check === true || elType === "OneNote") ? "20" : "SHP";
        }
        else if (element.innerHTML.toUpperCase().indexOf("OPEN") >= 0) {
            a = decodeURIComponent(a);
            action = "Open";
            dl = (docResult.check === true) ? "20" : "SHP";
        }
        else if (element.innerHTML.toUpperCase().indexOf("POST") >= 0) {
            if (a.indexOf("('") >= 0) {
                a = element.href.substring(element.href.indexOf("('") + 2, element.href.lastIndexOf("')"));
                a = decodeURIComponent(a);
            }
            action = "Post";
            dl = "SHP";
        }
        else if (element.innerHTML.toUpperCase().indexOf("SEND") >= 0) {
            a = decodeURIComponent(a);
            a = a.substring(a.indexOf("<") + 1, a.indexOf(">"));
            action = "Send Email";
            dl = "SHP";
        }
        else if (element.innerHTML.toUpperCase().indexOf("FOLLOW") >= 0) {
            a = decodeURIComponent(a);
            action = "Follow";
            dl = "SHP";
        }
        else {
            action = "";
        }
        //var docLib = "";
        //docLib = plugin.getDocLib();
        var res = {
            "DCS.dcssip": url.dcssip,
            "DCS.dcsuri": url.dcsuri,
            "DCS.dcsqry": url.dcsqry,
            "DCS.dcsref": window.location.href,
            "WT.ti": docName,
            "WT.dl": dl,
            "WT.shp_doc": docName,
            "WT.shp_doc_a": action,
            "WT.shp_doc_type": docType,
            //"WT.shp_doc_lib": docLib,
            "WT.shp_act_loc": "Document Library Preview Window"
        };
        if (action !== "") return res;
    };

    // Search Result Item Clicks
    WebTrendsSP_intra.prototype.searchItemClick = function (element, href) {
        var plugin = window.wt_sp_globals.pluginObj;
        var url = plugin.getURIArrFromHREF(href);
        var docName = "";
        var docType = "";
        var docAction = "";
        var srchItem = "";
        var srchItemType = "";
        var srchItemAction = "";
        var dl = "";
        var ttl = "";
        var srchTerm = wt_sp_globals.lastSearchTerm;
        var isFile = false;
        if (url.dcsqry.indexOf("&file=") >= 0) isFile = true;
        var docResult = plugin.isDocURI(url.dcsuri, plugin.types);
        if (docResult.check === false) docResult = plugin.isDocParam(url.dcsqry, plugin.types);
        if (docResult.check === true || isFile === true) {
            docName = srchItem = ttl = docResult.file;
            docType = (isFile === true && docResult.check === false) ? "one" : docName.substring(docName.indexOf(".") + 1, docName.length);
            srchItemType = "Document";
            docAction = srchItemAction = "Open";
            dl = "20";
        }
        else if (url.dcsuri.indexOf("/AllItems.aspx") >= 0) {
            docName = srchItem = ttl = element.innerHTML.replace(/\n|<.*?>/g, '');
            docType = srchItemType = "Library Folder";
            docAction = srchItemAction = "Open";
            dl = "SHP";
        }
        else {
            ttl = element.innerHTML.replace(/\n|<.*?>/g, '');
            srchItem = element.innerHTML.replace(/\n|<.*?>/g, '');
            srchItemType = "URL";
            srchItemAction = "Open";
            dl = "SHP";
        }
        var res = {};
        res["DCS.dcssip"] = url.dcssip;
        res["DCS.dcsuri"] = url.dcsuri;
        res["DCS.dcsqry"] = url.dcsqry;
        res["DCS.dcsref"] = window.location.href;
        res["WT.ti"] = ttl;
        res["WT.dl"] = dl;
        res["WT.shp_doc_a"] = docAction;
        res["WT.shp_doc"] = docName;
        res["WT.shp_doc_type"] = docType;
        res["WT.shp_srch_item"] = srchItem;
        res["WT.shp_srch_item_action"] = srchItemAction;
        res["WT.shp_srch_item_type"] = srchItemType;
        res["WT.shp_srch_term"] = srchTerm;
        res["WT.shp_act_loc"] = "Direct Link";
        return res;
    };

    // Search Result Pop Up Window Links
    WebTrendsSP_intra.prototype.searchItemPopUpClick = function (element, href, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var url = plugin.getURIArrFromHREF(decodeURIComponent(href));
        var docName = "";
        var docType = "";
        var folders = "";
        var ttl = "";
        var action = option;
        var res = {
            "DCS.dcssip": url.dcssip,
            "DCS.dcsuri": url.dcsuri,
            "DCS.dcsqry": url.dcsqry,
            "DCS.dcsref": window.location.href,
            "WT.shp_act_loc": "Search Result Preview Window"
        };
        var docResult = plugin.isDocURI(url.dcsuri, plugin.types);
        if (docResult.check === true) docName = docResult.file;
        else docResult = plugin.isDocParam(url.dcsqry, plugin.types);
        if (docResult.check === true) docName = docResult.file;
        if (element.id.indexOf("_hover") >= 0) {
            var item = element.id.substring(0, element.id.indexOf("_hover"));
            var header = window.document.getElementById(item + "_hoverTitle");
            ttl = header.innerHTML.replace(/^\s+|\s+$/g, "").replace("&amp;", "&");
        }
        if (docResult.check === true) {
            res["WT.ti"] = docName;
            res["WT.dl"] = "20";
            res["WT.shp_doc"] = docName;
            res["WT.shp_doc_a"] = action;
            res["WT.shp_doc_type"] = docType = docName.substring(docName.indexOf(".") + 1, docName.length);
            res["WT.shp_srch_item"] = docName;
            res["WT.shp_srch_item_action"] = action;
            res["WT.shp_srch_item_type"] = "Document";
        }
        else if (option === "View Library" || url.dcsuri.indexOf("/AllItems.aspx") >= 0) {
            if (url.dcsuri.indexOf("/AllItems.aspx") >= 0) {
                folders = url.dcsuri.split("/");
                for (var i = 0; i < folders.length; i++) {
                    if (folders[i] === "Forms") {
                        ttl = folders[i - 1];
                    }
                }
            }
            else {
                folders = url.dcsuri.split("/");
                ttl = folders[folders.length - 2] + "/" + folders[folders.length - 1];
            }
            res["WT.ti"] = ttl;
            res["WT.dl"] = "SHP";
            res["WT.shp_doc"] = ttl;
            res["WT.shp_doc_a"] = action;
            res["WT.shp_doc_type"] = "Library Folder";
            res["WT.shp_srch_item"] = ttl;
            res["WT.shp_srch_item_action"] = action;
            res["WT.shp_srch_item_type"] = "Library Folder";
        }
        else {
            res["WT.ti"] = ttl;
            res["WT.dl"] = "SHP";
            res["WT.shp_doc"] = "";
            res["WT.shp_doc_a"] = "";
            res["WT.shp_doc_type"] = "";
            res["WT.shp_srch_item"] = ttl;
            res["WT.shp_srch_item_action"] = action;
            res["WT.shp_srch_item_type"] = "URL";
        }
        res["WT.shp_srch_term"] = wt_sp_globals.lastSearchTerm;
        return res;
    };

    // Get Social Feed and Event Name
    WebTrendsSP_intra.prototype.socialFeedAction = function (option) {
        var socContent;
        var feed = parent.document.getElementById("ms-currentFeedLabel");
        if (feed !== undefined) {
            socContent = feed.innerHTML.replace(/^\s+|\s+$/g, "");
        } else {
            socContent = "Feed name not found";
        }
        var res = {};
        res["DCS.dcssip"] = window.location.hostname;
        res["DCS.dcsuri"] = window.location.pathname;
        res["DCS.dcsqry"] = window.location.search;
        res["DCS.dcsref"] = window.location.href;
        res["WT.ti"] = socContent + " - " + option;
        res["WT.dl"] = "SHP";
        res["WT.soc_content"] = socContent;
        res["WT.soc_action"] = option;
        return res;
    };

    // Get ECB Menu Document Info
    WebTrendsSP_intra.prototype.ecbDocuments = function (option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var url = "";
        var href = "";
        var docName = "";
        var docType = "";
        if (typeof window.wt_sp_globals.currentItemURL !== 'undefined') {
            href = plugin.getURIArrFromHREF(window.wt_sp_globals.currentItemURL);
        }
        else {
            url = window.location.href;
            href = plugin.getURIArrFromHREF(url);
        }

        var docResult = plugin.isDocURI(href.dcsuri, plugin.types);
        if (docResult.check === true) docName = docResult.file;
        else docResult = plugin.isDocParam(href.dcsqry, plugin.types);
        docName = (docResult.check === true) ? docResult.file :
            (window.wt_sp_globals.currentItemName) ? window.wt_sp_globals.currentItemName :
                href.dcsuri.substring(href.dcsuri.lastIndexOf("/") + 1, href.dcsuri.length);
        docType = (docResult.check === true) ? docResult.file.substring(docResult.file.lastIndexOf(".") + 1, docResult.file.length) : "Library Folder";
        docType = (docResult.check === false && window.wt_sp_globals.currentItemDoc === "OneNote") ? "one" : docType;

        // check that docType is one that we should process here? refactor!
        var res = {};
        var dl = "SHP";
        var trackDocType = true;
        if (option === "Download" || option === "View in Browser" || option === "Edit in Browser") {
            dl = "20";
            if (docType === "Library Folder") {
                trackDocType = false;
            }
        }
        //var docLib = "";
        //docLib = plugin.getDocLib();
        if (trackDocType) {
            res["DCS.dcssip"] = href.dcssip;
            res["DCS.dcsuri"] = href.dcsuri;
            res["DCS.dcsqry"] = href.dcsqry;
            res["DCS.dcsref"] = href.dcsref;
            res["WT.ti"] = docName;
            res["WT.dl"] = dl;
            res["WT.shp_doc"] = docName;
            res["WT.shp_doc_a"] = option;
            res["WT.shp_doc_type"] = docType;
            //res["WT.shp_doc_lib"] = docLib;
        }
        return res;
    };

    // Get ECB Menu Item Info
    WebTrendsSP_intra.prototype.ecbListItem = function (option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var url = "";
        var item = "";
        var href = "";
        var list = "";
        var webparts = plugin.getElementsByClassName("ms-webpart-titleText");
        if (webparts.length > 0) {
            for (var i = 0; i < webparts.length; i++) {
                if (typeof webparts[i].firstChild.href !== "undefined") {
                    if (webparts[i].firstChild.href.indexOf("/Lists/") >= 0) {
                        list = webparts[i].firstChild.innerHTML.replace(/\n|<.*?>/g, '');
                        break;
                    }
                }
            }
        }
        else {
            list = parent.document.title.replace(/\n|<.*?>/g, '');
        }
        if (typeof window.wt_sp_globals.currentItemName !== 'undefined') {
            item = window.wt_sp_globals.currentItemName;
        }
        if (typeof window.wt_sp_globals.currentItemURL !== 'undefined') {
            href = window.wt_sp_globals.currentItemURL;
        }
        url = plugin.getURIArrFromHREF(href);
        var res = {};
        res["DCS.dcssip"] = url.dcssip;
        res["DCS.dcsuri"] = url.dcsuri;
        res["DCS.dcsqry"] = url.dcsqry;
        res["DCS.dcsref"] = url.dcsref;
        res["WT.ti"] = item;
        res["WT.dl"] = "SHP";
        res["WT.shp_list"] = list;
        res["WT.shp_list_item"] = item;
        res["WT.shp_list_item_action"] = option;
        return res;
    };

    // Document Ribbon options for one selected item
    WebTrendsSP_intra.prototype.documentRibbonSingleItem = function (dcsObject, multiTrackObject, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var currentItems = plugin.getCurrentCheckedItem();
        var docName = "";
        var docType = "";
        var res = "";
        var dl = "";
        var loc = "";
        url = plugin.getURIArrFromHREF(currentItems.selectedDocURLs[0]);
        var docResult = plugin.isDocURI(url.dcsuri, plugin.types);
        if (docResult.check === true) docName = docResult.file;
        else docResult = plugin.isDocParam(url.dcsqry, plugin.types);
        if (docResult.check === true) {
            docName = docResult.file;
            docType = docName.substring(docName.lastIndexOf(".") + 1, docName.length);
        } else {
            docName = currentItems.selectedDocNames[0];
            docType = (currentItems.selectedDocTypes[0] === "OneNote") ? "one" : "Library Folder";
        }
        dl = (option === "Edit Document" || option === "Download") && (docResult.check === true || docType === "one") ? "20" : "SHP";
        docName = (option === "New Folder") ? "New Folder" : (option === "New Document") ? "New Document" : docName;
        docType = (option === "New Document") ? "New Document" : docType;
        if (option === "New Word Document") {
            docName = "New Word Document";
            docType = "docx";
            option = "New Document";
        }
        //var docLib = "";
        //docLib = plugin.getDocLib();
        multiTrackObject.argsa.push(
            "DCS.dcssip", url.dcssip,
            "DCS.dcsuri", url.dcsuri,
            "DCS.dcsqry", url.dcsqry,
            "DCS.dcsref", url.dcsref,
            "WT.ti", docName,
            "WT.dl", dl,
            "WT.shp_doc", docName,
            "WT.shp_doc_a", option,
            "WT.shp_doc_type", docType,
        //"WT.shp_doc_lib", docLib,
            "WT.shp_act_loc", "Ribbon",
            "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
        );
    };

    // Document Ribbon options for more than one selected item
    WebTrendsSP_intra.prototype.documentRibbonMultiItem = function (dcsObject, multiTrackObject, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var currentItems = plugin.getCurrentCheckedItem();
        var docName = "";
        var docType = "";
        var res = "";
        var docResult = "";
        var itemURL = "";
        var loc = "";
        for (var i = 0; i < currentItems.selectedDocURLs.length; i++) {
            url = plugin.getURIArrFromHREF(currentItems.selectedDocURLs[i]);
            docResult = plugin.isDocURI(url.dcsuri, plugin.types);
            if (docResult.check !== true) docResult = plugin.isDocParam(url.dcsqry, plugin.types);
            if (docResult.check === true) {
                docName += docResult.file + ";";
                docType += docName.substring(docName.lastIndexOf(".") + 1, docName.length);
            } else {
                docName += currentItems.selectedDocNames[i] + ";";
                docType += (currentItems.selectedDocTypes[i] === "OneNote") ? "one" + ";" : "Library Folder" + ";";
            }
        }
        docName = docName.substring(0, docName.length - 1);
        docType = docType.substring(0, docType.length - 1);
        ti = docName;
        if (currentItems.selectedDocURLs.length > 1) {
            url.dcsuri = url.dcsuri.substring(0, url.dcsuri.lastIndexOf("/") + 1) + "multiple-documents";
            url.dcsqry = "";
            ti = "Multiple Documents";
        }
        //var docLib = "";
        //docLib = plugin.getDocLib();
        multiTrackObject.argsa.push(
            "DCS.dcssip", url.dcssip,
            "DCS.dcsuri", url.dcsuri,
            "DCS.dcsqry", url.dcsqry,
            "DCS.dcsref", url.dcsref,
            "WT.ti", ti,
            "WT.dl", "SHP",
            "WT.shp_doc", docName,
            "WT.shp_doc_a", option,
            "WT.shp_doc_type", docType,
        //"WT.shp_doc_lib", docLib,
            "WT.shp_act_loc", "Ribbon",
            "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
        );
    };

    // Get List Item Title from NewForm.aspx and Edit Form.aspx pages
    WebTrendsSP_intra.prototype.listItemDetails = function () {
        var plugin = window.wt_sp_globals.pluginObj;
        var listObj = {};
        var listItem = "";
        var listExt = "";
        listItem = plugin.getElementsByClassName("ms-long ms-spellcheck-true");
        if (listItem.length > 0) {
            listItem = listItem[0].value;
            listExt = plugin.getElementsByClassName("ms-fileField-fileExt");
            if (listExt.length > 0) listExt = listExt[0].innerHTML;
        }
        else {
            var listItemArr = document.getElementsByTagName("input");
            if (listItemArr.length > 0) {
                for (var i = 0; i < listItemArr.length; i++) {
                    if (listItemArr[i].id !== undefined) {
                        if (listItemArr[i].id.indexOf("onetidIOFile") >= 0) {
                            listItem = listItemArr[i].value;
                            break;
                        }
                        else if (listItemArr[i].id.indexOf("UrlFieldDescription") >= 0) {
                            listItem = listItemArr[i].value;
                            break;
                        }
                        else if (listItemArr[i].id.indexOf("_$TextField") >= 0) {
                            listItem = listItemArr[i].value;
                            break;
                        }
                        else {
                        }
                    }
                }
            }
        }
        listObj.item = listItem;
        listObj.ext = listExt;
        return listObj;
    };

    // List New Item confirm buttons
    WebTrendsSP_intra.prototype.listNewItem = function (dcsObject, multiTrackObject, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var res = plugin.getURIArrFromHREF(window.location.href);
        var list = document.title.substring(0, document.title.indexOf(" - "));
        var listObj = plugin.listItemDetails();
        var listItem = listObj.item;
        var listExt = listObj.ext;
        var listAction = "New Item";
        listItem = listItem + listExt;
        multiTrackObject.argsa.push(
            "DCS.dcssip", res.dcssip,
            "DCS.dcsuri", res.dcsuri,
            "DCS.dcsqry", res.dcsqry,
            "DCS.dcsref", res.dcsref,
            "WT.ti", list + " - " + listItem,
            "WT.dl", "SHP",
            "WT.shp_list", list,
            "WT.shp_list_item", listItem,
            "WT.shp_list_item_action", listAction,
            "WT.shp_act_loc", option,
            "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
        );
    };

    // List Ribbon Actions
    WebTrendsSP_intra.prototype.listDispFormRibbon = function (dcsObject, multiTrackObject, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var res = plugin.getURIArrFromHREF(window.location.href);
        var list = document.title.substring(0, document.title.indexOf(" - "));
        var listItem = (document.title.indexOf(" - ") > -1) ? document.title.substring(document.title.indexOf(" - ") + 3, document.title.length) : document.title;
        var listExt = "";
        if (res.dcsuri.indexOf("NewForm.aspx") >= 0) {
            var listObj = plugin.listItemDetails();
            listItem = listObj.item;
            listExt = listObj.ext;
        }

        var cci = plugin.getCurrentCheckedItem();
        if(typeof cci !== "undefined"){
            if(cci.selectedDocURLs.length > 0 && typeof cci.selectedDocURLs[0] !== "undefined" && cci.selectedDocURLs[0].indexOf("listform.aspx")!=-1){
                list = cci.selectedList[0];
                listItem = cci.selectedDocNames[0];
            }
        }

        listItem = listItem + listExt;
        multiTrackObject.argsa.push(
            "DCS.dcssip", res.dcssip,
            "DCS.dcsuri", res.dcsuri,
            "DCS.dcsqry", res.dcsqry,
            "DCS.dcsref", res.dcsref,
            "WT.ti", list + " - " + listItem,
            "WT.dl", "SHP",
            "WT.shp_list", list,
            "WT.shp_list_item", listItem,
            "WT.shp_list_item_action", option,
            "WT.shp_act_loc", "Ribbon",
            "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
        );
    };

    // List Edit Item
    WebTrendsSP_intra.prototype.listEditItem = function (dcsObject, multiTrackObject, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var res = plugin.getURIArrFromHREF(window.location.href);
        var list = document.title.substring(0, document.title.indexOf(" - "));
        var listItem = "";
        var listExt = "";
        var listAction = "";
        var listObj = plugin.listItemDetails();
        listItem = listObj.item;
        listExt = listObj.ext;
        listItem = listItem + listExt;
        listAction = "Edit Item";
        multiTrackObject.argsa.push(
            "DCS.dcssip", res.dcssip,
            "DCS.dcsuri", res.dcsuri,
            "DCS.dcsqry", res.dcsqry,
            "DCS.dcsref", res.dcsref,
            "WT.ti", list + " - " + listItem,
            "WT.dl", "SHP",
            "WT.shp_list", list,
            "WT.shp_list_item", listItem,
            "WT.shp_list_item_action", listAction,
            "WT.shp_act_loc", option,
            "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
        );
    };

    // List ITEMS Ribbon
    WebTrendsSP_intra.prototype.listItemsRibbon = function (dcsObject, multiTrackObject, option) {
        var plugin = window.wt_sp_globals.pluginObj;
        var currentItems = plugin.getCurrentCheckedItem();
        var a = currentItems.selectedDocURLs[0];
        var res = plugin.getURIArrFromHREF(a);
        var list = currentItems.selectedList[0];
        var listItem = currentItems.selectedDocNames[0];
        multiTrackObject.argsa.push(
            "DCS.dcssip", res.dcssip,
            "DCS.dcsuri", res.dcsuri,
            "DCS.dcsqry", res.dcsqry,
            "DCS.dcsref", res.dcsref,
            "WT.ti", list + " - " + listItem,
            "WT.dl", "SHP",
            "WT.shp_list", list,
            "WT.shp_list_item", listItem,
            "WT.shp_list_item_action", option,
            "WT.shp_act_loc", "Ribbon",
            "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
        );
    };

    // With MDS enabled, URLs will take the following format:
    // <site collection>/_layouts/15/start.aspx#<url to content>
    // In this scenario we need to rebuild the URL parameters that we send
    WebTrendsSP_intra.prototype.parsePageInfo = function () {
        var path = window.location.pathname;
        var qry = window.location.search;
        var hash = window.location.hash;
        var a = document.createElement("a");
        a.href = hash.substring(1);
        var apath = a.pathname;
        while (apath.indexOf("/") == 0) apath = apath.substring(1);
        var aqry = a.search;
        var ahash = a.hash;

        // Add the path portion of the anchor to the main path
        var dcsuri = path + ((apath) ? ("#/" + apath) : "#/");

        // Add the anchor's query string to the main query string    
        var dcsqry = qry.concat(aqry ? (qry ? ("&" + aqry.substr(1)) : aqry) : "");

        // Overwrite WT.ti and WT.cg_s when Search Results page
        if (window.wt_sp_globals.isSearchPage) {
            return {
                "DCS.dcssip": location.hostname,
                "DCS.dcsuri": dcsuri,
                "DCS.dcsqry": dcsqry,
                "WT.ti": "Search Results",
                "WT.dl": "0",
                "WT.cg_s": "Search",
                "WT.es": location.hostname + dcsuri
            };
        }
        else {
            return {
                "DCS.dcssip": location.hostname,
                "DCS.dcsuri": dcsuri,
                "DCS.dcsqry": dcsqry,
                "WT.ti": document.title,
                "WT.dl": "0",
                "WT.cg_s": document.title,
                "WT.es": location.hostname + dcsuri
            };
        }
    };

    WebTrendsSP_intra.prototype.finishCleanup = function (dcsObject) {
        window.wt_sp_globals.currentItemName = "";
        window.wt_sp_globals.currentItemURL = "";
        window.wt_sp_globals.currentItemType = "";
        dcsObject.WT.shp_doc = "";
        dcsObject.WT.shp_doc_a = "";
        dcsObject.WT.shp_doc_type = "";
        dcsObject.WT.shp_doc_lib = "";
        dcsObject.WT.shp_list = "";
        dcsObject.WT.shp_list_item = "";
        dcsObject.WT.shp_list_item_action = "";
        dcsObject.WT.shp_srch_item = "";
        dcsObject.WT.shp_srch_item_action = "";
        dcsObject.WT.shp_srch_item_type = "";
        dcsObject.WT.shp_srch_term = "";
        dcsObject.WT.soc_content = "";
        dcsObject.WT.soc_action = "";
        dcsObject.WT.soc_image = "";
        dcsObject.WT.shp_act_loc = "";
        dcsObject.WT.oss = "";
        dcsObject.WT.oss_r = "";
    }
})();

var sp_intra_loader = function (tag, plugin) {
    var _sp_intra = new WebTrendsSP_intra(tag, plugin);
    // Store objects locally for later use
    // Will need to check if MDS is wiping these out
    var cfg = _sp_intra.cfg;
    var ids = _sp_intra.ids;
    var version = _sp_intra.tagVersion;
    var spVersion = _sp_intra.spVersion = _sp_intra.getSPVersion();
    var homesite = _sp_intra.homesite = _sp_intra.getHomeSite().toLowerCase();
    var eventOption = _sp_intra.eventOption = _sp_intra.setBindingOption();
    var searchPage = _sp_intra.searchPage = _sp_intra.searchPageTest();
    var types = _sp_intra.types = tag._downloadtypes;
    window.wt_sp_globals.ribbon = false;
    window.wt_sp_globals.ecb = false;
    window.wt_sp_globals.popup = false;

    // Copy to global object for MDS
    window.wt_sp_globals.pluginObj = _sp_intra;

    /*
    // TEST to grab document libraries and list libraries directly
    _sp_intra.getLibraries();
    */

    // Start Search Results listener
    if (searchPage === true) {
        _sp_intra.addSearchResultListener();
    }

    // Correct MDS URLs by adding the hash to the dcsuri
    Webtrends.addTransform(function (dcsObject, trackObject) {
        if (!trackObject.argsa) {
            trackObject.argsa = [];
        }
        if (window.location.href.indexOf("start.aspx") >= 0) {
            var pageInfo = _sp_intra.parsePageInfo();
            for (var key in pageInfo) {
                if (pageInfo.hasOwnProperty(key))
                    trackObject.argsa.push(key, pageInfo[key]);
            }
        }
    }, "collect");

    // Add Base SharePoint parameters to all events
    Webtrends.addTransform(function (dcsObject, trackObject) {
        if (!trackObject.argsa) {
            trackObject.argsa = [];
        }

        // tag version
        trackObject.argsa.push("WT.sp_tv", version);

        // extra user info from User Profile Service
        if (cfg.extraUserInfo) {
            if (typeof (wt_sp_user) !== "undefined") {
                try {
                    for (var prop in wt_sp_user) {
                        if (prop.indexOf("wterr_") !== 0) {
                            trackObject.argsa.push(
                                prop, decodeURIComponent(wt_sp_user[prop])
                            );
                        }
                    }
                }
                catch (ex) {
                }
            }
        }

        // Username
        if (cfg.username) {
            // ANA-10035: 
            // TJM: always collect uname from elementid if admin has requested
            try {
                var userName = "";
                if (spVersion == "SPO") {
                    if (parent.document.getElementById(ids.pritopleveluserid)) {
                        userName = parent.document.getElementById(ids.pritopleveluserid).innerHTML;
                        userName = userName.replace("&amp;", "&");
                    }
                } else {
                    var option1 = parent.document.getElementById(ids.pritopleveluserid);
                    var option2 = parent.document.getElementById(ids.sectopleveluserid);
                    userName = (option1) ? option1.innerHTML : option2.innerHTML;
                    userName = userName.substring(0, userName.indexOf("<"));
                }
                trackObject.argsa.push("WT.shp_uname", userName);
            }
            catch (ex) {
            }
        }

        // Content group
        if (cfg.content) {
            try {
                var site;
                var folder;
                var path;
                if (typeof _spPageContextInfo !== "undefined") {
                    site = _spPageContextInfo.webAbsoluteUrl;
                    folder = site.split("/");
                    site = folder[folder.length - 1].toString();
                    trackObject.argsa.push("WT.cg_n", site);
                }
                else if (window.wt_sp_globals.title) {
                    trackObject.argsa.push("WT.cg_n", window.wt_sp_globals.title);
                }
                else {
                    path = window.location.pathname;
                    folder = path.split("/");
                    site = folder[2];
                    trackObject.argsa.push("WT.cg_n", site);
                }
            }
            catch (ex) {
            }
        }

        // Sub content group
        if ((parent.document.title) && (cfg.content)) {
            try {
                if (window.RegExp) {
                    if (window.wt_sp_globals.isSearchPage === false) {
                        var tire = new RegExp("^" + window.location.protocol + "//" + window.location.hostname + "\\s-\\s");
                        trackObject.argsa.push("WT.cg_s", parent.document.title.replace(tire, ""));
                    }
                }
                else {
                    if (window.wt_sp_globals.isSearchPage === false) {
                        trackObject.argsa.push("WT.cg_s", parent.document.title);
                    }
                }
            }
            catch (ex) {
            }
        }

        // Breadcrumb
        if (cfg.bread) {
            try {
                var titleSpan = parent.document.getElementById(ids.breadid);
                var bcFinal = "";
                if (titleSpan) {
                    var content = "";
                    content = titleSpan.innerHTML;
                    content = content.replace(/<\/?img[^>]*>/gi, ":");
                    content = content.replace(/<\/?[^>]*>/gi, "");
                    content = content.replace(/\s+/gi, " ").replace(/^\s+|\s+$/g, "");
                    if (content.indexOf(":") === 0) content = content.substring(1, content.length);
                    content = content.replace("&amp;", "&");
                    bcFinal = content.replace(/^\s+|\s+$/g, "");
                }
                trackObject.argsa.push("WT.shp_bc", bcFinal);
            }
            catch (ex) {
            }
        }

        // Webparts on page
        // Room for improvement.  It's not picking up all webparts apparently
        if (cfg.webparts) {
            try {
                var wp_final = "";
                var divCollection = parent.document.getElementsByTagName("span");
                if (divCollection.length > 0) {
                    for (var i = 0; i < divCollection.length; i++) {
                        var Temp = divCollection[i].getAttribute("id");
                        if (/WebPartT.*/.test(Temp)) {
                            var wp_pull = divCollection[i].getAttribute("title");
                            if (wp_pull.length > cfg.webPartLimit) {
                                wp_pull = wp_pull.substring(0, cfg.webPartLimit);
                                wp_pull = wp_pull.substring(0, wp_pull.lastIndexOf(" ")) + "...";
                            }
                            if (wp_pull === "") { wp_final = wp_final + "No Title Found for " + Temp + ";"; }
                            else wp_final = wp_final + wp_pull + ";";
                        }
                    }
                    if (wp_final !== "") {
                        trackObject.argsa.push("WT.shp_wpv", wp_final.substr(0, wp_final.length - 1));
                    }
                }
                if (wp_final === "") {
                    trackObject.argsa.push("WT.shp_wpv", "");
                }
            }
            catch (ex) {
            }
        }

        // List
        // Need to check what other List options are available which open a new page that fires a subsequent hit
        // Many options need to be tracked on the click, this is only for options that open a page for that option
        if (cfg.list) {
            try {
                var url = window.location;
                var action = "";

                if (url.search && url.search.indexOf("DiscussionParentId") > 0) {
                    action = "Reply";
                }
                else if (url.href) {
                    if (url.href.indexOf("DispForm.aspx") >= 0) {
                        action = "View Item";
                    }
                    else if (url.href.indexOf("EditForm.aspx") >= 0) {
                        // Tracking on confirm edit button
                        //action = "Edit Item";
                    }
                    else if (url.href.indexOf("NewForm.aspx") >= 0) {
                        // Tracking on confirm new item button
                        //action = "New Item";
                    }
                    // Manage page doesn't pass list info, best off handled by ECB Menu option instead
                    //else if (url.href.indexOf("User.aspx") >= 0) {
                    //    action = "Manage Permissions";
                    //}
                    else {
                    }
                }
                if (action !== "") {
                    trackObject.argsa.push("WT.shp_list_item_action", action);
                    var ttl = parent.document.title;
                    if (parent.document.title.toLowerCase().indexOf("permissions:") >= 0) {
                        var sourceURL;
                        var pathArr;
                        var qry = window.location.search;
                        sourceURL = qry.substring(qry.indexOf("Source"), qry.length);
                        sourceURL = decodeURIComponent(decodeURIComponent(sourceURL));
                        sourceURL = sourceURL.substring(0, (sourceURL.indexOf("&") >= 0) ? sourceURL.indexOf("&") : sourceURL.length);
                        pathArr = sourceURL.split("/");
                        trackObject.argsa.push("WT.shp_list", pathArr[pathArr.length - 2]);
                        trackObject.argsa.push("WT.shp_list_item", ttl.substring(ttl.indexOf(": ") + 1, ttl.length).replace(/^\s+|\s+$/g, ""));
                    }
                    else {
                        var listInfo;
                        listInfo = ttl.split("-");
                        trackObject.argsa.push("WT.shp_list", listInfo[0].replace(/\s+$/, ''));
                        listInfo.shift();
                        if (listInfo.length > 0) {
                            listInfo = listInfo.join("-");
                        }
                        listInfo = listInfo.replace(/^\s+/, '').replace("...", "");
                        trackObject.argsa.push("WT.shp_list_item", listInfo);
                    }
                }
                else {
                    // Can probably remove-these should only stick on View Item page, and the links there would overwrite the values anyways
                    //trackObject.argsa.push("WT.shp_list", "", "WT.shp_list_item", "", "WT.shp_list_item_action", "");
                }
            }
            catch (ex) {
            }
        }

        // Search
        if (cfg.search && searchPage === true) {
            try {
                if (window.wt_sp_globals.currentSearchTerm !== "" && window.wt_sp_globals.currentSearchTerm !== "") {
                    trackObject.argsa.push(
                        "WT.oss", window.wt_sp_globals.currentSearchTerm,
                        "WT.oss_r", window.wt_sp_globals.currentSearchCount.toString(),
                        "WT.ti", "Search Results",
                        "WT.cg_s", "Search"
                    );
                    window.wt_sp_globals.currentSearchTerm = "";
                    window.wt_sp_globals.currentSearchCount = "";
                }
            }
            catch (ex) {
            }
        }

    }, "all");

    // All Link Tracking

    if (_sp_intra.cfg.allClick) {
        // Generic Link Tracking - Disable by default
        _sp_intra.tagObj.addSelector(_sp_intra.anchors, {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                var res = _sp_intra.getURIArrFromHREF(options.element.href);
                var docResult = _sp_intra.isDocURI(res.dcsuri, types);
                if (docResult.check === true) return true;
                else docResult = _sp_intra.isDocParam(res.dcsqry, types);
                if (docResult.check === true) return true;
                return false;
            },
            transform: function (dcsObject, multiTrackObject) {
                var el = multiTrackObject.element;
                var evt = multiTrackObject.event;
                var offsite = "";
                var destURL = "";
                var dl = "";
                var res = {};
                if (multiTrackObject.element.href.indexOf("mailto") >= 0 || multiTrackObject.element.href.indexOf("javascript") >= 0 || multiTrackObject.element.href === "") {
                    res.dcssip = window.location.hostname;
                    res.dcsuri = window.location.pathname;
                    res.dcsqry = window.location.search;
                    res.dcshash = window.location.hash;
                }
                else {
                    res = _sp_intra.getURIArrFromHREF(multiTrackObject.element.href);
                }
                var ttl = "";
                var e = evt.target || evt.srcElement;
                var img = (e.tagName === "IMG") ? true : false;
                if (img && e.alt) {
                    ttl = e.alt;
                } 
                else {
                    if (el.children.length > 0) {
                        for (var n = 0; n < el.children.length; n++) {
                            if (typeof el.childNodes[n].style === "undefined" || (el.childNodes[n].style.visibility !== "hidden" && el.childNodes[n].style.display !== "none")) {
                                ttl += (el.childNodes[n].textContent || el.childNodes[n].innerText);
                            }
                        }
                    } 
                    else {
                        ttl += (el.textContent || el.innerText);
                    }
                }
                ttl = ttl.replace(/^\s+|\s+$/g, "");
                while (ttl.indexOf("undefined") >= 0) ttl = ttl.replace("undefined", "");
                ttl = ttl.replace("Currently selected", "");
                ttl = (ttl !== "") ? ttl : (el.title ? el.title : "(No Title Found)");
                destURL = (res.dcssip + res.dcsuri).toLowerCase();
                homesite = homesite.substring(homesite.indexOf("//") + 2);
                offsite = (multiTrackObject.element.href !== "" && destURL.indexOf(homesite) === -1 && multiTrackObject.element.href.indexOf("javascript:") === -1 && multiTrackObject.element.href.indexOf("mailto:") === -1) ? true : false;
                dl = (offsite === true) ? "24" : "1";
                multiTrackObject.argsa.push(
                    "DCS.dcssip", res.dcssip,
                    "DCS.dcsuri", res.dcsuri + res.dcshash,
                    "DCS.dcsqry", res.dcsqry,
                    "DCS.dcsref", window.location.href,
                    "WT.ti", "Link: " + ttl,
                    "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag),
                    "WT.dl", dl,
                    "WT.es", window.location.hostname + window.location.pathname + ((window.location.hash) ? window.location.hash : ""),
                    "WT.offsite", offsite ? "true" : "false"
                );
            },
            finish: function (dcsObject, multiTrackObject) {
                _sp_intra.finishCleanup(dcsObject);
            }
        });
    }

    /***************************************** START DOCUMENTS *************************************************************************/

    // Documents Link Tracking (including search results)
    if (_sp_intra.cfg.documentMenuClick) {
        if (typeof types !== 'undefined' && types) {

            // Bind to direct links in Document Library, 
            _sp_intra.documentLinkBind();

            // Direct link of documents in uri or query string as regular hrefs on a page
            _sp_intra.tagObj.addSelector(_sp_intra.anchors, {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    var res = _sp_intra.getURIArrFromHREF(options.element.href);
                    var docResult = _sp_intra.isDocURI(res.dcsuri, types);
                    if (docResult.check === true) return false;
                    else docResult = _sp_intra.isDocParam(res.dcsqry, types);
                    if (docResult.check === true) return false;
                    return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var res = dcsObject.getURIArrFromEvent(multiTrackObject.element);
                    var docName = "";
                    var docResult = _sp_intra.isDocURI(res.dcsuri, types);
                    if (docResult.check === true) docName = docResult.file;
                    else docResult = _sp_intra.isDocParam(res.dcsqry, types);
                    if (docResult.check === true) docName = docResult.file;
                    multiTrackObject.argsa.push(
                        "DCS.dcssip", res.dcssip,
                        "DCS.dcsuri", res.dcsuri,
                        "DCS.dcsqry", res.dcsqry,
                        "DCS.dcsref", window.location.href,
                        "WT.ti", docName,
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag),
                        "WT.dl", "20",
                        "WT.shp_doc_a", "Open",
                        "WT.shp_doc", docName,
                        "WT.shp_doc_type", docName.substring(docName.lastIndexOf(".") + 1, docName.length),
                    //"WT.shp_doc_lib", res.dcsuri.substring(0, res.dcsuri.lastIndexOf("/")),
                        "WT.shp_act_loc", "Direct Link"
                    );
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                }
            });

            // Document Library Preview Window Links
            _sp_intra.tagObj.addSelector('a[class*="-calloutLinkEnabled"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    if (options.element.className == "js-callout-action ms-calloutLinkEnabled ms-calloutLink js-ellipsis25-a") return true;
                    if (options.element.innerHTML.toUpperCase().indexOf("SHARE") >= 0) {
                        window.wt_sp_globals.popup = true;
                        return true;
                    }
                    return false;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var res = _sp_intra.docItemPopUpLink(multiTrackObject.element);
                    for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                }
            });

            // Document Library Notebook button
            _sp_intra.tagObj.addSelector('a[class^="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    if (options.element.href && options.element.href.indexOf("&action=editnew") === -1) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    var res = _sp_intra.getURIArrFromHREF(multiTrackObject.element.href);
                    multiTrackObject.argsa.push(
                        "DCS.dcssip", res.dcssip,
                        "DCS.dcsuri", res.dcsuri,
                        "DCS.dcsqry", res.dcsqry,
                        "DCS.dcsref", res.dcsref,
                        "WT.ti", "New OneNote Document",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "New OneNote Document",
                        "WT.shp_doc_a", "New Document",
                        "WT.shp_doc_type", "one",
                        "WT.shp_act_loc", "Direct link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library +New Word button
            _sp_intra.tagObj.addSelector('a[id*="newdocWOPI-divWord"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {

                    multiTrackObject.argsa.push(
                        "WT.ti", "New Word Document",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "New Word Document",
                        "WT.shp_doc_a", "New Document",
                        "WT.shp_doc_type", "docx",
                    //"WT.shp_doc_lib", docLib,
                        "WT.shp_act_loc", "Direct link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library +New Excel button
            _sp_intra.tagObj.addSelector('a[id*="newdocWOPI-divExcel"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    multiTrackObject.argsa.push(
                        "WT.ti", "New Excel Document",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "New Excel Document",
                        "WT.shp_doc_a", "New Document",
                        "WT.shp_doc_type", "xlsx",
                        "WT.shp_act_loc", "Direct link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library +New PowerPoint button
            _sp_intra.tagObj.addSelector('a[id*="newdocWOPI-divPowerPoint"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    multiTrackObject.argsa.push(
                        "WT.ti", "New PowerPoint Document",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "New PowerPoint Document",
                        "WT.shp_doc_a", "New Document",
                        "WT.shp_doc_type", "pptx",
                        "WT.shp_act_loc", "Direct link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library +New OneNote button
            _sp_intra.tagObj.addSelector('a[id*="newdocWOPI-divOneNote"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    multiTrackObject.argsa.push(
                        "WT.ti", "New OneNote Document",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "New OneNote Document",
                        "WT.shp_doc_a", "New Document",
                        "WT.shp_doc_type", "one",
                        "WT.shp_act_loc", "Direct link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library +New Folder button
            _sp_intra.tagObj.addSelector('a[id*="newdocWOPI-divFolder"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    multiTrackObject.argsa.push(
                        "WT.ti", "New Document Folder",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "New Document Folder",
                        "WT.shp_doc_a", "New Folder",
                        "WT.shp_doc_type", "Library Folder",
                        "WT.shp_act_loc", "Direct link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library Upload Confirmation button
            _sp_intra.tagObj.addSelector('input[id*="_RptControls_btnOK"]', {
                actionElems: { INPUT: 1 },
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    var file = document.getElementById("ctl00_PlaceHolderMain_UploadDocumentSection_ctl05_InputFile").value;
                    var docName = file.substring(file.lastIndexOf("\\") + 1, file.length);
                    var loc;
                    if (parent.wt_sp_globals.ribbon) loc = "Ribbon";
                    else if (parent.wt_sp_globals.ecb) loc = "ECB Menu";
                    else if (parent.wt_sp_globals.popup) loc = "Document Library Preview Window";
                    else loc = "Direct Link";
                    var res = _sp_intra.getURIArrFromHREF(parent.window.location.href);
                    if (typeof window.libraryUrl !== "undefined") {
                        var library = window.libraryUrl;
                    }
                    if (document.getElementById("ctl00_PlaceHolderMain_ctl04_ctl01_uploadLocation") !== null) {
                        var folder = document.getElementById("ctl00_PlaceHolderMain_ctl04_ctl01_uploadLocation");
                        folder = folder.value;
                    }
                    if (typeof library !== "undefined" && typeof folder !== "undefined") {
                        library = (folder.length === 1) ? library + folder : library + folder + "/";
                        res.dcsuri = library + docName;
                    }
                    multiTrackObject.argsa.push(
                        "DCS.dcssip", res.dcssip,
                        "DCS.dcsuri", res.dcsuri,
                        "DCS.dcsqry", res.dcsqry,
                        "DCS.dcsref", res.dcsref,
                        "WT.ti", docName,
                        "WT.dl", "SHP",
                        "WT.shp_doc", docName,
                        "WT.shp_doc_a", "Upload",
                        "WT.shp_doc_type", docName.substring(docName.lastIndexOf(".") + 1, docName.length),
                    //"WT.shp_doc_lib", library.substring(0, library.length - 1),
                        "WT.shp_act_loc", loc,
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                    parent.wt_sp_globals.ribbon = false;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                }
            });

            // Document Library Edit button
            _sp_intra.tagObj.addSelector('button[class*="qcbEditButton"]', {
                actionElems: { BUTTON: 1 },
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    var currentItems = _sp_intra.getCurrentCheckedItem();
                    var docURL = currentItems.selectedDocURLs[0];
                    var url = _sp_intra.getURIArrFromHREF(docURL);
                    var docResult = _sp_intra.isDocURI(url.dcsuri, _sp_intra.types);
                    if (docResult.check === true) docName = docResult.file;
                    else docResult = _sp_intra.isDocParam(url.dcsqry, _sp_intra.types);
                    var docName = (docResult.check === true) ? docResult.file : currentItems.selectedDocNames[0];
                    var docType = _sp_intra.getDocTypeFromUriArr(url);
                    multiTrackObject.argsa.push(
                        "WT.ti", docName,
                        "DCS.dcsuri", url.dcsuri,
                        "WT.dl", "20",
                        "WT.shp_doc", docName,
                        "WT.shp_doc_a", "Edit",
                        "WT.shp_doc_type", docType,
                        "WT.shp_act_loc", "Direct Link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library Sync Confirmation button
            _sp_intra.tagObj.addSelector('button[class*="qcbSyncButton"]', {
                actionElems: { BUTTON: 1 },
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    var res = _sp_intra.getURIArrFromHREF(window.location.href);
                    multiTrackObject.argsa.push(
                        "DCS.dcssip", res.dcssip,
                        "DCS.dcsuri", res.dcsuri,
                        "DCS.dcsqry", res.dcsqry,
                        "DCS.dcsref", res.dcsref,
                        "WT.ti", "Sync \"" + document.title.substring(0, document.title.indexOf(" - ")) + "\" Library",
                        "WT.dl", "SHP",
                        "WT.shp_doc", "Sync \"" + document.title.substring(0, document.title.indexOf(" - ")) + "\" Library",
                        "WT.shp_doc_a", "Sync",
                        "WT.shp_doc_type", "Library Folder",
                        "WT.shp_act_loc", "Direct Link",
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                }
            });

            // Document Library Share button
            _sp_intra.tagObj.addSelector('input[id*="_btnShare"]', {
                actionElems: { INPUT: 1 },
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    var currentItems = _sp_intra.getCurrentCheckedItem();
                    var docURL = currentItems.selectedDocURLs[0];
                    var url = _sp_intra.getURIArrFromHREF(docURL);
                    var docResult = _sp_intra.isDocURI(url.dcsuri, _sp_intra.types);
                    if (docResult.check === true) docName = docResult.file;
                    else docResult = _sp_intra.isDocParam(url.dcsqry, _sp_intra.types);
                    var docName = (docResult.check === true) ? docResult.file : currentItems.selectedDocNames[0];
                    var docType = "";
                    if (docResult.check === true) {
                        docType = docName.substring(docName.lastIndexOf(".") + 1, docName.length);
                    } else {
                        docType = (currentItems.selectedDocTypes[0] === "OneNote") ? "one" : "Library Folder";
                    }
                    var loc;
                    if (parent.wt_sp_globals.ribbon) loc = "Ribbon";
                    else if (parent.wt_sp_globals.ecb) loc = "ECB Menu";
                    else if (parent.wt_sp_globals.popup) loc = "Document Library Preview Window";
                    else loc = "Direct Link";
                    multiTrackObject.argsa.push(
                        "DCS.dcssip", url.dcssip,
                        "DCS.dcsuri", url.dcsuri,
                        "DCS.dcsqry", url.dcsqry,
                        "DCS.dcsref", url.dcsref,
                        "WT.ti", docName,
                        "WT.dl", "SHP",
                        "WT.shp_doc", docName,
                        "WT.shp_doc_a", "Share",
                        "WT.shp_doc_type", docType,
                        "WT.shp_act_loc", loc,
                        "WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag)
                    );
                    parent.wt_sp_globals.ribbon = false;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                }
            });

            // Document Ribbon Options

            // Document New Document from Ribbon upper button
            // This can't tell you what document was uploaded specifically
            _sp_intra.tagObj.addSelector('a[class^="ms-cui-ctl-a1"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    if (options.element.parentNode.id.indexOf("Ribbon.Documents.New.NewDocument") >= 0) return false;
                    if (options.element.className.indexOf("disabled") >= 0) return true;
                    return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "New Document");
                }
            });

            // Document New Document from Ribbon New Word Document
            // This can't tell you what document was uploaded specifically
            _sp_intra.tagObj.addSelector('span[class^="ms-cui-glass-ff"],span[class^="ms-cui-glass-ie"]', {
                actionElems: { SPAN: 1 },
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    if (options.element.parentNode.id.indexOf("Ribbon.Document.All.NewDocument.Menu") >= 0) return false;
                    if (options.element.id.indexOf("Ribbon.Document.All.NewDocument.Menu") >= 0) return false;
                    if (options.element.className.indexOf("disabled") >= 0) return true;
                    return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "New Word Document");
                }
            });

            // Document Upload Document from Ribbon set flag to mark as "from ribbon", confirmation button is handled in "Document Check in Confirm button"
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.New.AddDocument"]', {
                filter: function (dcsObject, options) {
                    window.wt_sp_globals.ribbon = true;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                    return true;
                }
            });

            // Document Upload Document from Ribbon set flag to mark as "from ribbon", confirmation button is handled in "Document Check in Confirm button"
            _sp_intra.tagObj.addSelector('a[id^="idHomePageNewDocument"]', {
                filter: function (dcsObject, options) {
                    window.wt_sp_globals.ribbon = false;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                    return true;
                }
            });

            // Document New Folder from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.New.NewFolder"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "New Folder");
                }
            });

            // Document Edit Document from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.EditCheckout.EditDocument"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Edit Document");
                }
            });

            // Document Check Out from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.EditCheckout.CheckOut"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonMultiItem(dcsObject, multiTrackObject, "Check Out");
                }
            });

            // Document Check In from Ribbon 
            // Sets flag to check for ribbon option when clicking the confirm checking button
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.EditCheckout.CheckIn"]', {
                filter: function (dcsObject, options) {
                    window.wt_sp_globals.ribbon = true;
                    return true;
                }
            });

            // Document Check in Confirm button
            _sp_intra.tagObj.addSelector('input[id^="CheckinOk"]', {
                actionElems: { INPUT: 1 },
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonMultiItem(dcsObject, multiTrackObject, "Check In");
                    parent.wt_sp_globals.ribbon = false;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                }
            });

            // Document Discard Check Out from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.EditCheckout.DiscardCheckOut"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Discard Check Out");
                }
            });

            // Document View Properties from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Manage.ViewProperties"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "View Properties");
                }
            });

            // Document Edit Properties from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Manage.EditProperties"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Edit Properties");
                }
            });

            // Document Version History from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Manage.ViewVersions"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Version History");
                }
            });

            // Document Shared With from Ribbon/Manage Permissions
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Manage.ManagePermissions"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Shared With/Manage Permissions");
                }
            });

            // Document Delete from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Manage.Delete"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonMultiItem(dcsObject, multiTrackObject, "Delete");
                }
            });

            // Document Share from Ribbon
            // Set ribbon boolean, confirmation button is handled in "Document Library Share button"
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Share.ShareItem"]', {
                filter: function (dcsObject, options) {
                    window.wt_sp_globals.ribbon = true;
                    return true;
                }
            });

            // Document Alert Me - Set alert on this document from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Share.AlertMe.Menu.Scope.AlertSelection"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Set alert on this document");
                }
            });

            // Document Alert Me - Manage My Alerts from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Share.AlertMe.Menu.ManageAlerts"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonMultiItem(dcsObject, multiTrackObject, "Manage My Alerts");
                }
            });

            // Document Popularity Trends/View Reports from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Share.ViewAnalyticsReport"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonMultiItem(dcsObject, multiTrackObject, "Popularity Trends");
                }
            });

            // Document Follow from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Share.Follow"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Follow");
                }
            });

            // Document Download a Copy from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Copies.Download"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Download");
                }
            });

            // Document Send to Other Location from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Document.All.SendTo.Menu.Items.OtherLocation"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Send To Other Location");
                }
            });

            // Document Send to Create Document Workspace from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Document.All.SendTo.Menu.Items.CreateDocumentWorkspace"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Create Document Workspace");
                }
            });

            // Document Manage Copies from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Copies.ManageCopies"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Manage Copies");
                }
            });

            // Document Go to source from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Copies.GoToSourceItem"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Go To Source Item");
                }
            });

            // Document View Workflows from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Workflow.ViewWorkflows"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "View Workflows");
                }
            });

            // Document Publish from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Workflow.Publish"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Publish");
                }
            });

            // Document Unpublish from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Workflow.Unpublish"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Unpublish");
                }
            });

            // Document Workflow Aprove/Reject
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Workflow.Moderate"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Aprove/Reject");
                }
            });

            // Document Workflow Cancel Approval
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Workflow.CancelApproval"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Cancel Approval");
                }
            });

            // Document Tags & Notes from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.TagsAndNotes"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Tags & Notes");
                }
            });

            // Not sure where I saw these:
            // Document Send Email from Ribbon
            _sp_intra.tagObj.addSelector('a[id^="Ribbon.Documents.Share.EmailItemLink"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return (options.element.className.indexOf("disabled") >= 0);
                },
                transform: function (dcsObject, multiTrackObject) {
                    _sp_intra.documentRibbonSingleItem(dcsObject, multiTrackObject, "Send Email");
                }
            });

            // Use the cancel buttons to reset the ribbon, ecb and popup booleans for confirmation pages
            // Document cancel
            _sp_intra.tagObj.addSelector('input[id*="_BtnCancel"]', {
                actionElems: { INPUT: 1 },
                filter: function (dcsObject, options) {
                    parent.wt_sp_globals.ribbon = false;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                    return true;
                }
            });

            // Document cancel
            _sp_intra.tagObj.addSelector('a[id^="DlgClose"]', {
                actionElems: { INPUT: 1 },
                filter: function (dcsObject, options) {
                    parent.wt_sp_globals.ribbon = false;
                    parent.wt_sp_globals.ecb = false;
                    parent.wt_sp_globals.popup = false;
                    return true;
                }
            });

            /***************************************** END DOCUMENTS *************************************************************************/

            /***************************************** START SEARCH *************************************************************************/

            // Search Document Clicks

            // Search Result Item Click
            _sp_intra.tagObj.addSelector('a[class*="srch-item-link"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                    return false;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var href = multiTrackObject.element.href;
                    var res = _sp_intra.searchItemClick(multiTrackObject.element, href);
                    for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                    multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                }
            });

            // Search Results Preview Window - OPEN
            _sp_intra.tagObj.addSelector('a[id*="_hoverOpen"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var option = "Open";
                    var href = multiTrackObject.element.href;
                    var res = _sp_intra.searchItemPopUpClick(multiTrackObject.element, href, option);
                    for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                    multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                }
            });

            // Search Results Preview Window - FOLLOW
            _sp_intra.tagObj.addSelector('a[id*="item_hoverFollow"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var href = multiTrackObject.element.href.substring(multiTrackObject.element.href.indexOf("('") + 2, multiTrackObject.element.href.lastIndexOf("',"));
                    while (href.indexOf("\\u002f") >= 0) href = href.replace("\\u002f", "/");
                    var option = "Follow";
                    var res = _sp_intra.searchItemPopUpClick(multiTrackObject.element, href, option);
                    for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                    multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                }
            });

            // Search Results Preview Window - SEND
            _sp_intra.tagObj.addSelector('a[id*="item_hoverSend"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var option = "Send Email";
                    var href = decodeURIComponent(multiTrackObject.element.href);
                    href = href.substring(href.indexOf("<") + 1, href.indexOf(">"));
                    var res = _sp_intra.searchItemPopUpClick(multiTrackObject.element, href, option);
                    for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                    multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                }
            });

            // Search Results Preview Window - VIEW LIBRARY
            _sp_intra.tagObj.addSelector('a[id*="item_hoverParentLink"]', {
                filter: function (dcsObject, options) {
                    if (dcsObject._isRightClick(options.event)) return true;
                },
                transform: function (dcsObject, multiTrackObject) {
                    var option = "View Library";
                    var href = multiTrackObject.element.href;
                    var res = _sp_intra.searchItemPopUpClick(multiTrackObject.element, href, option);
                    for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                    multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
                },
                finish: function (dcsObject, multiTrackObject) {
                    _sp_intra.finishCleanup(dcsObject);
                }
            });
        }
    }

    /***************************************** END SEARCH *************************************************************************/

    /***************************************** START LISTS *************************************************************************/

    // List Tracking
    if (_sp_intra.cfg.list) {

        // Lists New Item Direct Confirmation Button on NewForm.aspx
        _sp_intra.tagObj.addSelector('input[id*="diidIOSaveItem"]', {
            actionElems: { INPUT: 1 },
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                if (window.location.href.indexOf("/EditForm.aspx") >= 0) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listNewItem(dcsObject, multiTrackObject, "Direct Link");
            }
        });

        // Lists New Item Ribbon Confirmation Button on NewForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Edit.Commit.Publish"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                if (window.location.href.indexOf("/EditForm.aspx") >= 0) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listNewItem(dcsObject, multiTrackObject, "Ribbon");
            }
        });

        // Lists Ribbon Shared With Button on DispForm.aspx and EditForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Display.Manage.ManagePermissions"],a[id^="Ribbon.ListItem.Manage.ManagePermissions-Medium"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listDispFormRibbon(dcsObject, multiTrackObject, "Shared With/Manage Permissions");
            }
        });

        // Lists Ribbon Delete on DispForm.aspx and EditForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Display.Manage.DeleteItem"],a[id^="Ribbon.ListForm.Edit.Actions.DeleteItem"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listDispFormRibbon(dcsObject, multiTrackObject, "Delete Item");
            }
        });

        // Lists Alert Me Button on DispForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Display.Manage.Alert"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listDispFormRibbon(dcsObject, multiTrackObject, "Set alert on this item");
            }
        });

        // Lists Tags & Notes Ribbon on DispForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListItem.TagsAndNotes.TagsAndNotes"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listDispFormRibbon(dcsObject, multiTrackObject, "Tags & Notes");
            }
        });

        // Lists Workflows Button on DispForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Display.Manage.Workflows"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listDispFormRibbon(dcsObject, multiTrackObject, "View Workflows");
            }
        });

        // Lists Attach File Button on EditForm.aspx and NewForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Edit.Actions.AttachFile"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listDispFormRibbon(dcsObject, multiTrackObject, "Attach File");
            }
        });

        // Lists Edit Item Direct Confirmation Button on EditForm.aspx
        _sp_intra.tagObj.addSelector('input[id*="diidIOSaveItem"]', {
            actionElems: { INPUT: 1 },
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                if (window.location.href.indexOf("/EditForm.aspx") >= 0 && options.element.className.indexOf("disabled") < 0) return false;
                return true;
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listEditItem(dcsObject, multiTrackObject, "Direct Link");
            }
        });

        // Lists Edit Item Ribbon Confirmation Button on EditForm.aspx
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListForm.Edit.Commit.Publish"],a[id^="Ribbon.DocLibListForm.Edit.Commit.Publish"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                if (window.location.href.indexOf("/EditForm.aspx") >= 0 && options.element.className.indexOf("disabled") < 0) return false;
                return true;
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listEditItem(dcsObject, multiTrackObject, "Ribbon");
            }
        });

        // Lists Delete Ribbon for ITEMS Ribbon
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListItem.Manage.Delete"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listItemsRibbon(dcsObject, multiTrackObject, "Delete Item");
            }
        });

        // Lists Attach File for ITEMS Ribbon
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListItem.Actions.AttachFile"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listItemsRibbon(dcsObject, multiTrackObject, "Attach File");
            }
        });

        // Lists Alert Me - Set alert on this item for ITEMS Ribbon
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListItem.Share.AlertMe.Menu.Scope.AlertSelection"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listItemsRibbon(dcsObject, multiTrackObject, "Set alert on this item");
            }
        });

        // Lists Alert Me - Manage My Alerts File for ITEMS Ribbon
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListItem.Share.AlertMe.Menu.ManageAlerts.ManageAlerts"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listItemsRibbon(dcsObject, multiTrackObject, "Manage My Alerts");
            }
        });

        // Lists Workflows File for ITEMS Ribbon
        _sp_intra.tagObj.addSelector('a[id^="Ribbon.ListItem.Workflow.ViewWorkflows"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                return (options.element.className.indexOf("disabled") >= 0);
            },
            transform: function (dcsObject, multiTrackObject) {
                _sp_intra.listItemsRibbon(dcsObject, multiTrackObject, "View Workflows");
            }
        });
    }

    /***************************************** END LISTS *************************************************************************/

    /***************************************** START SOCIAL *************************************************************************/
    // Social Link Tracking

    if (_sp_intra.cfg.socialMenuClick) {

        // Social Post
        _sp_intra.tagObj.addSelector('button[id*="postbutton"]', {
            actionElems: { BUTTON: 1 },
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
            },
            transform: function (dcsObject, multiTrackObject) {
                var option = "Post";
                var res = _sp_intra.socialFeedAction(option);
                if (parent.document.getElementsByClassName("ms-microfeed-imageAttachmentPreview").length > 0) res["WT.soc_image"] = "true";
                else res["WT.soc_image"] = "";
                for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
            },
            finish: function (dcsObject, multiTrackObject) {
                _sp_intra.finishCleanup(dcsObject);
            }
        });

        // Social Reply
        _sp_intra.tagObj.addSelector('button[id*="postreplybutton"]', {
            actionElems: { BUTTON: 1 },
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
            },
            transform: function (dcsObject, multiTrackObject) {
                var option = "Reply";
                var res = _sp_intra.socialFeedAction(option);
                if (parent.document.getElementsByClassName("ms-microfeed-imageAttachmentPreview").length > 0) res["WT.soc_image"] = "true";
                else res["WT.soc_image"] = "";
                for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
            },
            finish: function (dcsObject, multiTrackObject) {
                _sp_intra.finishCleanup(dcsObject);
            }
        });

        // Social Delete Post
        _sp_intra.tagObj.addSelector('button[id*="confConfirmButton"]', {
            actionElems: { BUTTON: 1 },
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
                if (options.element.id.toLowerCase().indexOf("confconfirmbutton") >= 0 && options.element.className.toLowerCase().indexOf("microfeed")) return false;
            },
            transform: function (dcsObject, multiTrackObject) {
                var option = "Delete Post";
                var res = _sp_intra.socialFeedAction(option);
                for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
            },
            finish: function (dcsObject, multiTrackObject) {
                _sp_intra.finishCleanup(dcsObject);
            }
        });

        // Social Like/Unlike
        _sp_intra.tagObj.addSelector('a[id*="likebutton"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
            },
            transform: function (dcsObject, multiTrackObject) {
                var option;
                if (typeof multiTrackObject.element.attributes.liked !== "undefined") option = "Unlike";
                else option = "Like";
                var res = _sp_intra.socialFeedAction(option);
                for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
            },
            finish: function (dcsObject, multiTrackObject) {
                _sp_intra.finishCleanup(dcsObject);
            }
        });

        // Social Follow User
        _sp_intra.tagObj.addSelector('a[id*="followlinkfori"],a[id*="FollowLinkFor"]', {
            filter: function (dcsObject, options) {
                if (dcsObject._isRightClick(options.event)) return true;
            },
            transform: function (dcsObject, multiTrackObject) {
                var option;
                var userName = multiTrackObject.element.name;
                if (typeof userName !== "undefined") {
                    if(userName.indexOf("|") != -1){
                        userName = userName.split("|");
                        if(userName.length > 2){
                            userName = userName[2].toString().toUpperCase();
                        }
                    }else{
                        // In SP 2013 OnPremise we also fetch the user account from element name. However, it is not delimited by "|" but
                        // discovered by position, where it begins at 13th character (just after "FollowLinkFor" prefix)
                        if (userName.length > 13) {
                            userName = userName.substr(13).replace(/_-_/g, "\\").toUpperCase();
                        }
                    }

                    // maintain support on older browsers (IE8) use of innerText
                    var textContent = multiTrackObject.element.textContent ? multiTrackObject.element.textContent : multiTrackObject.element.innerText;
                    if (textContent.toLowerCase().indexOf("stop") === 0) option = "Stop following " + userName;
                    else option = "Follow " + userName;
                }
                var res = _sp_intra.socialFeedAction(option);
                for (var item in res) multiTrackObject.argsa.push(item, res[item]);
                multiTrackObject.argsa.push("WT.nv", dcsObject.dcsNavigation(multiTrackObject.event, dcsObject.navigationtag));
            },
            finish: function (dcsObject, multiTrackObject) {
                _sp_intra.finishCleanup(dcsObject);
            }
        });
    }

    /***************************************** END SOCIAL *************************************************************************/

    // ECB Menu Options
    window.setTimeout(function () {

        if (typeof ExecuteOnClick === 'function' && !ExecuteOnClick.isWT) {
            var origExecuteOnClick = ExecuteOnClick;
            window.ExecuteOnClick = function (b, a) {
                var checked = _sp_intra.getCurrentCheckedItem();
                var lastchecked = checked.selectedTypes.length - 1;
                window.wt_sp_globals.currentItemURL = checked.selectedDocURLs[lastchecked];
                window.wt_sp_globals.currentItemName = checked.selectedDocNames[lastchecked];
                window.wt_sp_globals.currentItemDoc = checked.selectedDocTypes[lastchecked];
                window.wt_sp_globals.currentItemType = checked.selectedTypes[lastchecked];
                var executeOrigInCallBack = false;
                var delay = 0;
                var res = {};
                var action = "";

                // DOCUMENT LIBRARY
                // Document - View Properties from ECB Menu
                if (_sp_intra.cfg.documentMenuClick && (typeof window.wt_sp_globals.currentItemType !== "undefined" && window.wt_sp_globals.currentItemType === "Document Library")) {
                    if (b.toString().indexOf("DocLibECB_Click_ID_ViewProperties") >= 0 || b.toString().indexOf("EditItem2") >= 0) {
                        action = "View Properties";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Edit Properties from ECB Menu
                    else if (b.toString().indexOf("DocLibECB_Click_ID_EditProperties") >= 0 || b.toString().indexOf("EditItemWithCheckoutAlert") >= 0) {
                        action = "Edit Properties";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - View in Browser from ECB Menu (O365 or OnPrem 2013 specific)
                    else if ( b.toString().indexOf("ID_CA_View_in_Browser") >= 0 || 
                             (b.toString().indexOf("WopiFrame.aspx") >= 0 && b.toString().indexOf("action=view") >= 0) || 
                             (b.toString().indexOf("xlviewer.aspx") >= 0 && b.toString().indexOf("DefaultItemOpen") >= 0) ) {
                        action = "View in Browser";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Edit in Browser from ECB Menu
                    else if (b.toString().indexOf("ID_CA_Edit_in_Browser") >= 0 || (b.toString().indexOf("WopiFrame.aspx") >= 0 && b.toString().indexOf("action=edit") >= 0)) {
                        action = "Edit in Browser";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Check Out from ECB Menu
                    else if (b.toString().indexOf("DocLibECB_Click_ID_Checkout") >= 0 || b.toString().indexOf("CheckoutSingleItemFromECB") >= 0) {
                        action = "Check Out";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                        delay = 10;
                    }

                    // Document - Discard Checkout from ECB Menu
                    else if (b.toString().indexOf("DocLibECB_Click_ID_DiscardCheckou") >= 0 || b.toString().indexOf("UnDoCheckOutwithNotification") >= 0) {
                        action = "Discard Checkout";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Check In from ECB Menu
                    else if (b.toString().indexOf("DocLibECB_Click_ID_Checkin") >= 0 || b.toString().indexOf("CheckInSingleItemFromECB") >= 0) {
                        // Disabled, but setting window.location.ecb option be set to true
                        // Allows addSelector bound to "confirm" check in button to check if it was initiated from the ecb or ribbon
                        action = "";
                        //    action = "Check In";
                        //    res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document Version History from ECB Menu   
                    else if (b.toString().indexOf("DocLibECB_Click_ID_Versions") >= 0) {
                        action = "Version History";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document Compliance Details from ECB Menu
                    else if (b.toString().indexOf("ID_CA_Compliance_Details") >= 0 || b.toString().indexOf("commonShowModalDialog") >= 0) {
                        action = "Compliance Details";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document Workflows from ECB Menu
                    else if (b.indexOf("DocLibECB_Click_ID_Workflows") >= 0 || (b.indexOf("STSNavigate") >= 0 && b.indexOf("/Workflow.aspx") >= 0)) {
                        action = "View Workflows";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document Folder Connect to Outlook
                    else if (b.toString().indexOf("DocLibECB_Click_ID_WorkOffline") >= 0 || b.toString().indexOf("ExportHailStorm") >= 0) {
                        action = "Connect to Outlook";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document Download a Copy from ECB Menu
                    else if (b.toString().indexOf("DocLibECB_Click_ID_DownloadACopy") >= 0 || (b.indexOf("STSNavigate") >= 0 && b.indexOf("/download.aspx") >= 0)) {
                        action = "Download";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Follow from ECB Menu   
                    else if (b.toString().indexOf("ID_CA_Follow") >= 0 && window.wt_sp_globals.currentItemType === "Document Library") {
                        action = "Follow";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Shared With from ECB Menu   
                    else if (b.toString().indexOf("DocLibECB_Click_ID_MngPerms") >= 0 || b.toString().indexOf("DisplaySharedWithDialog") >= 0) {
                        action = "Shared With/Manage Permissions";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }

                    // Document - Delete from ECB Menu
                    else if (b.toString().indexOf("DocLibECB_Click_ID_DeleteDocItem") >= 0 || b.toString().indexOf("DeleteDocLibItem") >= 0) {
                        action = "Delete";
                        res = _sp_intra.ecbDocuments(action);
                        executeOrigInCallBack = false;
                    }
                }

                // LISTS
                else if (_sp_intra.cfg.list && (typeof window.wt_sp_globals.currentItemType !== "undefined" && window.wt_sp_globals.currentItemType === "List Library")) {

                    // These two are disabled because we can use the following page view hit to track the event
                    // We may wish to reenable this, so we can see where the click occurred (ecb or ribbon), and disable collection of list params on page view.

                    // List - View Item from ECB Menu
                    //else if (b.toString().indexOf("ECB_Click_ID_ViewItem") >= 0) {
                    //    action = "View Item";
                    //    res = _sp_intra.ecbListItem(action);
                    //    executeOrigInCallBack = false;
                    //}
                    // List - Edit Item from ECB Menu
                    //else if (b.toString().indexOf("ECB_Click_ID_EditItem") >= 0) {
                    //    action = "Edit Item";
                    //    res = _sp_intra.ecbListItem(action);
                    //    executeOrigInCallBack = false;
                    //}

                    // List Compliance Details from ECB Menu
                    if (b.toString().indexOf("ID_CA_Compliance_Details") >= 0 || b.toString().indexOf("commonShowModalDialog") >= 0) {
                        action = "Compliance Details";
                        res = _sp_intra.ecbListItem(action);
                        executeOrigInCallBack = false;
                    }
                    // List Workflows from ECB Menu
                    else if (b.indexOf("ECB_Click_ID_Workflows") >= 0 || b.indexOf("STSNavigate") >= 0 && b.indexOf("/Workflow.aspx") >= 0) {
                        action = "View Workflows";
                        res = _sp_intra.ecbListItem(action);
                        executeOrigInCallBack = false;
                    }
                    // List Alert Me from ECB Menu
                    else if (b.indexOf("ECB_Click_ID_Subscribe") >= 0 || b.indexOf("NavigateToSubNewAspxV4") >= 0) {
                        action = "Alert Me";
                        res = _sp_intra.ecbListItem(action);
                        executeOrigInCallBack = false;
                    }
                    // List - Follow from ECB Menu   
                    else if (b.toString().indexOf("ID_CA_Follow") >= 0) {
                        action = "Follow";
                        res = _sp_intra.ecbListItem(action);
                        executeOrigInCallBack = false;
                    }
                    // List - Manage Permission from ECB Menu   
                    else if (b.toString().indexOf("ECB_Click_ID_AdvPerms") >= 0 || b.toString().indexOf("DisplaySharedWithDialog") >= 0) {
                        action = "Shared With/Manage Permissions";
                        res = _sp_intra.ecbListItem(action);
                        executeOrigInCallBack = false;
                    }
                    // List - Delete from ECB Menu
                    else if (b.toString().indexOf("ECB_Click_ID_DeleteItem") >= 0 || b.toString().indexOf("DeleteListItem") >= 0) {
                        action = "Delete Item";
                        res = _sp_intra.ecbListItem(action);
                        executeOrigInCallBack = false;
                    }
                }

                // SOCIAL
                else if (_sp_intra.cfg.socialMenuClick && typeof window.wt_sp_globals.currentItemType === "undefined" && ((typeof a !== "undefined" && a !== null) && (typeof a._arrSelected !== "undefined" && a._arrSelected !== null))) {
                    // Social - Copy link to conversation from ECB Menu   
                    if (a._arrSelected[0].innerHTML.toLowerCase().indexOf("copy link to conversation") >= 0) {
                        action = "Copy link to conversation";
                        res = _sp_intra.socialFeedAction(action);
                        executeOrigInCallBack = false;
                    }
                    // Social - Lock conversation from ECB Menu   
                    else if (a._arrSelected[0].innerHTML.toLowerCase().indexOf("unlock conversation") >= 0) {
                        action = "Unlock conversation";
                        res = _sp_intra.socialFeedAction(action);
                        executeOrigInCallBack = false;
                    }
                    // Social - Follow up from ECB Menu   
                    else if (a._arrSelected[0].innerHTML.toLowerCase().indexOf("lock conversation") >= 0) {
                        action = "Lock conversation";
                        res = _sp_intra.socialFeedAction(action);
                        executeOrigInCallBack = false;
                    }
                    // Social - Unlock conversation from ECB Menu   
                    else if (a._arrSelected[0].innerHTML.toLowerCase().indexOf("follow up") >= 0) {
                        action = "Follow up";
                        res = _sp_intra.socialFeedAction(action);
                        executeOrigInCallBack = false;
                    }
                }

                // Something else from ECB Menu
                else {
                    origExecuteOnClick(b, a);
                    return;
                }

                // Intentionally blank action values such as document check in
                if (action === "") {
                    origExecuteOnClick(b, a);
                    return;
                }

                var dcsCallback, postFunction;
                if (executeOrigInCallBack) {
                    dcsCallback = function (dcsObject, options) {
                        origExecuteOnClick(b, a);
                    };
                    postFunction = function (b, a) { };
                }
                else {
                    dcsCallback = function (dcsObject, options) { };
                    postFunction = origExecuteOnClick;
                }

                /*************************************************
                *
                * JDN - Removed descriptive text prepended to document
                * name in WT.ti so that WT.ti could be used as a dimension
                * JDN - Passing URI of document as dcsuri
                *
                **************************************************/

                // Add action loc param to the res object before sending
                res["WT.shp_act_loc"] = "ECB Menu";
                var argsa = [];
                for (var item in res) argsa.push(item, res[item]);

                // Set option for confirm button to check
                window.wt_sp_globals.ecb = true;
                Webtrends.multiTrack({
                    argsa: argsa,
                    finish: function (dcsObject, multiTrackObject) {
                        _sp_intra.finishCleanup(dcsObject);
                    },
                    delayTime: 500,
                    callback: dcsCallback
                });
                postFunction(b, a);
            };
            window.ExecuteOnClick.isWT = true;
        }
    }, 1000);

    // If search page, let addSearchResultListener register the callback
    if (window.wt_sp_globals.isSearchPage === false) {
        // Wait for UPS plugin
        if (tag.config.plugins.ups) {
            var upsPing = 0;
            var upsPlugin = setInterval(function () {
                if (typeof wt_sp_user !== "undefined" || upsPing >= 40) {
                    tag.registerPluginCallback("sp");
                    clearInterval(upsPlugin);
                } else {
                    upsPing++;
                }
            }, 100);
        }
        // Wait for DOM element instead
        else {
            var unamePing = 0;
            var unamePlugin = setInterval(function () {
                if (parent.document.getElementById(ids.pritopleveluserid) !== null || parent.document.getElementById(ids.sectopleveluserid) !== null || unamePing >= 40) {
                    tag.registerPluginCallback("sp");
                    clearInterval(unamePlugin);
                } else {
                    unamePing++;
                }
            }, 100);
        }
    }
};
Webtrends.registerPlugin('sp', sp_intra_loader);