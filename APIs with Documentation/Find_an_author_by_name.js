//Find Author by Name 
 /**
 * @api{GET}/api/Author/?auth_name="Value" Find an author by name
 * @apiName Find author by name 
 * @apiGroup Author 
 * @apiError {404} name-not-found Author could not be found
 * @apiErrorExample {JSON}
 *HTTP/1.1 404 Not Found
 * {
 * "success": false,
 * "Message":"Author  not  found !"
 * }
 * @apiParam {String} auth_name Author Name
 * @apiSuccess {JSON} Author data for the required Author
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * 
 {
        "_id" : ObjectId("5c9284d5e0a57a14e749981a"),
        "BookId" : [
                "5c91157331557ebe471e0a12"
        ],
        "AuthorId" : "5c91157301d63f812a141932",
        "AuthorName" : "Alberta Bean",
        "Photo" : "http://placehold.it/32x32",
        "FollowingUserId" : [
                "5c9132dd99a8a3609cca3406",
                "5c91344d99a8a3609cca3406"
        ]
  }
 */
