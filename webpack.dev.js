const path = require('path');
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// handle multiple html pages.
let htmlPageNames = ['home', 'profile', 'explore'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/views/pages/${name}.pug`, // relative path to the HTML files
        filename: `${name}.html`, // output HTML files
        chunks: [`${name}`, 'vendor'], // respective JS files
        cache: false,
        // favicon: './src/assets/favicon.png'
    });
});

module.exports = merge(common, {
    mode: "development",
    // output: {
    //     filename: '[name].bundle.js',
    //     path: path.resolve(__dirname, 'build'),
    //     assetModuleFilename: './assets/[name][ext][query]',
    //     // asyncChunks: true,
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings => inject styles into dom
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/views/index.pug',
            filename: 'index.html',
            excludeChunks: htmlPageNames,
            chunks: [`main`, 'vendor'], // respective JS files
            cache: false,
            // favicon: 'src/assets/favicon.png'
            // inject: false,
            // minify: false
        })
    ].concat(multipleHtmlPlugins)
    ,
    // devtool: 'source-map',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 1009,
        open: true,
        hot: false,
        // contentBase: 'public/',
        // publicPath: 'public/',
        // inline: true,
        // hot: true,
    },
    optimization: {
        runtimeChunk: 'single'
    },
});