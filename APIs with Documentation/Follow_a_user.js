

/**
 *
 * @api {POST}  /api/Users/Follow Follow a user
 * @apiName Follow user
 * @apiGroup User
 * @apiError {404} id-not-found The<code>userId_tobefollowed</code> was not found.
 * @apiSuccess {200} Follow Successful or not
 * @apiParam  {String} myuserid GoodReads User ID
 * @apiParam  {String} userId_tobefollowed GoodReads User ID
 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
      "success": true,
      "Message":"Successfully done"
   }
 *  @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"myuserid not  found !"
 * }
 * @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"userId_tobefollowed not  found !"
 * @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"error!"
 * }
 * @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"user ALREADY FOLLOWED!"
 * }
 *
 *
 */


//Follow User
router.post('/Follow', async (req, res) => { //sends post request to /Follow End point through the router
  /* console.log(req.body.userId_tobefollowed);
  console.log(req.userId_tobefollowed);
  console.log(req.params.userId_tobefollowed);
  console.log(req.query.userId_tobefollowed);  //ONLY WORKINGGGGGGGGGGGG
  console.log("my"+req.query.myuserid);*/
 // console.log("my"+req.query.myuserid);
  //console.log(req.query.userId_tobefollowed);
 await  mongoose.connection.collection("users").findOne({  UserId :  req.query.userId_tobefollowed},
    function (err,doc) { // error handling and checking for returned mongo doc after query

      if (!doc || err) //matched count checks for number of affected documents by query
      { res.status(404).json({ // sends a json with 404 code
       success: false , // Follow Failed
        "Message":"userId_tobefollowed not  found !"});
      }
      else
      {
         mongoose.connection.collection("users").findOne({  UserId :  req.query.myuserid},
          function (err,doc) { // error handling and checking for returned mongo doc after query

            if (!doc  || err) //matched count checks for number of affected documents by query
            { res.status(404).json({ // sends a json with 404 code
             success: false , // Follow Failed
              "Message":"myuserid not  found !"});
            }
            else
            {
              mongoose.connection.collection("users").findOne({$and: [{UserId:req.query.myuserid},{FollowingUserId:req.query.userId_tobefollowed}]},
            function (err,doc) { // error handling and checking for returned mongo doc after query

              if(!doc || err)
              {
                mongoose.connection.collection("users").updateOne( // accesses basic mongodb driver to update one document of Users Collection
                  {
                      UserId :  req.query.userId_tobefollowed //access document of user i want to follow
                  },
                  {$push: { // Push to end of array of the user's followers
                    FollowersUserId:req.query.myuserid
                  }}
                  ,function (err,doc) { // error handling and checking for returned mongo doc after query
            
                     if (!doc  || err) //matched count checks for number of affected documents by query
                     { res.status(404).json({ // sends a json with 404 code
                      success: false , // Follow Failed
                       "Message":"error !"});
                     }
                   else
                   {
                   res.status(200).json({ //sends a json with 200 code
                     success: true ,//Follow Done
                      "Message":"Sucessfully done"});
                   }
                });
                mongoose.connection.collection("users").updateOne( // accesses basic mongodb driver to update one document of Users Collection
                    {
                        UserId :req.query.myuserid//access document of currently logged In user
                    },
                    {$push: { // Push to end of array of the users I follow
                      FollowingUserId: req.query.userId_tobefollowed
                    }});
              }
              else
              {
                if (doc || err) //matched count checks for number of affected documents by query
                { res.status(404).json({ // sends a json with 404 code
                 success: false , // Follow Failed
                  "Message":"user ALREADY FOLLOWED!"});
                }
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
 
  

  
