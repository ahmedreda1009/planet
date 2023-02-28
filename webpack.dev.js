const path = require('path');
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[name]-[hash][ext][query]'
    }
});

// ,
//     devtool: 'source-map',
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'build'),
//         },
//         port: 1009,
//         open: true
//     }