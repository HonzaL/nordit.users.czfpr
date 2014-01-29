
/**
 * Module dependencies
 */

var mongoose = require('mongoose')

/**
 * Index
 *
 * Vraci vsechny dostupne zakazky
 * TODO - vratit jen dostupne pro daneho uzivatele
 */

exports.index = function(req, res) {
    var Contract = mongoose.model('Contract')
    Contract.find({}, {'_id': 1, 'title': 1, 'active': 1}, function(err, data) {
	if (err) res.send(404)
	for (var contract in data) {
	    data[contract].id = data[contract]._id;
	}
	res.type('json').send({contract: data})
    })
}

/**
 * Show
 */

exports.show = function(req, res) {
    // vracim hlavni modul
    res.type('json').render('contract.ejs');
}
