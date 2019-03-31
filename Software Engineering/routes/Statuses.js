const mongoose = require('mongoose');
const express = require('express');
const {Status,validate} = require('../models/Statuses');
const Joi = require('joi');
const auth = require('../middleware/auth');
const router = express.Router();



/**
 * @api{Post} /user_status.json Update user status
 * @apiVersion 0.0.0
 * @apiName UpdateUserStatuses 
 * @apiGroup Status
 * 
 * @apiParam {string} StatusID status id
 * @apiParam {string} UserID User id
 * @apiparam {String} StatusBody the body of this status
 * @apiparam {datePicker} StatusDate the date when the status was written
 * @apiparam {string} CommentId comment id <code>(optional)</code> 
 * @apiparam {string} ReviewId <code>(optional)</code> 
 *
 *  @apiSuccess {boolen} UpdateSucc  if the update happend successfully or not
 *   
 * @apiSuccessExample  Expected Data on Success
 * { 
 *  "UpdateSucc": true
 * }
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */

router.post("/",(req,res)=>
{
 
 if (req.body.length == 0)
 {
    return res.status(400).send("No parameters was sent")
 }


 var  newStatus = new Status( 
   {
   "StatusId":req.body.StatusId,
    "UserId":req.body.UserId,
    "ReviewId":req.body.ReviewId,
    "CommentId":req.body.CommentId,
   "StatusBody":req.body.StatusBody,
    "StatusDate":req.body.StatusDate
   });

  const {error} = validate(newStatus.body);
  if (error) return res.status(400).send(error.details[0].message);
  
   
   Status.findOne({'StatusId': newStatus.StatusId},(err,doc)=>
   {
    if(doc)
    {
   return res.status(400).send("already exist");
    }
    newStatus.save()   
    res.status(200).send(
        {
            UpdateSucc : true
        }
    );   
   });

  
});    
  /**
 * @api{Get} /user_status/show Get User Status
 * @apiVersion 0.0.0
 * @apiName GetUserStatuses 
 * @apiGroup Status
 * 
 * @apiParam {string} StatusID status id
 *
 * @apiSuccess {string} StatusID status id
 * @apiSuccess {string} UserID User id
 * @apiSuccess {String} StatusBody the body of this status
 * @apiSuccess {datePicker} StatusDate the date when the status was written
 * @apiSuccess {string} CommentId comment id <code>(optional)</code> 
 * @apiSuccess {string} ReviewId <code>(optional)</code> 
 *  
 * @apiSuccessExample  Expected Data on Success
 * {
 * StatusID : "82978363763"
 * UserID : "82sdfd8363763"
 * ReviewID : "82gf8363763"
 * StatusBody : "hisa Liked ur comment"
 * 
 * }
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */


router.get("/show",(req,res)=>
{
     if(req.body.StatusId==null)
     {
        return  res.status(400).send("Bad request no Satatus Id is there");
    }
 
      if (req.body.StatusId.length == 0)
     {
       return  res.status(400).send("Bad request no Satatus Id is there");
     }

  Status.findOne( {'StatusId':req.body.StatusId},(err,doc)=>

   {
    if(!doc)
    {
   return res.status(404).send("Status Not found");
    }
    res.status(200).send(
        doc
    )
   }
)
    

});

module.exports = router;