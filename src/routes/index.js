const newsRoute = require('./news');
const sideRoute = require('./side');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/', sideRoute);
}

module.exports = route;
