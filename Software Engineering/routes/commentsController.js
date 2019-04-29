///////////////////Required Modules//////////////////////////
var express = require('express');
const{CreatNotification} = require('../models/Notifications');
const {CreatStatuses} = require("../models/Statuses")
var Router = express.Router();
const mongoose = require('mongoose');
const {validate,comment} = require('../models/comments.model');
const user = require("../models/User").User;
const {review} = require("../models/reviews.model");
const resource =mongoose.model('Resources');
const Joi = require('joi');
///////////////////Req and Res Logic////////////////////////
////get////
/**
 * @api{GET}/comment.json List comments on a subject 
 * @apiName listCommentsOnSubject
 * @apiGroup Comments 
 * @apiError {404} NOTFOUND no comments on this subject
 * @apiSuccess {Number} likes number of likes on each comment
 * @apiSuccess {String} body body text of each comment
 * @apiSuccess {String} userName name of the user who wrote each comment
 * @apiSuccess {Number} userId the id of the user who wrote each comment
 * @apiSuccess {datePicker} date the date of each comment
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "comment":[
 *         {"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"
 *         },......
 * ]
 * }
 * @apiParam{String} type Subject Type Commented On; book,review,etc
 * @apiParam{Number} ID Id of resource given as type Parameter
 * @apiParam{Number} perPage Number of comments per page default is <code>20</code>
 * @apiParam{Number} pageNumber Number of current page default is <code>1</code>
 */
Router.get('/', async (req, res) => {
    const { error } = validateget(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  comment.find({"ReviewId" : req.body.ReviewId}).then(commArr => {
      if(commArr.length==0) return res.status(404).json({ success: false });
      res.status(200).json(commArr);
  }).catch(err => res.status(404).json({ success: false }));
  
      
});

////post////
/**
 * @apiSuccess  {Boolean} AddedCommentSuc comment was added successfully
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "AddedCommentSuc": true
 * }
 * @api{POST}/comment.json Create a comment
 * @apiName creatComment
 * @apiGroup Comments
 * @apiParam{String} Body The body of the comment  
 * @apiParam{ObjectID} reviewId   Id of resource given as type Parameter
 * @apiParam{ObjectID} BookId   Id of resource given as type Parameter
 * @apiParam{Number} userID  Id of user who wrote the comment
 * @apiParam{datePicker} date the date the comment was written on
 * @apiError EmptyComment Must Have At Least <code>1</code> Character In Comment
 */

Router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    var comment1 = new comment();
    //////////////////////////////////////////////////////////////
    let check = await user.findOne({ UserId: req.body.userId });
    if (!check) return res.status(400).send({"ReturnMsg":"User Doesn't Exist"});
    const user1 = await user.findById(req.body.userId);
    //////////////////////////////////////////////////////////////
    let check1 = await review.findOne({ reviewId: req.body.ReviewId });
    if (!check1) return res.status(400).send({"ReturnMsg":"review Doesn't Exist"});
    const review1 = await review.findById(req.body.ReviewId);
    /////////////////////////////////////////////////////////////
    comment1.Body = req.body.Body;//1
    comment1.userId=req.body.userId;//2
    comment1.userName = user1.UserName; //3
    comment1.date = req.body.date;//4
    comment1.BookId=req.body.BookId;//5
    comment1.ReviewId=req.body.ReviewId;//6
    comment1.CommentId=comment1._id;  //7
    comment1.Photo= user1.Photo; //8
    comment1.LikesCount= 0; //9
    comment1.liked= false;
    /* console.log(user1.UserName);
    console.log(user1.UserId);
    console.log(comment1); */
    comment1.save((err, doc) => {
        if (!err) {           
            review.findOneAndUpdate({"reviewId":req.body.ReviewId},{$inc:{commCount:1}},function (err, user1) {
                if (!err) {             
                    return res.status(200).send({ "AddedCommentSuc": true });
                }
                else {
                    return res.status(404).send("Not found");
                    console.log('error during log insertion: ' + err);}
            });
        /*     // review.findOne({reviewId :req.body.ReviewId},(err,doc)=>
            // {
            //     console.log(doc);
            //      if(doc)
            //     {
            //         var NotifiedUserId = doc.userI
            //         console.log(doc.userId); 

            //      CreatNotification(NotifiedUserId,req.body.ReviewId,comment1.CommentId,"Comment", comment1.userId,null);
            //     }
 */
         //   });


         /*review1
         
          review.findOneAndUpdate({"reviewId":review1._id},{$inc:{commCount:1}},function (err, user1) {
                if (!err) {             
                    return res.status(200).send({ "AddedCommentSuc": true });
                }
                else {
                    return res.status(404).send("Not found");
                    console.log('error during log insertion: ' + err);}
            });
         
         
         
         */
    
  //  console.log(user1.UserName);
   // console.log(user1.UserId);
    //console.log(comment1);
    comment1.save((err, doc) => {
        if (!err) {           
            console.log(req.body.ReviewId);
           review.findOne({"reviewId": req.body.ReviewId},(err,doc)=>
            {
                console.log(doc);
                 if(doc)
                {
                    var NotifiedUserId = doc.userId;
                    console.log(doc.userId); 

                  CreatNotification(NotifiedUserId,req.body.ReviewId,comment1.CommentId,"Comment", comment1.userId,null);
                  var n = user1.FollowersUserId.length;  
                  for (i=0;i<n;i++)
                  {
                  CreatStatuses(user1.FollowersUserId[i],req.body.ReviewId,comment1.CommentId,"Comment",comment1.userId,null,null);
                  }               
                }

 
            });
            res.json({ "AddedCommentSuc": true });
    
        }   
            else {
            res.json({ "AddedCommentSuc": false });
            console.log('error during log insertion: ' + err);
        }
    });
});

/////////////////////////////////////////
function validateget(reqin) {
    const schema = {
    ReviewId:Joi.string().min(24),
    };
    return Joi.validate(reqin, schema);
    }
/////////////////////////////////////////
module.exports = Router;
