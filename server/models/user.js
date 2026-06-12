const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
})

//Model
const User = mongoose.model("User", userSchema)

async function register(username, password) {
  const user = await getUser(username);
  if(user) throw Error('Username already in use')

  const newUser = await User.create({
    username: username,
    password: password
  });

  return newUser._doc
}

async function login(username, password) {
  const user = await getUser(username)
  if(!user) throw Error('User not found')
  if(user.password != password) throw Error('Wrong Password')

  return user._doc
}

async function updatePassword(id, password) {
  const user = await User.findByIdAndUpdate(id, {password}, {new: true})
  return user._doc
}

async function deleteUser(id) {
  await User.deleteOne({"_id": id})
};

async function getUser(username) {
  return await User.findOne({"username": username})
}

module.exports = { 
  register, login, updatePassword, deleteUser 
};