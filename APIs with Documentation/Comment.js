/**
 * @api{GET}/comment.json List comments on a subject 
 * @apiName listCommentsOnSubject
 * @apiGroup Comments 
 * @apiError {404} NOTFOUND no comments on this subject
 * @apiSuccess {Number} likes number of likes on each comment
 * @apiSuccess {String} body body text of each comment
 * @apiSuccess {String} userName name of the user who wrote each comment
 * @apiSuccess {ObjectId} userId the id of the user who wrote each comment
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
 * @apiParam{ObjectId} ReviewId Id of the review the comments belong to
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
 * @apiParam{String} Body The body of the comment  
 * @apiParam{ObjectId} BookID  Id of Book the review commented on belongs to
 * @apiParam{ObjectId} ReviewID  Id of review the comment belongs to
 * @apiParam{String} userName Name of user who wrote the comment
 * @apiParam{ObjectId} userID  Id of user who wrote the comment
 * @apiParam{datePicker} date the date the comment was written on
 * @apiError EmptyComment Must Have At Least <code>1</code> Character In Comment
 */
function creatComment(type,ID,Body)
{

}