const mongoose = require('mongoose');
const express = require('express');
const {Status,validate} = require('../models/Statuses');
const Joi = require('joi');
const auth = require('../middleware/auth');
const router = express.Router();


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