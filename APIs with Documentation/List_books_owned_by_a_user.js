/**
 * @api {get} /owned_books/ List books owned by a user
 * @apiName GetOwnedBooks
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {Objectid} AccessToken
 * @apiSuccess {String[]} UserOwnedBooks         Owned books list of the user(List).
 * 
 * @apiSuccessExample 
 *      HTTP/1.1 200 0k
 * {
 *      "UserOwnedBooks": ["Book1","Book2","book3"]
 * }
 *
 */
var UserBooks={
    bookName :'Thireen reasons'
};
function ListUserBooks()
{
    return{code:200 , data:UserBooks};
}