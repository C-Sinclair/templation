const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = config = {

    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './dist/index.html',
            filename: 'index.html',
            hash: false
        })
    ],
    watch: true,
    devtool: 'source-map'
}