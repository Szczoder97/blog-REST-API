const express = require('express');
const router = express.Router();
const Post = require('../models/post');


router.post('/',(req,res) => {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        text: req.body.text
    });
    post.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

module.exports = router;