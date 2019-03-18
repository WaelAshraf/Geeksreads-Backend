/**
 * @api {put} /owned_books/update Update an owned book
 * @apiName PutOwned_books
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {credentials } apiKey Api key from app console.
 * @apiParam {credentials} apiSecret Api secret from app console.
 * @apiParam {String} accessToken The Access Token obtained from getAccessCredentials.
 * @apiParam {string} accessTokenSecret The Access Secret Token obtained from getAccessCredentials.
 * @apiParam {Number} ownedBookId id of the owned book record.
 * @apiParam {Number} bookId Id of the book.
 * @apiParam {Select} conditionCode one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor).
 * @apiParam {String} conditionDescription description of book's condition.
 * @apiParam {DatePicker} originalPurchaseDate When book was purchased.
 * @apiParam {String} originalPurchaseLocation Where this book was purchased.
 * @apiParam {String} uniqueCode BookCrossing id (BCID).
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
var updateddbook={
    case:'dupdated'
};
function PostBook()
{
    return{code:200 , data:updateddbook};
}