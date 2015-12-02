/*
Copyright (c) 2014 Webtrends, Inc.
SharePoint 2013/SPO Loader v4.0.7
*/

// The following is embedded in the page via the App
//
//  var createLoadFile = true;
//  var scripts = document.getElementsByTagName(\"script\");
//  for(var i = 0; i < scripts.length; i++) {
//    if(scripts[i].getAttribute('src') && scripts[i].getAttribute('src').toLowerCase().indexOf('webtrends.load.js') > -1) createLoadFile = false;
//  }
//  if (createLoadFile) {
//    var s = document.createElement(\"script\");
//    s.async = \'true\';
//    s.src = \"" + appInstanceScriptBase + "webtrends.load.js\";
//    var s2 = document.getElementsByTagName(\"script\")[0];
//    s2.parentNode.insertBefore(s, s2);
//  }
//

// BEGIN Manual Configuration for non-App installation

window.wt_sp_globals = window.wt_sp_globals ? window.wt_sp_globals : {};
window.wt_sp_globals.baseTagUrl = "//s.webtrends.com/js/";
window.wt_sp_globals.url = "https://microsoft.sharepoint.com/sites/o365coe/WebtrendsAssets/";
window.wt_sp_globals.loadCount = 0;
window.wt_sp_globals.configs = {
    domain: "m.webtrends.com",
    dcsid: "dcs222t0vkl4i1jtdab29kx8c_3g5c",
    timezone: "-8",
    homesite: "https://microsoft.sharepoint.com/sites/o365coe",
    downloadtypes: "xls,doc,ppt,pdf,csv,zip,gzip,oft,ics,vsd,txt,wmv,xps,gif,jpg,mp4,xsn,msg,xap,pub,js,bmp",
    i18n: true,
    preserve: true,
    debug: false,
    plugins: {
        ups: {
            src: wt_sp_globals.url + "webtrends.ups.js",
            async: false,
            waitForCallback: true,
            timeout: 7500
        },
        sp: {
            src: wt_sp_globals.url + "webtrends.sp.js",
            async: false,
            waitForCallback: true,
            timeout: 7500
        }
    }
};

if (typeof window.wt_sp_globals.configs.plugins.sp !== "undefined") {
		window.wt_sp_globals.configs.plugins.sp.extraUserInfo= true,
    window.wt_sp_globals.configs.plugins.sp.username= true,
    window.wt_sp_globals.configs.plugins.sp.userlogin= true,
    window.wt_sp_globals.configs.plugins.sp.dcsaut= true,
    window.wt_sp_globals.configs.plugins.sp.dcsautParam= "WT.shp_login",
    window.wt_sp_globals.configs.plugins.sp.dcsvid= false,
    window.wt_sp_globals.configs.plugins.sp.dcsvidParam= "WT.shp_login",
    window.wt_sp_globals.configs.plugins.sp.content= true,
    window.wt_sp_globals.configs.plugins.sp.search= true,
    window.wt_sp_globals.configs.plugins.sp.bread= true,
    window.wt_sp_globals.configs.plugins.sp.webparts= true,
    window.wt_sp_globals.configs.plugins.sp.documentMenuClick= true,
    window.wt_sp_globals.configs.plugins.sp.list= true,
    window.wt_sp_globals.configs.plugins.sp.socialMenuClick= true,
    window.wt_sp_globals.configs.plugins.sp.allClick= true,
    window.wt_sp_globals.configs.plugins.sp.webPartLimit= "40"
    window.wt_sp_globals.configs.plugins.sp.ids = {};
    window.wt_sp_globals.configs.plugins.sp.ids.breadid = "DeltaPlaceHolderPageTitleInTitleArea";
    window.wt_sp_globals.configs.plugins.sp.ids.pritopleveluserid = "SuiteNavUserName"; // zz4_Menu for 2013
    window.wt_sp_globals.configs.plugins.sp.ids.sectopleveluserid = "zz5_Menu"; // zz5_Menu for 2013
    window.wt_sp_globals.configs.plugins.sp.ids.searchBox = "DataProvider";
    window.wt_sp_globals.configs.plugins.sp.ids.searchPage = "osssearchresults.aspx,results.aspx,search.aspx"; // list of search pages to check for
}

