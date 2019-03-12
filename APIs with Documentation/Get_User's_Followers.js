
/**
 * @api {get} /user/userID Get User's Followers
 * @apiVersion 0.0.0
 * @apiName GetUserfollowers
 * @apiGroup User
 * @apiPermission all
 *
 *
 * @apiParam {Number} User-ID User ID to get his/her Followers.
 * @apiParam {Number} Page=1 page to preview results.
 *
 * @apiSuccess {Number[]} UserIDs         IDs of the Followers(List).
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "UserIDs": [2,3,4]
 *     }
 *
 *
 * @apiError UserID-not-found   The <code>User-ID</code> was not found.
 */
