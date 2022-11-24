const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function padrao() {
    console.log('exec via gulp')
}

function comprimeImg() {
    return gulp.src('./source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'))

}

function comprimeJs() {
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/js/'))

}

function compilaSass() {
    return gulp.src('./source/scss/main.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest('./build/css/'))
}



exports.default = function(){
    gulp.watch('./source/img/*', {ignoreInitial: false}, gulp.series(comprimeImg))
    gulp.watch('./source/js/*.js', {ignoreInitial: false}, gulp.series(comprimeJs))
    gulp.watch('./source/scss/main.scss*', {ignoreInitial: false}, gulp.series(compilaSass))
}

