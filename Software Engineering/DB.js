// IMportant requires 
const config = require('config')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');

require('./models/resources.model');
// the routes used till now
const Users = require('./routes/Users');
const Authors = require('./routes/Authors');
const Auth = require('./routes/Auth');
const Statuses = require('./routes/Statuses');
const Comments = require("./routes/commentsController");
const Review = require("./routes/reviewsController");
const Resources= require("./routes/Resources");
const Books = require("./routes/Books");
const OwnedBooks= require("./routes/ownedBooks");
const app = express();

//Haitham -- cause error please check it 
/* if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
} */

// connecting to the database
mongoose.connect('mongodb://localhost:27017/GreekReaders',{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());

// 
app.use('/api/Users', Users);
app.use('/api/Authors',Authors);
app.use('/api/Auth', Auth);
app.use('/api/user_status',Statuses);
app.use('/api/comments/',Comments); 
app.use('/api/review/',Review);
app.use('/api/Resources',Resources);
app.use('/api/owned_books',OwnedBooks);
app.use ('/api/book',Books);
// the port where the application run
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// importannt Exports
module.exports.app= app;
