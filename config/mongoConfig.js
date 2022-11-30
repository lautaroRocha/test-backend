const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/local')
    .then(()=>{console.log('Connection established to local DB')})
    .catch(error => handleError(error));
