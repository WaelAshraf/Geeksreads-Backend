//Forgot Password
/**
 * @api {POST}  /user/ForgotPassword/ Sends email to change forgotten password
 * @apiName ForgotPassword
 * @apiGroup User
 * @apiParam {String} UserEmail User Email to Sign Up.
 * @apiSuccess {String}   ReturnMsg   Notifies the User an Email to change his password was sent
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *     "ReturnMsg":"ReturnMsg":"An Email has been Sent to change your Forgotten Password UserEmail"
 *   }
 * @apiErrorExample {json} InvalidEmail-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg": "\"UserEmail\" must be a valid email"
 *   }
 *
 * @apiErrorExample {json} NonExistingEmail-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg":"User Doesn't Exist"
 * }
 *
 */

//Change Forgotten Password From Email token
/**
 * @api {POST}  /user/ChangeForgotPassword/ Change Forgotten Password From Email token
 * @apiName ChangeForgotPassword
 * @apiGroup User
 * @apiParam {String} token token from mail sent to change password.
 * @apiParam {String} NewUserPassword New Password to replace forgotten password.
 * @apiSuccess {String}   ReturnMsg   Notifies the User that his password is changed
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *     "ReturnMsg": "Update Successful"
 *   }
 * @apiErrorExample {json} InvalidNewPassword-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg": "\"NewUserPassword\" length must be at least 6 characters long"
 *   }
 *
 * @apiErrorExample {json} NonExistingEmail-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg":"User Doesn't Exist"
 * }
 */

//Signs Out Users
/**
 *
 * @api {POST}  /user/SignOut Signs User Out
 * @apiName SignOut
 * @apiGroup User
 * @apiParam {String} token Authentication token
 * @apiSuccess {String}   ReturnMsg   Notifies the User that he signed out
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *     "ReturnMsg": "Signed out Successfully"
 * }
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
 */

//get current User
/**
 *
 * @api {GET}  /user/me Gets Information of Current User
 * @apiName GetUser
 * @apiGroup User
 * @apiParam {String} token Authentication token
 * @apiSuccess {String}   UserName   UserName of Current User
 * @apiSuccess {String} UserId Id of Current User
 * @apiSuccess {String} UserEmail Email of Current User
 * @apiSuccess {Number} NoOfFollowings No. of Followings
 * @apiSuccess {Number} NoOfFollowers No. of Followers
 * @apiSuccess {String} Photo Profile Photo
 * @apiSuccess {Date} UserBirthDate User Birth Date
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *       "NoOfFollowings": 1,
 *       "NoOfFollowers": 0,
 *       "UserId":"5cc5df8c2e9c5800172864c9",
 *       "UserEmail": "samersosta@gmail.com",
 *       "UserName": "Ashraaaaaaaaaaaaaf",
 *       "Photo": "",
 *       "UserBirthDate": "2000-01-01T00:00:00.000Z"
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

//Get Info by UserID
/**
 *
 * @api {GET}  /user/GetUserById Gets Information of  User by Id
 * @apiName GetUserById
 * @apiGroup User
 * @apiParam {String} token Authentication token
 * @apiSuccess {String}   UserName   UserName of Current User
 * @apiSuccess {String} UserId Id of Current User
 * @apiSuccess {String} UserEmail Email of Current User
 * @apiSuccess {Number} NoOfFollowings No. of Followings
 * @apiSuccess {Number} NoOfFollowers No. of Followers
 * @apiSuccess {String} Photo Profile Photo
 * @apiSuccess {Date} UserBirthDate User Birth Date
 * @apiSuccess {String} IsFollowing tells if Current User is Following this User
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 *   {
 *       "NoOfFollowings": 1,
 *       "NoOfFollowers": 0,
 *       "UserId":"5cc5df8c2e9c5800172864c9",
 *       "UserEmail": "samersosta@gmail.com",
 *       "UserName": "Ashraaaaaaaaaaaaaf",
 *       "Photo": "",
 *       "UserBirthDate": "2000-01-01T00:00:00.000Z",
 *       "IsFollowing": "True"
 * }
 * @apiErrorExample {json} NoTokenMatch-Response:
 *     HTTP/1.1 400
 *   {
 *    "ReturnMsg":"User Doesn't Exist"
 *   }
 *
 * @apiErrorExample {json} InvalidUserId-Response:
 *     HTTP/1.1 401
 *  {
 *     "ReturnMsg":"User Doesn't Exist"
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
 * @api {POST}  /user/Verify/ Verifies User From Email
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
 * @api {POST}  /user/SignUp/ Signs User Up and Sends Verification Email
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

//Update User Password
 /**
  *
  * @api {POST}  /user/UpdateUserPassword.json Update User Password.
  * @apiName UpdateUserPassword
  * @apiGroup User
  *
  * @apiParam {String} token Authentication token
  * @apiParam  {String} NewUserPassword New User Password
  * @apiParam  {String} OldUserPassword Old User Password
  * @apiSuccess {String}   ReturnMsg   Return Message Update is Successful
  * @apiSuccessExample {json}  Success
  *     HTTP/1.1 200 OK
  * {
  *        "ReturnMsg": "Update Successful"
  *   }
  * @apiErrorExample {json} InvalidNewPassword-Response:
  *     HTTP/1.1 400
  *  {
  *    "ReturnMsg": "\"NewUserPassword\" length must be at least 6 characters long"
  *  }
  * @apiErrorExample {json} InvalidOldPassword-Response:
  *     HTTP/1.1 400
  *  {
  *    "ReturnMsg": "\"OldUserPassword\" length must be at least 6 characters long"
  *  }
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
  *
  */

