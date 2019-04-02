
/**
 * @api {GET} /book/book.json Find books by title, author, or ISBN. Gets found book
 * @apiVersion 0.0.0
 * @apiName FindBooks
 * @apiGroup Books
 *
 *
 * @apiParam {String} Title Book title to Search.
 * @apiParam {String} Author Book Author to Search.
 * @apiParam {String} ISBN Book ISBN to Search.
 * @apiParam {Select} [Select="all"] Field to search,(default is 'all').
 * @apiParam {Number} [Page=1] Which page of results to show (default 1).
 *
 * @apiSuccess {String} BookId         Book-ID.
 * @apiSuccess {String} Title         Book-Title.
 * @apiSuccess {String} AuthorId         Author-ID.
 * @apiSuccess {String} ISBN         Book-ISBN.
 * @apiSuccess {DatePicker} Published         Date when book was published.
 * @apiSuccess {String} Publisher         The name of the book's publisher.
 * @apiSuccess {Number}   Pages       Number of book pages.
 * @apiSuccess {String} Description         Small breifing about the book's contents.
 * @apiSuccess {String} Cover         Link that holds the book's cover picture.
 * @apiSuccess {String[]} Store         Links for webpages that store the book.
 * @apiSuccess {Select} ReadStatus         Read, Currently Reading, or Want to Read.
 * @apiSuccess {Number}   BookRating       Rating for the book.
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "BookId":"5c911452bbfd1717b8a7a169",
 *       "Title":"sit",
 *       "AuthorId":"5c911452a48b42bb84bc785c",
 *       "ISBN":"5c911452ce18b2b3276d4b45",
 *       "Published":"2001-05-08 ",
 *       "Publisher":"COREPAN",
 *       "Pages":226.0,
 *       "Description":"Ad officia duis enim occaecat ullamco aliqua sint mollit non ea et ea aliqua ea. Reprehenderit eu ut in elit ex eu. Excepteur Lorem est ad amet sunt.\r\n",
 *       "Cover":"http://placehold.it/32x32",
 *       "Store":["http://placehold.it/32x32","http://placehold.it/32x32","http://placehold.it/32x32","http://placehold.it/32x32","http://placehold.it/32x32","http://placehold.it/32x32","http://placehold.it/32x32"],
 *       "ReadStatus":"Read",
 *       "BookRating":5.0
 *     }
 *
 *
 * @apiError Book-not-found   The <code>Book</code> was not found.
 * @apiError Author-not-found   The <code>Author</code> was not found.
 */
