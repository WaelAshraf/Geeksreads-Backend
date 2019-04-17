/**
* @api{Post} /user_status/delete Delete User Status 
* @apiVersion 0.0.0
* @apiName DeleteStatus  
* @apiGroup Status
* 
* @apiParam {string} StatusId Status id
* 
* @apiSuccess {boolen} DeleteStatusSuc  if the delete happend successfully or not
* @apiSuccessExample  Expected Data on Success
* {
* "DeleteSTatusSuc": true
* }
* @apiError Status-Not-Found The <code>StatusID</code> was not found
*/