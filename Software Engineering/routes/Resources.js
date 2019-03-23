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
const {Resource,validate} =require('../models/resources.model');
const router = express.Router();

router.put('/like',(req,res)=>{

    // input validation
    

    console.log(req.body);
 
    const {error}= validate(req.body);

    console.log(error);
    if(error)
    {
       return res.status(400).send(error.details[0].message);
    }
    const resource= Resource.findOne({ResourceID: req.body.ResourceID})
   if (!resource) return res.status(404).send('resource was not found');
    
   Resource.findByIdAndUpdate({ResourceID:req.body.ResourceID},{ $inc: { seq: 1 } },
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
   
 
  
});/* 
app.listen(3000);
function validationRate(req)
    {
        const schema = {
            ResourceID: Joi.number().min(3).max(5).required(),
        };
        return Joi.validate(req, schema);
    } */
    module.exports = router;