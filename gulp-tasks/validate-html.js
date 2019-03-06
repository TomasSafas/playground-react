const gulp = require("gulp"),
    htmlhint = require("gulp-htmlhint"),
    config = require("../gulp.config.js")();

module.exports = function () {
    return gulp.src(config.html.src)
        .pipe(htmlhint(
            {
                "doctype-first": false
            }
        ))
        .pipe(htmlhint.reporter());
};