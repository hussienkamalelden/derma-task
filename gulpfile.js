'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

//Convert Scss to css, add autoprefixer and compresser
gulp.task("css", function () {
    return gulp.src('./assets/styles/styles.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles/css'));
});

//watch all tasks
gulp.task("default", function () {
    gulp.watch('./assets/styles/styles.scss', gulp.series('css'));
});