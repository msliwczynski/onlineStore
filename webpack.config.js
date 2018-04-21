const git = require('git-rev-sync');
const path = require('path');
const webpack = require('webpack');
const sourcemaps = process.env.NODE_SOURCEMAPS || 'eval';
const env = process.env.NODE_ENV;

const getEntries = function () {
    const entries = {
        privat: './src/index',
    };

    process.env.NODE_APP === 'privat' && delete entries.bedrift;

    if (env !== 'production') {
        Object.keys(entries).forEach(function (key) {
            entries[key] = ['webpack-hot-middleware/client', entries[key]];
        });
    }

    return entries;
};

const getPlugins = function () {
    const plugins = [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(env !== 'production'),
            __REVISION__: JSON.stringify(git.short()),
            'process.env': {
                'NODE_ENV': JSON.stringify(env)
            }
        }),
        new webpack.BannerPlugin('app-version: ' + JSON.stringify(git.short())),
        // Polyfilling fetch (with dependency promise), see
        // https://gist.github.com/Couto/b29676dd1ab8714a818f for more details
        new webpack.ProvidePlugin({
            Promise: 'exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ];
    if (env === 'production') {
        return [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ].concat(plugins);
    } else {
        return [
            new webpack.HotModuleReplacementPlugin()
        ].concat(plugins);
    }
};

const config = {
    devtool: sourcemaps,
    entry: getEntries(),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'online-store.js',
        publicPath: '/static/'
    },
    plugins: getPlugins(),
    module: {
        noParse: [],
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.js$/, loaders: ['babel'], include: [path.join(__dirname, 'src'), path.join(__dirname, 'test')]},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    noParse: [
        path.join(__dirname, 'node_modules')
    ]
};

module.exports = config;
