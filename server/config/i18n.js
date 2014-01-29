
/**
 * i18n Configuration - nbims
 */

var i18n = require('i18n-abide')

module.exports = function (app, config) {

    // Abide - i18n support

    app.use(i18n.abide({
	supported_languages: ['cs', 'en'],
	default_lang: 'cs',
	translation_directory: config.path.share + '/i18n',
	locale_on_url: true,
	format_fn_name: 'i18nformat'
    }))

}
