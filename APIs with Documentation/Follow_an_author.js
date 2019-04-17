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