//Update User Information (Name, Photo, Bithdate)
/**
 *
 * @api {POST}  /user/UpdateUserInfo.json Update User Information (UserName, Photo, Date).
 * @apiName SignIn
 * @apiGroup User
 *
 * @apiParam {String} token Authentication token
 * @apiParam  {String} NewUserName New User Name
 * @apiParam  {String} NewUserPhoto New User Photo
 * @apiParam  {Date} NewUserBirthDate New User BirthDate
 * @apiSuccess {String}   ReturnMsg   Return Message Update is Successful
 * @apiSuccessExample {json}  Success
 *     HTTP/1.1 200 OK
 * {
 *        "ReturnMsg": "Update Successful"
 *   }
 * @apiErrorExample {json} InvalidName-Response:
 *     HTTP/1.1 400
 *  {
 *    "ReturnMsg": "\"NewUserName\" length must be at least 3 characters long"
 *  }
 * @apiErrorExample {json} InvalidPhoto-Response:
 *     HTTP/1.1 400
 *  {
 *    "ReturnMsg": "Invalid Image"
 *  }
 * @apiErrorExample {json} InvalidDate-Response:
 *     HTTP/1.1 400
 *  {
 *    "ReturnMsg": "\"NewUserBirthDate\" must be a number of milliseconds or valid date string"
 *  }
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

//Gets information about a book's read Status
/**
 * @api {GET} /Shelf/GetUserReadStatus.json  Gets information about a book's read Status
 * @apiName GetUserReadStatus
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} BookId  The Book Id To Get Status for.
 * @apiSuccess {String} ReturnMsg        Book Status.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg":"Read"
 *     }
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg":"Currently Reading"
 *     }
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg":"Want to Read"
 *     }
 * @apiErrorExample {json} NoBook-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Invalid Book Id"
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
 * @apiErrorExample {json} NoTokenMatch-Response:
 *     HTTP/1.1 400
 *   {
 *    "ReturnMsg":"User Doesn't Exist"
 *   }
 *
 */

