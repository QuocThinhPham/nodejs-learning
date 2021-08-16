class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('params: ' + req.params.slug);
    }
}

module.exports = new NewsController();
