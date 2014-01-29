
/**
 * Module Dependencies
 */

var express = require('express')
  , resource = require('express-resource')

module.exports = function (app, config) { 

    var base = '/api/v1/'

    app.resource('contracts', require(config.path.server + '/controllers/contracts'), {base: base})

    var nalarmsOptions = {
	pgUri: config.db.postgres,
	redisHost: config.db.redis,
	contract: 'czfpr'
    }
    app.resource('alarm', require('nalarms')(nalarmsOptions), {base: base})

}
