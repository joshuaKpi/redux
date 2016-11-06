var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 2012;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler)); // Refresh modules when main.js built

app.get("/", function(req, res) {
  res.sendfile(__dirname + '/index.html')
});

app.listen(port, function (error) {
  if (errror) {
    console.error(error);
  } else {
    console.info("Server listening on http://localhost:%s/ ", port);
  }
});