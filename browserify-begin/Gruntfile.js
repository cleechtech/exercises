module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        // A single entry point for our app
        src: 'app/js/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/js/app.js',
      },
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        dest: 'dist/',
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: 'dist',   // render files from here
          open: true,
          keepalive: true
        }
      }
    }
  })

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-connect')

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify', 'copy', 'connect'])
}