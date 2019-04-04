
  /**
 * @api{Get} /Review/Rate Rate a Reviw
 * @apiVersion 0.0.0
 * @apiName RateReviw
 * @apiGroup  Books
 * 
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam  {String} ReviewId the review ID 
 * @apiParam {Number}  Rating Number of stars must be integar
 * 
 * @apiSuccess {boolean} RateSucc  true if the rating was done
 * @apiSuccessExample  Expected Data on Success
 * {
 *  "RateSucc" :true
 * }
 * @apiErrorExample {json} NotFound Review:
 *     HTTP/1.1 400
 *  {
 *    "ReturnMsg":"No Review  were found"
 *  }
 *  
 * @apiErrorExample {json} Invalidtoken-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":'Invalid token.'
 *   }
 *
 * @apiErrorExample {json} NoTokenSent-Response:
 *     HTTP/1.1 401
 * {
 *   "ReturnMsg":'Access denied. No token provided.'
 * }
 *
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Review-Not-Found The <code>Review</code> was not found
 */

