'use strict';

/**
 * @namespace Login
 */

var server = require('server');
server.extend(module.superModule);

/**
 * Login-Show : This endpoint is called to load the login page
 * @name Base/Login-Show
 * @function
 * @memberof Login
 * @param {serverfunction} - append
 */
server.append('Show', function (req, res, next) {
    var ContentMgr = require('dw/content/ContentMgr');
    var content = ContentMgr.getContent('exclusive-product-tiles');

    if (content && content.custom.body) {
        var viewData = res.getViewData();
        viewData.assetBody = content.custom.body.toString().split(' ');
        res.setViewData(viewData);
    }

    next();
});

module.exports = server.exports();
