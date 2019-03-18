
/**
 * @api {post} /user_shelves Add book shelf
 * @apiVersion 0.0.0
 * @apiName ADDshelf
 * @apiGroup Shelves
 * @apiPermission all
 *
 *
 * @apiParam {String} Shelf-Name Shelf Name to Add.
 * @apiParam {Select} Exclusive-Flag=false Set shelf as exclusive.
 *
 * @apiSuccess {Boolean} AddedShelfSuc         Shelf added successfully.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "AddedShelfSuc": true
 *     }
 *
 *
 * @apiError Invalid-Shelf-Name  The <code>Shelf-Name</code> is invalid.
 * @apiErrorExample {json} Error-NotAdded:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "AddedShelfSuc": false
 *     }
 */
