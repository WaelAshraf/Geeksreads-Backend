const config = require('config');
const crypto = require('crypto');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
//const sendgrid = require('sendgrid');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User,validate} = require('../models/User');
const mongoose = require('mongoose');
const nodeMailer = require('nodemailer');
//const sgMail = require('@sendgrid/mail');
const express = require('express');
const router = express.Router();
const Author= require('../models/Author.model');

//get current User


/**
 * @api{Post} /me/Get Current User
 * @apiVersion 0.0.0
 * @apiName GetUser 
 * @apiGroup Users
 * 
 * @apiParam {string} Token JWTtoken
 * @apiSuccessExample  Expected Data on Success
 * {  "UserId" : 'aabb', "UserName" : 'aabb',"UserEmail" : 'aabb' }
 * @apiError Invalid-token The <code>User</code> is not valid
 */

router.get('/me', auth, async (req, res) => {
  let check = await User.findOne({ UserId: req.user._id });
  if (!check) return res.status(400).send({"ReturnMsg":"User Doesn't Exist"});
  const user = await User.findById(req.user._id).select('-UserPassword');
  if (!user.Confirmed) return res.status(401).send({  "ReturnMsg" : 'Your account has not been verified.' });
  res.status(200).send(user);
});




//Verify From Email Link

/**
 * @api{Post} /Verify/verify user email
 * @apiVersion 0.0.0
 * @apiName Verify 
 * @apiGroup Users
 * 
 * @apiParam {string} Token JWTtoken
 * @apiSuccessExample  Expected Data on Success
 * {
    "ReturnMsg": "Current User Token.",
    "Token":token}
 * @apiError Invalid-token The <code>User</code> is not valid
 */

router.post('/verify', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-UserPassword');
  user.Confirmed = true;
  user.save();
  const token = user.generateAuthToken();

  res.status(200).send({
    "ReturnMsg": "Current User Token.",
    "Token":token});
});

//Sign Up Api sends verification mail

/**
 * @api{Post} /SignUp/Signs User up
 * @apiVersion 0.0.0
 * @apiName SignUp 
 * @apiGroup Users
 * 
 * @apiParam {string} UserName User Name
 * @apiParam {string} UserEmail User Email
 * @apiParam {string} UserPassword User Password
 *
 *  
 * @apiSuccessExample  Expected Data on Success
 * {"ReturnMsg":"A verification email has been sent to " + UserEmail + "."}
 * @apiError Invalid-email-name The <code>User</code> is not valid
 */
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({"ReturnMsg":error.details[0].message});
  let user = await User.findOne({ UserEmail: req.body.UserEmail });
  if (user) return res.status(400).send({"ReturnMsg":"User already registered."});
user = new User ({
  "UserName":req.body.UserName,
  "UserEmail":req.body.UserEmail,
  "UserPassword":req.body.UserPassword
});
const salt = await bcrypt.genSalt(10);
user.UserId = user._id;
user.UserPassword = await bcrypt.hash(user.UserPassword, salt);
await user.save();
const token = user.generateAuthToken();
let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'geeksreads@gmail.com',
              pass: 'AaBb1234'
          }
      });
  let mailOptions = {
     from: 'no-reply@codemoto.io',
to: user.UserEmail,
subject: 'Account Verification Token',
text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/verify\/'+ token +'.\n' };
let info = await transporter.sendMail(mailOptions);
transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
res.status(200).send({"ReturnMsg":"A verification email has been sent to " + user.UserEmail + "."});
//res.header('x-auth-token', token).send(_.pick(user, ['_id', 'UserName', 'UserEmail']));
});
});

/**
 * 
 * @api {POST}  /api/Users/Follow Follow a user
 * @apiName Follow user
 * @apiGroup User
 * @apiError {404} id-not-found The<code>userId_tobefollowed</code> was not found.
 * @apiSuccess {200} Follow Successful or not
 * @apiParam  {String} myuserId GoodReads User ID
 * @apiParam  {String} userId_tobefollowed GoodReads User ID
 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
      "success": true,
      "Message":"Successfully done"
   }
 *  @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"User Id not  found !"
 * }
 * 
 * 
 */


