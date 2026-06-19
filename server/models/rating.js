const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  mediaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Media",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const Rating = mongoose.model("Rating", ratingSchema)

async function checkUser(id, userId) {
  const rating = await Rating.findById(id)
  if (!rating) throw Error("Rating not found")
  if (rating.userId !== userId) throw Error("Unauthorized User")
  return rating
}
async function createRating(title,content,userId,mediaId) {
    if (!title || !content) throw Error("Please Create a Title and Rating")
    const newRating = await Rating.create({
        title: title,
        content: content,
        userId: userId,
        mediaId: mediaId
    })
        return newRating._doc
}

async function getRating(id) {
    const rating = await Rating.findById(id)
  if(!rating) throw Error("Rating not Found")
  
  return rating._doc
}

async function updateRating(id, title, content) {
    if (!title || !content) throw Error("Please Update Rating")
    const rating = await Rating.findByIdAndUpdate(id, {title,content }, { new: true })
    return rating._doc
}

async function deleteRating(id) {
  await Rating.deleteOne({ "_id": id })
}

module.exports = {
  checkUser, createRating, getRating, updateRating, deleteRating
}