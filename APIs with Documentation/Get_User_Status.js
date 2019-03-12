/**
 * @api{Get} /user_status/show Get User Status
 * @apiVersion 0.0.0
 * @apiName GetUserStatuses 
 * @apiGroup Status
 * 
 * @apiParam {Number} UserStatusID status id
 * @apiParam {Number} UserID User id
 *
 * @apiSuccess {Number} StatusID status id
 * @apiSuccess {String} Book the book name of this status
 * @apiSuccess {Number} Page the page where the reader stopped reading
 * @apiSuccess {datePicker} Date the date when the status was written
 *  
 * @apiSuccessExample  Expected Data on Success
 * {
 * "StatusID": 10
 * "Book": "The Magic"
 * "Page" :78
 * "Date": "2019-01-02T09:00:16.204"
 * }
 * @apiError User-Not-Found The <code>User</code> was not found
 * @apiError Status-Not-Found The <code>Status</code> was not found
 */