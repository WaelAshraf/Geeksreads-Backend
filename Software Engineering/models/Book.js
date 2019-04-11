const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  Cover : {
    type:String
  },
  ReadStatus : {
    type:String
  },
  Publisher : {
    type:String
  },
  Published : {
    type:Date
  },
  Description : {
    type: String,
    minlength: 1,
    maxlength: 1024
  },
  Store:{
    type:"array",
    "items":{
        type:String
    }
  },
  Pages:{
      type:Number
  },
  BookId:{
    type: String,
    unique: true
  },
  AuthorId:{
    type: String,
    unique: true
  },
  Isbn:{
    type: String,
    unique: true
  },
  Genre:{
    type:String
  }
  });

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
  return token;
}
const Book = mongoose.model('Book', BookSchema);
function validateUser(Book) {
const schema = {
Title: Joi.string().min(3).max(50).required(),
UserEmail: Joi.string().min(6).max(255).required().email(),
UserPassword: Joi.string().min(6).max(255).required()
};
return Joi.validate(Book, schema);
}
exports.Book = Book;
exports.validate= validateBook;
