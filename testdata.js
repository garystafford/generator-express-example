var express = require('express'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = {
  addTestData: function () {
    var date = Date.now(),
      sampleArticle = new Article({
        title: 'Test Data',
        url: 'http://www.testdata.com',
        text: Date.now()
      });
    Article.findOne({title: 'Test Data'}, function (err, doc) {
      console.log(doc);
    });
    Article.count({title: 'Test Data'}, function (err, count) {
      console.log(count);
      if (count === 0) {
        sampleArticle.save();
      }
    });
    Article.count(null, function (err, count) {
      console.log(count);
    });
  }
};

//
// module.exports = testData();
//
// var Module = (function () {
//
//   return {
//     publicMethod: function () {
//       // code
//     }
//   };
//
// })();
