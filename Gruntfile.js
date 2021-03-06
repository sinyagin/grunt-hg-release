/*
 * grunt-hg-release
 * https://github.com/accordionpeas/grunt-hg-release
 *
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},
		
		// Configuration to be run (and then tested).
		hg_release: {
			options: {
				
			}
		},
		
	});
	
	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');
	
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['hg_release']);
	
	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);
};
