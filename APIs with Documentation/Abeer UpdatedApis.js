// Add To Owned Books

/**
 * @api {POST} /owned_books/Add_to_books_owned.json Add to books owned
 * @apiName AddToBooksOwned
 * @apiGroup Owned Books
 * 
 * @apiHeader {String} x-auth-token Authentication token
 * 
 * @apiParam {String} ConditionCode one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor)
 * @apiParam {String} Book_ID id of the book to be owned
 * @apiParam {DatePicker} originalPurchaseDate When book was purchased.
 * 
 * @apiSuccess {String} ReturnMsg         Notifies the user that the book is added successfully.
 * 
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 * {
 *      "ReturnMsg": "Book is Added To Your Owned Books Successfully."
 *      
 * }
 * 
 * @apiErrorExample {json} NoBook-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg":"Book Doesn't Exist."
 * }
 * 
 * @apiErrorExample {json} BookExist-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg": "Book Is Already in Your Owned Books."
 * }
 * 
 * @apiErrorExample {json} Invalidtoken-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg":'Invalid token.'
 * }
 * 
 * @apiErrorExample {json} NoTokenSent-Response:
 *      HTTP/1.1 401
 * {
 *      "ReturnMsg":'Access denied. No token provided.'
 * }
 */

 //List Books Owned By A User

 /**
 * @api {POST} /owned_books/List_books_owned_by_a_usr.json List books owned by a user
 * @apiName ListBooksOwnedByAUser
 * @apiGroup Owned Books
 * 
 * @apiHeader {String} x-auth-token Authentication token
 * 
 * @apiSuccess {String[]} UserOwnedBooks         Gives the user the Book IDs  that he Owned(list).
 * 
 *  @apiSuccess {String} ReturnMsg
 * @apiSuccessExample  {json} Success
 *      HTTP/1.1 200 0k
 * {
 *      "UserOwnedBooks": [ "Book1",
 *                          "Book2",
 *                          "book3"]
 * }
 * 
 * @apiErrorExample {json} NoOwnedBooksExist-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg": "User has No Owned Books"
 * }
 * @apiErrorExample {json} Invalidtoken-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg":'Invalid token.'
 * }
 * 
 *  @apiErrorExample {json} NoTokenSent-Response:
 *      HTTP/1.1 401
 * {
 *      "ReturnMsg":'Access denied. No token provided.'
 * }
 */



 //Show An Owned Book

 /**
 * @api {GET} /owned_books/Show_an_owned_book.json gets information about a book in  the user owned books list
 * @apiName ShowAnOwnedBook
 * @apiGroup Owned Books
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam {String} OWNED_BOOK_ID a unique identifier for the owned book (not a book_id).
 * 
 * @apiParam  {String[]} BookInformation   contains  the important info about the book like the book title, condition, publisher, description and cover.
 * @apiSuccess {string} ReturnMsg notifies if the request has done successfully.
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 0k
 * { 
 *      "BookInformation": [ "booktitle",
 *                            "New",
 *                           "bookpublisher",
 *                           "bookdescription",
 *                            "bookcover"
 * ]
 * }
 * 
 *  @apiErrorExample {json} OwnedBookDoestExist-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg": "this book doesn't Exist in the user's owned books"
 * }
 * @apiErrorExample {json} NoOwnedBooksExist-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg": "User has No Owned Books"
 * }
 * 
 *
 * @apiErrorExample {json} Invalidtoken-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg":'Invalid token.'
 * }
 * 
 *  @apiErrorExample {json} NoTokenSent-Response:
 *      HTTP/1.1 401
 * {
 *      "ReturnMsg":'Access denied. No token provided.'
 * }
 */


 //Delete an owned Book


 /**
 * @api {DELETE} /owned_books/destroy/ID Delete an owned book
 * @apiName DeleteAnOwnedBook
 * @apiGroup Owned Books
 * 
 * 
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam {String} ownedBookId ownedBookId is a unique identifier for the owned book (not a book_id).
 * @apisuccess {string} ReturnMsg  a msg notifies the user if the book has removed successfully.
 * 
 * @apiSuccessExample  {json} Success
 *     HTTP/1.1 200 OK
 * {
 *      "ReturnMsg": "Book is Removed Successfully."
 * }
 * 
 *  @apiErrorExample {json} BookIsAlreadyDeleted-Response:
 *      HTTP/1.1 400
 * {
 * 
 *      "ReturnMsg": "This Book Is already deleted."
 * }
 * 
 * @apiErrorExample {json} Invalidtoken-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg":'Invalid token.'
 * }
 * 
 *  @apiErrorExample {json} NoTokenSent-Response:
 *      HTTP/1.1 401
 * {
 *      "ReturnMsg":'Access denied. No token provided.'
 * }
 * 
 */

 //Update an owned book

 /**
 * @api {PUT} /owned_books/update Update an owned book
 * @apiName UpdateAnOwnedBook
 * @apiGroup Owned Books
 * 
 * @apiHeader {String} x-auth-token Authentication token
 * @apiParam {String} ownedBookId id of the owned book record.
 * @apiParam {String} conditionCode one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor).
 * @apiParam {String} ReturnMsg notifies the user if the book is updated successfully
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      "ReturnMsg": "Book Condition is updated successfully."
 * }
 * 
 * 
 * @apiErrorExample {json} OwnedBookDoestExist-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg": "this book doesn't Exist in the user's owned books"
 * }
 * @apiErrorExample {json} NoOwnedBooksExist-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg": "User has No Owned Books"
 * }
 * 
 * @apiErrorExample {json} Invalidtoken-Response:
 *      HTTP/1.1 400
 * {
 *      "ReturnMsg":'Invalid token.'
 * }
 * 
 *  @apiErrorExample {json} NoTokenSent-Response:
 *      HTTP/1.1 401
 * {
 *      "ReturnMsg":'Access denied. No token provided.'
 * }
 * 
 */
