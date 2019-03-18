/**
 * 
 * @api {POST} /author_followings Follow an author
 * @apiName Follow Author
 * @apiGroup Author
 * @apiError {404} NOTFOUND Author could not be found
 * @apiSuccess {Boolean} Follow Successful or not
 * @apiParam  {authorId} authorId GoodReads author ID
 * @apiSuccessExample {Boolean}
   {
      "UserFollowed": true
   }
 *  @apiError id-not-found The<code>ID</code> was not found.
 * 
 */

function followAuthor(id)
{

}