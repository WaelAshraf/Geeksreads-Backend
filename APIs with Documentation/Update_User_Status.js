
/**
 * @api{Post} /user_status/ Update user status
 * @apiVersion 0.0.0
 * @apiName UpdateUserStatuses 
 * @apiGroup Status
 * 
 * @apiParam {string} StatusID status id
 * @apiParam {string} UserID User id
 * @apiparam {String} StatusBody the body of this status
 * @apiparam {datePicker} StatusDate the date when the status was written
 * @apiparam {string} CommentId comment id <code>(optional)</code> 
 * @apiparam {string} ReviewId <code>(optional)</code> 
 *
 *  @apiSuccess {boolen} UpdateSucc  if the update happend successfully or not
 *   
 * @apiSuccessExample  Expected Data on Success
 * { 
 *  "UpdateSucc": true
 * }
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */
