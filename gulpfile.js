var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var pug = require('gulp-pug');
var assign = require('lodash.assign');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var zip = require('gulp-zip');
var imagemin = require('gulp-imagemin');

var paths = {
  before: './src',
  after: './build',
};

var version_date = new Date();
version_date = version_date.toISOString().substring(0, 10);

paths.styles = {
  entry: paths.before + ['/**/*.scss'],
  before: paths.before + '/**/*.scss',
  after: paths.after
};

paths.scripts = {
  entry: paths.before + '/index.js',
  before: ['./vendor/slick/slick.min.js','./vendor/modal/modal-video.js' , paths.before + '/**/*.js'],
  after: paths.after
};

paths.views = {
  before: paths.before + '/**/*.pug',
  after: paths.after
};

paths.images = {
    before: paths.before + '/images/**/*',
    after: paths.after + '/images'
};

paths.server = paths.after;

gulp.task('views', function() {

  return gulp.src(paths.views.before)
    .pipe(pug({
      pretty: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.views.after));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts.before)
    .pipe(concat('global.js'))
    .pipe(gulp.dest(paths.scripts.after));
})

gulp.task('styles', function() {
  var processors = [
    autoprefixer()
  ];

  return gulp.src(paths.styles.entry)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .on('error', gutil.log)
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.styles.after));
});

gulp.task('images', function() {

    return gulp.src(paths.images.before)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.after));
});

gulp.task('serve', ['styles', 'scripts', 'views'], function() {

    browserSync.init({

        server: {

            baseDir: paths.server
        }
    });

    gulp.watch(paths.styles.before, ['styles']);
    gulp.watch(paths.views.before, ['views']);
    gulp.watch(paths.scripts.before, ['scripts']);
    gulp.watch([
      paths.scripts.after + '/global.js',
      paths.styles.after + '/*.css',
      paths.views.after + '/*.html'
    ]).on('change', browserSync.reload);
});

gulp.task('build', ['styles', 'views', 'scripts', 'images'], ()=> {
  gulp.src('build/**/*')
    .pipe(zip('deploy'+version_date+'.zip'))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['build']);
