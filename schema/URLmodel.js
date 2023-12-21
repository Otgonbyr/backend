import mongoose from 'mongoose'

const URLschema = new mongoose.Schema({
    original: String,
    shortURL: String
    // url : String
})
const url = mongoose.model('test', URLschema)

export default url