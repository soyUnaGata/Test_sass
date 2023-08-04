const { src, dest, watch, series, task } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const server = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const fileinclude = require("gulp-file-include");
const del = require("del");

function clean() {
  return del("dist");
}

function styles() {
  return src("src/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 10 version"],
          grid: true,
        })
    )
    .pipe(dest("dist/css"));
}

function images() {
  return src("src/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/img"));
}

function html() {
  return src("src/[^_]*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "./src/html/",
      })
    )
    .pipe(dest("dist"));
}

async function reload() {
  server.reload();
}

async function buildAndReload() {
  images();
  styles();
  html();
  reload();
}

task("clean", clean);
task("styles:build", styles);
task("images:build", images);
task("html:build", html);

exports.watch = async function () {
  server.init({
    server: {
      baseDir: "./dist",
    },
  });
  buildAndReload();
  watch(["src/**/*"], series(buildAndReload));
};

exports.build = series(clean, buildAndReload);