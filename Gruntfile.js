'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        clean: {
            test: ['coverage']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js', 'src/**/*.js'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                autoWatch: false,
                reporters: ['dots', 'coverage']
            }
        },
        coverage: {
            options: {
                thresholds: {
                    'statements': 100,
                    'branches': 100,
                    'functions': 100,
                    'lines': 100
                },
                dir: 'coverage'
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commitFiles: ['-a'],
                push: true,
                pushTo: 'origin'
            }
        }
    });

    grunt.registerTask('test', [
        'clean:test', 'karma', 'coverage'
    ]);

    grunt.registerTask('default', [
        'jshint', 'test'
    ]);

    grunt.registerTask('release', [
        'default', 'bump'
    ]);
};