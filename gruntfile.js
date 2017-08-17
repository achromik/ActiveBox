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

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css', 
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]

            }
        },

        watch: {
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
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

            cssmin: {
                files: ['**/*.css','!**/*.min.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: true,
                },
            },
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/*.css','*.html','*.css']
                },
                options: {
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Default task(s).
    grunt.registerTask('default', ['sass', 'imagemin', 'cssmin', 'browserSync', 'watch']);

};