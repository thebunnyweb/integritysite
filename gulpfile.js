var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var mincss = require('gulp-minify-css');
var minhtml = require('gulp-minify-html');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babel = require('gulp-babel');
var deploy = require('gulp-deploy-git');


gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./app/styles/fonts'))
});


gulp.task('deploy', ['default'], function() {
  return gulp.src('app/**/*', { read: false })
    .pipe(deploy({
      repository: 'https://github.com/thebunnyweb/integrityfiles.git',
      verbose: true,
      debug: true
    }));
});


gulp.task('serveprod', function() {
  connect.server({
    root: './app',
    port: process.env.PORT || 5000
  });
});


gulp.task('scripts', function(){
	var b = browserify({
		entries : './source/scripts/main.js',
		debug : true
	});

	b.bundle()
	.pipe(source('main.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps:true}))
	.pipe(babel({presets: ['es2015']}))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/scripts/'))
	.pipe(browserSync.stream())
});


gulp.task('images',function(){
	gulp.src('./source/assets/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./app/assets/'))
})

gulp.task('styles', function(){
	gulp.src('./source/styles/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(concat('main.css'))
	.pipe(mincss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/styles/'))
	.pipe(browserSync.stream());
});



gulp.task('pug', function(){
	gulp.src('./source/pages/*.pug')
	.pipe(pug())
	.pipe(minhtml())
	.pipe(gulp.dest('./app/'))	
	.pipe(browserSync.stream());
});



gulp.task('default',['scripts','styles','pug','images'],function(){
	
	browserSync.init({
		server : './app/',
	});		

	gulp.watch('./source/scripts/*.js',['scripts'],browserSync.reload());
	gulp.watch('./source/components/**/*.js',['scripts'],browserSync.reload());

	gulp.watch('./source/styles/*.scss',['styles'],browserSync.reload());
	gulp.watch('./source/components/**/*.scss',['styles'],browserSync.reload());

	gulp.watch('./source/pages/*.pug',['pug'],browserSync.reload());
	gulp.watch('./source/components/**/*.pug',['pug'],browserSync.reload());

	gulp.watch('./source/assets/**/*.*',['images'],browserSync.reload());

});