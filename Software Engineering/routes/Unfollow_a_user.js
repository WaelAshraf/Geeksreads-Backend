/**
 * 
 * @api {POST}  /user/userID Unfollow a user
 * @apiName Unfollow user
 * @apiGroup User
 * @apiError {404} NOTFOUND User could not be found
 * @apiSuccess {Boolean} UNFollow Successful or not
 * @apiParam  {Number} userId GoodReads User ID
 * @apiSuccessExample {Boolean}
   {
      "unFollowed": true
   }
 *  @apiError id-not-found The<code>ID</code> was not found.
 * 
 */
const mongoose = require("mongoose"); //imports mongoose module

function unfollowuser(myuserId,userId_tobefollowed)
{
  /*
  conn.collection("CollectionName")
  .update({"SELECTION CRITERIA"},{"UPDATE COMMANDS"})
*/

//connect to DB with the query as a callback fn to ensure query is executed after connection
mongoose.connect('mongodb://localhost:27017/GreekReaders', {useNewUrlParser: true}, ()=>{
    const conn = mongoose.connection; //access basic mongodb driver
    conn.collection('users').updateOne(
        {
            "UserId" : userId_tobefollowed //access document of user that we need to unfollow 
        },
        {$pull: { // pulls to end of array of the users I follow
          "FollowersUserId":myuserId
        }})
        conn.collection('users').updateOne(
          {
              "UserId" : myuserId //access document of currently logged In user 
          },
          {$pull: { // Pulls from end of array of the users I follow
            "FollowingUserId":userId_tobefollowed
          }}).then(mongoose.disconnect()).then(() => {return true;}); //Promise to disconnect and return true if no err thrown;
});
afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  conn.close();
  done();
return true;
});
}

module.exports=unfollowuser;