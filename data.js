var express = require('express');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

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
  }, {
    title: 'Article Six',
    url: 'http://www.article.com/6',
    text: 'An article about the number six',
    timestamp: date
  }, {
    title: 'Article Seven',
    url: 'http://www.article.com/7',
    text: 'An article about the number seven',
    timestamp: date
  }, {
    title: 'Article Eight',
    url: 'http://www.article.com/8',
    text: 'An article about the number eight',
    timestamp: date
  }, {
    title: 'Article Nine',
    url: 'http://www.article.com/9',
    text: 'An article about the number nine',
    timestamp: date
  }, {
    title: 'Article Ten',
    url: 'http://www.article.com/10',
    text: 'An article about the number ten',
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
        console.log(docs);
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
