const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api/Homes",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7053',
        secure: false
    });

    app.use(appProxy);
};
