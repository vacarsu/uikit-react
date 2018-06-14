const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/index.html',
        filename: './../index.html'
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/uikit-react/' })
];