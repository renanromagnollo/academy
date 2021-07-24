const mongoose = require('mongoose')

mongoose.Promise = global.Promise // usando a promise do node por causa de msg de erro

module.exports = mongoose.connect('mongodb://localhost/todo')