//Follow User
router.post('/Follow', async (req, res) => { //sends post request to /Follow End point through the router
  /* console.log(req.body.userId_tobefollowed);
  console.log(req.userId_tobefollowed);
  console.log(req.params.userId_tobefollowed);
  console.log(req.query.userId_tobefollowed);  //ONLY WORKINGGGGGGGGGGGG
  console.log("my"+req.query.myuserid);*/
    mongoose.connection.collection("Users").updateOne( // accesses basic mongodb driver to update one document of Users Collection
      {
          UserId :  req.query.userId_tobefollowed //access document of user i want to follow 
      },
      {$push: { // Push to end of array of the user's followers
        FollowersUserId:req.query.myuserid
      }}
      ,function (err,doc) { // error handling and checking for returned mongo doc after query
  
         if (doc.matchedCount==0 || err) //matched count checks for number of affected documents by query 
         { res.status(404).json({ // sends a json with 404 code 
          success: false , // Follow Failed
           "Message":"User Id not  found !"});
         }
       else
       {
       res.status(200).json({ //sends a json with 200 code
         success: true ,//Follow Done 
          "Message":"Sucessfully done"});
       }
    });
    mongoose.connection.collection("Users").updateOne( // accesses basic mongodb driver to update one document of Users Collection
        {
            UserId :req.query.myuserid//access document of currently logged In user 
        },
        {$push: { // Push to end of array of the users I follow
          FollowingUserId: req.query.userId_tobefollowed
        }});
        
        
       
        });
  
  
  
  //UNFollow User
 /**
 * 
 * @api {POST}  /api/Users/unFollow Unfollow a user
 * @apiName Unfollow user
 * @apiGroup User
 * @apiError {404} id-not-found The<code>userId_tobefollowed</code> was not found.
 * @apiSuccess {200} UNFollow Successful 
 * @apiParam  {String} myuserId GoodReads User ID
 * @apiParam  {String} userId_tobefollowed GoodReads User ID
  
 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
      "success": true,
      "Message":"Successfully done"
   }
 *  @apiError id-not-found The<code>userId</code> was not found.
 *  @apiErrorExample {JSON}
 *  HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"User Id not  found !"
 * }
 *  
 * 
 */

  //UNFollow User
  router.post('/unFollow', async (req, res) => { //sends post request to /unFollow End point through the router
    /* console.log(req.body.userId_tobefollowed);
    console.log(req.userId_tobefollowed);
    console.log(req.params.userId_tobefollowed);
    console.log(req.query.userId_tobefollowed);  //ONLY WORKINGGGGGGGGGGGG
    console.log("my"+req.query.myuserid);*/
      mongoose.connection.collection("Users").updateOne( // accesses basic mongodb driver to update one document of Users Collection
    
        {
            UserId :  req.query.userId_tobefollowed //access document of user i want to unfollow
        },
        {$pull: { // pull from end of array of the users I follow
          FollowersUserId:req.query.myuserid
        }}
        ,function (err,doc) { // error handling and checking for returned mongo doc after query
    
          if ( doc.matchedCount==0 || err)   //matched count checks for number of affected documents by query 
          { 
            
            res.status(404).json({  // sends a json with 404 code
           success: false ,  // unFollow Failed
            "Message":"User Id not  found !"});
          }
        else
        {
        //console.log(doc);
        res.status(200).json({ //sends a json with 200 code
          success: true , //unFollow Done 
           "Message":"Sucessfully done"});
        }
      });
      mongoose.connection.collection("Users").updateOne(
          {
              UserId :req.query.myuserid//access document of currently logged In user 
          },
          {$pull: { // pull from end of array of the users I follow
            FollowingUserId: req.query.userId_tobefollowed
          }});
          
         
          });  
 
            
 //Find Author by Name 
 /**
 * @api{GET}/api/Author/?auth_name="Value" Find an author by name
 * @apiName Find author by name 
 * @apiGroup Author 
 * @apiError {404} name-not-found Author could not be found
 * @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"Author  not  found !"
 * }
 * @apiParam {String} auth_name Author Name
 * @apiSuccess {JSON} Author data for the required Author
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * 
 {
        "_id" : ObjectId("5c9284d5e0a57a14e749981a"),
        "BookId" : [
                "5c91157331557ebe471e0a12"
        ],
        "AuthorId" : "5c91157301d63f812a141932",
        "AuthorName" : "Alberta Bean",
        "Photo" : "http://placehold.it/32x32",
        "FollowingUserId" : [
                "5c9132dd99a8a3609cca3406",
                "5c91344d99a8a3609cca3406"
        ]
  }
 */



 router.get('/Authors', async (req,res) => {

  /*
  console.log(req.params);
  console.log(req.params.auth_id);
  console.log(req.query.auth_id); /// ONLY WORKING
  console.log(req.params.auth_id.auth_id);
 */
  

  Authors.findOne({AuthorId:"5c91157301d63f812a141932"},
  (err,doc) =>{
   
    if(!doc || err)
    {
      console.log(doc);
      res.status(404).json({  // sends a json with 404 code
        success: false ,  // user not retrieved  
         "Message":"User Id not  found !"});
    }
     else
     {
     console.log(doc);
     res.status(200).json(doc);
    
     }
    }


  )}); 
  
  //////////////////////////////////////////////////////////
  ///////////////////////******///////////////////////// */
  //UNFollow Author
 /**
 * 
 * @api {POST}  /api/Authors/unFollow Unfollow an Author
 * @apiName Unfollow Author
 * @apiGroup Author
 * @apiError {404} id-not-found The<code>myuserId</code> was not found.
 * @apiError {404} id-not-found The<code>auth_id</code> was not found.
 * @apiSuccess {200} UNFollow Successful 
 * @apiParam  {String} myuserId GoodReads User ID
 * @apiParam  {String} auth_id GoodReads Author ID
 * 
 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
      "success": true,
      "Message":"Successfully done"
   }
 *  @apiErrorExample {JSON}
 *  HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"Author Id not  found !"
 * }
 *  
 * 
 */

 //UNFollow Author
 router.post('/Authors/unFollow', async (req, res) => { //sends post request to /Authors/unFollow End point through the router
  /* console.log(req.body.auth_id);
  console.log(req.auth_id);
  console.log(req.params.auth_id);
  console.log(req.query.auth_id);  //ONLY WORKINGGGGGGGGGGGG
  console.log("my"+req.query.myuserId);*/
    mongoose.connection.collection("Authors").updateOne( // accesses basic mongodb driver to update one document of Authors Collection
  
      {
          AuthorId :  req.query.auth_id //access document of Author I want to unfollow
      },
      {$pull: { // pull from end of array of the users following this author
        FollowingUserId:req.query.myuserId
      }}
      ,function (err,doc) { // error handling and checking for returned mongo doc after query
  
        if ( doc.matchedCount==0 || err)   //matched count checks for number of affected documents by query 
        { 
          
          res.status(404).json({  // sends a json with 404 code
         success: false ,  // unFollow Failed
          "Message":"Author Id not  found !"});
        }
      else
      {
    
      res.status(200).json({ //sends a json with 200 code
        success: true , //unFollow Done 
         "Message":"Sucessfully done"});
      }
    });
    mongoose.connection.collection("Users").updateOne(
        {
            UserId :req.query.myuserId//access document of currently logged In user 
        },
        {$pull: { // pull from end of array of the Authors that the user follows
          FollowingAuthorId: req.query.auth_id
        }});
        
       
        });  

  
        //Follow Author
 /**
 * 
 * @api {POST}  /api/Authors/Follow follow an Author
 * @apiName follow Author
 * @apiGroup Author
 * @apiError {404} id-not-found The<code>myuserId</code> was not found.
 * @apiError {404} id-not-found The<code>auth_id</code> was not found.
 * @apiSuccess {200} UNFollow Successful 
 * @apiParam  {String} myuserId GoodReads User ID
 * @apiParam  {String} auth_id GoodReads Author ID
 * 
 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
      "success": true,
      "Message":"Successfully done"
   }
 *  @apiErrorExample {JSON}
 *  HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"Author Id not  found !"
 * }
 */

 //Follow Author
 router.post('/Authors/Follow', async (req, res) => { //sends post request to /Authors/Follow End point through the router
  /* console.log(req.body.auth_id);
  console.log(req.auth_id);
  console.log(req.params.auth_id);*/
 // console.log(req.query.auth_id);  //ONLY WORKINGGGGGGGGGGGG
  //console.log("my"+req.query.myuserId);
    mongoose.connection.collection("Authors").updateOne( // accesses basic mongodb driver to update one document of Authors Collection
  
      {
          AuthorId :  req.query.auth_id //access document of Author I want to follow
      },
      {$push: { // push to end of array of the users following this author
        FollowingUserId:req.query.myuserId
      }}
      ,function (err,doc) { // error handling and checking for returned mongo doc after query
  
        if ( doc.matchedCount==0 || err)   //matched count checks for number of affected documents by query 
        { 
          
          res.status(404).json({  // sends a json with 404 code
         success: false ,  // Follow Failed
          "Message":"Author Id not  found !"});
        }
      else
      {
    
      res.status(200).json({ //sends a json with 200 code
        success: true , //Follow Done 
         "Message":"Sucessfully done"});
      }
    });
    mongoose.connection.collection("Users").updateOne(
        {
            UserId :req.query.myuserId//access document of currently logged In user 
        },
        {$push: { // push to end of array of the Authors that the user follows
          FollowingAuthorId: req.query.auth_id
        }});
        
       
        });  

  
module.exports = router;
