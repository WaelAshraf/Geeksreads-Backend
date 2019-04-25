/**
 *
 * @api {GET}  /user Gets Information of a user by it's id
 * @apiName GetUser
 * @apiGroup User
 * @apiSuccess {String}   UserName   UserName of Current User
 * @apiSuccess {String} UserEmail Email of Current User
 * @apiSuccess {Date} UserBirthDate 
 * @apiSuccess {String} Photo
 * @apiSuccess {String[]} FollowingAuthorId Ids of Authors Current User is Following
 * @apiSuccess {String[]} FollowingUserId Ids of Users Current User is Following
 * @apiSuccess {String[]} FollowersUserId Ids of Users Following Current User
 * @apiSuccess {String[]} Read the books that the user has read
 * @apiSuccess {String[]} WantToRead user's want to read books
 * @apiSuccess {String[]} Reading books that the user is currently reading
 * @apiSuccess {Boolean} Confirmed
 * 
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *     "UserName": "Ahmed1913",
 *     "UserEmail": "AhmedAmrKhaled@gmail.com",
 *      "UserBirthDate":,
 *      "Photo":,
 *     "FollowingAuthorId": [],
 *     "FollowingUserId": [],
 *     "FollowersUserId": [],
 *      "Read":,
 *      "WantToRead":,
 *      "Reading":,
 *     "Confirmed": true,
 *     
 * }
 * @apiErrorExample {json} NoTokenMatch-Response:
 *     HTTP/1.1 400
 *   {
 *    "ReturnMsg":"User Doesn't Exist"
 *   }
 *
 *
 */