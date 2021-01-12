const { request } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: request.body.email,
        password: request.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});
module.exports = router;