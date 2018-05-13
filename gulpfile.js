var gulp = require('gulp');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
var url = require('url');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
gulp.task('server', function() {
    return gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            livereload: true, //实时更新
            middleware: function(req, res, next) {
                // var pathN = url.parse(req.url).pathname;
                // if (pathN === '/favicon.ico') {
                //     return;
                // }
                // console.log(pathN);
                // if (pathN === '1') {
                //     res.writeHead(200, {
                //         'Content-Type': 'text/plain;charset=utf8'
                //     })
                //     res.end('您连接上了');

                // }
                next()
            }
        }))
})
gulp.task('yacss', function() {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})
gulp.task('yajs', function() {
    gulp.src('./css/*.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task('yascss', function() {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task('yascss', function() {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task('yahtml', function() {
    gulp.src('./index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist'))
})
gulp.task('default', function(cb) {
    sequence(['server', 'yajs', 'yacss', 'yascss', 'yahtml'], cb)
})