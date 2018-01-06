let HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    }

}