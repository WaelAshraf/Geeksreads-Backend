 //Get info about author by id 
 /**
 * @api{GET}/api/Author/byid?auth_id=Value Get info about author by id 
 * @apiName Get info about author by id 
 * @apiGroup Author 
 * @apiError {404} id-not-found Author could not be found
 * @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"Author  not  found !"
 * }
 * @apiParam {String} auth_id Author ID
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



router.get('/Authors/byid', async (req,res) => {

  /*
  console.log(req.params);
  console.log(req.params.auth_name);
  console.log(req.query.auth_name); /// ONLY WORKING
  console.log(req.params.auth_name.auth_name);
 */
  

  mongoose.connection.collection("Authors").findOne({AuthorId:req.query.auth_id},
  (err,doc) =>{
   
    if(!doc || err)
    {
      //console.log(doc);
      res.status(404).json({  // sends a json with 404 code
        success: false ,  // user not retrieved  
         "Message":"Author ID not  found !"});
    }
     else
     {
     console.log(doc);
     res.status(200).json(doc);
    
     }
    }


  )}); 