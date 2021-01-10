const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//post detail
router.get('/:id', async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//create post
router.post('/create', async (req,res) => {
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

//update
router.patch('/:id', async (req,res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id:req.params.id},
            {$set:{title:req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});

//delete
router.delete('/:id', async (req,res) => {
    try{
        const removePost = await Post.remove({_id : req.params.id});
        res.json(removePost);
    }catch(err) {
        res.json({messsage:err});
    }
});
module.exports = router;