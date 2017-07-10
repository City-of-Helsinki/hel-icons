'use strict';

var baseDir  = 'src',
svgGlob      = '**/*.svg',
outDir       = 'dist',
SVGconfig    = {
          "mode": {
            "symbol": {		// Activate the «css» mode
              "sprite": 'svg/hel-icons.svg',
              "render": {
                "css"	: true,	// Activate CSS output (with default options)
                "scss"	: true	// Activate SASS output (with default options)
              },
              "example": {
                "template": 'tmpl/symbol/sprite.html',
                "dest": 'index.html',
              },
            }
          }
        };

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          livereload: true,
          base: 'dist/symbol/',
          port: 9090
        }
      }
    },
    watch: {
      files: ['src/**/*','tmpl/**/*'],
      tasks: ['default'],
      options: {
        livereload: true
      }
    },
    svg_sprite: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        expand: true,
        cwd: 'src',
        src: [svgGlob],
        dest: outDir,
        options: SVGconfig
      },
    },
    // Copy Helsinki styles to use on preview page
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'tmpl/assets', src: '**', dest: 'dist/symbol/assets/'},
        ],
      },
    },
    // Deploy preview page to gh-pages
    'gh-pages': {
        options: {
          base: 'dist/symbol'
        },
        src: ['**']
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['svg_sprite']);
  grunt.registerTask('dev', [
                      'svg_sprite',
                      'copy',
                      'connect:server',
                      'watch'
                      ]);

};
