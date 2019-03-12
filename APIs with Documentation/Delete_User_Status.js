/**
 * @api{Post} /user_status/destroy Delete User Status 
 * @apiVersion 0.0.0
 * @apiName DeleteStatus  
 * @apiGroup Status
 * 
 * @apiParam {Number} ID Status id
 * 
 * @apiSuccess {boolen} DeleteStatusSuc  if the delete happend successfully or not
 * @apiSuccessExample  Expected Data on Success
 * {
 * "DeleteSTatusSuc": true
 * }
 * @apiError Status-Not-Found The <code>StatusID</code> was not found
 */