//Get User's Shelves
/**
 * @api {GET} /Shelf/GetUserShelves.json  Gets All User's Shelves
 * @apiName GetUserShelves
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 *
 * @apiSuccess {String[]} Read        Gives the User the Book Ids of His Read.
 * @apiSuccess {Number} NoOfRead        Gives the User the Number of Book Ids of His Read.
 * @apiSuccess {String[]} WantToRead       Gives the User the Book Ids of His Want to Read.
 * @apiSuccess {Number} NoOfWantToRead        Gives the User the Number of Book Ids of His Want to Read.
 * @apiSuccess {String[]} Reading       Gives the User the Book Ids of His Currently Reading.
 * @apiSuccess {Number} NoOfReading        Gives the User the Number of Book Ids of His Currently Reading.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "Read": [
 *                          "Book1",
 *                          "Book2",
 *                          "Book3"
 *                     ],
 *       "NoOfRead": 3,
 *       "Reading": [
 *                          "Book4",
 *                          "Book5",
 *                          "Book6"
 *                     ],
 *       "NoOfReading": 3,
 *       "WantToRead": [
 *                          "Book7",
 *                          "Book8",
 *                          "Book9"
 *                     ],
 *       "NoOfWantToRead": 3
 *     }
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

//Number of Books in Shelves
/**
 * @api {GET} /Shelf/ShelvesCount.json  Number of Books in Shelves
 * @apiName ShelvesCount
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} UserId User to get his No. of Books.
 * @apiSuccess {Number} NoOfRead        Gives the User the Number of Book Ids of His Read.
 * @apiSuccess {Number} NoOfReading        Gives the User the Number of Book Ids of His Reading.
 * @apiSuccess {Number} NoOfWantToRead        Gives the User the Number of Book Ids of His WantToRead.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "NoOfRead": 3
 *       "NoOfReading": 3,
 *       "NoOfWantToRead": 3
 *     }
 *
 * @apiErrorExample {json} InvalidUserId-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":"User Doesn't Exist"
 *   }
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

// Get User Shelves Details
/**
 * @api {GET} /Shelf/GetUserShelvesDetails.json  Gets All User's Shelves Details
 * @apiName GetUserShelvesDetails
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 *
 * @apiSuccess {List} ReadData        Gives the User the Book Data of His Read.
 * @apiSuccess {List} WantToReadData       Gives the User the Book Data of His Want to Read.
 * @apiSuccess {List} Reading       Gives the User the Book Data of His Currently Reading.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *     "ReadData": [
 *        {
 *            "BookId": "5c9114526f1439874b7cca1a",
 *            "Title": "consequat",
 *            "AuthorId": "5c911452938ffea87b4672d7",
 *            "BookRating": {
 *                "$numberDecimal": "2.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 340,
 *            "Published": "2007-01-29T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c911452bbfd1717b8a7a169",
 *            "Title": "sit",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "5.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 226,
 *            "Published": "2001-05-03T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a012d11bb226399497",
 *            "Title": "do",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "1.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 299,
 *            "Published": "2004-01-10T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a01c049771a04cbce4",
 *            "Title": "culpa",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "3.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 148,
 *            "Published": "2018-12-16T22:00:00.000Z"
 *        }
 *      ],
 *     "ReadingData": [],
 *     "WantToReadData": []
 *     }
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
 */

