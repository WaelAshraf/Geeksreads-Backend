/**
 * @api{POST}/geeksreads/:review Create New review 
 * @apiName addReview
 * @apiGroup Review 
 * @apiError notresolved one of the parameters must have not resolved
 * @apiSuccess {Boolean} AddedReviewSuc review was added
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "AddedReviewSuc": true
 * }
 * @apiParam {String} Body The body of the review  
 * @apiParam {ObjectId} BookID  Id of Book the review belongs to
 * @apiParam {String} userName Name of user who wrote the review
 * @apiParam {ObjectId} userID  Id of user who wrote the review
 * @apiParam {datePicker} date the date the review was written on
 * @apiParam {Number} Stars Rating (0-5) (optional, default is 0 (No rating))
 * @apiParam {String} shelf the shlef the book is placed in by the user
 */
function addReview(book_id,body,stars=0,readAt,shelf)
{

}
/**
 * @api{PUT}/geeksreads/:review edit review using id 
 * @apiName editReview
 * @apiGroup Review 
 * @apiError NotResolved one of the parameters must have not resolved
 * @apiSuccess {Boolean} editReviewSuc review was edited
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "editReviewSuc": true
 * }
 * @apiParam {ObjectId} Review_Id review Id
 * @apiParam {String} Body Text of the review (optional)
 * @apiParam {Number} Stars Rating (0-5) (optional, default is 0 (No rating))
 * @apiParam {DatePicker} readAt Date (YYYY-MM-DD format, e.g. 2008-02-01)
 * @apiParam {String} shelf read|currently-reading|to-read|<USER SHELF NAME>(optional, must exist, see: shelves.list)
 */
function editReview(Review_Id,Body,Stars=0,readAt,shelf)
{

}
/**
 * @api{DELETE}/geeksreads/:review Delete review 
 * @apiName deletereview
 * @apiGroup Review 
 * @apiError {404} NOTFOUND the review you are looking for does not exist
 * @apiSuccess {Boolean} deleteReviewSuc review was deleted
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "deleteReviewSuc": true
 * }
 * @apiParam {ObjectId} review_Id Id of the review to be deleted
 */
function deleteReview(review_Id)
{

}
/**
 * @api{GET}/geeksreads/:review Get review by review id 
 * @apiName getReview
 * @apiGroup Review 
 * @apiError{404} NOTFOUND review  you are looking for does not exist
 * @apiSuccess {Number} likes number of likes on review,comment
 * @apiSuccess {String} body body text of review,comment
 * @apiSuccess {String} userName name of the user who wrote review,comment
 * @apiSuccess {ObjectId} userId the id of the user who wrote review,comment
 * @apiSuccess {datePicker} date the date of each review,comment
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 *   "review":{"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"}
 * }
 * @apiParam {ObjectId} review_Id Id of the review
 */
function getReview(review_Id,comments_Per_Page=20)
{

}
/**
 * @api{GET}/geeksreads/:review Get review by Book 
 * @apiName getReviewsByBook
 * @apiGroup Review 
 * @apiError {404} NOTFOUND review  you are looking for does not exist
 * @apiSuccess {Number} likes number of likes on review
 * @apiSuccess {String} body body text of review
 * @apiSuccess {String} userName name of the user who wrote review
 * @apiSuccess {ObjectId} userId the id of the user who wrote review
 * @apiSuccess {datePicker} date the date of each review
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 *     "reviews":[{"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"
 *          },.......
 *      ]
 * }
 * @apiParam {ObjectId} user_Id Id of the user
 * @apiParam {ObjectId} book_id Id of the book
 * @apiParam {Boolean} include_review_on_work View another review of the book if the review was not found default is <code>false</code>  
 */
function getReviewByBook(user_Id,book_id,include_review_on_work=false)
{

}
