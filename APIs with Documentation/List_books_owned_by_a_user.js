/**
 * @api {get} /owned_books/ List books owned by a user
 * @apiName GetOwnedBooks
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {credentials} apiKey Api key from app console.
 * @apiParam {credentials} apiSecret Api secret from app console.
 * @apiParam {String} accessToken The Access Token obtained from getAccessCredentials.
 * @apiParam {String} accessTokenSecret The Access Secret Token obtained from getAccessCredentials.
 * @apiParam {Number} userId Geeksware user_id.
 * @apiParam {Number} page Which page of results to show (default 1).
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