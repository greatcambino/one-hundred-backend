const mongoose = require('./connection')
const seeds    = require('./seedData')

const Drabble = mongoose.model('Drabble')

mongoose.Promise = Promise

Drabble.remove({}).then(_ => {
    console.log('Dropped the DB')
    Drabble.collection.insert(seeds).then(seededEntries => {
      console.log(seededEntries)
      mongoose.connection.close()
    })
  })