// Example model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String,
  timestamp: String
});

ArticleSchema.virtual('date')
  .get(function () {
    return this._id.getTimestamp();
  });

var Article = mongoose.model('Article', ArticleSchema);
