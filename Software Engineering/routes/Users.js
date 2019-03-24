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


//get current User
router.get('/me', auth, async (req, res) => {
  let check = await User.findOne({ UserId: req.user._id });
  if (!check) return res.status(400).send({"ReturnMsg":"User Doesn't Exist"});
  const user = await User.findById(req.user._id).select('-UserPassword');
  if (!user.Confirmed) return res.status(401).send({  "ReturnMsg" : 'Your account has not been verified.' });
  res.status(200).send(user);
});




//Verify From Email Link
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

//Follow User
router.post('/Follow', async (req, res) => {
  /* console.log(req.body.userId_tobefollowed);
  console.log(req.userId_tobefollowed);
  console.log(req.params.userId_tobefollowed);
  console.log(req.query.userId_tobefollowed);  //ONLY WORKINGGGGGGGGGGGG
  console.log("my"+req.query.myuserid);*/
    mongoose.connection.collection("Users").updateOne(
      {
          UserId :  req.query.userId_tobefollowed //access document of user i want to follow 
      },
      {$push: { // Push to end of array of the user's followers
        FollowersUserId:req.query.myuserid
      }}
      ,function (err,doc) {
  
         if (doc.result.n==0 || err)  
         { res.status(404).json({
          success: false ,
           "Message":"User Id not  found !"});
         }
       else
       {
       res.status(200).json({
         success: true ,
          "Message":"Sucessfully done"});
       }
    });
    mongoose.connection.collection("Users").updateOne(
        {
            UserId :req.query.myuserid//access document of currently logged In user 
        },
        {$push: { // Push to end of array of the users I follow
          FollowingUserId: req.query.userId_tobefollowed
        }});
        
       
        });
  
  
  //UNFollow User
  router.post('/unFollow', async (req, res) => {
      /* console.log(req.body.userId_tobefollowed);
      console.log(req.userId_tobefollowed);
      console.log(req.params.userId_tobefollowed);
      console.log(req.query.userId_tobefollowed);  //ONLY WORKINGGGGGGGGGGGG
      console.log("my"+req.query.myuserid);*/
        mongoose.connection.collection("Users").updateOne(
          {
              UserId :  req.query.userId_tobefollowed //access document of user i want to unfollow
          },
          {$pull: { // pull from end of array of the users I follow
            FollowersUserId:req.query.myuserid
          }}
          ,function (err,doc) {
      
            if ( doc.matchedCount==0 || err)  
            { 
              
              res.status(404).json({
             success: false ,
              "Message":"User Id not  found !"});
            }
          else
          {
          //console.log(doc);
          res.status(200).json({
            success: true ,
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
    
            
module.exports = router;
