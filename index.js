const express             = require('express')
const drabblesController = require('./controllers/drabbles')
const parser              = require('body-parser')
const cors                = require('cors')


const app = express()
const PORT = 8080


app.use(cors())
app.use(parser.urlencoded({extended: true})) // interprets key value pairs in URLs
app.use(parser.json()) // interprets a stringified JSON object on the request body

app.use('/api/drabbles/', drabblesController)

app.listen(PORT, () => console.log(`Live on port ${PORT}`))