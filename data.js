var express = require('express'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

var Data = (function () {
  var date = Date.now();

  var articles = [{
    title: 'Article One',
    url: 'http://www.article.com/1',
    text: date
  }, {
    title: 'Article Two',
    url: 'http://www.article.com/2',
    text: date
  }, {
    title: 'Article Three',
    url: 'http://www.article.com/3',
    text: date
  }, {
    title: 'Article Four',
    url: 'http://www.article.com/4',
    text: date
  }, {
    title: 'Article Five',
    url: 'http://www.article.com/5',
    text: date
  }];

  var addData = function () {
    Article.insertMany(articles, function (err, docs) {
      if (err) {
        return console.log('error:', err);
      } else {
        return console.log(docs);
      }
    });
  };

  var removeData = function (callback) {
    Article.remove({}, function (err) {
      if (err) {
        return console.log('error:', err);
      }
    });
    addData();
  };

  return {
    createTestData: function (removeOldData) {
      if (removeOldData === true) {
        removeData(addData);
      } else {
        addData();
      }
    }
  }
})();

module.exports = Data;
