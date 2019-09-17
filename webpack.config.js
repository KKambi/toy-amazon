//참고: https://ui.toast.com/fe-guide/ko_BUNDLER/
const path = require('path')

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}