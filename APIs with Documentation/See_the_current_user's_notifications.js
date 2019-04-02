/**
 * @api{Get} /notifications See the current user's notifications
 * @apiVersion 0.0.0
 * @apiName GetUserNotification 
 * @apiGroup User
 * 
 * @apiParam {String} UserID User id 
 * 
 * @apiSuccess {boolen} Seen if the user saw it or not
 * @apiSuccess {String} Body the body of the notification
 * @apiSuccess {date} the date when the notification was sent 
 * 
 * @apiSuccessExample  Expected Data on Success
 * { 
 * "Seen": false
 * "Body" : "You have a friend request"
 * "date": "2019-01-02T09:00:16.204"
 * },
 *  { 
 * "Seen": true
 * "Body" : "You have a friend request"
 * "date": "2019-01-02T09:00:16.204"
 * },.....
 * 
 * @apiError User-Not-Found The <code>User</code> was not found
 */