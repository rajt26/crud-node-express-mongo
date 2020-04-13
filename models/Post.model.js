const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },

});

module.exports = mongoose.model('Posts', postSchema);
