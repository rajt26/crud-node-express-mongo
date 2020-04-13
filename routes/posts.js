const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('../models/Post.model')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//get post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.send(posts)

  } catch (err) {
    res.json({ message: err })
  }
})

//submit post
router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  post.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while creating the product."
      });
    });
})


//specific post

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.send(post)
  } catch (error) {
    res.send(error)
  }
})

//delete post
router.delete('/:postId', async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId })
    res.send(deletePost)
  } catch (error) {
    res.send(error)
  }
})

//update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.update({ _id: req.params.postId }, { $set: { title: req.body.title, description: req.body.description } })
    res.send(updatePost)
  } catch (error) {
    res.send(error)
  }
})




module.exports = router