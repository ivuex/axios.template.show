const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Path = require('path');
const entry = './' + require('./config/that-root-data.js');
const entryDir = entry.replace(/^(.+)\/[^\/]+$/, function(){
    return arguments[1];
});
console.log(entryDir);
console.log('above is the entryDir which would be referenced in  HtmlWebpackPlugin\'s contructor\'s actual argu, is it right?');
console.log(entry);
console.log('above is the entry which is required , is it right?');
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
      new HtmlWebpackPlugin({
        // template: '[name]/.stable/template.html';
        // template: `${name}/.stable/template.html`,
        template: `${entryDir}/.stable/template.html`,
      })
    ],
};
