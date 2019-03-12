
/**
 * @api {get} /search/index.json Find books by title, author, or ISBN
 * @apiVersion 0.0.0
 * @apiName Find
 * @apiGroup Books
 * @apiPermission all
 *
 *
 * @apiParam {String} Title Book title to Search.
 * @apiParam {String} Author Book Author to Search.
 * @apiParam {String} ISBN Book ISBN to Search.
 * @apiParam {Select} [Select="all"] Field to search,(default is 'all').
 * @apiParam {Number} [Page=1] Which page of results to show (default 1).
 *
 * @apiSuccess {Number} id         Book-ID.
 * @apiSuccess {Number}   Book-count       Number of results.
 * @apiSuccess {Number}   ratings-count       Number of ratings.
 * @apiSuccess {Number}   text-reviews-count       Number of text reviews.
 * @apiSuccess {Number}   original-publication-year    Publication year.
 * @apiSuccess {Number}   original-publication-month    Publication month.
 * @apiSuccess {Number}   original-publication-day    Publication day.
 * @apiSuccess {Number}   average-rating    Average Rating.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "average-rating": 4.30,
 *       "id": 1,
 *       "Book-count": 20,
 *       "ratings-count": 20,
 *       "text-reviews-count": 20,
 *       "original-publication-year": 1985,
 *       "original-publication-month": 5,
 *       "original-publication-day": 25
 *     }
 *
 *
 * @apiError Book-not-found   The <code>Book</code> was not found.
 */
