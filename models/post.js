const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type : String,
        require: true,
        max: 50
    },
    author: {
        type : String,
        require: true,
        max:20
    },
    text: {
        type : String,
        require: true
    },
    publishDate: Date
});

module.exports = mongoose.model('Posts', PostSchema);