var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({
        style: 'compact'
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/granite'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);