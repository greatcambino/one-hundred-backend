const mongoose = require("mongoose")

const DrabbleSchema = new mongoose.Schema({
    title: String,
    content: String
})

mongoose.model('Drabble', DrabbleSchema)

module.exports = mongoose 
