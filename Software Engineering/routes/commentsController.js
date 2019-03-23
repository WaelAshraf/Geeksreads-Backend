///////////////////Required Modules//////////////////////////
var express = require('express');
var Router = express.Router();
const mongoose = require('mongoose');
const {validate,comment} = require('../models/comments.model');
const resource =require('../models/resources.model').resource;
const Joi = require('joi');
///////////////////Req and Res Logic////////////////////////
////get////
Router.get('/', async (req, res) => {
    const { error } = validateget(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
    console.log(req.body);
  comment.find({"ReviewId" : req.body.ReviewId}).then(commArr => {
      if(commArr.length==0) return res.status(404).json({ success: false });
      res.status(200).json(commArr);
  }).catch(err => res.status(404).json({ success: false }));
  
      
});
////post////
Router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log(req.body);
    var comment1 = new comment();
    var resource1 = new resource();
    comment1.Body = req.body.Body;//1
    comment1.userId=req.body.userId;//2
    comment1.userName = req.body.userName;//3
    comment1.date = req.body.date;//4
    comment1.BookId=req.body.BookId;//5
    comment1.ReviewId=req.body.ReviewId;//6
    comment1.CommentId=comment1._id;  //7
    console.log(comment1._id+" = "+comment1.CommentId+" boooooooooooooooooooooooooooooooooooooooooooooo ");
    resource1.resourceId=resource1._id;//1
    resource1.reviewId= null;//2
    resource1.userId=req.body.userId;//3
    resource1.CommentId=comment1._id;//4
    resource1.likes=0;//5
    resource1.type='comment';//6
    comment1.save((err, doc) => {
        if (!err) {           
            
            res.json({ "AddedCommentSuc": true });
            resource1.save();
        }
        else {
            res.json({ "AddedCommentSuc": false });
            console.log('error during log insertion: ' + err);
        }
    });
});
function validateget(reqin) {
    const schema = {
    ReviewId:Joi.string().min(24),
    };
    return Joi.validate(reqin, schema);
    }


module.exports = Router;
