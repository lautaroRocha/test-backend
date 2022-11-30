const express = require('express');
const app = express();
const port = process.env.PORT || 7000
const router = require('./routes/router')
require('./config/mongoConfig')

app.use(express.json())  
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);
app.use(router)
