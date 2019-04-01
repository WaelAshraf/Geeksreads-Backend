/**
 * @api {get} /owned_books/ List books owned by a user
 * @apiName GetOwnedBooks
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {Number} userId Geeksware user_id.
 * 
 * 
 * @apiSuccessExample 
 *      HTTP/1.1 200 0k
 * {
 *      
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