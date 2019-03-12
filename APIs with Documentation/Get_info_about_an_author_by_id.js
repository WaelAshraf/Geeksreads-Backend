/**
 * 
 * @api {get}  /author/show.json Get info about an author by id
 * @apiName get author info
 * @apiGroup Author
 * @apiError {404} NOTFOUND Author could not be found
 * @apiSuccess { JSON } INFO info of User
 * @apiParam  {Number} ID GeeksdReads Author ID
 * @apiSuccessExample {json}
   {
      "Name":Michael,
      "Age":30,
      "NumBooks Written":344
   }
 *  @apiError id-not-found The<code>ID</code> was not found.
 * 
 */

function getauthorinfo(id)
{

}