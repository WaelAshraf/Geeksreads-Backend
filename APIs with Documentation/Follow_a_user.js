/**
 * 
 * @api {POST}  /user/userID/ Follow a user
 * @apiName Follow user
 * @apiGroup User
 *
 * @apiSuccess {Boolean} Follow Successful or not
 * @apiParam  {Number} myuserId GoodReads User ID
 * @apiParam  {Number} userId_tobefollowed GoodReads User ID
 * @apiSuccessExample {Boolean}
 * 
   {
      "Followed": true
   }
 *  @apiError id-not-found The<code>userId</code> was not found.
 * 
 */

 const mongoose = require("mongoose"); //imports mongoose module
/* mongoose.connect('mongodb://localhost:27017/GreekReaders', {useNewUrlParser: true});
var conn = mongoose.connection; //accesses basic mongodb driver to bypass mongoosed models  
  */
function followuser(myuserId,userId_tobefollowed)
{
  /*
  conn.collection("CollectionName")
  .update({"SELECTION CRITERIA"},{"UPDATE COMMANDS"})
*/
mongoose.connect('mongodb://localhost:27017/GreekReaders', {useNewUrlParser: true}, ()=>{
    const conn = mongoose.connection;
    conn.collection('Users').updateOne(
        {
            "UserId" : userId_tobefollowed //access document of currently logged In user 
        },
        {$push: { // Push to end of array of the users I follow
          "FollowersUserId":myuserId
        }}).then(() => {return true;});
        conn.collection('Users').updateOne(
          {
              "UserId" : myuserId //access document of currently logged In user 
          },
          {$push: { // Push to end of array of the users I follow
            "FollowingUserId":userId_tobefollowed
          }}).then(mongoose.disconnect()).then(() => {return true;});
});
afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  conn.close();
  done();
return true;
});
}

module.exports=followuser;