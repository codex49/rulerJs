const gulp = require('gulp');
const babel = require('gulp-babel');
const connect = require('gulp-connect');
var browserify = require('gulp-browserify');

gulp.task('default', () => {
    return gulp.src('src/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify())
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    });
});
gulp.task('js', function () {
    gulp.src('./src/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.js'], ['js']);
});
gulp.task('default');
gulp.task('server', ['connect', 'watch']);