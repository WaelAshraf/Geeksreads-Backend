
/**
 * @api {get} /shelf/list Get User's Shelves
 * @apiVersion 0.0.0
 * @apiName GetUserShelves
 * @apiGroup User
 * @apiPermission all
 *
 *
 * @apiParam {Number} User-ID User ID to get his/her shelves.
 * @apiParam {Number} Page=1 page to preview results.
 *
 * @apiSuccess {String[]} UserShelves         Shelves of the user(List).
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "UserShelves": ["Science","Biology","Mathematics"]
 *     }
 *
 *
 * @apiError UserID-not-found   The <code>User-ID</code> was not found.
 */
