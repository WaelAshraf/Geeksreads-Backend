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
 * @apiParam {NUmber} book_id id of the book
 * @apiParam {string} body body text of the review
 * @apiParam {Number} stars number of stars given to the book
 * @apiParam {DatePicker} readAt the date the book was read at
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
 * @apiParam {Number} Review_Id review Id
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
 * @apiParam {Number} review_Id Id of the review to be deleted
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
 * @apiSuccess {Number} userId the id of the user who wrote review,comment
 * @apiSuccess {datePicker} date the date of each review,comment
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "review":{"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"
 *          },
 * "comment":[
 *         {"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"
 *         },......
 * ]
 * }
 * @apiParam {Number} review_Id Id of the review
 * @apiParam {Number} comments_Per_Page number of comments review in one page default <code>20</code>
 */
function getReview(review_Id,comments_Per_Page=20)
{

}
/**
 * @api{GET}/geeksreads/:review Get review by Book 
 * @apiName getReviewByBook
 * @apiGroup Review 
 * @apiError {404} NOTFOUND review  you are looking for does not exist
 * @apiSuccess {Number} likes number of likes on review
 * @apiSuccess {String} body body text of review
 * @apiSuccess {String} userName name of the user who wrote review
 * @apiSuccess {Number} userId the id of the user who wrote review
 * @apiSuccess {datePicker} date the date of each review
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "review":{"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"
 *          }
 * }
 * @apiParam {Number} user_Id Id of the user
 * @apiParam {Number} book_id Id of the book
 * @apiParam {Boolean} include_review_on_work View another review of the book if the review was not found default is <code>false</code>  
 */
function getReviewByBook(user_Id,book_id,include_review_on_work=false)
{

}
