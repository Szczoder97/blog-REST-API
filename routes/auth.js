const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Joi = require('@hapi/joi');
const bycrypt = require('bcrypt');

const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

router.post('/register', async (req,res) => {
    
        const {error} = await schema.validateAsync(req.body);
    
    if(error){
        return  res.status(400).send(error.details[0].message);
    }
    else{
        const eamilExist = await User.findOne({email: req.body.email});
        if(eamilExist){
            return res.status(400).send('Email already in use!');
        }
        const salt = await bycrypt.genSalt(10);
        const hashedPassoword = await bycrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassoword
        });
        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
    }
    
});
module.exports = router;