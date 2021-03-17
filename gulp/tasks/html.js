const { src, dest, parallel, series, watch } = require("gulp");
const nunjucks = require("gulp-nunjucks-render");
const rename = require("gulp-rename");
const gulpHtmlBemValidator = require("gulp-html-bem-validator");
const plumber = require("gulp-plumber");
const path = require("../pathTasks");

module.exports = function html(cb) {
  return src(path.src.html)
    .pipe(plumber())
    .pipe(
      nunjucks({
        path: "./source",
        ext: ".html",
      })
    )
    .pipe(rename({ dirname: "" }))
    .pipe(gulpHtmlBemValidator())
    .pipe(dest(path.build.html));
};
