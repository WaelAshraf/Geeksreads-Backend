

//Login Authentication



/**
 *
 * @api {POST}  /user/SignIn.json Signing in by Email and Password
 * @apiName SignIn
 * @apiGroup User
 *
 * @apiParam  {String} UserEmail Email of User
 * @apiParam  {String} UserPassword Password of User
 * @apiSuccess {String}   ReturnMsg   Return Message Log in Successful.
 * @apiSuccess {String} UserId Id of User after Successfully Signing in
 * @apiSuccess {String} Token Authentication Access Token
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 * {
 *        "ReturnMsg": "Log in Successful.",
 *        "UserId": "5ca23e81783e981f88e1618c",
 *        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EyM2U4MTc4M2U5ODFmODhlMTYxOGMiLCJpYXQiOjE1NTQxMzcxMjJ9.rUfROgeq1wgmsUxljg_ZLI2UbFMQubHQEYLKz2zd29Q"
 *   }
 * @apiErrorExample {json} InvalidEmailorPassword-Response:
 *     HTTP/1.1 400
 *  {
 *    "ReturnMsg":"Invalid email or password."
 *  }
 *
 * @apiErrorExample {json} UnConfirmedUser-Response:
 *     HTTP/1.1 401
 *  {
 *    "ReturnMsg" :'Your account has not been verified.'
 *  }
 *
 */



 //get current User



 /**
  *
  * @api {GET}  /user/me/GetUser.json Gets Information of Current User
  * @apiName GetUser
  * @apiGroup User
  * @apiHeader {String} x-auth-token Authentication token
  * @apiSuccess {String}   UserName   UserName of Current User
  * @apiSuccess {String} UserId Id of Current User
  * @apiSuccess {String} UserEmail Email of Current User
  * @apiSuccess {String[]} FollowingAuthorId Ids of Authors Current User is Following
  * @apiSuccess {String[]} FollowingUserId Ids of Users Current User is Following
  * @apiSuccess {String[]} FollowersUserId Ids of Users Following Current User
  * @apiSuccess {String[]} OwnedBookId Ids of Books Owned by Current User
  * @apiSuccessExample {json}  Success
  *     HTTP/1.1 200 OK
  *   {
  *     "FollowingAuthorId": [],
  *     "FollowingUserId": [],
  *     "FollowersUserId": [],
  *     "OwnedBookId": [],
  *     "ShelfId": [],
  *     "Confirmed": true,
  *     "UserName": "Ahmed1913",
  *     "UserEmail": "AhmedAmrKhaled@gmail.com",
  *     "UserId": "5ca23e81783e981f88e1618c"
  * }
  * @apiErrorExample {json} NoTokenMatch-Response:
  *     HTTP/1.1 400
  *   {
  *    "ReturnMsg":"User Doesn't Exist"
  *   }
  *
  * @apiErrorExample {json} UnConfirmedUser-Response:
  *     HTTP/1.1 401
  *  {
  *     "ReturnMsg" :'Your account has not been verified.'
  *  }
  *
  * @apiErrorExample {json} Invalidtoken-Response:
  *     HTTP/1.1 400
  *   {
  *      "ReturnMsg":'Invalid token.'
  *   }
  *
  * @apiErrorExample {json} NoTokenSent-Response:
  *     HTTP/1.1 401
  * {
  *   "ReturnMsg":'Access denied. No token provided.'
  * }
  *
  */


  //Verify From Email Link


  /**
   *
   * @api {POST}  /user/Verify.json Verifies User From Email
   * @apiName EmailVerify
   * @apiGroup User
   * @apiHeader {String} x-auth-token Authentication token
   * @apiSuccess {String}   ReturnMsg   Notifies that User is Confirmed
   * @apiSuccessExample {json}  Success
   *     HTTP/1.1 200 OK
   *   {
   *     "ReturnMsg": "User Confirmed"
   *   }
   * @apiErrorExample {json} NoTokenMatch-Response:
   *     HTTP/1.1 400
   *   {
   *    "ReturnMsg":"User Doesn't Exist"
   *   }
   *
   * @apiErrorExample {json} Invalidtoken-Response:
   *     HTTP/1.1 400
   *   {
   *      "ReturnMsg":'Invalid token.'
   *   }
   *
   * @apiErrorExample {json} NoTokenSent-Response:
   *     HTTP/1.1 401
   * {
   *   "ReturnMsg":'Access denied. No token provided.'
   * }
   *
   */



   //Sign Up Api sends verification mail


   /**
    *
    * @api {POST}  /user/SignUp.json Signs User Up and Sends Verification Email
    * @apiName SignUp
    * @apiGroup User
    * @apiParam {String} UserName User Name to Sign Up.
    * @apiParam {String} UserEmail User Email to Sign Up.
    * @apiParam {String} UserPassword User Password to Sign Up.
    * @apiSuccess {String}   ReturnMsg   Notifies that User a verification Email is sent
    * @apiSuccessExample {json}  Success
    *     HTTP/1.1 200 OK
    *   {
    *     "ReturnMsg":"A verification email has been sent to UserEmail."
    *   }
    * @apiErrorExample {json} InvalidName-Response:
    *     HTTP/1.1 400
    *   {
    *    "ReturnMsg": "\"UserName\" length must be at least 3 characters long"
    *   }
    *
    * @apiErrorExample {json} InvalidEmail-Response:
    *     HTTP/1.1 400
    *   {
    *      "ReturnMsg": "\"UserEmail\" must be a valid email"
    *   }
    *
    * @apiErrorExample {json} InvalidPassword-Response:
    *     HTTP/1.1 400
    * {
    *   "ReturnMsg": "\"UserPassword\" length must be at least 6 characters long"
    * }
    * @apiErrorExample {json} ExistingEmail-Response:
    *     HTTP/1.1 400
    * {
    *   "ReturnMsg":"User already registered."
    * }
    *
    */



