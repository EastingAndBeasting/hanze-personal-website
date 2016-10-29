var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var htmlbeautify = require('gulp-html-beautify');

gulp.task('default', function () {
	gulp.watch('src/*.+(html|nunjucks)',['compile']);
});

gulp.task('compile', function() {
  return gulp.src('src/*.+(html|nunjucks)')
    .pipe(data(function() {
      return require('./src/data/data.json')
    }))
    .pipe(nunjucksRender({
      path: 'src/partials/'
    }))
    .on('error', function(e) {
      console.log(e);
      this.emit('end');
    })
    .pipe(htmlbeautify({
      indent_size: 4
    }))
    .pipe(gulp.dest('./app'));
});
