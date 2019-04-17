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
