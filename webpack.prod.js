const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});