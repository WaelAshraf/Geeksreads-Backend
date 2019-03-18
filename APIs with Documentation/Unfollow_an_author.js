/**
 * 
 * @api {DELETE }  /author_followings Unfollow an author
 * @apiName Unfollow Author
 * @apiGroup Author
 * @apiError {404} NOTFOUND Author could not be found
 * @apiSuccess {Boolean} unFollow Successful or not
 * @apiParam  {Number} userId GoodReads author ID
 * @apiSuccessExample {Boolean}
   {
      "Followed": true
   }
 *  @apiError id-not-found The<code>ID</code> was not found.
 * 
 */

function unfollowAuthor(id)
{

}