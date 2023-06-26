const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/board', '/member'],
        createProxyMiddleware({
            target: 'http://localhost:9002',
            changeOrigin: true,
        })
    );
};
