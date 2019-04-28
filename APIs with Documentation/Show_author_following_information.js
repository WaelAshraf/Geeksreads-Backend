 /***************************
    //Show author following information
   /**
    * @api{POST}/api/Authors/isfollowed Show author following information
    * @apiName Show author following information
    * @apiGroup Authors 
    * @apiError {404} id-not-found The<code>user_id</code> was not found.
    * @apiSuccess {200} Request  Successful or not
    * @apiParam  {String} user_id GoodReads User ID
    * @apiParam  {String} auth_id GoodReads Author ID

 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
   Isfollowed:true
   }
    * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
   Isfollowed:false
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

