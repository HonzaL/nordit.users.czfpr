
/**
 * Config file
 */

var path = require('path')
  , rootPath = path.normalize(__dirname + '/../..')
  , serverPath = path.normalize(__dirname + '/..')
  , sharePath = path.normalize(__dirname + '/../../share')
  , clientPath = path.normalize(__dirname + '/../../client')

module.exports = {
    default: {
	db: {
	    mongo: 'mongodb://localhost/czfpr',
	    mongoMaster: 'mongodb://localhost/users',
	    postgres: 'postgres://postgres:postgres@localhost/Lomna',
	    redis: '192.168.2.17',
	},
	path: {
	    root: rootPath,
	    server: serverPath,
	    client: clientPath,
	    share: sharePath
	},
	port: 3004,
	app: {
	    name: 'Nordit Business Intelligence Client Server - Lomná'
	},
	contract: {
           _id: 'czfpr',
      	   port: 3004,
      	   title: 'Lomná',
      	   groups: ['czfpr']
	},
    },
    development: {
	db: {
	    mongo: 'mongodb://localhost/czfpr_dev',
	    mongoMaster: 'mongodb://localhost/users_dev',
	    postgres: 'postgres://postgres:postgres@192.168.2.12/Lomna',
	    redis: '192.168.2.17',
	},
	app: {
	    name: 'Nordit Business Intelligence Client Server - Lomná - dev'
	},
    },
    test: {
	db: {
	    mongo: 'mongodb://localhost/czfpr_test',
	},
	app: {
	    name: 'Nordit Business Intelligence Demo Server - Lomná - test'
	},
    }
}
