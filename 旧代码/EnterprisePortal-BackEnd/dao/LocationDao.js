let mongodb = require('../db/mongodb')
const mongoose = mongodb.mongoose
const connect = mongodb.connect

let LocationSchema = new mongoose.Schema({
    id: String,
    name: String,
    details: String
})

let LocationModel = mongoose.model('Location', LocationSchema)

module.exports = {

}