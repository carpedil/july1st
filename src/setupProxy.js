const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // 代理可以配置多个
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://i.maoyan.com/',
            changeOrigin: true,
        })
    );
};