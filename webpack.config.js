const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Path = require('path');
let entry = require('./config/all.entryObj.js');
const aryHtmlWebpackPlugin = Object.keys(entry).map(function (key) {
    return new HtmlWebpackPlugin({
        template: 'src/' + key + '/.stable/template.html',
        // filename: key + '/' + [key.match(/([\w-]+)$/)[1]] + '.html',
        filename: key + '/' + 'index' + '.html',
        chunks: [key],
    })
});

module.exports = {
    entry: entry,
    output: {
        path: Path.resolve('.', 'dist'),
        filename: '[name]/entry.js'
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.*(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'import-glob-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(swf|png|jpeg|jpg|gif|svg|ttf|woff|woff2|eot)/,
                use: 'url-loader'
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: (getPath) => {
                let name = getPath('/[name]');
                name = name.match(/(?:recording)?\/(.+)$/)[1];
                if (name === '//') {
                    name = '/';
                }
                name = name.replace(/^\//, '');
                let fileBasename = name.match(/([\w-]+)$/)[1];
                return `${name}/${fileBasename}.css`;
            },
            disable: false,
            allChunks: true,
        }),
        ...aryHtmlWebpackPlugin,
    ],
};
