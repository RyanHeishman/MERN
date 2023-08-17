const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail }  = require('validator');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    email: {
        type: String,
        required: [true, 'Password is required'],
        validate: [isEmail, 'Invalid Email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be at least 8 characters']
    }
}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value)

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidated('confirmPassword', 'Passwords dont match')
    }
    next();
})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.export = mongoose.model('User', UserSchema);