//Add Book to Shelf



/**
 * @api {POST} /Shelf/AddToShelf.json  Add a Book to a Shelf
 * @apiName AddToShelf
 * @apiGroup Shelves
 *
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam {String} ShelfId Shelf Id to add book to.
 * @apiParam {String} BookId Book id to add to shelf.
 *
 * @apiSuccess {String} ReturnMsg         Notifies User that the Book was added successfully.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg": "Book was added successfully."
 *     }
 *
 *
 * @apiErrorExample {json} NoBook-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":"Book Doesn't Exist."
 *   }
 *
 * @apiErrorExample {json} NoShelf-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Shelf Does't Exist."
 * }
 * @apiErrorExample {json} Invalidtoken-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":'Invalid token.'
 *   }
 *
 * @apiErrorExample {json} NoTokenSent-Response:
 *     HTTP/1.1 401
 * {
 *   "ReturnMsg":'Access denied. No token provided.'
 * }
 */


//Add A new Book Shelf



  /**
   * @api {POST} /Shelf/AddShelf.json  Add a New Shelf
   * @apiName AddShelf
   * @apiGroup Shelves
   *
   * @apiParam {Bolean} ExclusiveFlag=false Set Shelf as Exclusive (Default is Shelf not Exclusive).
   * @apiHeader {String} x-auth-token Authentication token
   * @apiParam {String} ShelfName Shelf Name.
   *
   * @apiSuccess {String} ReturnMsg         Notifies User that the Shelf was Added Successfully.
   * @apiSuccessExample {json} Success
   *     HTTP/1.1 200 OK
   *     {
   *       "ReturnMsg": "Shelf was Created Successfully."
   *     }
   *
   *
   * @apiErrorExample {json} InvalidShelf-Response:
   *     HTTP/1.1 400
   *   {
   *      "ReturnMsg":"InValid Shelf Name"
   *   }
   *
   * @apiErrorExample {json} ShelfExist-Response:
   *     HTTP/1.1 400
   * {
   *   "ReturnMsg": "Shelf Already Exists."
   * }
   * @apiErrorExample {json} Invalidtoken-Response:
   *     HTTP/1.1 400
   *   {
   *      "ReturnMsg":'Invalid token.'
   *   }
   *
   * @apiErrorExample {json} NoTokenSent-Response:
   *     HTTP/1.1 401
   * {
   *   "ReturnMsg":'Access denied. No token provided.'
   * }
   */



//Add Books To Many Shelves



