/**
 * 
 * @api {get} /book/show Get the reviews for a book given a Geeksreads book id
 * @apiName show
 * @apiGroup Books
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {number} id Book ID.
 * @apiParam {number} [rating=0] Limit reviews to a particular rating or above,(default is 0).
 * @apiParam {boolean} [reviews-textOnly=false] Limit reviews to text only,(default is false).
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

function show(id)
{

}
