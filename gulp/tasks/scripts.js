const { src, dest, parallel, series, watch } = require('gulp')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const eslint  = require('gulp-eslint')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const path = require("../pathTasks")

module.exports = function scripts() {
  return  src(path.src.scripts)
    .pipe(plumber())
    // .pipe(eslint())
    // .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename({dirname: ''}))
    .pipe(dest('build/js'))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(path.build.scripts))
}