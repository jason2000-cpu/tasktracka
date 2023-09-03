const mongoose = require('mongoose');
// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

  });
  
  const User = mongoose.model('User', userSchema);
  
  // todos Schema
  const todoSchema = new mongoose.Schema({
    body: String,
    timestamp:  Date,
    status: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   
  });
  
  const Todo = mongoose.model('Post', todoSchema);

   module.exports = { Todo, User}
  