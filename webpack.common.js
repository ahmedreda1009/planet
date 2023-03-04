module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
        home: './src/js/home/home.js'
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
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
            },
        ]
    }
}