'use strict';

module.exports = function gruntLoader(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// Grunt ESLint - https://github.com/sindresorhus/grunt-eslint
		eslint: {
			target: [ '*.js', 'javascript/*.js', 'javascript/**/*.js' ]
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

		// Bower concat - https://github.com/sapegin/grunt-bower-concat
		'bower_concat': {
			all: {
				dest: 'public/libraries.js',
				cssDest: 'public/libraries.css'
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
			target: {
				options: {
					compress: {
						'drop_console': true
					}
				},
				files: {
					'public/main.js': [ 'public/main.js' ]
				}
			},
			bower: {
				options: {
					compress: {
						mangle: true,
						compress: true
					},
					files: {
						'public/libraries.js': 'public/libraries.js'
					}
				}
			}
		},

		// CSSMin - https://github.com/gruntjs/grunt-contrib-cssmin
		cssmin: {
			target: {
				files: {
					'libraries.css': 'libraries.css'
				}
			}
		},

		// Watch - https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			scripts: {
				files: [
					'javascript/*.js',
					'javascript/**/*.js'
				],
				tasks: [ 'concat' ]
			},
			css: {
				files: [ 'stylesheets/*.scss', 'stylesheets/**/*.scss' ],
				tasks: [ 'sass:watch' ]
			}
		},

		// Imagemin - https://github.com/gruntjs/grunt-contrib-imagemin
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'images/',
						src: [ '*.{png,jpg,gif}', '**/*.{png,jpg,gif}' ],
						dest: 'public/images'
					}
				]
			}
		},

		// SCSS - https://github.com/ahmednuaman/grunt-scss-lint
		scsslint: {
			allFiles: [ 'stylesheets/*.scss', 'stylesheets/**/*.scss' ],
			options: {
				bundleExec: true,
				config: '.scss-lint.yml',
				colorizeOutput: true
			}
		}
	});

	grunt.registerTask('bower', [ 'bower_concat:all', 'uglify:bower', 'cssmin' ]);
	grunt.registerTask('default', [ 'connect', 'watch' ]);
	grunt.registerTask('build', [
		'bower_concat:all',
		'eslint',
		'scsslint',
		'concat',
		'uglify:target',
		'uglify:bower',
		'sass:build',
		'cssmin'
	]);
};
