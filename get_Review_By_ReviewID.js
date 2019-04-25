/**
 *
 * @api {GET}  /review Gets Information of a specific review by it's id
 * @apiName GetReview
 * @apiGroup Review
 * 
 * @apiSuccess {String}  bookId        the bookId which is reviewed.
 * @apiSuccess {Decimal128} rating      the rating of the book for which is reviewed
 * @apiSuccess {String}  reviewBody    the body of the review.
 * @apiSuccess {Date}    reviewDate     the date at which the review is added.
 * @apiSuccess {String}  shelf           the shelf of the book that is reviewed.
 * @apiSuccess {String}  userId          the user is of the user who wrote this review.
 * @apiSuccess {String}  userName        user name of the user who wrote this review
 * @apiSuccess {String}  photo           the photo of the user.
 * @apiSuccess {String}  likesCount     number of likes for this review.
 * 
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *     "bookId":"5c911452bbfd1717b8a7a169" ,
 *     "rating":"5.0" ,
 *     "reviewBody":"My favourite book to date." ,
 *     "reviewDate": "2010-10-03T00:00:00.000+02:00",
 *     "shelf":"Read.",
 *     "userId": "5cb6067bd42e9b00173fa1fc",
 *     "userName": "ahmedsalah",
 *     "photo": "http://placehold.it/32x32",
 *     "likesCount":"7"
 * }
 * @apiErrorExample {json} NoToknMatch-Response:
 *     HTTP/1.1 400
 *   {
 *    "ReturnMsg":"Review Doesn't Exist"
 *   }
 *
 */