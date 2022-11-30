const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    message : {
        type : String,
        required : true
    }
})

const Resource = mongoose.model('resources', resourceSchema);

module.exports =  Resource;