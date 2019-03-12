
/**
 * @api {post} /shelf/add_to_shelf.json  Add a book to a shelf
 * @apiVersion 0.0.0
 * @apiName ADDtoshelf
 * @apiGroup Shelves
 * @apiPermission all
 *
 *
 * @apiParam {String} Shelf-Name Shelf Name.
 * @apiParam {Number} Book-ID Book id to add to shelf.
 *
 * @apiSuccess {Boolean} AddedbookSuc         Book added successfully.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "AddedbookSuc": true
 *     }
 *
 *
 * @apiError Book-not-found   The <code>Book</code> was not found.
 * @apiError Shelf-not-found   The <code>Shelf</code> was not found.
 * @apiErrorExample {json} Error-NotAdded:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "AddedbookSuc": false
 *     }
 */
