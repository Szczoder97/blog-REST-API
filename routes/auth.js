const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Joi = require('@hapi/joi');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});
const schemaLog = Joi.object({
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

router.post('/login', async (req,res) =>{
      
    const {error} = await schemaLog.validateAsync(req.body);
    
    if(error) return  res.status(400).send(error.details[0].message);
    

    const user = await User.findOne({email: req.body.email});

    //check email
   
    if(!user) return res.status(400).send('email or password incorrect!');

    //check password

    const validPass = bycrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('email or password incorrect!');

    //token
    const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});
module.exports = router;