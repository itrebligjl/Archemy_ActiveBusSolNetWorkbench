const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    user_group: String
  }
);

module.exports = mongoose.model('User', UserSchema);
