'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/underscore/underscore.js',
            'src/**/*.js',
        ],

        reporters: ['dots', 'coverage'],

        preprocessors: {
            'src/**/!(*.noc|*.spec).js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        // web server port
        port: 8080, // => Gruntfile.js

        // cli runner port
        runnerPort: 9100, // => Gruntfile.js

        colors: true,

        // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: true, // => Gruntfile.js

        browsers: [
            'Chrome'
        ],

        browserNoActivityTimeout: 10 * 60 * 1000
    });
};