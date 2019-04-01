/**
 * @api {post} /owned_books.json Add to books owned
 * @apiName PostOwned_books
 * @apiGroup Owned Books
 * @apiError {404} NOTFOUND Book could not be found
 * @apiParam {Number} bookid id of the book required
 * @apiParam {Select} conditionCode one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor)
 * @apiParam {String} conditionDescription description of book's condition
 * @apiParam {DatePicker} originalPurchaseDate when book was purchased
 * @apiParam {string} originalPurchaseLocation where this book was purchased
 * @apiParam {Number} Owned_Book_ID 
 * @apiParam {Number} User_ID
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */

var addedbook={
    book:'done'
};
function PostBook()
{
    return{code:200 , data:addedbook};
}
