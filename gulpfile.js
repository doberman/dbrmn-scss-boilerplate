const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const onError = error => {
  $.util.log(
    $.util.colors.cyan('Plumber') + $.util.colors.red(' found unhandled error:\n'),
    error.toString()
  );

  this.emit('end');
}

gulp.task('copy-html', () => {
  return gulp.src('tests/src/**/*.html')
    .pipe(gulp.dest('tests/dist'));
});

gulp.task('sass', () => {
  return gulp.src('src/style.scss')
    .pipe($.plumber(onError))
    .pipe($.sass())
    .pipe($.plumber.stop())
    .pipe(gulp.dest('tests/dist/css'));
});

gulp.task('watch', ['copy-html', 'sass'], () => {
  gulp.watch('tests/src/**/*.html', ['copy-html']);
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
