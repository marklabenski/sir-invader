import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';

gulp.task('default', ['test']);

gulp.task('babel', () => {
  return gulp.src('src/scripts/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['babel'], () => {
  return gulp.src('test/*.js')
    .pipe(mocha())
    .on('error', () => {
      gulp.emit('end');
    });
});

gulp.task('watch-test', () => {
  return gulp.watch(['javascript/**', 'test/**'], ['test']);
});

gulp.task('watch', () => {
  gulp.start('default');
  return gulp.watch(['src/**'], ['default']);
});
