// gulpfile.js

var babelify = require('babelify');
var browserify = require("browserify");
var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


gulp.task('default', function () {

    browserify('./src/app.js', { debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source('app.bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'));
});
