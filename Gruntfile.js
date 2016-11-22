/**
 * Created by ishum on 11/20/16.
 */


module.exports = function(grunt) {

    var globalConfig = {
        jsPublicLib : 'node_modules',
        jsSrc:       'app',
        jsDest:      'dest'
    };


    grunt.initConfig({

        globalConfig: globalConfig,

        // Read in the package details
        pkg: grunt.file.readJSON('package.json'),

        // Uglify Javascript files


        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '<%= globalConfig.jsDest %>/libs.min.js':
                        [
                            '<%= globalConfig.jsSrc %>/lib/angular.min.js',
                            '<%= globalConfig.jsSrc %>/lib/angular-route.min.js',
                            '<%= globalConfig.jsSrc %>/lib/angular-animate.min.js',
                            '<%= globalConfig.jsSrc %>/lib/angular-aria.min.js',
                            '<%= globalConfig.jsSrc %>/lib/angular-messages.min.js',
                            '<%= globalConfig.jsSrc %>/lib/angular-material.min.js',
                            '<%= globalConfig.jsSrc %>/app.js',
                            '<%= globalConfig.jsSrc %>/components/*/*.js',
                            '<%= globalConfig.jsSrc %>/router/*.js',
                            '<%= globalConfig.jsSrc %>/services/*.js'
                        ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',

                    livereload: true,
                    keepalive: true

                }
            }
        }




    });

    // Third party modules
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Register default task
    grunt.registerTask('default', [ 'uglify', 'connect:server' ]);

};
