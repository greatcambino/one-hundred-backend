const mongoose = require("./connection")

const DrabbleSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Drabble = mongoose.model('Drabble', DrabbleSchema)

module.exports = Drabble 