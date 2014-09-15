module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      filechange: {  
        files: ['Gruntfile.js', 'index.html', 'app/**/**/*.{js,html,css}'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          livereload: 35729,
          base: '.',
          open: true,
          useAvailablePort: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', 'Serve content, open browser, watch changes', function(target) {

    grunt.task.run([
      'connect',
      'watch'
    ]);

  });

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    }
});

grunt.registerTask('default', ['sass']);

};