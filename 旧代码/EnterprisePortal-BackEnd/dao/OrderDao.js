let mongodb = require('../db/mongodb')
const mongoose = mongodb.mongoose
const connect = mongodb.connect

let OrderSchema = new mongoose.Schema({
    id: String,
    items: [String],
    sum: Number
})

let ItemSchema = new mongoose.Schema({
    id: String,
    goodId: String,
    count: Number
})

let OrderModel = mongoose.model('Order', OrderSchema)
let ItemModel = mongoose.model('item', ItemSchema)

module.exports = {
    
}