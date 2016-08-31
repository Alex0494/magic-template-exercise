var gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
plumber = require('gulp-plumber'),
concat = require('gulp-concat'),
livereload = require('gulp-livereload'),
uglifycss = require('gulp-uglifycss'),
less = require('gulp-less'),
imagemin = require('gulp-imagemin'),
browserify = require('gulp-browserify'),
uglify = require('gulp-uglifyjs');

gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('./src/js/app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
  });

gulp.task('less', function () {
  gulp.src('./src/less/*.less')
  .pipe(plumber())
  .pipe(concat('style.min.css'))
  .pipe(less())
  .pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  .pipe(gulp.dest('./dist/css'))
  .pipe(livereload());
});

gulp.task('imagemin', function() {
  gulp.src('./src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', function() {
  gulp.watch('./src/less/*.less', ['less']);
  gulp.watch('./src/js/*.js', ['scripts']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js nunjucks',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('serve', [
  'scripts',
  'less',
  'imagemin',
  'develop',
  'watch'
  ]);
