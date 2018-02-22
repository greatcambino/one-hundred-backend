const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo')

if (process.env.NODE_ENV === 'production') {
    mongoose
      .connect(process.env.MLAB_URL, { useMongoClient: true })
      .catch(err => console.log(err))
  } else {
    mongoose
      .connect('mongodb://localhost/one-hundred', { useMongoClient: true })
      .catch(err => console.log(err))
  }
  
  mongoose.Promise = Promise
  
  module.exports = mongoose