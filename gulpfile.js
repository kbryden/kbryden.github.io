'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-webserver');

sass.compiler = require('node-sass');

const compileSass = () => {
  return gulp
    .src('./DEV/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./PUBLIC/css'));
};

gulp.task('server', function () {
  gulp.src('./').pipe(
    server({
      livereload: true,
      open: true,
      port: 3000, // set a port to avoid conflicts with other local apps
    })
  );
});

gulp.task('sass', function () {
  return compileSass;
});

gulp.task('sass:watch', function () {
  gulp.watch('./DEV/sass/*.scss', compileSass);
});
