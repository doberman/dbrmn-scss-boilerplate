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
    .pipe($.connect.reload())
    .pipe(gulp.dest('tests/dist'));
});

gulp.task('sass', () => {
  return gulp.src(['src/style.scss', 'src/should-be-empty.scss'])
    .pipe($.plumber(onError))
    .pipe($.sass())
    .pipe($.plumber.stop())
    .pipe($.connect.reload())
    .pipe(gulp.dest('tests/dist/css'));
});

gulp.task('connect', () => {
  $.connect.server({
    root: 'tests/dist',
    livereload: true
  });
});

gulp.task('watch', ['copy-html', 'sass'], () => {
  gulp.watch('tests/src/**/*.html', ['copy-html']);
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'connect']);
