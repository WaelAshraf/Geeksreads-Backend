
var express = require('express');
var Router = express.Router();
const mongoose = require('mongoose');
const user = require("../models/User").User;
const Joi = require('joi');
const {Books,validate} = require('../models/Book');
const Author= require('../models/Author.model');
const router = express.Router();



//db.stores.find( { $text: { $search: "java shop -coffee" } } )
//db.products.find( { sku: { $regex: /789$/ } } )

router.get('/', async (req,res) => {
  retArr=Array();
    if(!req)
    res.status(404).json({  // sends a json with 404 code
        success: false ,  // book not retrieved  
        "Message":"No valid parameter is given !"});
    books = await Books.find( { Title: { $regex: '.*'+req.query.search_param+'.*' } },async (err,doc1) =>{
       
       
          //console.log(doc1);
           // console.log("=========================");
           // console.log(doc1);
           // console.log("=========================");
            retArr.push(doc1);
          
     } );
     books1 = await Books.find( { AuthorName: { $regex: '.*'+req.query.search_param+'.*' } },async (err,doc1) =>{
      
       //   console.log("=========================");
       //   console.log(doc1);
       //   console.log("=========================");
          retArr.push(doc1);
   } 
   );
   console.log(retArr[1].length);
   console.log(retArr[0].length);
   console.log(retArr[0].length==0 && retArr[1].length==0);
   if(retArr[0].length==0 && retArr[1].length==0)
   {
     return res.status(404).json("Not Found");
   }
   res.status(200).json(retArr);
   
   
})
    
     
          module.exports = router;