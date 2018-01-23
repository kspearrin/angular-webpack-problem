const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isVendorModule = (module) => {
    if (!module.context) {
        return false;
    }

    const nodeModule = module.context.indexOf('node_modules') !== -1;
    return nodeModule;
};

module.exports = {
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        quiet: true,
        stats: 'minimal'
    },
    entry: {
        'app/main': './src/app/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname, 'build/*')
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app/vendor',
            chunks: ['app/main'],
            minChunks: isVendorModule
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['app/vendor', 'app/main']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    }
};
