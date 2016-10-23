'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: 'styles/src/*.less',
                tasks: ['less', 'concat:css', 'cssmin']
            },
            js: {
                files: 'src/*.js',
                tasks: ['concat:js', 'uglify']
            },
            html: {
                files: 'templates/**/*.hbs',
                tasks: ['clean:html', 'compile-handlebars']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['styles/src/']
                },
                files: {
                    'styles/css/app.css': 'styles/src/app.less'
                }
            }
        },
        'compile-handlebars': {
            static: {
                files: [{
                    src: 'templates/index.html.hbs',
                    dest: 'index.html'
                }],
                partials: 'templates/partials/*.hbs',
                templateData: 'templates/data.json'
            }
        },
        concat: {
            css: {
                options: {
                    stripBanners: {
                        block: true
                    },
                    banner: '/*! <%= pkg.name %> --- <%= grunt.template.today("dd mmm yyyy HH:MM:ss") %> */\n'
                },
                src: ['node_modules/normalize.css/normalize.css', 'styles/css/app.css'],
                dest: 'assets/<%= pkg.name %>.css'
            },
            js: {
                src: ['src/app.js'],
                dest: 'assets/<%= pkg.name %>.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'assets/<%= pkg.name %>.min.css': 'assets/<%= pkg.name %>.css'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> ' +
                '--- <%= grunt.template.today("dd mmm yyyy HH:MM:ss") %> */\n'
            },
            dist: {
                files: {
                    'assets/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },
        clean: {
            html: ['index.html']
        },
        'http-server': {
            'dev': {
                root: '',
                port: 8282,
                host: '127.0.0.1',
                autoIndex: true,
                ext: 'html',
                runInBackground: true,
                openBrowser: false
            }
        }
    });

    grunt.registerTask('default', ['http-server', 'watch']);
};
