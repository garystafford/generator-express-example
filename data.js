var express = require('express'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

var Data = (function () {
  var date = new Date().getTime();

  var articles = [{
    title: 'Article One',
    url: 'http://www.article.com/1',
    text: 'An article about the number one',
    timestamp: date
  }, {
    title: 'Article Two',
    url: 'http://www.article.com/2',
    text: 'An article about the number two',
    timestamp: date
  }, {
    title: 'Article Three',
    url: 'http://www.article.com/3',
    text: 'An article about the number three',
    timestamp: date
  }, {
    title: 'Article Four',
    url: 'http://www.article.com/4',
    text: 'An article about the number four',
    timestamp: date
  }, {
    title: 'Article Five',
    url: 'http://www.article.com/5',
    text: 'An article about the number five',
    timestamp: date
  }];

  var removeData = function (callback) {
    Article.remove(function (err) {
      if (err) {
        if (err) return next(err);
      }
    });
    if (typeof callback === "function") callback();
  };

  var addData = function () {
    Article.insertMany(articles, function (err, docs) {
      if (err) {
        if (err) return next(err);
      } else {
        return console.log(docs);
      }
    });
  };

  return {
    refreshData: function (removeOldData) {
      if (removeOldData === true) {
        removeData(addData);
      } else {
        addData();
      }
    }
  }
})();

module.exports = Data;
