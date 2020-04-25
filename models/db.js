const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Employee", { useNewUrlParser: true }, (err) => {
  if (!err) { console.log('Database connection successfully') }
  else {
    console.log('error in database connection')
  }
});

require('./Employee.model');