const express = require('express');
const app = express();
const port = process.env.PORT || 7000
const mongoose = require('mongoose')
const router = require('./routes/router')

mongoose.connect('mongodb://127.0.0.1:27017/local')
    .then(()=>{console.log('Connection established to local DB')})
    .catch(error => handleError(error));

app.use(express.json())  
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);
app.use(router)
