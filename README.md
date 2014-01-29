
# Nordit Business Intelligence Client Server - Contract Boilerplate

## Install

```sh
  $ npm install
  $ cp config/config.example.js config/config.js
  $ npm start
```

[http://localhost:3000/](http://localhost:3000/) 

## Directory structure

```
/
├─client/
│ ├─css/
│ ├─lib/
│ └─scripts/
├─locale/
├─scripts/
├─server/
│ ├─config/
│ │ ├─api.js
│ │ ├─routes.js
│ │ ├─config.js		(main configuration file)
│ │ ├─passport.js  	(authorization config)
│ │ ├─express.js   	(express config)
│ │ ├─i18n.js      	(i18n-abide config)
│ │ └─middlewares/ 	(custom middlewares)
│ ├─controllers/
│ ├─middlewares/
│ └─models/
├─share/
│ ├─i18n/
│ └─views/
└─sql/
```
