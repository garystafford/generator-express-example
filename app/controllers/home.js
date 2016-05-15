var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Data = require('../../data');

module.exports = function (app) {
  app.use('/', router);
};

var articleCount = 0;

router.get('/', function (req, res, next) {
  Data.createTestData(true);
  Article.count(null, function (err, count) {
    if (err) return next(err);
    articleCount = count;
  });
  next();
}, function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles,
      count: articleCount
    });
  });
});

// router.get('/count', function (req, res, next) {
//   Article.count(null, function (err, count) {
//     if (err) return next(err);
//     res.render('count', {
//       count: count.toString()
//     });
//   });
// });
