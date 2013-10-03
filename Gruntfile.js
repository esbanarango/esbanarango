module.exports = function(grunt) {
 
  // configure the tasks
  grunt.initConfig({

    copy: {
      build: {
        cwd: 'source',
        src: [ '**', '!**/*.scss', '!**/*.coffee', '!**/*.jade' ],
        dest: 'public',
        expand: true
      },
    },

    clean: {
      build: {
        src: [ 'public' ]
      },
      stylesheets: {
        src: [ 'public/css/**/*.css', '!public/css/main.css' ]
      },
      scripts: {
        src: [ 'public/js/**/*.js', '!public/js/main.js' ]
      }
    },

    jade: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'source',
          src: [ '**/*.jade' ],
          dest: 'public',
          ext: '.html'
        }]
      }
    },

    coffee: {
      build: {
        expand: true,
        cwd: 'source',
        src: [ '**/*.coffee' ],
        dest: 'public/js',
        ext: '.js'
      }
    },

    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          'public/js/main.js': [ 'public/js/**/*.js' ]
        }
      }
    },    
 
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          expand: true,
          cwd: 'source',
          src: [ '**/*.scss' ],
          dest: 'public/css',
          ext: '.css'
        }
      }
    },

    autoprefixer: {
      build: {
        expand: true,
        cwd: 'public/css',
        src: [ '**/*.css' ],
        dest: 'public/css'
      }
    },

    cssmin: {
      build: {
        files: {
          'public/css/main.css': [ 'public/css/**/*.css' ]
        }
      }
    },

    watch: {
      stylesheets: {
        files: 'source/**/*.scss',
        tasks: [ 'stylesheets' ]
      },
      scripts: {
        files: 'source/**/*.coffee',
        tasks: [ 'scripts' ]
      },
      jade: {
        files: 'source/**/*.jade',
        tasks: [ 'jade' ]
      },
      copy: {
        files: [ 'source/**', '!source/**/*.styl', '!source/**/*.coffee', '!source/**/*.jade' ],
        tasks: [ 'copy' ]
      }
    },    

  });
 
  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // define the tasks
  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'sass', 'autoprefixer', 'cssmin', 'clean:stylesheets' ]
  );
   
  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'coffee', 'uglify', 'clean:scripts' ]
  );
   
  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'jade' ]
  );

  grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds.', 
    [ 'build','watch' ]
  );

};