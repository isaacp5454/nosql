const { Schema, model } = require('mongoose');   // this is destructoring. we are taking out components/methods from mongoose. brackets destructure the mongoose database. 

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,                //username already exists, no same usernames
    required: true,              //needs to have a username.
    trim: true


  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,   
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
});


friendsSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


// Initialize the User model
const User = model('user', userNameSchema);

module.exports = User;
