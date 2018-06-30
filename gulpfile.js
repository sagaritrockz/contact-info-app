var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function() {
  gulp.src('./src/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
  return gulp.src(['./src/js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('assets', function(){
  return gulp.src('./src/assets/*')
    .pipe(gulp.dest('./dist/assets'))
});

//Watch task
gulp.task('default', ['css', 'js', 'html', 'assets'], function () {
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/css/*.scss',['css']);
    gulp.watch('./src/*.html',['html']);
});

gulp.task('build', ['css', 'js', 'html', 'assets']);