/**
 * 
 * @api {GET} /book/reviewstatistics.json   Get review statistics given a list of ISBNs
 * @apiName ReviewStatistics
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
 * @apiError Books-Not-Found Some or all of the ISBNs entered are not valid.
 */


