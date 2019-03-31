/**
 * @api {post} /rating Like a resource 
 * @apiName PostRating
 * @apiGroup Resource
 * @apiError {404} NOTFOUND Resource could not be found
 * @apiParam {credentials} apiKey Api key from app console.
 * @apiParam {credentials} apiSecret Api secret from app console.
 * @apiParam {String} accessToken The Access Token obtained from getAccessCredentials.
 * @apiParam {String} accessTokenSecret The Access Secret Token obtained from getAccessCredentials.
 * @apiParam {Number} rating Resource rating.
 * @apiParam {Number} resourceId Id of the resource being liked.
 * @apiParam {String} resourceType Camel case name of the resource type (e.g. UserStatus, Review).
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */

const Joi = require('joi');
 const express = require('express');
 const mongoose= require ('mongoose');
const {Resource} =require('../models/resources.model');
const router = express.Router();

router.put('/like',(req,res)=>{

    // input validation
    

 var error= null;
 if (req.body.ResourceID.lenght = 0)
 {
     error=1 ;
 }  

    if(error)
    {
       return res.status(400).send(error.details[0].message);
    }
    
   Resource.findByIdAndUpdate({ResourceID:req.body.ResourceID},{ $inc: { seq: 1 } },
    function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    if (!doc)
    {
        return res.status(200).send("liked");
   
    }
    console.log(doc);
    res.send(doc);
    res.send('liked..')

});
   
 
  
});


/////Unlike a Resource/////

router.put('/unlike',(req,res)=>{
    // input validation
      console.log(req.body);
   
      const {error}= validate(req.body);
   
      console.log(error);
      if(error)
      {
         return res.status(404).send(error.details[0].message);
      }
     Resource.findByIdAndUpdate({ResourceID:req.body.ResourceID},{ $inc: { seq: -1 } },
      function(err, doc){
      if(err){
          console.log("Something wrong when updating data!");
      }
   
      if (!doc)
      {
          return res.status(404).send("resource not found");
     
      }
      console.log(doc);
      res.send(doc);
   
   });

   });
module.exports = router;