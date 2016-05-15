var express = require('express'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

var Data = (function () {
  var date = Date.now(),
    articles = [{
      title: 'Article One',
      url: 'http://www.article.com/1',
      text: Date.now()
    }, {
      title: 'Article Two',
      url: 'http://www.article.com/2',
      text: Date.now()
    }, {
      title: 'Article Three',
      url: 'http://www.article.com/3',
      text: Date.now()
    }, {
      title: 'Article Four',
      url: 'http://www.article.com/4',
      text: Date.now()
    }, {
      title: 'Article Five',
      url: 'http://www.article.com/5',
      text: Date.now()
    }];

  return {
    removeData: function (options, callback) {
      Article.remove({}, function (err) {
        if (err) {
          return console.log('error:', err);
        }
      });

      if (typeof callback === "function") callback(options);
    },

    addTestData: function (options) {
      Article.insertMany(articles, function (err, docs) {
        if (err) {
          return console.log('error:', err);
        } else {
          return console.log(docs);
        }
      });
    }
  };
})();

module.exports = Data;
