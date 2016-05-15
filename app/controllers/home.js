var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Data = require('../../data');

module.exports = function (app) {
  app.use('/', router);

  //http://webapplog.com/error-handling-and-running-an-express-js-app/
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  } else {
    app.use(function (err, req, res, next) {
      // Do logging and user-friendly error message display
      console.error(err);
      res.status(500).send({status: 500, message: 'internal error', type: 'internal'});
    })
  }
};

var articleCount = 0;

router.get('/', function (req, res, next) {
  Data.refreshData(true);
  Article.count(function (err, count) {
    articleCount = count;
  });
  next();
}, function (req, res) {
  Article.find(function (err, articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles,
      count: articleCount
    });
  });
});
