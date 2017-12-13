module.exports = function (grunt) {

     grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'style.css': 'style.sass'
                }
            }
        },
        watch: {
            scripts: {
                files: ['*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });
    // Load the plugins tasks 
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s). 
    grunt.registerTask('default', ['sass', 'watch']);
    
};
