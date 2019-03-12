
/**
 * @api {post} /shelf/add_books_to_shelves.json  Add books to many shelves
 * @apiVersion 0.0.0
 * @apiName ADDtoshelves
 * @apiGroup Shelves
 * @apiPermission all
 *
 *
 * @apiParam {String[]} Shelf-Names Shelf Names(List).
 * @apiParam {Number[]} Book-IDs Book ids to add to shelves(List).
 *
 * @apiSuccess {Boolean} AddedbooksSuc         Books added successfully.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "AddedbooksSuc": true
 *     }
 *
 *
 * @apiError Book-not-found   The <code>Books</code> were not found.
 * @apiError Shelf-not-found   The <code>Shelves</code> were not found.
 * @apiErrorExample {json} ErrorBooksNotAdded:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "AddedbooksSuc": false
 *     }
 */
