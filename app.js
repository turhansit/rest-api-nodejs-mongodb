const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post');

require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use('/api/v1', postRoute)

// Connect to DB
mongoose.connect(process.env.db_connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((result) => console.log('connect to db'))
  .catch((err) => console.log(err));
// Routes
app.get('/health-check', (req, res) => {
  res.send('Hello MongoDB and Node.js Worlds');
});

// Listening
app.listen(3000);
