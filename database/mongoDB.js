const mongoose = require('mongoose');

const urlConnect="mongodb+srv://congdanh1392:havana2k@cluster0.ztjnx.mongodb.net/Clothes_Store_DB?retryWrites=true&w=majority";

mongoose.connect(urlConnect, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) throw err;
    console.log('Connect successfullyy!!');
  });