var mongoose = require('mongoose')

var searchSchema = new mongoose.Schema({
  query: String,
  _user: {type: Object, ref: 'User'},
  created_at: Date,
  updated_at: Date
})

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;
