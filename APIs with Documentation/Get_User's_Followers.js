 /***************************
    //Get User's Followers
   /**
    * @api{POST}/api/Users/getfollowers Get User's Followers
    * @apiName Get User's Followers
    * @apiGroup User 
    * @apiError {404} id-not-found The<code>user_id</code> was not found.
    * @apiSuccess {200} Request  Successful or not
    * @apiParam  {String} user_id GoodReads User ID

 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
   [
    "5c9132dd2b1afd02f4f8c909",
    "5c9132dd3bd70fb83625a86a"
    ]
   }
 *  @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"User Id not  found !"
 * }
 *
 *
 */

