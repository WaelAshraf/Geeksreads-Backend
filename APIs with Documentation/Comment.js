/**
 * @api{GET}/comment.json List comments on a subject 
 * @apiName listCommentsOnSubject
 * @apiGroup Comments 
 * @apiError {404} NOTFOUND no comments on this subject
 * @apiSuccess {Number} likes number of likes on each comment
 * @apiSuccess {String} body body text of each comment
 * @apiSuccess {String} userName name of the user who wrote each comment
 * @apiSuccess {Number} userId the id of the user who wrote each comment
 * @apiSuccess {datePicker} date the date of each comment
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "comment":[
 *         {"likes": 11,
 *           "body": "Hello World !",
 *           "userName": "zzzdwsdsdsdsd zzzdwsdsdsdsd",
 *           "userId": "567890987654567890",
 *           "date": "2019-01-02T09:00:16.204Z"
 *         },......
 * ]
 * }
 * @apiParam{String} type Subject Type Commented On; book,review,etc
 * @apiParam{Number} ID Id of resource given as type Parameter
 * @apiParam{Number} perPage Number of comments per page default is <code>20</code>
 */
function listCommentsOnSubject(type,ID,perPage=20)
{

}
/**
 * @apiSuccess  {Boolean} AddedCommentSuc comment was added successfully
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "AddedCommentSuc": true
 * }
 * @api{POST}/comment.json Create a comment
 * @apiName creatComment
 * @apiGroup Comments 
 * @apiParam{String} type Subject Type Commented On; book,review,etc
 * @apiParam{Number} ID  Id of resource given as type Parameter
 * @apiParam{String} Body The body of the comment 
 * @apiError EmptyComment Must Have At Least <code>1</code> Character In Comment
 */
function creatComment(type,ID,Body)
{

}