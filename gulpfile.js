/* Gulpfile for NG-CON Israel Website */
/* Provides SASS + Livereload functions */
/* Copyright (C) 2014, Uri Shaked. License: ISC */

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	connectLivereload = require('connect-livereload'),
	express = require('express');

var serverPort = process.env.DEMO_DEVSERVER_PORT || 7200;
var livereloadPort = process.env.DEMO_LIVERELOAD_PORT || 35735;

var paths = {
	html: ['*.html']
};

gulp.task('serve', [], function () {
	var server = express();
	server.use(connectLivereload({
		port: livereloadPort
	}));
	server.use(express.static('.'));
	server.listen(serverPort);
});

gulp.task('watch', function () {
	var lrserver = livereload(livereloadPort);

	gulp.src([].concat(paths.html))
		.pipe(watch())
		.pipe(lrserver);
});

gulp.task('default', ['serve', 'watch']);
