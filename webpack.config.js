const path = require("path");

module.exports = {
    entry: './app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "util": require.resolve("util/")
        }
    }
}
