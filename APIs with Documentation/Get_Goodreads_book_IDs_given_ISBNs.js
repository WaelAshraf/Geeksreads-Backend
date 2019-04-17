/**
 * 
 * @api {get} /book/bookids.json Get Geeksreads book IDs given ISBNs
 * @apiName IsbntoId
 * @apiGroup Books
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {string[]} isbns Book-ISBNs.
 * 
 * @apiSuccess {string[]} ids Book-IDs.
 * 
 *  @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "BookIds": [5c911452bbfd1717b8a7a169,5c9114526f1439874b7cca1a]
 *     }
 * 
 * @apiError Books-Not-Found Some or all of the ISBNs entered are not valid.
 */



