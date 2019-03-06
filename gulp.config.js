module.exports = function () {
    let config = {
        scss: {
            src: [
                "src/scss/**/*.scss",
                "src/components/**/*.scss"
            ],
            dest: "src/css",
            comp: [
                "src/scss/**/*.scss",
            ],
        },
        html: {
            src: [
                "public/index.html"
            ]
        }
    };

    return config;
};
