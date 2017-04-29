var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var mainBowerFiles = require('main-bower-files');
 
gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./dist/vendor'))
});

gulp.task('pug', function buildHTML() {
	return gulp.src('./dev/**/!(_)*.pug')
	.pipe(pug({
		pretty: true,
		basedir: './dev'
	})) 
	.pipe(gulp.dest('./dist'));
	console.log("Pug Compiled");
});

gulp.task('sass', function() {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    console.log("Sass Compiled");
});

gulp.task('js', function() {
	gulp.src('./dev/js/**/*.js')
	.pipe(gulp.dest('./dist/js/'));
	console.log("JS Compiled");
});

gulp.task('assets', function() {
	gulp.src('./dev/assets/**/*.{doc,jpg,png,mp4,ogv,webm,svg}')
	.pipe(gulp.dest('./dist/assets/'));
	console.log("Assets Compiled");
});

gulp.task('watch', function() {
	gulp.watch('./dev/**/*.pug', ['pug']);
	gulp.watch('./dev/sass/**/*.scss', ['sass']);
	gulp.watch('./dev/js/**/*.js', ['js']);
	console.log("Watching...");
});

// Force compile of everything
gulp.task('compile', ['bower', 'assets', 'js', 'sass', 'pug']);

// Watch and compile
gulp.task('develop', ['compile', 'watch']);