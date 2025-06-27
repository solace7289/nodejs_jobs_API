
const mongoose = require('mongoose')

// require bcryptjs and jwtsecret
const bcrypt = require('bcryptjs')
const { JWT_SECRET } = require('../config.json')
const jwt = require('jsonwebtoken')

// create a user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provie username"],
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
        match: [
            /^\S+@\S+\.\S+$/,
            'Email không hợp lệ',
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minLength: 6,
        maxLength: 50
    }
})

// hash password by bcrypt.genSalt(10)
// then save this.password by bcrypt.hash
UserSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// add method to UserSchema
// method generate JWT
UserSchema.methods.createToken = function() { // can not use arrow function in here
    // use jwt.sign to create jwt
    return jwt.sign(
        { userId: this._id, name: this.name },
        JWT_SECRET,
        { expiresIn: '1d'}
    ) 
}

// method to compare password
UserSchema.methods.comparePassword = async (canidatePassword) => {
    // use bcrypt.compare 
    const isMatch = await bcrypt.compare(canidatePassword, this.password)
    return isMatch
}

// export model as given name 'User'
module.exports = mongoose.model('User', UserSchema)






