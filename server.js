const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const url = require('url');

const app = express();
const compiler = webpack(config);
const mockData = require('./test/mock-data');

app.use(bodyParser.json());

console.info('MOCK MODE');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/test', express.static('test'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/test/index.html'));
});

app.get(/products/, function (req, res) {
    res.send(mockData.products);
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:3000 with sourcemap type "${config.devtool}".`);
});
