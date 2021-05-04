const mongoose = require("mongoose");

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/myApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

mongoose.Promise = Promise;

module.exports.Todo = require("./todo.js");