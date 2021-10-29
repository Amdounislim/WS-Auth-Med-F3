const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    password: {
        type: String
    },
    role: {
        type: Number
    }
})

module.exports = User = mongoose.model("users", userSchema)
// const User = mongoose.model("users", userSchema)
// module.exports = User