const mongoose = require('mongoose');

const urlConnect= process.env.DB;

mongoose.connect(urlConnect, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) throw err;
    console.log('Connect successfullyy!!');
  });