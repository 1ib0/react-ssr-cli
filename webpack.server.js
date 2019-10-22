const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const webpack = require('webpack');

const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
};

module.exports = merge(config, serverConfig);
