const mongoose = require("mongoose")

const mediaSchema = new mongoose.Schema({
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    medium: {
        type: String, 
        enum: ['Book', 'Movie', 'TV Show', 'Video Game', 'Music', 'Other'],
        required: true
    }
})

const Media = mongoose.model("Media", mediaSchema)

async function createMedia(title, description, medium, userId) {
    if (!title || !description || !medium) throw Error("Please make sure to fill out all fields")
   const validMediums = ['Book', 'Movie', 'TV Show', 'Video Game', 'Music', 'Other']
   if (!validMediums.includes(medium)) throw Error("Invalid medium type")
    const newMedia = await Media.create({
        title: title,
        description: description,
        medium: medium,
        userId: userId
    })
        return newMedia._doc
}

async function getMedia(id) {
    const media = await Media.findById(id)
  if(!media) throw Error("No Initial Media Post Found")
  return media._doc
}
async function updateMedia(id, title, description, medium) {
    if (!title || !description || !medium) throw Error("Please make sure to fill out all fields")
    const media = await Media.findByIdAndUpdate(id, {title, description, medium }, { new: true })
    return media._doc
}
async function deleteMedia(id) {
  await Media.deleteOne({ "_id": id })
}  

module.exports = {
    createMedia, getMedia, updateMedia, deleteMedia
}
