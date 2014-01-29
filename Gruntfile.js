
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
	    uglify: {
		files: {
		    'client/scripts/<%= pkg.name %>.min.js': ['client/scripts/<%= pkg.name %>.js'],
		}
	    }
	},
	concat: {
	    options: {
		separator: ';',
	    },
	    client: {
		src: ['src/main/javascript/client/application.js', 'src/main/javascript/client/router.js', 'src/main/javascript/client/*/**/*.js'],
		dest: 'client/scripts/<%= pkg.name %>.js'
	    }
	}
    });

    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s)
    grunt.registerTask('default', ['concat:client','uglify:uglify']);
}
