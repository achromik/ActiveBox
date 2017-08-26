module.exports = function(grunt) {

    grunt.initConfig({
        
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.sass'],
                    dest: 'css',
                    ext:'.css'
                }]
            }
        },
        
        postcss: {
            options: {
              map: {
                  inline: false, // save all sourcemaps as separate files... 
                  annotation: '/css/' // ...to the specified directory 
              },
         
              processors: [
                require('pixrem')(), // add fallbacks for rem units 
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
                require('cssnano')() // minify the result 
              ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', "!*.min.css"],
                    dest: 'css',
                    ext:'.min.css'
                }]
            }
          },


        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: ['*.{png,jpg,jpeg,gif}'],
                    dest: 'img'
                }]
            }
        },
        
        jshint: {
            all: ['js/*.js', '!js/*.min.js']
        },

        uglify: {
            my_target: {
                files: {
                    'js/scripts.min.js': 'js/scripts.js'
                }
            }
        },


        // cssmin: {
        //     target: {
        //         files: [{
        //             expand: true,
        //             cwd: 'css', 
        //             src: ['**/*.css', '!**/*.min.css'],
        //             dest: 'css',
        //             ext: '.min.css'
        //         }]

        //     }
        // },

        watch: {
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: true,
                },
            },

            css: {
                files: ['css/*.css', '!css/*.min.css'],
                tasks: ['postcss:dist'],
                options: {
                    spawn: true,
                },
            },

            imagemin: {
                files: ['img/*.{png,jpg,jpeg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: true,
                },               
            },

            scripts: {
                files: ['js/**/*.js', '!js/**/*.min.js'],
                tasks: ['uglify', 'jshint'],
                options: {
                    spawn: true,
                },
            },

            

            // cssmin: {
            //     files: ['**/*.css','!**/*.min.css'],
            //     tasks: ['cssmin'],
            //     options: {
            //         spawn: true,
            //     },
            // },
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/*.css','*.html','*.css', 'js/*.min.js']
                },
                options: {
                    spawn: false,
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }

    });


    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    


    // Default task(s).
    grunt.registerTask('default', ['sass', 'jshint', 'postcss:dist', 'imagemin', 'uglify', 'browserSync', 'watch']);

};