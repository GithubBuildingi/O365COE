/*
Copyright (c) 2014 Webtrends, Inc.
SharePoint 2013/Office 365 User Profile Service Collector v4.0.7
*/

wtUserProfileService = function (tag, plugin) {
    // Retrieve site URL
    var siteURLCount = 0;

    // Poll for element which contains site collection URL
    siteURL = setInterval(function () {
        if (typeof _spPageContextInfo !== 'undefined' || siteURLCount >= 40) {
            clearInterval(siteURL);
            // If still not found, fall back to address bar
            if (typeof _spPageContextInfo === 'undefined') {
                var pathname = window.location.pathname;
                var dir = pathname.split("/");
                dir = dir.slice(0, 3);
                pathname = dir.join("/");
                tag.config.homesite = window.location.protocol + "//" + window.location.hostname + pathname;
            }
            else {
                tag.config.homesite = _spPageContextInfo.siteAbsoluteUrl;
            }
            // If we do not yet have cached copy, fetch user profile info
            if (typeof window.wt_sp_user === 'undefined') {
                if (typeof sessionStorage !== 'undefined' && sessionStorage !== null && sessionStorage.userProfileInfo) {
                    // Assign by extracting from webstorage cache; register plugin immediately
                    window.wt_sp_user = JSON.parse(sessionStorage.userProfileInfo);
                    tag.registerPluginCallback("ups");
                }
                else {
                    // Begin AJAX request for User Info; register plugin upon conclusion
                    wtGetProfileInfo(tag, plugin);
                }
            }
        }
        else {
            siteURLCount++;
        }
    }, 100);

    wtGetProfileInfo = function (tag, plugin) {
        // AJAX function configuration
        wtAjax({
            type: 'GET',
            url: tag.config.homesite + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
            //url: _spPageContextInfo.siteAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
            async: true,
            headers: { Accept: "application/json;odata=verbose" },
            timeout: 6000,
            // On successful request
            success: function (data) {
                if (typeof window.wt_sp_user == 'undefined') window.wt_sp_user = {};

                // Default attributes to collect
                // These are ignored/overwritten by the App
                var wtData = {
                    Department: "WT.shp_dept",
                    Manager: "WT.shp_mgr",
                    PreferredName: "WT.shp_uname",
                    Office: "WT.shp_office",
                    AccountName: "WT.shp_login",
                    Title: "WT.shp_title",
                    Location: "WT.shp_location",
                    Function: "WT.shp_function"
                };

                // Add User Attributes to list from plugin config in webtrends.load.js, removing redundant entries
                if (Webtrends.plugins.ups['userProfile']) {
                    for (var p in Webtrends.plugins.ups['userProfile']) {
                        // If the plugin config list is a User Attribute and not a WT parameter
                        if (p.indexOf("WT.") == -1) {
                            // If the User Attribute is already defined in the default list, remove it
                            for (var q in wtData) {
                                if (wtData[q] == Webtrends.plugins.ups['userProfile'][p]) {
                                    delete wtData[q];
                                }
                            }
                            // Set the User Attribute to the desired WT parameter
                            wtData[p] = Webtrends.plugins.ups['userProfile'][p];
                        }
                    }
                }

                // Store results of AJAX request
                var g = data.d.UserProfileProperties.results;

                // Move the user profile data into a simple array
                // it's easier to deal with this way and saves
                // iterating through it multiple times
                var userProfileDat = [];
                for (var c = 0; c < g.length; c++) {
                    if (g[c].Value && g[c].Value != '') userProfileDat[g[c].Key] = g[c].Value;
                }

                // Collect User Attributes and store in "wt_sp_user"
                for (var k in wtData) {
                    if (typeof userProfileDat[k] != 'undefined') {
                        wt_sp_user[wtData[k]] = userProfileDat[k];
                        // some values are | delimited string values, and we only need the last section
                        if (wt_sp_user[wtData[k]] && wt_sp_user[wtData[k]].split('|').length > 0) {
                            wt_sp_user[wtData[k]] = wt_sp_user[wtData[k]].split("|").pop();
                        }
                    }
                }

                // Replace WT parameter values with alternative User Attributes, or block them from sending
                if (Webtrends.plugins.ups['userProfile']) {
                    for (var p in Webtrends.plugins.ups['userProfile']) {
                        if (p.indexOf("WT.") >= 0) {
                            // if the User Property exists, replace the existing parameter value with its value.
                            if (userProfileDat[Webtrends.plugins.ups['userProfile'][p]] !== undefined)
                                wt_sp_user[p] = userProfileDat[Webtrends.plugins.ups['userProfile'][p]];
                            // if the User Property does not exist, replace the existing parameter value with an empty string to block it from sending
                            else wt_sp_user[p] = "";
                        }
                    }
                }

                // Cache our fetched info to avoid needless AJAX calls
                if (typeof sessionStorage !== 'undefined' && sessionStorage !== null) {
                    sessionStorage.userProfileInfo = JSON.stringify(wt_sp_user);
                }

                // Inform tag of Ready
                tag.registerPluginCallback("ups");
            },
            error: function (xhr) {
                tag.registerPluginCallback("ups");
            }
        }, tag, plugin);
    }

    // AJAX request prototype
    wtAjax = function (func, tag, plugin) {

        var upsReq = new XMLHttpRequest();
        if (typeof func.timeout != 'undefined') timeoutTime = func.timeout;
        else timeoutTime = 6000;

        ajaxTimeout = setTimeout(function () {
            if (typeof func.error == 'function') {
                func.error('UPS AJAX: Timeout');
            }
        }, timeoutTime);

        upsReq.open(func.type, func.url, true);
        if (func.headers) {
            for (var h in func.headers) {
                upsReq.setRequestHeader(h, func.headers[h]);
            }
        }

        upsReq.onreadystatechange = function () {
            if (upsReq.readyState == 4) {
                // Response Received
                if (upsReq.status == 200) {
                    // Request was successful
                    clearTimeout(ajaxTimeout);
                    func.success(JSON.parse(upsReq.responseText));
                } else {
                    func.error("UPS AJAX: Error " + upsReq.status);
                    // Not sure if func.error will trigger the callback or this
                    tag.registerPluginCallback("ups");
                }
            }
        };
        // Initiate request
        upsReq.send();
    }
}
Webtrends.registerPlugin("ups", wtUserProfileService);
