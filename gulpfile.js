var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
    gulp.src('./src/css/*.scss')
      .pipe(sass())
      .pipe(concat('bundle.css'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    return gulp.src(['./src/js/*.js'])
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

//Watch task
gulp.task('default', ['css', 'js', 'html'], function () {
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/css/*.scss',['css']);
    gulp.watch('./src/*.html',['html']);
});