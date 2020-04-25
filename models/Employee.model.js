const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  contact: { type: Number },
  age: { type: Number },
  address: { type: String }

});

module.exports = mongoose.model('Employee', employeeSchema);
