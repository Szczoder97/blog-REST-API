const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        max: 30,
        required: true,
        min:3
    },
    email:{
        type: String,
        min: 10,
        max: 50,
        required: true
    },
    password:{
        type: String,
        min: 6,
        required: true
    }
});

module.exports = mongoose.model('Users', userSchema);