/**
 * @api {delete} /rating Unlike a resource 
 * @apiGroup  Resource
 * @apiError {404} NOTFOUND Resource could not be found
 * @apiParam {credentials} apiKey Api key from app console.
 * @apiParam {credentials} apiSecret Api secret from app console.
 * @apiParam {String} accessToken  The Access Token obtained from getAccessCredentials.
 * @apiParam {String} accessTokenSecret The Access Secret Token obtained from getAccessCredentials.
 * @apiParam {Number} ratingId Rating id.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
 */
var unlikedResource={
    UNliked:'done'
}
function unlikeR()
{
    return{code:200 , data:UNliked};
}