const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//import routes
const postRoute = require('./routes/posts');

//middleware
app.use('/posts', postRoute);

//mongo db connection 
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    { useUnifiedTopology: true },
    ()=> console.log('working'));

//Server
app.listen(3000);