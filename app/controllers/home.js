var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Data = require('../../data');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Data.createTestData(false);
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
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
