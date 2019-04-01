/**
 * @api {DELETE} /owned_books/destroy/ID Delete an owned book
 * @apiName DELETEOwned_books
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {Number} ownedBookId ownedBookId is a unique identifier for the owned book (not a book_id).
 * @apiParam {Number} User_ID 
 * @apiParam {Number} Book_ID
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */

var deletedbook={
    book:'done'
};
function PostBook()
{
    return{code:200 , data:deletedbook};
}