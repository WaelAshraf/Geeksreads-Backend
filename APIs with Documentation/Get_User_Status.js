
  /**
 * @api{Get} /user_status/show Get User Status
 * @apiVersion 0.0.0
 * @apiName GetUserStatuses 
 * @apiGroup Status
 * 
 * @apiParam {string} UserID status id
 *
 * @apiSuccess {string} StatusID status id
 * @apiSuccess {string} UserID User id
 * @apiSuccess {String} StatusBody the body of this status
 * @apiSuccess {datePicker} StatusDate the date when the status was written
 * @apiSuccess {string} CommentId comment id <code>(optional)</code> 
 * @apiSuccess {string} ReviewId <code>(optional)</code> 
 *  
 * @apiSuccessExample  Expected Data on Success
 * {
 * 
 * StatusID : "82978363763"
 * UserID : "82sdfd8363763"
 * ReviewID : "82gf8363763"
 * StatusBody : "hisa Liked ur comment"
 * }, 
 * {
 * StatusID : "82978363763"
 * UserID : "82sdfd8363763"
 * .......
 * },.....
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */
