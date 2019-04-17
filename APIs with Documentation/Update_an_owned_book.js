/**
 * @api {put} /owned_books/update Update an owned book
 * @apiName PutOwned_books
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {Objectid} accessToken The Access Token obtained from getAccessCredentials.
 * @apiParam {Objectid} ownedBookId id of the owned book record.
 * @apiParam {Select} conditionCode one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor).
 * @apiParam {String} conditionDescription description of book's condition.
 * @apiParam {DatePicker} originalPurchaseDate When book was purchased.
 * @apiParam {String} originalPurchaseLocation Where this book was purchased.
 * @apiParam {Boolean} BookIsUpdated book is updated successfully
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      "BookIsUpdated":true
 * }
 * 
 *  @apiErrorExample {json} Error-NotAdded:
 *     HTTP/1.1 404 Not Found
 * {
 *      "BookIsUpdated":false
 * }
 */
var updateddbook={
    case:'dupdated'
};
function PostBook()
{
    return{code:200 , data:updateddbook};
}