// Get User Read shelf Details
/**
 * @api {GET} /Shelf/GetUserReadDetails.json   Get User Read shelf Details
 * @apiName GetUserReadDetails
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} UserId User to get his Read Shelf Data
 * @apiSuccess {List} ReadData        Gives the User the Book Data of His Read.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *     "ReadData": [
 *        {
 *            "BookId": "5c9114526f1439874b7cca1a",
 *            "Title": "consequat",
 *            "AuthorId": "5c911452938ffea87b4672d7",
 *            "BookRating": {
 *                "$numberDecimal": "2.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 340,
 *            "Published": "2007-01-29T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c911452bbfd1717b8a7a169",
 *            "Title": "sit",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "5.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 226,
 *            "Published": "2001-05-03T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a012d11bb226399497",
 *            "Title": "do",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "1.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 299,
 *            "Published": "2004-01-10T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a01c049771a04cbce4",
 *            "Title": "culpa",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "3.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 148,
 *            "Published": "2018-12-16T22:00:00.000Z"
 *        }
 *      ]
 *     }
 *
 * @apiErrorExample {json} NoUser-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "User Doesn't Exist"
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

// Get User Reading shelf Details
/**
 * @api {GET} /Shelf/GetUserReadingDetails.json   Get User Reading shelf Details
 * @apiName GetUserReadingDetails
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} UserId User to get his Shelf Details
 * @apiSuccess {List} ReadingData        Gives the User the Book Data of His Reading.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *     "ReadingData": [
 *        {
 *            "BookId": "5c9114526f1439874b7cca1a",
 *            "Title": "consequat",
 *            "AuthorId": "5c911452938ffea87b4672d7",
 *            "BookRating": {
 *                "$numberDecimal": "2.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 340,
 *            "Published": "2007-01-29T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c911452bbfd1717b8a7a169",
 *            "Title": "sit",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "5.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 226,
 *            "Published": "2001-05-03T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a012d11bb226399497",
 *            "Title": "do",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "1.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 299,
 *            "Published": "2004-01-10T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a01c049771a04cbce4",
 *            "Title": "culpa",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "3.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 148,
 *            "Published": "2018-12-16T22:00:00.000Z"
 *        }
 *      ]
 *     }
 *
 * @apiErrorExample {json} NoUser-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "User Doesn't Exist"
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

// Get User WantToRead shelf Details
/**
 * @api {GET} /Shelf/GetUserWantToReadDetails.json   Get User WantToRead shelf Details
 * @apiName GetUserWantToReadDetails
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} UserId User to get his Shelf Details
 * @apiSuccess {List} ReadingData        Gives the User the Book Data of His WantToRead.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *     "WantToReadData": [
 *        {
 *            "BookId": "5c9114526f1439874b7cca1a",
 *            "Title": "consequat",
 *            "AuthorId": "5c911452938ffea87b4672d7",
 *            "BookRating": {
 *                "$numberDecimal": "2.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 340,
 *            "Published": "2007-01-29T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c911452bbfd1717b8a7a169",
 *            "Title": "sit",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "5.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 226,
 *            "Published": "2001-05-03T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a012d11bb226399497",
 *            "Title": "do",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "1.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 299,
 *            "Published": "2004-01-10T22:00:00.000Z"
 *        },
 *        {
 *            "BookId": "5c9114a01c049771a04cbce4",
 *            "Title": "culpa",
 *            "AuthorId": "5c911452a48b42bb84bc785c",
 *            "BookRating": {
 *                "$numberDecimal": "3.0"
 *            },
 *            "Cover": "http://placehold.it/32x32",
 *            "Pages": 148,
 *            "Published": "2018-12-16T22:00:00.000Z"
 *        }
 *      ]
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

//Add Book to Shelf
/**
 * @api {POST} /Shelf/AddToShelf.json  Add a Book to a Shelf
 * @apiName AddToShelf
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} ShelfType Shelf Type to add book to.
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
 * @apiErrorExample {json} NoShelf-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":"Invalid Shelf"
 *   }
 * @apiErrorExample {json} NoBook-Response:
 *     HTTP/1.1 400
 *   {
 *      "ReturnMsg":"Book Doesn't Exist."
 *   }
 *
 * @apiErrorExample {json} BookExist-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Book Already in Shelf."
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

//Remove Book From Shelf
/**
* @api {POST} /Shelf/RemoveFromShelf.json  Removes a Books From User Shelves
* @apiName RemoveFromShelf
* @apiGroup Shelves
*
* @apiParam {String} token Authentication token
* @apiParam {String} BookId  The Book Id To Remove.
* @apiSuccess {String} ReturnMsg        Notifies is Successfully Removed.
* @apiSuccessExample {json} Success
*     HTTP/1.1 200 OK
*     {
*       "ReturnMsg":"Book Removed"
*     }
* @apiErrorExample {json} WrongBookId-Response:
*     HTTP/1.1 400
* {
*   "ReturnMsg": "Book Does't Exist"
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

//Update Book Status from Want to Read to Reading
/**
 * @api {POST} /Shelf/UpdateWantToReading.json  Updates Book Status From Want to Read to Reading
 * @apiName UpdateWantToReading
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} BookId  The Book Id To Update.
 * @apiSuccess {String} ReturnMsg        Notifies is Successfully updated.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg":"Book Status Updated"
 *     }
 * @apiErrorExample {json} WrongBookId-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Book Does't Exist"
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

//Update Book Status From Reading to Read
/**
 * @api {POST} /Shelf/UpdateReadingToRead.json  Updates Book Status From Reading to Read
 * @apiName UpdateReadingToRead
 * @apiGroup Shelves
 *
 * @apiParam {String} token Authentication token
 * @apiParam {String} BookId  The Book Id To Update.
 * @apiSuccess {String} ReturnMsg        Notifies is Successfully updated.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "ReturnMsg":"Book Status Updated"
 *     }
 * @apiErrorExample {json} WrongBookId-Response:
 *     HTTP/1.1 400
 * {
 *   "ReturnMsg": "Book Does't Exist"
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
