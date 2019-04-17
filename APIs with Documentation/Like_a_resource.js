/**
 * @api {post} /rating Like a resource 
 * @apiName PostRating
 * @apiGroup Resource
 * @apiError {404} NOTFOUND Resource could not be found
 * @apiParam {credentials} apiKey Api key from app console.
 * @apiParam {credentials} apiSecret Api secret from app console.
 * @apiParam {String} accessToken The Access Token obtained from getAccessCredentials.
 * @apiParam {String} accessTokenSecret The Access Secret Token obtained from getAccessCredentials.
 * @apiParam {Number} rating Resource rating.
 * @apiParam {Number} resourceId Id of the resource being liked.
 * @apiParam {String} resourceType Camel case name of the resource type (e.g. UserStatus, Review).
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */

var likedresource={
    state:'Liked'
};
function PostBook()
{
    return{code:200 , data:likedresource};
}