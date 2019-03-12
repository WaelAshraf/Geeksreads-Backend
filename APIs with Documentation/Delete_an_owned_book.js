/**
 * @api {post} /owned_books/destroy/ID Delete an owned book
 * @apiName postOwned_books
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {credentials} apiKey Api key from app console.
 * @apiParam {credentials} apiSecret Api secret from app console.
 * @apiParam {String} accessToken The Access Token obtained from getAccessCredentials.
 * @apiParam {String} accessTokenSecret The Access Secret Token obtained from getAccessCredentials.
 * @apiParam {Number} ownedBookId ownedBookId is a unique identifier for the owned book (not a book_id).
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