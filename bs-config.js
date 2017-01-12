const ENV = process.env.NODE_ENV || 'prod';
const index = ENV === 'prod' ? '/index.html' : '/app/public/index.html';

module.exports = {
    watchOptions: {
        ignoreInitial: true,
        ignored: ['node_modules']
    },
    files: ['./build/**', './index.html'],
    server: {
        middleware: {
            // overrides the second middleware default with new settings
            1: require('connect-history-api-fallback')({ index: index, verbose: true })
        }
    }
};

console.log('----------------------------------');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('----------------------------------');