// END Manual Configuration for non-App installation

window.webtrendsAsyncInit = function () {

    dcs = new Webtrends.dcs().init(window.wt_sp_globals.configs);
    window.wt_sp_globals.Webtrends = Webtrends;
    window.wt_sp_globals.dcs = dcs;
    window.wt_sp_globals.loadCount++;
    // Cancel hits from WopiFrame document editors
    // May be able to move this to trackIfReady along with the iFrame check
    if (window.location.pathname.indexOf("WopiFrame.aspx") < 0) {
        trackIfReady();
    }
};

// Check for MDS and add the function to fire at the end of a "page" load
if (window.location.href.indexOf("start.aspx") >= 0 && window.wt_sp_globals.method != "feature") {
    asyncDeltaManager.add_endRequest(function () {
        // Restore Webtrends object
        var pageReloadCount = 0;
        pageReload = setInterval(function () {
            if (document.body && document.body.readyState === 'complete' || pageReloadCount > 50) {
                clearInterval(pageReload);
                window.Webtrends = window.wt_sp_globals.Webtrends;
                window.dcs = window.wt_sp_globals.dcs;
                if (typeof (Webtrends) != 'undefined') {
                    resetScript();
                }
                else {
                    loadScript();
                }
                // Reexecute some plugin funtions
                if (window.wt_sp_globals.pluginObj) {
                    if (window.wt_sp_globals.configs.plugins.sp.search) {
                        window.wt_sp_globals.pluginObj.searchPageTest();
                        if (window.wt_sp_globals.isSearchPage) {
                            window.wt_sp_globals.pluginObj.addSearchResultListener();
                        }
                    }
                    if (window.wt_sp_globals.configs.plugins.sp.documentMenuClick) window.wt_sp_globals.pluginObj.documentLinkBind();
                }
                window.wt_sp_globals.loadCount = 2;

                // Need to find a way to have the load file remove and reload the sp.js plugin, so it forces the beacon to wait for the callback!!!
                // Click to list item triggers this twice.
                trackIfReady();
            }
            else {
                pageReloadCount++;
            }
        }, 100);
    });
}

function trackIfReady() {
    // Register wt_sp_globals to persist
    Type.registerNamespace('wt_sp_globals');

    // This ensures that the script has loaded and that the page has finished loading so everything is available
    if (window.wt_sp_globals.loadCount >= 2) {

        // Do not fire multitrack if in an iframe
        if (window.self === window.top) {
            // Fire a Webtrends call
            dcs.track({
                finish: function (dcsObject, multiTrackObject) {
                    window.wt_sp_globals.pluginObj.finishCleanup(dcsObject);
                }
            });

            // Update dcs object with new page data
            window.wt_sp_globals.dcs = dcs;
        }
    }
}


// Insert webtrends.js into DOM
function loadScript() {
    (function () {
        var s = document.createElement("script");
        s.async = true;
        s.src = window.wt_sp_globals.url + "webtrends.js";
        var s2 = document.getElementsByTagName("script")[0];
        s2.parentNode.insertBefore(s, s2);
    })();
}

// Simulated page transitions with MDS wipes out some functionality from the already
// loaded base tag. Using our MDS compatible feature, our script is being reloaded each
// time so everything is reset, but with the manual install we have to do it ourselves.
function resetScript() {

    // Rebind to mouse events so heatmaps and selectors work
    var tmp = /MSIE (\d+)/.exec(navigator.userAgent);
    var ie = (tmp) ? tmp[1] : 99;
    Webtrends.addEventListener(document, (ie >= 8) ? "mousedown" : "mouseup", function (e) {
        if (!e) e = window.event;
        Webtrends.broadcastEvent("wtmouse", { 'event': e });
    });
}

// Always load the script. This is only run on initial page load so it will not be executed again in MDS
loadScript();
window.wt_sp_globals.loadCount++;