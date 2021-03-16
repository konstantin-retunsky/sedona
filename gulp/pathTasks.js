
module.exports = {
  src: {
    styles: ["./source/global/scss/global_style.scss", "./source/pages/**/*.scss"],
    htmlPug: "./source/pages/**/*.pug",
    scripts: "./source/**/*.js",
    images: "./source/**/images/*.{jpg,png,svg}",
    svgSprite: "./source/**/sprite/*.svg",
    fonts: "./source/global/fonts/*",
  }, 
  build: {
    styles: "build/css",
    htmlPug: "build",
    scripts: "build/js",
    images: "build/img",
    svgSprite: "build/img",
    fonts: "build/fonts",
  },
  browserSync: {
    build: "build",
    pubHtml: "./source/**/*.pug", 
    styles: "./source/**/*.scss",
    images: "./source/**/images/*.{jpg,png,svg}",
    svgSprite: "./source/**/sprite/*.svg",
    scripts: "./source/**/*.js",
  }
}
