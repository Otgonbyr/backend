import mongoose from 'mongoose'

const URLschema = new mongoose.Schema({
    url : String
})
const url = mongoose.model('test', URLschema)

export default url