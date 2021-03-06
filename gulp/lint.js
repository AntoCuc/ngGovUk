'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

module.exports = function(config, log){
  gulp.task('lint', function() {
    return lint(false);
  });

  gulp.task('lint-break', function () {
    return lint(true);
  });

  function lint (breakOnError) {
    return gulp.src(config.src.modulesPath + '/**/*.js')
      .pipe($.eslint()) // defaults to local linting config
      .pipe($.eslint.format())
      .pipe($.if(breakOnError, $.eslint.failOnError()));
  }
};
