/**
 * @api{GET}/api/author_url/<ID> Find an author by name
 * @apiName findAuthorByName
 * @apiGroup Author 
 * @apiError {404} NOTFOUND Author could not be found
 * @apiParam {Number} id Author id
 * @apiSuccess {Author} Athr data for the required Author
 * @apiSuccess {Number} id author id
 * @apiSuccess {String} name author name
 * @apiSuccess {String} link author link
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 * {
 * "Athr": {
 * "id": 589
 * "name": "Orson Scott Card"
 * "link": "https://www.geeksreads.com/author/show/589.Orson_Scott_Card?utm_medium=api&utm_source=author_link"
 *         }
 * }

 */
function findAuthorByName(id)
{

}
