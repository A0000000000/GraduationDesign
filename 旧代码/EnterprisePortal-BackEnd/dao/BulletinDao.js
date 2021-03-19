let mongodb = require('../db/mongodb')
const mongoose = mongodb.mongoose
const connect = mongodb.connect

let BulletinSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    fileBucket: String,
    images: [String],
    createTime: Date
})

let BullectinModel = mongoose.model('Bulletin', BulletinSchema)

module.exports = {
    
}