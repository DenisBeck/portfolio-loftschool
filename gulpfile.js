var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass');

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: "./html/"
		},
		port: 8080,
		open: true,
		notify: false
	});
});

gulp.task('html', function(){
	return gulp.src('./html/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./html/'))
		.pipe(reload({stream:true}));
});

gulp.task('sass', function(){
    return gulp.src('./html/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('./html/'))
		.pipe(reload({stream:true}));
});

gulp.task('watcher', function() {
	gulp.watch('./html/*.jade', ['html']);
	gulp.watch('./html/*.scss', ['sass']);
});

gulp.task('default', ['watcher', 'browserSync']);