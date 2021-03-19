let mongodb = require('../db/mongodb')
const mongoose = mongodb.mongoose
const connect = mongodb.connect

let GoodSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    count: Number,
    details: String,
    fileBucket: String,
    images: [String]
})

let GoodModel = mongoose.model('Good', GoodSchema)

module.exports = {
    
}