const express = require('express')
const mongoose = require('mongoose')
const app = express()
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)

app.get('/', (req, res) => {
  res.send('home')
})
mongoose.connect('mongodb//localhost:27017/NodeMongoPractise', { useNewUrlParser: true }, () =>
  console.log('connected'))

app.listen(3000)