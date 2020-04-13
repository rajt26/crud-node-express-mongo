const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('../models/Post.model')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.render("post/addOrEditPost", {
    viewTitle: "Insert Post"
  })
})
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



router.get('/list', (req, res) => {
  res.json('from list')
})
// router.post('/', (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   })
//   post.save()
//     .then(data => {
//       res.json(data)
//     })
//     .catch(err => {
//       res.json({ message: err })
//     })
// })
module.exports = router