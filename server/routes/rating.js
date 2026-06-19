const express = require('express')
const Rating = require('../models/rating')
const User = require('../models/user')
const Media = require('../models/media')
const router = express.Router()

router
  .post('/createRating', async (req, res) => {
    try {
       const rating = await Rating.createRating(
        req.body.title, req.body.content, req.body._id, req.body.mediaId)
        res.send(rating) 
      } catch (error) {
        res.status(401).send({ message: error.message })
     }
  })

  .get('/getRating', async (req, res) => {
    try {
      await Rating.checkUser(req.body.id)
      const rating = await Rating.getRating(req.body.id)
      res.send(rating);
    } catch (error) {
      res.status(401).send({ message: error.message })
    }
  })

  .put('/updateRating', async (req, res) => {
    try {
      await Rating.checkUser(req.body.id)
      const rating = await Rating.updateRating(req.body.id, req.body.title, req.body.content)
      res.send(rating)
    } catch (error) {
      res.status(401).send({ message: error.message })
    }
 })

  .delete('/deleteRating', async (req, res) => {
    try {
      await Rating.checkUser(req.body.id)
      await Rating.deleteRating(req.body.id)
      res.send({ success: 'Rating deleted' })
    } catch (error) {
      res.status(401).send({ message: error.message })
    }
  })

module.exports = router
