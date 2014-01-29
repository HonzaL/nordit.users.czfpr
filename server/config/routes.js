/*!
 * Module dependencies.
 */

var async = require('async')

/**
 * Controllers
 */

//  , auth = require('./middlewares/authorization')

/**
 * Route middlewares
 */

//var articleAuth = [auth.requiresLogin, auth.article.hasAuthorization]

/**
 * Expose routes
 */

function render(app) {
    return function(req, res)  {
        var template = app.settings.env == 'development' ? 'layout-dev' : 'layout';
	res.render(template, {
	    env: app.settings.env,
	})
    }
}

module.exports = function (app, config, passport) {

  var menu = require(config.path.server + '/controllers/menu');

  app.get(/^\/menu(\/.*)$/, menu.get);

//  app.get('/*', render(app));

}
