const { src, dest, parallel, series, watch } = require("gulp");
const images = require("./images");
const svgSprite = require("./svgSprite");
const styles = require("./styles");
const pugHtml = require("./pugHtml");
const scripts = require("./scripts");
const server = require("browser-sync").create();
const path = require("../pathTasks");

const reload = (done) => {
  server.reload();
  done();
};

module.exports = function browserSync(cb) {
  server.init({
    server: path.browserSync.build,
    notify: false,
    open: true,
    cors: true,
  });

  watch(path.browserSync.pubHtml, series(pugHtml, reload));
  watch(path.browserSync.images, series(images, reload))
  watch(path.browserSync.svgSprite, series(svgSprite, reload))
  watch(path.browserSync.styles, series(styles, cb => src('build/css').pipe(server.stream()).on('end', cb)))
  watch(path.browserSync.scripts, series(scripts, reload))

  cb();
};
