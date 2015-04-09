'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// Grunt ESLint - https://github.com/sindresorhus/grunt-eslint
		eslint: {
			target: ['*.js', 'javascript/*.js', 'javascript/**/*.js']
		},

		// Grunt Connect - https://github.com/gruntjs/grunt-contrib-connect
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'public'
				}
			}
		},

		// Grunt SASS - https://github.com/gruntjs/grunt-contrib-sass
		sass: {
			build: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/style.css': 'stylesheets/main.scss'
				}
			},

			watch: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/style.css': 'stylesheets/main.scss'
				}
			}
		},

		// Grunt concat - https://github.com/gruntjs/grunt-contrib-concat
		concat: {
			options: {
				stripBanners: true,
				separator: ';\n'
			},

			dist: {
				src: [ 'javascript/*.js', 'javascript/**/*.js' ],
				dest: './public/main.js'
			}
		},

		// Uglify - https://github.com/gruntjs/grunt-contrib-uglify
		uglify: {
			options: {
				compress: {
					'drop_console': true
				}
			},
			target: {
				files: {
					'public/main.js': [ 'public/main.js' ]
				}
			}
		},

		// Watch - https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			scripts: {
				files: [ 'javascript/*.js', 'javascript/**/*.js' ],
				tasks: [ 'eslint', 'concat' ]
			},
			css: {
				files: [ 'stylesheets/*.scss', 'stylesheets/**/*.scss' ],
				tasks: [ 'sass:watch' ]
			}
		}
	});

	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('build', ['eslint', 'concat', 'uglify:target', 'sass:build']);
};
