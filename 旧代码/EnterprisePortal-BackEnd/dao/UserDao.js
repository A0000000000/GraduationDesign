let mongodb = require('../db/mongodb')
const mongoose = mongodb.mongoose
const connect = mongodb.connect

let UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    email: String,
    createTime: Date,
    birthday: Date,
    fileBucket: String,
    icon: String,
    role: [String],
    locations: [String],
    orders: [String]
})

let UserModel = mongoose.model('User', UserSchema)

module.exports = {
    
}