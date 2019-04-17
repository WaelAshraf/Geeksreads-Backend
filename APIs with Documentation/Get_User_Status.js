
  /**
 * @api{Get} /user_status/show Get User Status
 * @apiVersion 0.0.0
 * @apiName GetUserStatuses 
 * @apiGroup Status
 * @apiHeader {String} x-auth-token Authentication token
 *
 * @apiSuccess {string} StatusId status id
 * @apiSuccess {string} UserId User id the user who is to see the status 
 * @apiSuccess {datePicker} StatusDate the date when the status was written
 * @apiSuccess {string} CommentId comment id if the type is comment <code>(optional)</code> 
 * @apiSuccess {string} ReviewId  review Id  alawys exisit weather the type is comment or review
 * @apiSuccess {string} MakerId the id of the user who made the status
 * @apiSuccess {string} Type  Wheather  it is Comment or Review 
 * @apiSuccessExample  Expected Data on Success
 * {
 *
 * type : Review 
 * StatusId : "82978363763"
 * MakerId : "shjfhghdsg"
 * UserId : "82sdfd8363763"
 * ReviewId : "82gf8363763"
 * 
 * }, 
 * {
 * 
 * type : Comment
 * CommentId : "hisadsfjhdld"  
 * StatusId : "82978363763"
 * MakerId : "shjfhghdsg"
 * UserId : "82sdfd8363763"
 * ReviewId : "82gf8363763"
 * .......
 * },.....
 * @apiErrorExample {json} NotFound statuses:
 *     HTTP/1.1 400
 *  {
 *    "ReturnMsg":"No statuses were found"
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
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */

