/**
 * 
 * @api {get} /book/review_counts.json   Get review statistics given a list of ISBNs
 * @apiName review_counts
 * @apiGroup Books
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {string[]} isbns Book ISBN.
 * 
 * @apiParamExample {json} Param
 *     {
 *       isbns=0441172717,0141439602
 *     }
 * 
 * @apiSuccess review-count Statistics of Book Reviews.
 * 
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "Number of reviews": 80
 *     }
 *
 * 
 * @apiError NotSpecified The <code>isbns</code> of the books was not found.
 * @apiError BookNotFound The <code>reviews</code> of the books was not found.
 */


function review_counts(isbns)
{

}
