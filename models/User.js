// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  age: Number,
  addresses: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('User', userSchema)
