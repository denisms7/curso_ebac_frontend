const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

function padrao() {
    console.log('exec via gulp')
}

function comprimeJs() {
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))

}

function compilaSass() {
    return gulp.src('./source/scss/main.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest('./build/css/'))
}



exports.default = padrao
exports.sass = compilaSass
exports.comprimeJs = comprimeJs
