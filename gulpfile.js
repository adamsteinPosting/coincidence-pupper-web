// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var clean = require('gulp-clean-css');

gulp.task('sass', function(cb) {
  gulp
    .src('./SCSS/*.scss')
    .pipe(sass())
    .pipe(concat('root.css'))
    .pipe(clean())
    .pipe(
      gulp.dest('./css/')
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('./scss/*/*.scss', gulp.series('sass'));
    cb();
  })
);