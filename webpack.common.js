const HtmlWebpackPlugin = require('html-webpack-plugin');

// handle multiple html pages.
let htmlPageNames = ['home', 'profile'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/pages/${name}.html`, // relative path to the HTML files
        filename: `${name}.html`, // output HTML files
        chunks: [`${name}`] // respective JS files
    })
});

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ].concat(multipleHtmlPlugins)
}