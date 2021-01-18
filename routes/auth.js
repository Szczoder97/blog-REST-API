const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Joi = require('@hapi/joi');

const schema = {
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(6).required
}

router.post('/register', async (req,res) => {
    //const {error} = Joi.validate(req.body, schema);
   // res.send(error.details[0].message);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});
module.exports = router;