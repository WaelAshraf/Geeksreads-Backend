/**
 * @api {get} /owned_books/show/OWNED_BOOK_ID Show an owned book
 * @apiName GetOwned_Books_Show
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {Objectid} AccessToken the current owner's user id.
 * @apiParam {Objectid} OWNED_BOOK_ID a unique identifier for the owned book (not a book_id).
 * 
 * @apiSuccess  BookName
 * 
 * @apiSuccessExample 
 *      HTTP/1.1 200 0k
 * { 
 *      "BookName":"FRIENDS"
 * }
 */
var showedBook={
    books:'FRIENDS'
};
function GetReadStatus()
{
    return{code:200 , data:showedBook};
}