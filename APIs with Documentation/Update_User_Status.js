/**
 * @api{Get} /user_status.json Update user status
 * @apiVersion 0.0.0
 * @apiName UpdateUserStatuses 
 * @apiGroup Status
 * 
 * @apiParam {Number} UserStatusID status id
 * @apiParam {Number} UserID User id
 * @apiparam {String} Book the book name of this status
 * @apiparam {Number} Page the page where the reader stoped reading
 * @apiparam {datePicker} Date the date when the status was written
 *
 * @apiSuccess {boolen} UpdateSuc  if the update happend successfully or not
 *   
 * @apiSuccessExample  Expected Data on Success
 * { 
 *  "UpdateSuc": true
 * }
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */