module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    exec: {
        server: {
            cmd: 'npm run start'
        }
    }
  });

  grunt.registerTask('default', ['exec:server']);
};