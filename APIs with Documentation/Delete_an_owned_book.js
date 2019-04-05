/**
 * @api {DELETE} /owned_books/destroy/ID Delete an owned book
 * @apiName DELETEOwned_books
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {ObjectId} ownedBookId ownedBookId is a unique identifier for the owned book (not a book_id).
 * @apiParam {ObjectId} AccessToken 
 * @apiParam {ObjectId} Book_ID
 * @apisuccess {Boolean} BookIsDeleted book is deleted successfully
 * 
 * @apiSuccessExample  {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      "BookIsDeleted": true
 * }
 * 
 * @apiErrorExample {json} Error-NotDeleted:
 *  HTTP/1.1 404 Not Found
 * {
 *  "BookIsDeleted": false
 * }
 * 
 */

var deletedbook={
    book:'done'
};
function PostBook()
{
    return{code:200 , data:deletedbook};
}