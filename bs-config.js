module.exports = {
    port: 4200,
    open: false,
    watchOptions: {
        ignoreInitial: true,
        ignored: ['node_modules']
    },
    files: ['./dist/bundle.js', './index.html'],
    server: {
        middleware: {
            // overrides the second middleware default with new settings
            1: require('connect-history-api-fallback')({ index: './index.html', verbose: true })
        }
    }
};
