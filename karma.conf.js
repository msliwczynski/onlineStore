module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: process.env.NODE_SINGLE_RUN === 'true',
        frameworks: ['jasmine'],
        files: [{pattern: 'tests.webpack.js', watched: true}],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        browserConsoleLogOptions: {
            terminal: true
        },
        reporters: ['dots'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                preLoaders: [
                    {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
                ],
                loaders: [
                    {
                        test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?plugins[]=babel-plugin-rewire,plugins[]=babel-plugin-remove-decorators:before'
                    },
                    {
                        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                        loader: 'url-loader?limit=100000'
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true //When true, karma doesn't spam the console.
        }
    });
};
