 /***************************
    //Get Number of Books Written By Author
   /**
    * @api{POST}/api/Authors/numbooks Get Number of Books Written By Author
    * @apiName Get Number of Books Written By Author
    * @apiGroup Authors 
    * @apiError {404} id-not-found The<code>auth_id</code> was not found.
    * @apiSuccess {200} Request  Successful or not
    * @apiParam  {String} auth_id GoodReads User ID

 * @apiSuccessExample {JSON}
 * HTTP/1.1 200 OK
   {
   Number of Books :"6"
   }
 *  @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"Author Id not  found !"
 * }
 *
 *
 */

