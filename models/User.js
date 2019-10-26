const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    fullname: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    accountType: {type: String, required: true},
    country: {type: String, required: true},
    gender: {type: String, required: true},
    avatar: String,
    jobsCompleted: [mongoose.SchemaTypes.ObjectId],
    jobsIssued: [mongoose.SchemaTypes.ObjectId],
    verified: {type: Boolean, required: true, default: false},
    accountBalance: {type: Number, required: true, default: 0},
    transactions: [mongoose.SchemaTypes.ObjectId],
    responseRate: {type: Number, required: true, default: 100},
    skills: [String],
})

module.exports = mongoose.model('user', UserSchema)
