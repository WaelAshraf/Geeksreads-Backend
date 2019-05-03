
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
   * "Message":"auth_id not  found !"
   * }
   * @apiErrorExample {JSON}
   *  HTTP/1.1 404 Not Found
   * {
   * "success": false,
   * "Message":"myuserId not  found !"
   * }
   * @apiErrorExample {JSON}
   *  HTTP/1.1 404 Not Found
   * {
   * "success": false,
   * "Message":"Author ALREADY FOLLOWED!"
   * }
   * @apiErrorExample {JSON}
   *  HTTP/1.1 404 Not Found
   * {
   * "success": false,
   * "Message":"error!"
   * }
   */
  
   //Follow Author
   router.post('/Follow', async (req, res) => { //sends post request to /Authors/Follow End point through the router
    /* console.log(req.body.auth_id);
    console.log(req.auth_id);
    console.log(req.params.auth_id);*/
   // console.log(req.query.auth_id);  //ONLY WORKINGGGGGGGGGGGG
    //console.log("my"+req.query.myuserId);
     
          
          
         await  mongoose.connection.collection("Authors").findOne({  AuthorId :  req.query.auth_id},
          function (err,doc) { // error handling and checking for returned mongo doc after query
      
            if (!doc || err) //matched count checks for number of affected documents by query
            { res.status(404).json({ // sends a json with 404 code
             success: false , // Follow Failed
              "Message":"Author Id not  found "});
            }
            else
            {
               mongoose.connection.collection("users").findOne({  UserId :  req.query.myuserId},
                function (err,doc) { // error handling and checking for returned mongo doc after query
      
                  if (!doc  || err) //matched count checks for number of affected documents by query
                  { res.status(404).json({ // sends a json with 404 code
                   success: false , // Follow Failed
                    "Message":"myuserId not  found !"});
                  }
                  else
                  {
                    mongoose.connection.collection("users").findOne({$and: [{UserId:req.query.myuserId},{FollowingAuthorId:req.query.auth_id}]},
                  function (err,doc) { // error handling and checking for returned mongo doc after query
      
                    if (!doc  || err) //matched count checks for number of affected documents by query
                    { 
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
                            "Message":"error!"});
                          }
                        else
                        {
                      
                        res.status(200).json({ //sends a json with 200 code
                          success: true , //Follow Done 
                           "Message":"Sucessfully done"});
                        }
                      });
                      mongoose.connection.collection("users").updateOne(
                          {
                              UserId :req.query.myuserId//access document of currently logged In user 
                          },
                          {$push: { // push to end of array of the Authors that the user follows
                            FollowingAuthorId: req.query.auth_id
                          }});
                    }
                  else
                  {
                    res.status(404).json({ // sends a json with 404 code
                      success: false , // Follow Failed
                       "Message":"Author ALREADY FOLLOWED!"});
         
                  }
                  }
                  );
                   
                  }
                }
                );
            }
          }
          );
          });  
  