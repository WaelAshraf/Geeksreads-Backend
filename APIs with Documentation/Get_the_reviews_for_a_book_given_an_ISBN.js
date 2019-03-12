/**
 * 
 * @api {get} /book/isbn Get the reviews for a book given an ISBN
 * @apiName show_by_isbn
 * @apiGroup Books
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {string} isbn Book ISBN.
 * 
 * @apiParam {number} [rating=0] Limit reviews to a particular rating or above,(default is 0).
 * 
 * @apiSuccess {number} User-id User ID.
 * @apiSuccess {string} User-name Username.
 * @apiSuccess {string} text-reviews User review.  
 * 
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *          "User-id": 1,
 *          "User-name": "AvidReader",
 *          "text-reviews": "A great book. Would recommend everyone to read."
 *     } 
 * 
 * @apiError BookNotFound The <code>reviews</code> of the Book was not found.
 */

function show_by_isbn(isbn)
{

}
