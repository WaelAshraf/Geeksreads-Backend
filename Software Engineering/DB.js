const config = require('config')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const Users = require('./routes/Users');
const Auth = require('./routes/Auth');
const Statuses = require('./routes/Statuses');
const Comments = require("./routes/commentsController");
const Resources= require("./routes/Resources");
const express = require('express');
const app = express();
mongoose.connect('mongodb://localhost:27017/GreekReaders',{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());

app.use('/api/Users', Users);
app.use('/api/Auth', Auth);
app.use('/api/user_status',Statuses);
app.use('/api/comments/',Comments);
app.use('/api/Resources',Resources);
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports.app= app;