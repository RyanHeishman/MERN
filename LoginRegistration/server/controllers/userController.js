const User = require('../models/userModel');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

    registerUser: async (req, res) => {
        try{
            // check if the email that is entered is already in the database
            const potentialUser =   await User.findOne({email:req.body.email})
            if (potentialUser){
                res.status(400).json({message:'That email already exists'})
            }else{ 
                // create the user
                const newUser = await User.create(req.body);
                
                // generating a user token and storing the id and email of the newly created user
                const userToken = jwt.sign({_id: newUser._id, email:newUser}, secret, {expiresIn: '2h'})
                
                // sending user data back to the client
                res.status(201).cookie('userToken', userToken, {httpOnly: true, maxAge: 2 * 60 * 60 * 1000}).json(newUser);
            }  
        }
        catch(err){
            res.status(400).json({ error: err })
        }
    }
}