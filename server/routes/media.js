const express = require('express')
const User = require('../models/user')
const Media = require('../models/media')
const Rating = require('../models/rating')
const router = express.Router()

router
.post('/createMedia', async (req, res) => {
    try {
       const media = await Media.createMedia(
        req.body.title, req.body.description, req.body.medium, req.body.userId)
        res.send(media)
      } catch (error) {
        res.status(401).send({ message: error.message })
     }
  })
  .get('/getMedia', async (req, res) => {
    try {
      await Media.checkUser(req.body.id, req.body.userId)
      const media = await Media.getMedia(req.body.id)
      res.send(media)
    } catch (error) {
      res.status(401).send({ message: error.message })
    }
  })
    .put('/updateMedia', async (req, res) => {
      try {
        await Media.checkUser(req.body.id, req.body.userId)
        const media = await Media.updateMedia(
          req.body.id, req.body.title, req.body.description, req.body.medium
        )
        res.send(media)
      } catch (error) {
        res.status(401).send({ message: error.message })
      }
    })
    .delete('/deleteMedia', async (req, res) => {
      try {
        await Media.checkUser(req.body.id, req.body.userId)
        await Media.deleteMedia(req.body.id)
        res.send({ message: "Media deleted successfully" })
      } catch (error) {
        res.status(401).send({ message: error.message })
      }
    })
    module.exports = router
