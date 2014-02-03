
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

    var nringcOptions = {
	pgUri: config.db.postgres,
	tableName: "arDCBP_xslow",
	reportTitle: "Spotřeba surovin",
	breakHour: 18,
	coldef: [
	    {_id: 'diSpotr_Davk0_Mouka1', title: 'Mouka'},
	    {_id: 'diSpotr_Davk2_Voda', title: 'Voda'},
	    {_id: 'diSpotr_Davk4_Drozdi', title: 'Droždí'},
	    {_id: 'diSpotr_Davk5_Olej', title: 'Olej'},
	    {_id: 'diSpotr_Davk6_SypkaA', title: 'Sypká A'},
	    {_id: 'diSpotr_Davk7_SypkaB', title: 'Sypká B'},
	    {_id: 'diSpotr_Davk8_RucniOlej', title: 'Ruční olej'}
	]
    }
    app.resource('spotreby', require('nringc')(nringcOptions), {base: base});

}
