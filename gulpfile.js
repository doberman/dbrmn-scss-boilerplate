const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const onError = error => {
  $.util.log(
    $.util.colors.cyan('Plumber') + $.util.colors.red(' found unhandled error:\n'),
    error.toString()
  );

  this.emit('end');
}

gulp.task('sass', () => {
  return gulp.src('src/style.scss')
    .pipe($.plumber(onError))
    .pipe($.sass())
    .pipe($.plumber.stop())
    .pipe(gulp.dest('tests/dist/css'));
});

gulp.task('watch', ['sass'], () => {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
