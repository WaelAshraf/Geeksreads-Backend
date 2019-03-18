
/**
 * @api {get} /user/USER_ID/following.json Get people a user is following

 * @apiVersion 0.0.0
 * @apiName GetUserfollowings
 * @apiGroup User
 *
 *
 * @apiParam {Number} User-ID User ID to get his/her Followers.
 * @apiParam {Number} Page=1 page to preview results.
 *
 * @apiSuccess {Number[]} UserIDs     IDs of the people the User is Following(List).
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "UserIDs": [2,3,4]
 *     }
 *
 *
 * @apiError UserID-not-found   The <code>User-ID</code> was not found.
 */
