"use strict";

process.env.NODE_ENV = 'production'

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    return gulp.src(['./ueditor.all.js', './ueditor.config.js'])
        .pipe(uglify()).on('error', function(e) {
            console.log(e);
        })
        .pipe(gulp.dest('./dist'));
});