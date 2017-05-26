//Base Plugins
var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

//Preprocessing Plugins
var sass = require('gulp-sass');
var preprocess = require('gulp-preprocess');
var sassvariables = {outputStyle: 'expanded' , includePaths:['node_modules/susy/sass']};

//Postprocessing Plugins
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mediaqueries = require('gulp-group-css-media-queries');

//Directory
var input = "src";
var output ="../";

gulp.task('sass', function() {
    gulp.src(input + '**/*.scss')
        //Preprocessing
        .pipe(sass(sassvariables)
        .on('error', sass.logError))
        //Postprocessing
        .pipe(mediaqueries())
        .pipe(postcss([
          autoprefixer({browsers: ['last 5 versions', '> 5%']}),
          cssnano({zindex: false}),
        ]))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(output))
});

gulp.task('watch',function() {
  gulp.watch(input + '**/*.scss',['sass']);
});

//Default, prints list of commands and what they do
gulp.task('default',function() {
  gutil.log('\n',
    'Source code for the ajitvpai.com project.',
    'List of commands for this project and what they do:\n',
    '   gulp watch        watches the src directory for any changes and runs gulp sass when any changes occur.\n',
    '   gulp sass         collects and compiles all css files.\n'
  );
});