/**
 * @api {post} /Shelf/AddBooksToShelves.json  Add Books to Many Shelves
 * @apiVersion 0.0.0
 * @apiName AddToShelves
 * @apiGroup Shelves
 *
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam {String[]} ShelIds Shelf Ids(List).
 * @apiParam {String[]} BookIds Book ids to add to shelves(List).
 *
 * @apiSuccess {String} ReturnMsg         Books Added Successfully.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg": "Books were Added Successfully."
 *     }
 *
 *
 * @apiErrorExample {json} NoBook-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":"Book Doesn't Exist."
 *   }
 *
 * @apiErrorExample {json} NoShelf-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Shelf Does't Exist."
 * }
 * @apiErrorExample {json} Invalidtoken-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":'Invalid token.'
 *   }
 *
 * @apiErrorExample {json} NoTokenSent-Response:
 *     HTTP/1.1 401
 * {
 *   "ReturnMsg":'Access denied. No token provided.'
 * }
 */


//Edit Book Shelf


/**
 * @api {POST} /Shelf/EditShelf.json  Edits a Shelf
 * @apiName EditShelf
 * @apiGroup Shelves
 *
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam {String} ShelfId Shelf Id to edit.
 * @apiParam {String} ShelfName New Shelf Name.
 *
 * @apiSuccess {String} ReturnMsg         Notifies User that the Shelf was Edited successfully.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg": "Shelf was Edited Successfully."
 *     }
 *
 *
 * @apiErrorExample {json} NoShelf-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Shelf Does't Exist."
 * }
 * @apiErrorExample {json} Invalidtoken-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":'Invalid token.'
 *   }
 *
 * @apiErrorExample {json} InvalidShelf-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":"InValid Shelf Name"
 *   }
 *
 * @apiErrorExample {json} NoTokenSent-Response:
 *     HTTP/1.1 401
 * {
 *   "ReturnMsg":'Access denied. No token provided.'
 * }
 */


//Get User's Shelves


/**
 * @api {GET} /Shelf/GetUserShelves.json  Gets All User's Shelves
 * @apiName GetUserShelves
 * @apiGroup Shelves
 *
 * @apiHeader {String} x-auth-token Authentication token
 *
 * @apiSuccess {String[]} UserShelves        Gives the User the Ids of His Shelves.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "UserShelves": [
 *                          "Shelf1",
 *                          "Shelf2",
 *                          "Shelf3"
 *                     ]
 *     }
 *
 * @apiErrorExample {json} NoShelvesExist-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "User has No Shelves"
 * }
 * @apiErrorExample {json} Invalidtoken-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":'Invalid token.'
 *   }
 *
 * @apiErrorExample {json} NoTokenSent-Response:
 *     HTTP/1.1 401
 * {
 *   "ReturnMsg":'Access denied. No token provided.'
 * }
 */



 //Get a User's Read Status


 /**
  * @api {GET} /Shelf/GetUserReadStatus.json  Gets information about a read Status update
  * @apiName GetUserReadStatus
  * @apiGroup Status
  *
  * @apiHeader {String} x-auth-token Authentication token
  * @apiParam {String} StatusId  The Status Read Id that was Updated.
  * @apiSuccess {String} UserId        Gives the User  Id that Updated the Status.
  * @apiSuccess {String} ReviewId        Gives the User the Id of the Review on the Status.
  * @apiSuccess {String} CommentId        Gives the User the Id of the Comment on the Status.
  * @apiSuccess {String} StatusBody        Gives the User the Body of the Status.
  * @apiSuccess {Date} StatusDate        Gives the User the Date of the Status.
  * @apiSuccessExample {json} Success
  *     HTTP/1.1 200 OK
  *     {
  *       "UserId":"5c9132dd1c5d63da0a184964",
  *       "ReviewId":"5c9243a5311a20ca08d1844d",
  *       "StatusBody":"Officia adipisicing cillum in minim ut incididunt non. Reprehenderit labore duis minim reprehenderit minim esse excepteur irure anim incididunt id. Minim eiusmod proident officia voluptate esse esse enim dolor minim officia labore enim.\r\n",
  *       "StatusDate":" 2018-12-12T07:50:35 -02:00"
  *     }
  *
  * @apiErrorExample {json} NoStatus-Response:
  *     HTTP/1.1 400
  * {
  *   "ReturnMsg": "Invalid Status Id"
  * }
  * @apiErrorExample {json} Invalidtoken-Response:
  *     HTTP/1.1 400
  *   {
  *      "ReturnMsg":'Invalid token.'
  *   }
  *
  * @apiErrorExample {json} NoTokenSent-Response:
  *     HTTP/1.1 401
  * {
  *   "ReturnMsg":'Access denied. No token provided.'
  * }
  */
